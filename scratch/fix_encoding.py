import os

def fix_encoding_artifacts(content):
    replacements = {
        'Ã¡': 'á',
        'Ã©': 'é',
        'Ã­': 'í',
        'Ã³': 'ó',
        'Ãº': 'ú',
        'Ã±': 'ñ',
        'Ã‘': 'Ñ',
        'Â·': '·',
        'Ãš': 'Ú',
        'â€¦': '...',
        'ðŸ”¥': '🔥',
        'Ã': 'í', # Sometimes í is just broken to Ã
    }
    # Special cases for names in script
    content = content.replace("'ip':    'InglÃ©s Profesional'", "'ip':    'Inglés Profesional'")
    content = content.replace("'dt':    'DocumentaciÃ³n TÃ©cnica'", "'dt':    'Documentación Técnica'")
    content = content.replace("'sdmyr': 'Sist. de Medida y RegulaciÃ³n'", "'sdmyr': 'Sist. de Medida y Regulación'")
    content = content.replace("'seneh': 'Sist. ElÃ©ctricos y ElectrÃ³nicos'", "'seneh': 'Sist. Eléctricos y Electrónicos'")
    content = content.replace("'sdp':   'Sistemas de ProgramaciÃ³n'", "'sdp':   'Sistemas de Programación'")
    
    for old, new in replacements.items():
        content = content.replace(old, new)
    return content

root_files = ['perfil.html', 'index.html', 'politica-privacidad.html']
for f_name in root_files:
    if os.path.exists(f_name):
        with open(f_name, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        fixed = fix_encoding_artifacts(content)
        with open(f_name, 'w', encoding='utf-8') as f:
            f.write(fixed)
        print(f"Fixed encoding in {f_name}")

# Also check assets/js/auth-ui.js etc if they have texts
js_files = [r'assets\js\auth-ui.js', r'assets\js\user-stats.js']
for f_path in js_files:
    full_path = os.path.join(os.getcwd(), f_path)
    if os.path.exists(full_path):
        with open(full_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        fixed = fix_encoding_artifacts(content)
        with open(full_path, 'w', encoding='utf-8') as f:
            f.write(fixed)
        print(f"Fixed encoding in {f_path}")
