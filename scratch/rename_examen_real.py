import os

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

for f_path in files:
    full_path = os.path.join(os.getcwd(), f_path)
    if not os.path.exists(full_path):
        continue
    
    with open(full_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if "Examen REAL" in content:
        new_content = content.replace("Examen REAL", "Examen de PRÁCTICA")
        with open(full_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Renamed in {f_path}")
    else:
        print(f"No 'Examen REAL' found in {f_path}")
