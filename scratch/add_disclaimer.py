import os
import re

subjects_data = {
    'adiple': {
        'title': 'Ampliación de itinerario personal para la empleabilidad',
        'desc': 'Desarrollo avanzado de habilidades blandas, emprendimiento y gestión de carrera profesional.'
    },
    'dt': {
        'title': 'Documentación técnica',
        'desc': 'Elaboración de planos, esquemas, presupuestos, manuales y uso de CAD.'
    },
    'ii': {
        'title': 'Informática industrial',
        'desc': 'Redes de comunicación, protocolos industriales, bases de datos y control de procesos (SCADA).'
    },
    'ip': {
        'title': 'Inglés profesional',
        'desc': 'Terminología técnica, manuales, catálogos y comunicación en el entorno industrial internacional.'
    },
    'iplei': {
        'title': 'Itinerario personal para la empleabilidad I',
        'desc': 'Orientación laboral, derechos del trabajador, prevención de riesgos y búsqueda de empleo.'
    },
    'sdmyr': {
        'title': 'Sistemas de medida y regulación',
        'desc': 'Sensores, actuadores, lazos de control PID y calibración de instrumentación industrial.'
    },
    'sdp': {
        'title': 'Sistemas de potencia',
        'desc': 'Motores eléctricos, variadores de frecuencia, servomotores y electrónica de potencia aplicada.'
    },
    'seneh': {
        'title': 'Sistemas eléctricos, neumáticos e hidráulicos',
        'desc': 'Automatismos cableados, fluidos a presión, electroválvulas y conexionado de potencia.'
    },
    'ssp': {
        'title': 'Sistemas secuenciales programables',
        'desc': 'Programación de autómatas (PLCs), lenguajes de contactos, GRAFCET y control secuencial.'
    }
}

def final_fix():
    asignaturas_dir = 'asignaturas'
    if not os.path.exists(asignaturas_dir): return
    
    disclaimer_html = """
                <div class="hidden md:flex flex-col gap-2 bg-blue-50 border border-blue-100 rounded-xl p-3 shadow-sm shrink-0 min-w-[180px] self-center">
                    <div class="flex items-center gap-2 mb-1">
                        <span class="p-1 bg-blue-500 rounded-md text-white text-[10px]">⌨️</span>
                        <span class="text-[10px] font-bold text-blue-700 uppercase tracking-widest">Atajos de Teclado</span>
                    </div>
                    <div class="flex items-center justify-between gap-6 text-[10px] text-blue-900/70 border-b border-blue-200/50 pb-1">
                        <span>Navegar</span> <span class="font-black text-blue-900 bg-white px-1.5 py-0.5 rounded border border-blue-200 shadow-sm">← →</span>
                    </div>
                    <div class="flex items-center justify-between gap-6 text-[10px] text-blue-900/70 border-b border-blue-200/50 py-1">
                        <span>Responder</span> <span class="font-black text-blue-900 bg-white px-1.5 py-0.5 rounded border border-blue-200 shadow-sm">1 - 4</span>
                    </div>
                    <div class="flex items-center justify-between gap-6 text-[10px] text-blue-900/70 pt-1">
                        <span>Finalizar</span> <span class="font-black text-blue-900 bg-white px-1.5 py-0.5 rounded border border-blue-200 shadow-sm">Enter</span>
                    </div>
                </div>"""

    for sub_slug, data in subjects_data.items():
        sub_path = os.path.join(asignaturas_dir, sub_slug)
        if not os.path.isdir(sub_path): continue
        
        for f in os.listdir(sub_path):
            if f.startswith('test') and f.endswith('.D.01.html'):
                file_path = os.path.join(sub_path, f)
                with open(file_path, 'r', encoding='utf-8', errors='ignore') as html_file:
                    content = html_file.read()
                
                # 1. Clean the whole main block until the list starts
                # We identify the start of <main> and the start of <div class="flex flex-col gap-4">
                main_start_pattern = r'<main[^>]*?>'
                list_start_pattern = r'<div class="flex flex-col gap-4">'
                
                match_main = re.search(main_start_pattern, content)
                match_list = re.search(list_start_pattern, content)
                
                if match_main and match_list:
                    main_tag = match_main.group(0)
                    
                    full_header_block = f"""
        <div class="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border pb-8">
            <div class="flex items-start sm:items-center gap-4">
                <button onclick="window.history.back()" class="w-10 h-10 shrink-0 bg-white border border-border rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors mt-1 sm:mt-0" title="Volver">
                    <span class="text-xl leading-none font-bold text-muted">←</span>
                </button>
                <div class="flex-grow">
                    <div class="flex items-center gap-2 mb-1">
                        <span class="text-xs font-bold bg-primary/10 text-primary px-2 py-0.5 rounded uppercase tracking-wider">Asignatura</span>
                    </div>
                    <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-1">{data['title']}</h2>
                    <p class="text-muted text-base md:text-lg">{data['desc']}</p>
                </div>
            </div>
            {disclaimer_html}
        </div>"""
                    
                    new_content = content[:match_main.end()] + "\n        " + full_header_block + "\n\n        " + content[match_list.start():]
                    
                    with open(file_path, 'w', encoding='utf-8') as html_file:
                        html_file.write(new_content)
                    print(f"Final cleanup and restoration in {file_path}")

if __name__ == "__main__":
    final_fix()
