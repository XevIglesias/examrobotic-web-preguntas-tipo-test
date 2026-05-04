import os
import re

files = [
    r"asignaturas\adiple\testADIPLE.D.01.html",
    r"asignaturas\dt\testDT.D.01.html",
    r"asignaturas\ii\testII.D.01.html",
    r"asignaturas\ip\testIP.D.01.html",
    r"asignaturas\iplei\testIPLEI.D.01.html",
    r"asignaturas\sdmyr\testSDMYR.D.01.html",
    r"asignaturas\sdp\testSDP.D.01.html",
    r"asignaturas\seneh\testSENEH.D.01.html",
    r"asignaturas\ssp\testISSP.D.01.html"
]

# Pattern to find the error card
pattern = re.compile(r'<!-- REPASO DE ERRORES -->.*?<article.*?>.*?</article>', re.DOTALL)

for f_path in files:
    full_path = os.path.join(os.getcwd(), f_path)
    if not os.path.exists(full_path):
        continue
    
    with open(full_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    match = pattern.search(content)
    if match:
        card_html = match.group(0)
        # Remove it from its current position
        new_content = content[:match.start()] + content[match.end():]
        
        # Now find the end of the list container
        # The container is <div class="flex flex-col gap-4">
        # We want to put it before the closing </div> of that container.
        # However, the closing </div> is followed by </main>
        
        # A safer way is to find the last </article> and put it after it
        last_article_pos = new_content.rfind('</article>')
        if last_article_pos != -1:
            insert_pos = last_article_pos + len('</article>')
            new_content = new_content[:insert_pos] + "\n\n            " + card_html + new_content[insert_pos:]
            
            with open(full_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Moved error card to bottom in {f_path}")
        else:
            print(f"Could not find end of list in {f_path}")
    else:
        print(f"No error card found in {f_path}")
