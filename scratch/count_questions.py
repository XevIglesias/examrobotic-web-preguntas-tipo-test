import os
import json
import re

def count_questions():
    data_dir = 'data'
    for root, dirs, files in os.walk(data_dir):
        for f in files:
            if f == 'simulacro.js':
                path = os.path.join(root, f)
                with open(path, 'r', encoding='utf-8') as file:
                    content = file.read()
                    # Remove the variable assignment to get pure JSON-ish array
                    content = re.sub(r'^(const|let|var)\s+\w+\s*=\s*', '', content.strip())
                    content = re.sub(r';\s*$', '', content)
                    try:
                        data = json.loads(content)
                        print(f"{path}: {len(data)} questions")
                    except:
                        # Fallback to counting "q":
                        count = content.count('"q":')
                        print(f"{path}: {count} questions (regex count)")

if __name__ == "__main__":
    count_questions()
