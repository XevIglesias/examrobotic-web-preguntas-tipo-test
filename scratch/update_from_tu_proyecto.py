import os
import json
import re

# Mapping of folder names in tu-proyecto to subject slugs in data/
subject_mapping = {
    "administracion-diseno-y-gestion-de-la-red": "adiple",
    "documentacion-tecnica": "dt",
    "informatica-industrial": "ii",
    "ingles-profesional": "ip",
    "instalacion-y-mantenimiento-de-redes-de-computadores": "iplei",
    "sistemas-de-medida-y-regulacion": "sdmyr",
    "sistemas-de-potencia": "sdp",
    "sistemas-electricos-neumaticos-e-hidraulicos": "seneh",
    "sistemas-secuenciales-programables": "ssp",
    "itinerario personal-para-la-empleabilidad": "ipe",
    "ampliacion-itinerario-personal-empleabilidad.json": "aipe"
}

def save_to_js(subject, data):
    js_content = f"const EXAM_DATA = {json.dumps(data, indent=4, ensure_ascii=False)};"
    for filename in ["ex.js", "simulacro.js"]:
        path = f"data/{subject}/{filename}"
        if not os.path.exists(os.path.dirname(path)):
            os.makedirs(os.path.dirname(path))
        with open(path, 'w', encoding='utf-8') as f:
            f.write(js_content)

def process_tu_proyecto():
    base_path = "tu-proyecto/data/simulacros"
    if not os.path.exists(base_path):
        return

    # Load master topic map
    topic_map = {}
    map_path = os.path.join(os.getcwd(), 'scratch', 'topic_map.json')
    if os.path.exists(map_path):
        with open(map_path, 'r', encoding='utf-8') as mf:
            topic_map = json.load(mf)

    for folder in os.listdir(base_path):
        folder_path = os.path.join(base_path, folder)
        slug = subject_mapping.get(folder)
        if not slug: continue

        json_file = None
        if os.path.isdir(folder_path):
            for f in os.listdir(folder_path):
                if f.endswith(".json"):
                    json_file = os.path.join(folder_path, f)
                    break
        elif folder.endswith(".json"):
            json_file = folder_path

        if not json_file or not os.path.exists(json_file): continue

        print(f"Processing {slug}...")
        with open(json_file, 'r', encoding='utf-8') as f:
            try:
                data = json.load(f)
            except: continue

            questions = []
            topic_titles = topic_map.get(slug, {})

            for c in data.get("cuestionarios", []):
                tema = c.get("tema", "")
                
                # Identify topic number and title
                match_num = re.search(r'(\d+)', tema)
                num = match_num.group(1) if match_num else ""
                
                full_title = topic_titles.get(num, "")
                if not full_title:
                    full_title = re.sub(r'^(Tema|Unidad|Unit|U)\s*\d+[:\s-]*', '', tema, flags=re.IGNORECASE).strip()
                
                if num and full_title:
                    clean_u = f"{num}. {full_title}"
                elif num:
                    clean_u = num
                else:
                    clean_u = full_title if full_title else "General"

                for q in c.get("preguntas", []):
                    opts = []
                    for o in q.get("opciones", []):
                        if len(o) > 3 and o[1] == '.' and o[0] in "ABCD":
                            opts.append(o[3:].strip())
                        else:
                            opts.append(o.strip())
                    
                    ans_text = q.get("respuesta_correcta", "")
                    if len(ans_text) > 3 and ans_text[1] == '.' and ans_text[0] in "ABCD":
                         ans_text = ans_text[3:].strip()
                    
                    try:
                        ans_idx = opts.index(ans_text)
                    except ValueError:
                        ans_idx = 0
                    
                    questions.append({
                        "u": clean_u,
                        "q": q.get("enunciado", ""),
                        "opts": opts,
                        "ans": ans_idx,
                        "exp": q.get("explicacion", "")
                    })
            
            if questions:
                save_to_js(slug, questions)
                print(f"Saved {len(questions)} for {slug}")

if __name__ == "__main__":
    process_tu_proyecto()
