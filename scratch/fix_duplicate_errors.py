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

pattern = re.compile(r'<!-- REPASO DE ERRORES -->.*?<article.*?>.*?</article>', re.DOTALL)

for f_path in files:
    full_path = os.path.join(os.getcwd(), f_path)
    if not os.path.exists(full_path):
        print(f"File not found: {f_path}")
        continue
    
    with open(full_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    matches = list(pattern.finditer(content))
    if len(matches) > 1:
        print(f"Fixing {f_path}: found {len(matches)} matches")
        # Keep only the first match
        # Wait, if I want it at the top, I keep the first one.
        # Most files have it once at the top and once at the bottom.
        # I'll keep the first one (top).
        
        # We replace the other matches with empty string
        # Actually, let's just reconstruct the string
        new_content = content
        # Work from back to front to avoid index shift
        for m in reversed(matches[1:]):
            new_content = new_content[:m.start()] + new_content[m.end():]
        
        with open(full_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
    else:
        print(f"Skipping {f_path}: only {len(matches)} matches found")
