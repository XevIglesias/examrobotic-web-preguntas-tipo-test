const EXAM_DATA = [
    {
        "u": "1. Identificación de la documentación técnico-administrativa de las instalaciones y sistemas",
        "q": "¿Cuáles son los documentos donde figuran las características que debe tener una instalación?",
        "opts": [
            "Documentos básicos",
            "Plan de calidad y plan de gestión medioambiental",
            "Estudios de viabilidad",
            "Justificación de eficiencia energética"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "1. Identificación de la documentación técnico-administrativa de las instalaciones y sistemas",
        "q": "¿Cuáles son los proyectos asociados a pequeñas empresas y que son aprobados por los ayuntamientos?",
        "opts": [
            "Proyectos informáticos",
            "Proyectos no formales",
            "Proyectos complejos",
            "Proyectos locales"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "1. Identificación de la documentación técnico-administrativa de las instalaciones y sistemas",
        "q": "¿Cuáles son los tipos de proyectos según el ámbito?",
        "opts": [
            "Sencillos y complejos",
            "De ingeniería, informáticos y tecnológicos",
            "Formales y no formales",
            "De utilidad pública, de iniciativa privada, fin de ciclo o grado"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "1. Identificación de la documentación técnico-administrativa de las instalaciones y sistemas",
        "q": "¿Cuándo realizamos la legalización de una instalación?",
        "opts": [
            "Una vez se ha terminado la ejecución",
            "En la fase inicial",
            "Mientras hacemos la memoria",
            "Depende del tipo de proyecto será necesario o no"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "1. Identificación de la documentación técnico-administrativa de las instalaciones y sistemas",
        "q": "¿Cuántos tipos de esquemas de distribución de neutro y masas podemos encontrar?",
        "opts": [
            "Dos: TT, TN",
            "Uno: IT",
            "Tres: TT, IT, TN",
            "Cuatro: IT, TT, TN, ET"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "1. Identificación de la documentación técnico-administrativa de las instalaciones y sistemas",
        "q": "¿Dónde podemos clasificar el documento aprobado por un organismo reconocido?",
        "opts": [
            "Entre los documentos que dan solución a una situación preestablecida",
            "En el estudio previo y redacción del proyecto",
            "En un certificado de dirección de obra",
            "En la normativa técnica"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "1. Identificación de la documentación técnico-administrativa de las instalaciones y sistemas",
        "q": "¿Dónde se incluyen los planos topográficos?",
        "opts": [
            "En la memoria descriptiva",
            "En el pliego de condiciones",
            "En los planos de proyecto de obra civil y edificación",
            "En la normativa técnica"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "1. Identificación de la documentación técnico-administrativa de las instalaciones y sistemas",
        "q": "¿Dónde situamos una breve descripción del proyecto?",
        "opts": [
            "En el índice",
            "En la portada",
            "En el presupuesto",
            "Ninguna es correcta"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "1. Identificación de la documentación técnico-administrativa de las instalaciones y sistemas",
        "q": "¿En qué apartado de la memoria firma el autor?",
        "opts": [
            "Emplazamiento de la instalación",
            "Objeto del proyecto",
            "En las conclusiones",
            "En la descripción de los sistemas de protección"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "1. Identificación de la documentación técnico-administrativa de las instalaciones y sistemas",
        "q": "¿Qué es lo primero que debe hacer una empresa interesada en crear una instalación?",
        "opts": [
            "Pedir los permisos pertinentes",
            "Contar con un presupuesto",
            "Elaborar un proyecto",
            "Tramitar la documentación necesaria"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "2. Representación de las instalaciones y sistemas automatizados",
        "q": "¿Cómo acotamos los diámetros?",
        "opts": [
            "Línea continua",
            "Con una flecha",
            "Línea de trazo y punto",
            "Línea discontinua"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "2. Representación de las instalaciones y sistemas automatizados",
        "q": "¿Cuántos tipos de perspectiva axonométrica hay?",
        "opts": [
            "Cilíndrica y cónica",
            "Caballera y militar",
            "Cónica",
            "Isométrica, dimétrica y trimétrica"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "2. Representación de las instalaciones y sistemas automatizados",
        "q": "¿Dónde situamos el cajetín, generalmente?",
        "opts": [
            "En la parte superior izquierda",
            "En la parte superior derecha",
            "En la parte inferior izquierda",
            "En la parte inferior derecha"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "2. Representación de las instalaciones y sistemas automatizados",
        "q": "¿Qué artificio permite eliminar una parte de una pieza u objeto para facilitar su comprensión, su representación y su acotado?",
        "opts": [
            "Sección",
            "Corte",
            "Detalle",
            "Ninguna de las respuestas anteriores es correcta"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "2. Representación de las instalaciones y sistemas automatizados",
        "q": "¿Qué es una sección?",
        "opts": [
            "Un recurso que consiste en poner una parte a la figura",
            "Una imagen aérea en 3 dimensiones de un objeto",
            "La parte de contacto entre la pieza y el plano de corte",
            "De utilidad pública, de iniciativa privada, fin de ciclo o grado"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "2. Representación de las instalaciones y sistemas automatizados",
        "q": "¿Qué ocurre cuando utilizamos la proyección cilíndrica ortogonal?",
        "opts": [
            "Las líneas de proyección son oblicuas al plano de proyección",
            "El observador O siempre se encuentra situado en un punto fijo cercano al objeto",
            "Las líneas de proyección son perpendiculares al plano de proyección",
            "Las líneas de proyección son paralelas al plano de proyección"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "2. Representación de las instalaciones y sistemas automatizados",
        "q": "¿Qué tipo de escala gráfica se estaría aplicando a un objeto o pieza en E 1:5?",
        "opts": [
            "De reducción",
            "De ampliación",
            "Natural",
            "Ninguna"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "2. Representación de las instalaciones y sistemas automatizados",
        "q": "Dado un objeto, ¿qué sistema de proyección utiliza el sistema diédrico?",
        "opts": [
            "Un sistema de proyección cilíndrico ortogonal",
            "Un sistema de proyección cónico",
            "Un sistema de proyección cilíndrico oblicuo",
            "Ninguna de las respuestas anteriores es correcta"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "2. Representación de las instalaciones y sistemas automatizados",
        "q": "En el sistema diédrico europeo, ¿cuáles son las vistas principales de un punto A?",
        "opts": [
            "Vista superior (planta)",
            "Vista de frente (alzado)",
            "Vista lateral izquierda (perfil izquierdo)",
            "Todas las respuestas anteriores son correctas"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "2. Representación de las instalaciones y sistemas automatizados",
        "q": "En una perspectiva isométrica, ¿qué ángulos forman los ejes de coordenadas ortogonales X, Y, y Z?",
        "opts": [
            "Ángulos adicionales de 7º y 42º con la línea de referencia horizontal",
            "Ángulos iguales de 120º en el plano",
            "Ángulos de 90º para que la proyección frontal esté en verdadera magnitud",
            "Forman ángulos desiguales"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "3. Elaboración de la documentación gráfica con AutoCAD",
        "q": "¿Con qué orden podemos crear múltiples copias de uno o varios objetos?",
        "opts": [
            "Región",
            "Desfase",
            "Recortar",
            "Matriz"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "3. Elaboración de la documentación gráfica con AutoCAD",
        "q": "¿Cuál es el comando para abrir un dibujo?",
        "opts": [
            "Ctr+N",
            "Ctr+O",
            "Ctr+S",
            "Ctr+Q"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "3. Elaboración de la documentación gráfica con AutoCAD",
        "q": "¿Cuáles son los objetos diseñados para mostrar vistas determinadas del Modelo?",
        "opts": [
            "Pinzamientos",
            "Chaflán",
            "Ventanas gráficas",
            "Espacio presentación"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "3. Elaboración de la documentación gráfica con AutoCAD",
        "q": "¿Dónde podemos añadir tantas ventanas gráficas como sean necesarias?",
        "opts": [
            "En el espacio modelo",
            "En el espacio papel",
            "En espacio presentación",
            "Todas las respuestas anteriores son correctas"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "3. Elaboración de la documentación gráfica con AutoCAD",
        "q": "¿Qué comando utilizaremos para representar la longitud de un objeto?",
        "opts": [
            "Propiedades (PR/Ctr+1)",
            "Opciones (OP)",
            "Trazar (cuadro de diálogo), (Ctr+P)",
            "Unidades"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "3. Elaboración de la documentación gráfica con AutoCAD",
        "q": "¿Qué debemos especificar en un dibujo para imprimir en un plano?",
        "opts": [
            "Las unidades",
            "Las coordenadas",
            "La escala",
            "Ninguna de las respuestas anteriores es correcta"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "3. Elaboración de la documentación gráfica con AutoCAD",
        "q": "¿Qué función permite el uso de la tecla F3 en AutoCAD?",
        "opts": [
            "Alternar el modo Referencia a objetos.",
            "Mostrar el forzado de las líneas de referencia.",
            "Restringir el cursor ortogonalmente.",
            "Copiar un objeto."
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "3. Elaboración de la documentación gráfica con AutoCAD",
        "q": "¿Qué función permite el uso de la tecla F8 en AutoCAD?",
        "opts": [
            "Alternar la rejilla.",
            "Alternar la designación del estilo.",
            "Alternar el modo ortogonal.",
            "Mostrar la ayuda."
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "3. Elaboración de la documentación gráfica con AutoCAD",
        "q": "¿Qué podemos crear mediante el comando ACOTA?",
        "opts": [
            "Tipos de línea",
            "Cotas lineales",
            "Estilos de cota",
            "Tipos de cota"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "3. Elaboración de la documentación gráfica con AutoCAD",
        "q": "¿Qué propiedad virtual puede ser un patrón de trazos, puntos, texto, o símbolos?",
        "opts": [
            "Tipos de cota",
            "Tipos de línea",
            "Tipos de letra",
            "Estilos"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "4. Elaboración de la documentación gráfica de proyectos de instalaciones automáticas con CADeSIMU",
        "q": "¿Cuál de las siguientes funciones no se pueden modificar desde el menú configuración?",
        "opts": [
            "Velocidad de simulación",
            "Editar el cajetín",
            "Formato de folio (A4 - A3 personalizado)",
            "Orientación"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "4. Elaboración de la documentación gráfica de proyectos de instalaciones automáticas con CADeSIMU",
        "q": "¿Cuál de los siguientes datos no se puede editar en el cajetín?",
        "opts": [
            "Dibujado",
            "Fecha",
            "Titulo",
            "Todas se pueden editar"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "4. Elaboración de la documentación gráfica de proyectos de instalaciones automáticas con CADeSIMU",
        "q": "¿Cuál es la ventaja de CADe_SIMU respecto a ePLAN Electric?",
        "opts": [
            "Precio (gratuito)",
            "Mayor librería de componentes",
            "Interfaz más profesional",
            "Posibilidad de importar un proyecto de AutoCAD"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "4. Elaboración de la documentación gráfica de proyectos de instalaciones automáticas con CADeSIMU",
        "q": "¿Dónde se encuentran los tipos de componentes que podemos incluir en nuestros esquemas?",
        "opts": [
            "En la barra de opciones o en el menú desplegable \"Dibujar\"",
            "En el menú configuración",
            "En el menú desplegable \"Barras\"",
            "Ninguno de los anteriores"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "4. Elaboración de la documentación gráfica de proyectos de instalaciones automáticas con CADeSIMU",
        "q": "¿En qué formato se guardan los archivos realizados con CADE_SIMU?",
        "opts": [
            ".cad",
            ".dwg",
            ".daw",
            ".pdf"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "4. Elaboración de la documentación gráfica de proyectos de instalaciones automáticas con CADeSIMU",
        "q": "¿En qué zona de la ventana podemos encontrar el zoom?",
        "opts": [
            "En el menú \"Archivo\"",
            "En el menú \"Dibujar\"",
            "En la barra superior",
            "No existe la opción de zoom"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "4. Elaboración de la documentación gráfica de proyectos de instalaciones automáticas con CADeSIMU",
        "q": "¿Para qué se utiliza el software CADE_SIMU?",
        "opts": [
            "Dibujo industrial 2D",
            "Dibujo industrial 3D",
            "Dibujo de esquemas eléctricos",
            "Ninguno de los anteriores"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "4. Elaboración de la documentación gráfica de proyectos de instalaciones automáticas con CADeSIMU",
        "q": "¿Qué ocurre cuando pinchamos sobre alguno de los tipos de elementos que podemos incluir en nuestro dibujo?",
        "opts": [
            "Se despliega otra barra con los diferentes elementos o configuraciones propios",
            "Se abre una ventana emergente para seleccionar el elemento a dibujar",
            "Automáticamente se estima el elemento que se va a dibujar, aunque se puede cambiar con el botón 3 del ratón",
            "Ninguna de las anteriores"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "4. Elaboración de la documentación gráfica de proyectos de instalaciones automáticas con CADeSIMU",
        "q": "¿Qué opción dispone CADe_SIMU para confirmar que el circuito es correcto?",
        "opts": [
            "Voltímetro digital",
            "Simulación",
            "Comprobador automático en línea",
            "Chat con especialista"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "4. Elaboración de la documentación gráfica de proyectos de instalaciones automáticas con CADeSIMU",
        "q": "Al principio, al abrir el programa, ¿qué se recomienda hacer?",
        "opts": [
            "Guardar el archivo",
            "Comprobar que todas las acciones están disponibles",
            "Hacerse un cafecito",
            "Ampliar el área de trabajo"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "5. Confección de presupuestos de instalaciones y sistemas automáticos",
        "q": "¿Cómo se llaman las etapas en las que podemos dividir un presupuesto?",
        "opts": [
            "Unidades de obra",
            "Cuadros",
            "Etapas",
            "Fases"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "5. Confección de presupuestos de instalaciones y sistemas automáticos",
        "q": "¿Cómo se llaman las partes en las que podemos dividir y calcular el presupuesto de un proyecto de forma independiente?",
        "opts": [
            "Cuadros",
            "Estructuras",
            "Mediciones",
            "Unidades de obra"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "5. Confección de presupuestos de instalaciones y sistemas automáticos",
        "q": "¿Con qué programa podemos calcular el presupuesto?",
        "opts": [
            "Autocad",
            "Arquímedes",
            "ePLAN Electric",
            "CADESIMU"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "5. Confección de presupuestos de instalaciones y sistemas automáticos",
        "q": "¿Cuáles son los costes anuales asociados al tipo de mantenimiento?",
        "opts": [
            "Gastos generales",
            "Costes de mantenimiento",
            "Costes anuales",
            "Costes unitarios"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "5. Confección de presupuestos de instalaciones y sistemas automáticos",
        "q": "¿Cuáles son los costes relacionados con las tareas o con los trabajos requeridos para elaborar un producto en su etapa de producción?",
        "opts": [
            "Costes directos",
            "Gastos generales (GG)",
            "Costes unitarios",
            "Costes indirectos"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "5. Confección de presupuestos de instalaciones y sistemas automáticos",
        "q": "¿Cuáles son los costos asociados al funcionamiento de un negocio?",
        "opts": [
            "Costes indirectos",
            "Costes directos",
            "Gastos generales (GG)",
            "Ninguna de las respuestas anteriores es correcta"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "5. Confección de presupuestos de instalaciones y sistemas automáticos",
        "q": "¿En qué tipo de coste se incluye la mano de obra y los gastos debidos a los materiales?",
        "opts": [
            "Costes indirectos",
            "Honorarios profesionales",
            "Costes directos",
            "Gastos generales"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "5. Confección de presupuestos de instalaciones y sistemas automáticos",
        "q": "¿Qué indica la medición de las unidades de obra?",
        "opts": [
            "Las partes en las que se puede dividir el proyecto",
            "Los diferentes materiales que se necesitan",
            "El número de veces que se repite cada unidad de obra",
            "Los controles de calidad"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "5. Confección de presupuestos de instalaciones y sistemas automáticos",
        "q": "¿Qué tipo de costes de mantenimiento sólo se repetirán en momentos puntuales?",
        "opts": [
            "Costes iniciales (herramienta, stock...)",
            "Costes asociados a empresas externas",
            "Coste de mano de obra habitual",
            "Costes indirectos"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "5. Confección de presupuestos de instalaciones y sistemas automáticos",
        "q": "¿Qué tipo de gasto se va a producir sí o sí al llevar a cabo un proyecto?",
        "opts": [
            "Gastos generales",
            "Mantenimiento",
            "Mano de obra",
            "Costes"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "6. Elaboración de documentos del proyecto y manuales",
        "q": "¿Cómo se controlan las actividades perjudiciales derivadas de la acción empresarial?",
        "opts": [
            "Con planes de emergencia",
            "Con planes de calidad",
            "Con manuales de mantenimiento",
            "Con medidas de protección medioambiental"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "6. Elaboración de documentos del proyecto y manuales",
        "q": "¿Cuál es el documento que identifica los riesgos ambientales que pueda provocar una actividad empresarial?",
        "opts": [
            "Medidas de protección medioambiental",
            "Evaluación de impacto ambiental",
            "Manual de instrucciones",
            "Manual de emergencia"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "6. Elaboración de documentos del proyecto y manuales",
        "q": "¿Cuál es el mantenimiento que se realiza para vaticinar el posible fallo?",
        "opts": [
            "Correctivo",
            "Predictivo",
            "Preventivo",
            "Todas las respuestas anteriores son incorrectas"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "6. Elaboración de documentos del proyecto y manuales",
        "q": "¿Qué acciones tienen como objetivo garantizar el correcto funcionamiento de los equipos e instalaciones?",
        "opts": [
            "Las instrucciones",
            "El mantenimiento",
            "Los planes de emergencia",
            "Los planes de calidad"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "6. Elaboración de documentos del proyecto y manuales",
        "q": "¿Qué es el conjunto de normas de uso que permiten el montaje o instalación de un equipo?",
        "opts": [
            "Manual de usuario",
            "Manual de calidad",
            "Manual de emergencia",
            "Manual de instrucciones"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "6. Elaboración de documentos del proyecto y manuales",
        "q": "¿Qué es un EPI?",
        "opts": [
            "Un equipo que permite mejorar la ergonomía del trabajador",
            "Un equipo que permite mejorar la salud del trabajador",
            "Un documento que explica los riesgos laborales",
            "Un equipo de protección individual"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "6. Elaboración de documentos del proyecto y manuales",
        "q": "¿Qué es un plan de calidad?",
        "opts": [
            "Explica la forma de aplicar un sistema de calidad en la empresa",
            "Clasifica los riesgos laborales",
            "Define las actuaciones que deben seguir los trabajadores ante una emergencia",
            "Todas las respuestas anteriores son correctas"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "6. Elaboración de documentos del proyecto y manuales",
        "q": "¿Qué estudios explican los distintos riesgos laborales?",
        "opts": [
            "Planes de emergencia",
            "Plan de calidad",
            "Estudios básicos de seguridad y salud",
            "Ninguna de las respuestas anteriores es correcta"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "6. Elaboración de documentos del proyecto y manuales",
        "q": "¿Qué permite el mantenimiento correctivo?",
        "opts": [
            "El mantenimiento una vez haya una avería o fallo",
            "Emplear técnicas con las que controlar y monitorizar las variables críticas del equipo",
            "Mantenimiento preventivo de forma periódica",
            "Los controles de calidad"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "6. Elaboración de documentos del proyecto y manuales",
        "q": "¿Qué plan se realiza para que los trabajadores puedan seguir ante una supuesta crisis o actuación de emergencia?",
        "opts": [
            "Plan de calidad",
            "Planes de emergencia",
            "Manual de mantenimiento",
            "Manual de usuario"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "7. Examen Oficial",
        "q": "¿Cómo se llaman las partes en las que podemos dividir y calcular el presupuesto de un proyecto de forma independiente?",
        "opts": [
            "Cuadros",
            "Capítulos",
            "Mediciones",
            "Unidades de obra"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "7. Examen Oficial",
        "q": "¿Cuál de los siguientes elementos es un EPI?",
        "opts": [
            "Extintor de incendios",
            "Señal de salida de emergencia",
            "Botiquín de primeros auxilios",
            "Cascos, guantes y botas de seguridad"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "7. Examen Oficial",
        "q": "¿Cuál es el conjunto de normas de uso que permiten el montaje o instalación de un equipo?",
        "opts": [
            "Manual de usuario",
            "Manual de calidad",
            "Manual de emergencia",
            "Manual de instrucciones"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "7. Examen Oficial",
        "q": "¿Cuál es el documento que identifica los riesgos ambientales que pueda provocar una actividad empresarial?",
        "opts": [
            "Medidas de protección medioambiental",
            "Evaluación de impacto ambiental",
            "Plan de emergencia ambiental",
            "Manual de gestión ambiental"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "7. Examen Oficial",
        "q": "¿Cuál es la ventaja de CADe_SIMU respecto a ePLAN Electric?",
        "opts": [
            "Precio (gratuito)",
            "Mayor librería de componentes",
            "Interfaz más profesional",
            "Posibilidad de importar proyectos de AutoCAD"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "7. Examen Oficial",
        "q": "¿Cuáles son los costos asociados al funcionamiento de un negocio?",
        "opts": [
            "Costes indirectos",
            "Costes directos",
            "Gastos generales (GG)",
            "Ninguna de las respuestas anteriores es correcta"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "7. Examen Oficial",
        "q": "¿Cuándo realizamos la tramitación y legalización de una instalación?",
        "opts": [
            "Una vez se ha terminado la ejecución",
            "En la fase inicial del proyecto",
            "Durante la redacción de la memoria",
            "Depende del tipo de proyecto"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "7. Examen Oficial",
        "q": "¿Cuántos tipos de perspectiva axonométrica hay?",
        "opts": [
            "Cilíndrica y cónica",
            "Caballera y militar",
            "Cónica",
            "Isométrica, dimétrica y trimétrica"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "7. Examen Oficial",
        "q": "¿De qué opción dispone CADe_SIMU para confirmar que el circuito es correcto?",
        "opts": [
            "Voltímetro digital",
            "Simulación",
            "Comprobador automático en línea",
            "Chat con especialista"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "7. Examen Oficial",
        "q": "¿En qué documento figuran las características que debe tener una instalación?",
        "opts": [
            "Memoria descriptiva",
            "Pliego de condiciones",
            "Presupuesto",
            "Planos del proyecto"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "7. Examen Oficial",
        "q": "¿Para qué se utiliza el software CADe_SIMU?",
        "opts": [
            "Dibujo industrial 2D",
            "Dibujo industrial 3D",
            "Dibujo de esquemas eléctricos",
            "Modelado de piezas mecánicas"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "7. Examen Oficial",
        "q": "¿Qué acciones tienen como objetivo garantizar el correcto funcionamiento de los equipos e instalaciones?",
        "opts": [
            "Las instrucciones",
            "El mantenimiento",
            "Los planes de emergencia",
            "Los planes de calidad"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "7. Examen Oficial",
        "q": "¿Qué debemos especificar en un dibujo para imprimir en un plano?",
        "opts": [
            "Las unidades",
            "Las coordenadas",
            "La escala",
            "Ninguna de las respuestas anteriores es correcta"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "7. Examen Oficial",
        "q": "¿Qué estudios explican los distintos riesgos laborales?",
        "opts": [
            "Planes de emergencia",
            "Plan de calidad",
            "Estudios básicos de seguridad y salud",
            "Ninguna de las respuestas anteriores es correcta"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "7. Examen Oficial",
        "q": "¿Qué es lo primero que debe hacer una empresa interesada en crear una instalación?",
        "opts": [
            "Pedir los permisos pertinentes",
            "Contar con un presupuesto",
            "Elaborar un proyecto",
            "Tramitar la documentación necesaria"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "7. Examen Oficial",
        "q": "¿Qué es una sección?",
        "opts": [
            "Un recurso que consiste en cortar una parte de la figura",
            "Una imagen aérea en 3 dimensiones de un objeto",
            "La parte de contacto entre la pieza y el plano de corte",
            "Ninguna de las respuestas anteriores es correcta"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "7. Examen Oficial",
        "q": "¿Qué indica la medición de las unidades de obra?",
        "opts": [
            "Las partes en las que se puede dividir el proyecto",
            "Los diferentes materiales que se necesitan",
            "El número de veces que se repite cada unidad de obra",
            "Los controles de calidad"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "7. Examen Oficial",
        "q": "¿Qué ocurre cuando utilizamos la proyección cilíndrica ortogonal?",
        "opts": [
            "Las líneas de proyección son oblicuas al plano de proyección",
            "El observador se sitúa en un punto fijo cercano al objeto",
            "Las líneas de proyección son perpendiculares al plano de proyección",
            "Las líneas de proyección son paralelas al plano de proyección"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "7. Examen Oficial",
        "q": "La vista de un objeto desde arriba se denomina:",
        "opts": [
            "Alzado o vista frontal",
            "Perfil o vista lateral",
            "Planta o vista superior",
            "Perspectiva isométrica"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "7. Examen Oficial",
        "q": "El proceso de croquizado consiste en:",
        "opts": [
            "Dibujar con AutoCAD a escala",
            "Crear planos definitivos del proyecto",
            "Imprimir el diseño en papel normalizado",
            "Realizar un replanteo del dibujo a mano alzada sin herramientas de precisión"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "7. Examen Oficial",
        "q": "El estado de las mediciones es:",
        "opts": [
            "La suma total del presupuesto",
            "Un resumen desglosado de la cantidad de cada unidad de obra",
            "La lista de materiales necesarios",
            "El documento de tramitación del proyecto"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "7. Examen Oficial",
        "q": "Las dimensiones del formato A4 son:",
        "opts": [
            "210 x 148 mm",
            "297 x 210 mm",
            "420 x 297 mm",
            "594 x 420 mm"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "7. Examen Oficial",
        "q": "El pliego de condiciones establece:",
        "opts": [
            "El coste total de la instalación",
            "Las condiciones mínimas técnicas y legales (REBT) que debe cumplir la instalación",
            "Los planos detallados del proyecto",
            "La memoria descriptiva del sistema"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "7. Examen Oficial",
        "q": "En AutoCAD, para que el texto y las cotas se adapten automáticamente a la escala del plano, se utiliza:",
        "opts": [
            "Elemento anotativo",
            "Estilo de cota",
            "Tipo de línea",
            "Ventana gráfica"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "7. Examen Oficial",
        "q": "En AutoCAD, las coordenadas cartesianas relativas se introducen especificando:",
        "opts": [
            "Solo la distancia al origen absoluto",
            "El ángulo y la distancia absoluta",
            "La distancia y el sentido (+ o -) respecto al último punto introducido",
            "Las coordenadas X, Y absolutas desde el origen"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "7. Examen Oficial",
        "q": "En CADe_SIMU, si al simular el motor no se ilumina, significa que:",
        "opts": [
            "El motor está correctamente conectado",
            "La simulación no está activada",
            "No le llega la corriente al motor",
            "El programa tiene un error interno"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "7. Examen Oficial",
        "q": "Respecto a los costes de mantenimiento en los primeros años de una instalación nueva:",
        "opts": [
            "Son los más elevados de toda la vida útil",
            "Dependen exclusivamente de la mano de obra",
            "Son iguales que en años posteriores",
            "No suelen existir gastos iniciales de mantenimiento significativos"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "7. Examen Oficial",
        "q": "En AutoCAD, ¿dónde se pueden añadir tantas ventanas gráficas como sean necesarias?",
        "opts": [
            "En el espacio modelo",
            "En el espacio papel",
            "En el espacio presentación",
            "Todas las respuestas anteriores son correctas"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "7. Examen Oficial",
        "q": "¿Qué normativa regula las condiciones mínimas de seguridad y salud en los lugares de trabajo?",
        "opts": [
            "RD 486/1997",
            "RD 614/2001",
            "RD 1215/1997",
            "Ley 31/1995"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "7. Examen Oficial",
        "q": "La previsión de cargas que aparece en la memoria descriptiva se calcula como:",
        "opts": [
            "La suma de todas las potencias instaladas sin criterio",
            "La suma de la potencia de cada receptor multiplicada por su coeficiente de simultaneidad",
            "Solo la potencia del receptor más grande",
            "El promedio de todas las potencias instaladas"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "7. Examen Oficial",
        "q": "En una perspectiva isométrica, los tres ejes forman entre sí ángulos de:",
        "opts": [
            "90°",
            "120°",
            "60°",
            "45°"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "7. Examen Oficial",
        "q": "¿Qué combinación de teclas abre la paleta de propiedades en AutoCAD?",
        "opts": [
            "PR + Intro",
            "Ctrl + 1",
            "Ctrl + P",
            "F4"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "7. Examen Oficial",
        "q": "La puesta a tierra de una instalación eléctrica sirve para:",
        "opts": [
            "Mejorar la eficiencia energética",
            "Reducir el consumo eléctrico",
            "Aumentar la velocidad de los circuitos",
            "Proteger contra contactos directos e indirectos"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "7. Examen Oficial",
        "q": "En la señalización de seguridad, la señal de forma triangular indica:",
        "opts": [
            "Peligro o advertencia",
            "Obligación",
            "Prohibición",
            "Información de emergencia"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "7. Examen Oficial",
        "q": "Los anexos de cálculos en un proyecto técnico sirven para:",
        "opts": [
            "Resumir el presupuesto total",
            "Listar los materiales necesarios",
            "Describir el emplazamiento de la instalación",
            "Justificar técnicamente las decisiones adoptadas en el diseño"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "7. Examen Oficial",
        "q": "En el esquema de distribución de neutro tipo TN, la característica principal es que:",
        "opts": [
            "El neutro y la tierra son conductores independientes",
            "Solo existe conductor de protección, sin neutro",
            "Hay un transformador de aislamiento intermedio",
            "El conductor de protección (PE) y el neutro están unidos o son el mismo conductor"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "7. Examen Oficial",
        "q": "Los planes de emergencia describen:",
        "opts": [
            "Los costes de mantenimiento de la instalación",
            "Los planos de la instalación eléctrica",
            "Las actuaciones que deben seguir los trabajadores ante situaciones de crisis o emergencia",
            "Los requisitos técnicos de la instalación"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "7. Examen Oficial",
        "q": "Los sistemas CAD (Computer Aided Design) son:",
        "opts": [
            "Programas de gestión de proyectos empresariales",
            "Herramientas de cálculo estructural",
            "Sistemas de control automatizado industrial",
            "Herramientas informáticas para el dibujo técnico asistido por ordenador"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "7. Examen Oficial",
        "q": "Según el REBT, se considera baja tensión cuando la tensión es:",
        "opts": [
            "Por debajo de 1000 V en corriente alterna (CA)",
            "Por debajo de 500 V en corriente alterna",
            "Por encima de 1000 V en corriente continua",
            "Entre 1000 V y 36000 V"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "7. Examen Oficial",
        "q": "En AutoCAD, las ventanas gráficas permiten:",
        "opts": [
            "Editar el espacio modelo directamente desde el papel",
            "Imprimir en color automáticamente",
            "Mostrar vistas determinadas del modelo en el espacio presentación",
            "Crear nuevas capas de dibujo"
        ],
        "ans": 2,
        "exp": ""
    }
];