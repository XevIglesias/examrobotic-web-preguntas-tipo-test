import os
import re
import json

def get_topic_map():
    topic_map = {}
    asignaturas_dir = 'asignaturas'
    if not os.path.exists(asignaturas_dir):
        return topic_map
    
    for sub in os.listdir(asignaturas_dir):
        sub_path = os.path.join(asignaturas_dir, sub)
        if not os.path.isdir(sub_path):
            continue
        
        subject_slug = sub.lower()
        if subject_slug not in topic_map:
            topic_map[subject_slug] = {}

        # Look for the index file test[CODE].D.01.html
        for f in os.listdir(sub_path):
            if f.startswith('test') and f.endswith('.D.01.html'):
                file_path = os.path.join(sub_path, f)
                with open(file_path, 'r', encoding='utf-8', errors='ignore') as html_file:
                    content = html_file.read()
                    # regex to find number badge and following h3
                    # <div class="number-badge ...">(\d+)</div>.*?<h3.*?>(.*?)</h3>
                    matches = re.finditer(r'number-badge[^>]*>\s*(\d+)\s*<.*?<h3[^>]*>\s*(.*?)\s*</h3>', content, re.DOTALL)
                    for m in matches:
                        num = m.group(1).strip()
                        title = re.sub(r'<[^>]+>', '', m.group(2)).strip()
                        topic_map[subject_slug][num] = title
    return topic_map

if __name__ == "__main__":
    m = get_topic_map()
    with open('scratch/topic_map.json', 'w', encoding='utf-8') as f:
        json.dump(m, f, indent=2, ensure_ascii=False)
    print("Saved scratch/topic_map.json")
