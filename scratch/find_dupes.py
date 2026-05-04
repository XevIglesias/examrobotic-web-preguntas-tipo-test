import os
import re

def find_duplicates():
    path = 'data/seneh/simulacro.js'
    with open(path, 'r', encoding='utf-8') as file:
        content = file.read()
        questions = re.findall(r'"q":\s*"(.*?)"', content)
        
        seen = {}
        dupes = []
        for i, q in enumerate(questions):
            q_clean = q.strip().lower()
            if q_clean in seen:
                dupes.append((i, seen[q_clean], q))
            seen[q_clean] = i
        
        print(f"Total questions found by 'q' tag: {len(questions)}")
        print(f"Unique questions: {len(seen)}")
        for i, first, q in dupes:
            print(f"DUPE: Entry #{i+1} is same as #{first+1}: {q[:60]}")

if __name__ == "__main__":
    find_duplicates()
