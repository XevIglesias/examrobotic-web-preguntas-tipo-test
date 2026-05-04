import os
import re

def prepend_numbers_to_h3():
    asignaturas_dir = 'asignaturas'
    if not os.path.exists(asignaturas_dir):
        return
    
    for sub in os.listdir(asignaturas_dir):
        sub_path = os.path.join(asignaturas_dir, sub)
        if not os.path.isdir(sub_path): continue
        
        for f in os.listdir(sub_path):
            if f.startswith('test') and f.endswith('.D.01.html'):
                file_path = os.path.join(sub_path, f)
                with open(file_path, 'r', encoding='utf-8', errors='ignore') as html_file:
                    content = html_file.read()
                
                # regex to find number badge and following h3
                # We want to replace the <h3> content with "num. content"
                def replacer(match):
                    full_match = match.group(0)
                    num = match.group(1).strip()
                    title_open_tag = match.group(2)
                    title_content = match.group(3).strip()
                    
                    # Check if already prepended
                    if re.match(rf'^{num}\.', title_content):
                        return full_match
                    
                    # Prepend
                    new_title = f"{num}. {title_content}"
                    # Reconstruct the match
                    # group 1 is num, group 2 is h3 tag, group 3 is content
                    # We need to preserve the parts between them
                    part1 = full_match[:match.start(3)-match.start(0)]
                    part2 = full_match[match.end(3)-match.start(0):]
                    return part1 + new_title + part2

                # Pattern: (badge_num)...(<h3...>) (content) (</h3>)
                pattern = r'(number-badge[^>]*>\s*(\d+)\s*<.*?)(<h3[^>]*>)\s*(.*?)\s*(</h3>)'
                new_content = re.sub(pattern, lambda m: f"{m.group(1)}{m.group(3)}{m.group(2)}. {m.group(4)}{m.group(5)}", content, flags=re.DOTALL)
                
                with open(file_path, 'w', encoding='utf-8') as html_file:
                    html_file.write(new_content)
                print(f"Updated {file_path}")

if __name__ == "__main__":
    prepend_numbers_to_h3()
