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

# Pattern to find U1, U2, etc. at the start of h3 content
# Also Tema 1, etc.
pattern = re.compile(r'(<h3[^>]*>)\s*(Tema|Unidad|Unit|U)\s*\d+[:\s-]*', re.IGNORECASE)

for f_path in files:
    full_path = os.path.join(os.getcwd(), f_path)
    if not os.path.exists(full_path):
        continue
    
    with open(full_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = pattern.sub(r'\1', content)
    
    if new_content != content:
        with open(full_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Cleaned headers in {f_path}")
    else:
        print(f"No headers to clean in {f_path}")
