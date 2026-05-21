const EXAM_DATA = [
    {
        "u": "1",
        "q": "¿Cuál de las siguientes no es una característica del préstamo hipotecario?",
        "opts": [
            "La cuantía concedida dependerá del valor de la vivienda.",
            "Habitualmente la cuantía concedida no superará el 80% del valor de tasación.",
            "Su plazo máximo de amortización no suele exceder de 8 años.",
            "Suele utilizarse para la compra de bienes inmuebles."
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "1",
        "q": "¿Cuál de los siguientes es un agente que actúa en la economía?",
        "opts": [
            "Familias.",
            "Empresas.",
            "Estado.",
            "Todas son correctas."
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "1",
        "q": "¿En qué se basa la decisión que se toma para cubrir necesidades?",
        "opts": [
            "En un impulso.",
            "En una comparativa.",
            "En una encuesta.",
            "En una imitación de lo que hace la sociedad."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "1",
        "q": "Cuando se toma una decisión, los costes del pasado que no deben influir en la decisión futura se denominan:",
        "opts": [
            "El coste operacional.",
            "El coste duplicado.",
            "El coste irrecuperable.",
            "El coste de ahorro."
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "1",
        "q": "El coste total de un préstamo será la suma de:",
        "opts": [
            "Capital inicial e intereses.",
            "Interés fijo e interés variable.",
            "Nominal, amortización, comisiones y tasas.",
            "Nominal, intereses, comisiones y gastos."
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "1",
        "q": "El presupuesto familiar se compone de:",
        "opts": [
            "Gastos fijos.",
            "Gastos corrientes.",
            "Gastos ocasionales.",
            "Todas son correctas."
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "1",
        "q": "La capacidad de endeudamiento:",
        "opts": [
            "Será como máximo del 35% de los ingresos netos.",
            "Será como máximo del 45% de los ingresos netos.",
            "Es equivalente al límite de endeudamiento.",
            "Es el total de los ingresos netos."
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "1",
        "q": "La cuantía recomendada para el fondo de emergencia es aquella que permite mantener todos los gastos durante:",
        "opts": [
            "6 meses.",
            "3 meses.",
            "12 meses.",
            "Toda la vida del individuo."
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "1",
        "q": "Las tarjetas revolving:",
        "opts": [
            "Son las que emiten las empresas comerciales.",
            "Se consideran una deuda eterna.",
            "Realizan el cargo de manera inmediata en la cuenta bancaria.",
            "Todas son correctas."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "1",
        "q": "Renunciar a consumir hoy para consumir más en el futuro, ¿a qué concepto hace referencia?",
        "opts": [
            "Consumo.",
            "Financiación.",
            "Planificación.",
            "Ahorro."
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "2",
        "q": "¿Cómo se crea valor en un producto?",
        "opts": [
            "Incrementando la cuota de mercado.",
            "Mediante una buena cadena de proveedores en el aprovisionamiento.",
            "Utilizando nuevas tecnologías y personal de élite.",
            "Añadiéndole utilidad para que satisfaga necesidades."
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "2",
        "q": "¿Qué tipo de tributo es aquel que no conlleva contraprestación directa y que se dedica a la financiación general del gasto público?",
        "opts": [
            "Impuestos.",
            "Contribuciones especiales.",
            "Tasas.",
            "Sablazos."
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "2",
        "q": "Cuando el vendedor quiere dejar constancia de la oferta de un determinado bien o servicio y sus condiciones de entrega, utilizará:",
        "opts": [
            "La factura.",
            "El presupuesto.",
            "El albarán.",
            "El pedido."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "2",
        "q": "El documento formal que incorpora una orden de pago, por la que una persona ordena pagar una determinada cantidad de dinero al poseedor de esta a su vencimiento:",
        "opts": [
            "Cheque.",
            "Letra de cambio.",
            "Recibo normalizado.",
            "Transferencia bancaria."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "2",
        "q": "El documento que recoge los cobros y pagos que tiene previstos la empresa, en base a las operaciones que va a realizar a corto plazo, se denomina:",
        "opts": [
            "Plan de marketing.",
            "Plan de tesorería.",
            "Plan contable.",
            "Sistema tributario."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "2",
        "q": "El Estado puede conseguir los ingresos públicos de:",
        "opts": [
            "Las donaciones y la deuda pública.",
            "La extracción o expropiación.",
            "Los ingresos contractuales.",
            "Todas son correctas."
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "2",
        "q": "El impuesto que se encarga de gravar el consumo es:",
        "opts": [
            "El IVA.",
            "El IRPF.",
            "El Impuesto sobre Sociedades.",
            "La declaración censal."
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "2",
        "q": "El impuesto que se encarga de gravar las rentas de cada persona física es:",
        "opts": [
            "El IVA.",
            "El IRPF.",
            "El Impuesto sobre Sociedades.",
            "La declaración censal."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "2",
        "q": "La base liquidable del IRPF es:",
        "opts": [
            "Igual a la base imponible.",
            "La parte que queda exenta de la aplicación del tributo.",
            "La cantidad que finalmente es sometida al gravamen.",
            "El tipo impositivo progresivo."
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "2",
        "q": "Según el análisis PESTEL, el factor ecológico del macroentorno hace referencia a:",
        "opts": [
            "Inflación, política monetaria, desempleo...",
            "Demografía, educación, estilo de vida...",
            "Contabilidad, legislación, salubridad...",
            "Energía, concienciación ambiental, restricción de emisiones..."
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "3",
        "q": "¿Cuál de las siguientes no es una orientación para la actividad comercial según el enfoque del marketing?",
        "opts": [
            "Orientación hacia el producto.",
            "Orientación hacia las ventas.",
            "Orientación hacia el cliente o consumidor.",
            "Orientación hacia la innovación tecnológica."
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "3",
        "q": "¿Cuál de los siguientes elementos no pertenece al concepto de mercado?",
        "opts": [
            "Beneficios obtenidos por la empresa.",
            "Conjunto de individuos con necesidades.",
            "Recursos y capacidad de compra.",
            "Lugar de intercambio comercial."
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "3",
        "q": "¿Cuál es el objetivo principal del marketing relacional?",
        "opts": [
            "Incrementar las ventas a corto plazo.",
            "Mantener una relación significativa a largo plazo con el público objetivo.",
            "Realizar promociones y descuentos.",
            "Atraer nuevos clientes a través de la publicidad masiva."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "3",
        "q": "¿Cuál es la definición más completa de marketing?",
        "opts": [
            "El proceso de ventas de productos y servicios.",
            "El estudio de competencia y comportamiento del consumidor.",
            "La actividad de publicidad y análisis de mercado.",
            "La planificación y ejecución de la concepción del producto, fijación de precios, promoción y distribución de ideas, bienes y servicios para crear relaciones de intercambio que satisfagan objetivos individuales y organizacionales."
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "3",
        "q": "¿Cuál es la principal diferencia entre marketing estratégico y marketing operativo?",
        "opts": [
            "El marketing estratégico se centra en el corto plazo, mientras que el operativo se centra en el largo plazo.",
            "El marketing estratégico se ocupa de la implementación de acciones, mientras que el operativo se ocupa del análisis de necesidades del público objetivo.",
            "El marketing estratégico se ocupa de la publicidad, mientras que el marketing operativo se centra en las ventas.",
            "El marketing estratégico se centra en el análisis continuo y la identificación de necesidades del público objetivo, mientras que el marketing operativo se focaliza en la puesta en marcha de medidas para aprovechar oportunidades."
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "3",
        "q": "¿Cuáles son las funciones del marketing en la empresa?",
        "opts": [
            "Funciones de producción y funciones de comercialización.",
            "Funciones de dirección y gestión y funciones de acción.",
            "Funciones de evaluación del mercado.",
            "Funciones de análisis y funciones de planificación y decisión."
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "3",
        "q": "¿Qué caracteriza al marketing emocional?",
        "opts": [
            "La segmentación del mercado basada en datos demográficos.",
            "El uso intensivo de técnicas de venta agresivas.",
            "La implementación de estrategias de precios competitivos.",
            "La creación de una conexión emocional entre el producto y el consumidor."
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "3",
        "q": "¿Qué enfoque de marketing se centra en la anticipación de problemas y necesidades futuras del mercado?",
        "opts": [
            "Orientación hacia el producto.",
            "Orientación hacia las ventas.",
            "Orientación hacia la competencia.",
            "Orientación hacia el mercado."
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "3",
        "q": "¿Qué es el Producto Mínimo Viable (PMV) en el contexto del método Lean Startup?",
        "opts": [
            "Una versión de prueba del producto con características básicas necesarias para satisfacer las necesidades de los clientes.",
            "Un producto final completo.",
            "Un concepto teórico sin implementación real.",
            "Un plan de marketing detallado."
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "3",
        "q": "El marketing interno se refiere a:",
        "opts": [
            "Las acciones del marketing dentro de la organización dirigidas a sus propios integrantes.",
            "Las estrategias de comunicación de la empresa hacia su público objetivo.",
            "La publicidad realizada dentro del país de origen de la empresa.",
            "Las ventas directas a los empleados de la empresa."
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "4",
        "q": "¿Cuál de las siguientes NO es una estrategia según la ventaja competitiva?",
        "opts": [
            "Estrategia de costes.",
            "Estrategia de diferenciación.",
            "Estrategia de enfoque.",
            "Estrategia de diversificación."
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "4",
        "q": "¿Cuál de los siguientes no es un criterio para clasificar los datos en el análisis de mercado?",
        "opts": [
            "Por su naturaleza.",
            "Por su ubicación.",
            "Por su fuente.",
            "Por su costo."
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "4",
        "q": "¿Cuál es la primera fase en el proceso de análisis de mercados?",
        "opts": [
            "Análisis de la información.",
            "Búsqueda y obtención de la información.",
            "Planteamiento de la investigación.",
            "Obtención y presentación de resultados."
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "4",
        "q": "¿Cuál es la principal herramienta del marketing estratégico?",
        "opts": [
            "Análisis DAFO.",
            "Plan de marketing.",
            "Investigación de mercado.",
            "Estrategia de precios."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "4",
        "q": "¿Qué análisis no forma parte del análisis de la situación en el plan de marketing?",
        "opts": [
            "Análisis de la demanda.",
            "Análisis de la competencia.",
            "Análisis del producto.",
            "Análisis interno de la empresa."
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "4",
        "q": "¿Qué apartado del plan de marketing se enfoca en definir las metas comerciales a medio y largo plazo?",
        "opts": [
            "Análisis de la situación.",
            "Evaluación y control.",
            "Definición estratégica.",
            "Implantación de la estrategia."
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "4",
        "q": "¿Qué herramienta permite analizar las debilidades, amenazas, fortalezas y oportunidades de una empresa?",
        "opts": [
            "Análisis PEST.",
            "Análisis DAFO.",
            "Investigación de mercado.",
            "Matriz de crecimiento."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "4",
        "q": "¿Qué política del marketing mix se relaciona con la forma y el lugar en el que los bienes y servicios se ponen a disposición del público?",
        "opts": [
            "Política de precio.",
            "Política de producto.",
            "Política de distribución.",
            "Política de comunicación."
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "4",
        "q": "El informe final de la investigación:",
        "opts": [
            "Tendrá un carácter formal, público y subjetivo.",
            "Es un vídeo de presentación.",
            "Se centra en clasificar las opiniones que se hayan obtenido y valorarlas en base a los criterios.",
            "Debe ser ordenado, preciso, objetivo y confidencial."
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "4",
        "q": "La política de comunicación:",
        "opts": [
            "Se relaciona con la forma y el lugar en el que los bienes y servicios se ponen a disposición del público.",
            "Tiene como fin informar, recordar y persuadir a los consumidores potenciales.",
            "Es sinónimo de hacer publicidad.",
            "Permite determinar las secciones del mercado más afines y adecuadas."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "5",
        "q": "Al responsable de recursos humanos se le presuponen varias habilidades, entre ellas:",
        "opts": [
            "Tener motivación y ser capaz de trasmitirla al equipo.",
            "Comunicar efectivamente.",
            "Ser resolutivo y determinado en la toma de decisiones.",
            "Todas son correctas."
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "5",
        "q": "Calcular las nóminas y realizar el pago a los trabajadores se ubica dentro de la siguiente función:",
        "opts": [
            "Función de empleo.",
            "Función de administración del personal.",
            "Función de retribución o contraprestación de servicios.",
            "Función de desarrollo y servicios sociales."
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "5",
        "q": "El modelo de gestión por competencias forma parte de los:",
        "opts": [
            "Modelos tradicionales.",
            "Modelos actuales.",
            "Modelos históricos.",
            "Ninguna es correcta."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "5",
        "q": "El plan de actuación, para que el personal esté ajustado tanto cuantitativa como cualitativamente a los objetivos que se hayan planteado en la previsión previa, incluirá:",
        "opts": [
            "Prioridades y temporalización.",
            "Asignación de presupuestos.",
            "Responsabilidades.",
            "Todas son correctas."
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "5",
        "q": "La función de desarrollo y servicios sociales del departamento de RRHH se encarga de:",
        "opts": [
            "Proveer a la empresa de personal.",
            "La gestión burocrática de contratos, justificantes, bajas, etc.",
            "Motivación, satisfacción y correcto desempeño en el puesto.",
            "Nóminas y realización del pago a los trabajadores."
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "5",
        "q": "La metodología de análisis de puestos de trabajo en la que el empleado que desempeña el puesto responde a un test sobre sus funciones y tareas, se denomina:",
        "opts": [
            "Observación directa.",
            "Cuestionarios.",
            "Entrevista.",
            "Diarios de trabajo."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "5",
        "q": "La metodología de análisis de puestos de trabajo en la que los empleados registran cada jornada sus tareas, el tiempo dedicado a ellas, las personas a las que dan feedback de su trabajo y todas las observaciones que consideren relevantes, se denomina:",
        "opts": [
            "Observación directa.",
            "Cuestionarios.",
            "Entrevista.",
            "Diarios de trabajo."
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "5",
        "q": "Los grupos profesionales se definen por:",
        "opts": [
            "Las características del trabajador.",
            "La titulación del trabajador.",
            "Las aptitudes del trabajador.",
            "Todas son correctas."
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "5",
        "q": "Para la planificación de los recursos humanos:",
        "opts": [
            "Es necesario plantear constantes aumentos de personal.",
            "Se marcan objetivos logísticos y estratégicos.",
            "Las desviaciones tienen siempre motivos extraordinarios.",
            "Todas son correctas."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "5",
        "q": "Una organización informal:",
        "opts": [
            "Es aquella donde la estructura organizativa la define la dirección y se refleja en un organigrama con los puestos de trabajo, relaciones jerárquicas y funciones.",
            "Es aquella donde la estructura organizativa está conformada según las relaciones personales que surgen de forma natural entre los trabajadores.",
            "Es aquella que procura que su estructura esté en todo momento provista de personal, en sentido tanto cuantitativo como cualitativo.",
            "Es aquella que impulsa la transformación digital implicando a todos los integrantes en el uso de la tecnología para fomentar un ecosistema abierto y digitalizado."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "6",
        "q": "A las personas que, sin haber sido dotadas de autoridad, tienen la capacidad de influenciar sobre los demás por su carisma y personalidad, se les denomina:",
        "opts": [
            "Líderes",
            "Directores",
            "Jefes",
            "Mandos"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "6",
        "q": "¿Cuál de las siguientes es una tendencia actual relativa a la comunicación interna?",
        "opts": [
            "Motor de digitalización",
            "Employer Branding",
            "Apps internas",
            "Todas son correctas"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "6",
        "q": "El estilo de liderazgo en el que el líder interviene solo cuando lo cree conveniente, dejando máxima libertad a sus empleados y controlando lo mínimo imprescindible, se denomina:",
        "opts": [
            "Liderazgo laissez faire",
            "Liderazgo democrático",
            "Liderazgo paternalista",
            "Liderazgo visionario"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "6",
        "q": "El estilo de liderazgo en el que el líder tiene claro dónde quiere ir e intenta que el equipo visualice su meta y la comparta, se denomina:",
        "opts": [
            "Liderazgo laissez faire",
            "Liderazgo democrático",
            "Liderazgo paternalista",
            "Liderazgo visionario"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "6",
        "q": "El enfoque de liderazgo que defiende que la efectividad del liderazgo depende de la naturaleza de la circunstancia en la que se ejerza, lo conocemos como:",
        "opts": [
            "Enfoque situacional",
            "Enfoque funcional",
            "Enfoque empírico",
            "Ninguna es correcta"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "6",
        "q": "Según la teoría de Herzberg, las variables que por sí mismas no producen motivación, pero cuya ausencia sí produce insatisfacción, se conocen como:",
        "opts": [
            "Factores motivacionales",
            "Factores higiénicos",
            "Factores laborales",
            "Factores de afiliación"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "6",
        "q": "La teoría que describe el estilo de liderazgo mediante la identificación de cinco niveles que mezclan diferentes rangos de preocupación por las personas y las tareas, se denomina:",
        "opts": [
            "Teoría del gran hombre o de rasgos",
            "Teoría X e Y de McGregor",
            "Teoría de Boyatzis y McKee",
            "Teoría de la malla gerencial de Blake y Mouton"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "6",
        "q": "Este autor diseñó una pirámide de necesidades en la que las necesidades expuestas en la base eran de supervivencia y, a medida que se ascendía, se desarrollaban nociones relativas al crecimiento personal y social del individuo:",
        "opts": [
            "Abraham Maslow",
            "McClelland",
            "Herzberg",
            "McGregor"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "6",
        "q": "Las habilidades interpersonales, también conocidas como habilidades ________, se refieren a la capacidad de una persona para interactuar de manera efectiva con los demás:",
        "opts": [
            "Duras",
            "Ásperas",
            "Blandas",
            "Opacas"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "6",
        "q": "La capacidad de comprender y compartir los sentimientos de otros se denomina:",
        "opts": [
            "Comunicación efectiva",
            "Empatía",
            "Resolución de conflictos",
            "Adaptabilidad"
        ],
        "ans": 1,
        "exp": ""
    },
    { "u": "7. Examen Oficial", "q": "¿Cuál de las siguientes es una tendencia actual relativa a la comunicación interna?", "opts": ["Motor de digitalización.", "Employer Branding.", "Apps internas.", "Todas son correctas."], "ans": 3, "exp": "Las tres opciones (motor de digitalización, employer branding y apps internas) son tendencias actuales en comunicación interna." },
    { "u": "7. Examen Oficial", "q": "¿Cuál de las siguientes no es una de las 5 fuerzas de Porter?", "opts": ["El flujo del proceso de compraventa.", "La amenaza de productos sustitutivos.", "El poder de negociación de los proveedores.", "Las barreras de entrada."], "ans": 0, "exp": "Las 5 fuerzas de Porter son: amenaza de nuevos competidores, amenaza de productos sustitutivos, poder de negociación de clientes, poder de negociación de proveedores y rivalidad entre competidores. El flujo del proceso de compraventa no forma parte del modelo." },
    { "u": "7. Examen Oficial", "q": "¿Cuál de las siguientes no sería una estrategia del plan de marketing en función del producto?", "opts": ["Estrategia de penetración.", "Estrategia de desarrollo de producto.", "Estrategia de enraizamiento.", "Estrategia de diversificación."], "ans": 2, "exp": "Las estrategias de la matriz de Ansoff son: penetración de mercado, desarrollo de producto, desarrollo de mercado y diversificación. La estrategia de enraizamiento no existe en este modelo." },
    { "u": "7. Examen Oficial", "q": "¿Cuál es el objetivo principal del marketing relacional?", "opts": ["Incrementar las ventas a corto plazo.", "Mantener una relación significativa a largo plazo con el público objetivo.", "Realizar promociones y descuentos.", "Atraer nuevos clientes a través de la publicidad masiva."], "ans": 1, "exp": "El marketing relacional se centra en construir y mantener relaciones duraderas y significativas con los clientes, priorizando el largo plazo sobre las ventas inmediatas." },
    { "u": "7. Examen Oficial", "q": "¿Cuál es la definición más completa de marketing?", "opts": ["El proceso de ventas de bienes y servicios.", "El estudio de la competencia y el comportamiento del consumidor.", "La actividad de publicidad y análisis de mercado.", "La planificación y ejecución de la concepción del producto, fijación de precios, promoción y distribución de ideas, bienes y servicios para crear relaciones de intercambio que satisfagan objetivos individuales y organizacionales."], "ans": 3, "exp": "Esta definición de la AMA (American Marketing Association) es la más completa porque abarca todas las dimensiones del marketing: producto, precio, promoción y distribución." },
    { "u": "7. Examen Oficial", "q": "¿Cuál es la principal diferencia entre marketing estratégico y marketing operativo?", "opts": ["El marketing estratégico se centra en el corto plazo, mientras que el operativo se centra en el largo plazo.", "El marketing estratégico se ocupa de la implementación de acciones, mientras que el operativo se ocupa del análisis de necesidades del público objetivo.", "El marketing estratégico se ocupa de la publicidad, mientras que el marketing operativo se centra en las ventas.", "El marketing estratégico se centra en el análisis continuo y la identificación de necesidades del público objetivo, mientras que el marketing operativo se focaliza en la puesta en marcha de medidas para aprovechar oportunidades."], "ans": 3, "exp": "El marketing estratégico analiza el entorno y detecta oportunidades a largo plazo; el marketing operativo implementa las acciones concretas para aprovechar esas oportunidades." },
    { "u": "7. Examen Oficial", "q": "¿Cuál es la principal herramienta del marketing estratégico?", "opts": ["Análisis DAFO.", "Plan de marketing.", "Investigación de mercado.", "Estrategia de precios."], "ans": 1, "exp": "El plan de marketing es el documento que recoge los objetivos, estrategias y acciones de marketing de la empresa, siendo la herramienta central del marketing estratégico." },
    { "u": "7. Examen Oficial", "q": "¿En qué se basa la decisión que se toma para cubrir necesidades?", "opts": ["En un impulso.", "En una comparativa.", "En una encuesta.", "En una imitación de lo que hace la sociedad."], "ans": 1, "exp": "Las decisiones de compra para cubrir necesidades se basan en una comparativa entre las distintas alternativas disponibles en el mercado." },
    { "u": "7. Examen Oficial", "q": "¿Qué análisis no forma parte del análisis de la situación en el plan de marketing?", "opts": ["Análisis de la demanda.", "Análisis de la competencia.", "Análisis del producto.", "Análisis interno de la empresa."], "ans": 2, "exp": "El análisis de la situación en el plan de marketing incluye el análisis del entorno, la demanda, la competencia y el análisis interno. El análisis del producto en sí mismo no forma parte de esta fase." },
    { "u": "7. Examen Oficial", "q": "¿Qué herramienta permite analizar las debilidades, amenazas, fortalezas y oportunidades de una empresa?", "opts": ["Análisis PEST.", "Análisis DAFO.", "Investigación de mercado.", "Matriz de crecimiento."], "ans": 1, "exp": "El análisis DAFO (Debilidades, Amenazas, Fortalezas y Oportunidades) es la herramienta de diagnóstico estratégico que combina el análisis interno y externo de la empresa." },
    { "u": "7. Examen Oficial", "q": "A las personas que, sin haber sido dotadas de autoridad, tienen la capacidad de influenciar sobre los demás por su carisma y personalidad, se les denomina:", "opts": ["Líderes.", "Directores.", "Jefes.", "Mandos."], "ans": 0, "exp": "El líder ejerce su influencia de forma natural, sin necesidad de autoridad formal. Se diferencia del jefe o director en que su poder proviene del carisma y la personalidad." },
    { "u": "7. Examen Oficial", "q": "Al responsable de recursos humanos se le presuponen varias habilidades, entre ellas:", "opts": ["Tener motivación y ser capaz de trasmitirla al equipo.", "Comunicar efectivamente.", "Ser resolutivo y determinado en la toma de decisiones.", "Todas son correctas."], "ans": 3, "exp": "El responsable de RRHH debe combinar motivación, comunicación efectiva y capacidad de decisión, siendo todas estas habilidades esenciales para el puesto." },
    { "u": "7. Examen Oficial", "q": "Cuando hablamos de segmentación, la estrategia de expansión de mercado:", "opts": ["Se centrará en más de un segmento, pero con un solo producto.", "Actuará en un solo segmento con un solo producto.", "Ofrecerá distintos productos a un solo segmento.", "Adaptará el producto a las particularidades de cada segmento."], "ans": 0, "exp": "La estrategia de expansión de mercado busca llegar a múltiples segmentos ofreciendo el mismo producto, ampliando así el alcance sin modificar la oferta." },
    { "u": "7. Examen Oficial", "q": "Dentro de las teorías del liderazgo, la teoría del gran hombre afirma que:", "opts": ["Los rasgos del líder son innatos y no se pueden adquirir ni con entrenamiento ni con experiencia.", "El comportamiento del líder depende de la percepción que tenga de la naturaleza de sus subordinados.", "Solo puede existir un líder en la organización, que ejercerá su mando con mano de hierro.", "El líder teje una malla gerencial para desarrollar sus funciones."], "ans": 0, "exp": "La teoría del gran hombre sostiene que los líderes nacen, no se hacen: sus cualidades son innatas e imposibles de adquirir mediante formación o experiencia." },
    { "u": "7. Examen Oficial", "q": "Documento formal que incorpora una orden de pago, por la que una persona ordena pagar una determinada cantidad de dinero al poseedor de esta a su vencimiento:", "opts": ["Cheque.", "Letra de cambio.", "Recibo normalizado.", "Transferencia bancaria."], "ans": 1, "exp": "La letra de cambio es un título valor que contiene una orden de pago incondicional, pagadera en una fecha determinada (vencimiento) al tenedor del documento." },
    { "u": "7. Examen Oficial", "q": "El Estado puede conseguir los ingresos públicos de:", "opts": ["Las donaciones y la deuda pública.", "La extracción o expropiación.", "Los ingresos contractuales.", "Todas son correctas."], "ans": 3, "exp": "Los ingresos públicos del Estado provienen de múltiples fuentes: donaciones, deuda pública, expropiaciones e ingresos contractuales, entre otras." },
    { "u": "7. Examen Oficial", "q": "El estilo de liderazgo en el que el líder interviene solo cuando lo cree conveniente, dejando máxima libertad a sus empleados y controlando lo mínimo imprescindible, se denomina:", "opts": ["Liderazgo laissez faire.", "Liderazgo democrático.", "Liderazgo paternalista.", "Liderazgo visionario."], "ans": 0, "exp": "El liderazgo laissez faire (dejar hacer) es el estilo más permisivo, donde el líder delega casi toda la autoridad y solo interviene si es estrictamente necesario." },
    { "u": "7. Examen Oficial", "q": "El estilo de liderazgo en el que el líder tiene claro dónde quiere ir e intenta que el equipo visualice su meta y la comparta, se denomina:", "opts": ["Liderazgo laissez faire.", "Liderazgo democrático.", "Liderazgo paternalista.", "Liderazgo visionario."], "ans": 3, "exp": "El liderazgo visionario se caracteriza por la capacidad del líder de definir una visión clara de futuro y conseguir que todo el equipo la comprenda y se comprometa con ella." },
    { "u": "7. Examen Oficial", "q": "El factor que impulsa a las personas a iniciar, mantener o terminar una actividad, un comportamiento o una actitud se denomina:", "opts": ["Motivación.", "Pirámide de necesidades.", "Autoestima.", "Higiénico."], "ans": 0, "exp": "La motivación es el conjunto de factores internos y externos que determinan el inicio, la dirección, la intensidad y la persistencia de la conducta de una persona." },
    { "u": "7. Examen Oficial", "q": "El impuesto que se encarga de gravar el consumo es:", "opts": ["El IVA.", "El IRPF.", "El Impuesto sobre Sociedades.", "La declaración censal."], "ans": 0, "exp": "El IVA (Impuesto sobre el Valor Añadido) es un impuesto indirecto que grava el consumo de bienes y servicios en todas las fases del proceso productivo." },
    { "u": "7. Examen Oficial", "q": "El Impuesto sobre Sociedades:", "opts": ["Tiene carácter indirecto.", "Grava la ganancia de rentas por parte de personas físicas y entidades públicas.", "Es de naturaleza personal porque tiene en cuenta determinadas circunstancias particulares de cada contribuyente.", "Ninguna es correcta."], "ans": 2, "exp": "El Impuesto sobre Sociedades es de naturaleza personal y directa, ya que tiene en cuenta las circunstancias particulares de cada entidad contribuyente para determinar la base imponible." },
    { "u": "7. Examen Oficial", "q": "El presupuesto familiar se compone de:", "opts": ["Gastos fijos.", "Gastos corrientes.", "Gastos ocasionales.", "Todas son correctas."], "ans": 3, "exp": "El presupuesto familiar integra los tres tipos de gastos: fijos (alquiler, hipoteca), corrientes (alimentación, suministros) y ocasionales (vacaciones, reparaciones)." },
    { "u": "7. Examen Oficial", "q": "Engloba todas las tareas dirigidas a la obtención y transformación de los recursos que permiten desarrollar la actividad de la empresa y aprovechar las oportunidades de mercado, delimitando el plan de actuación que llevará a la generación de beneficios económicos:", "opts": ["Ciclo de explotación.", "Sistema de mercado.", "Aprovisionamiento.", "Marketing relacional."], "ans": 0, "exp": "El ciclo de explotación comprende todas las operaciones que realiza la empresa desde la adquisición de recursos hasta la obtención del producto o servicio y su venta." },
    { "u": "7. Examen Oficial", "q": "Entre los objetivos del análisis de los puestos de trabajo se encuentra:", "opts": ["Ayudar al reclutamiento y selección de personal.", "Detectar necesidades de formación.", "Prever los costes salariales.", "Todas son correctas."], "ans": 3, "exp": "El análisis de puestos de trabajo tiene múltiples objetivos: facilitar el reclutamiento, detectar necesidades formativas y prever los costes salariales, entre otros." },
    { "u": "7. Examen Oficial", "q": "Es una modificación de la jerarquía de Maslow que clasifica las necesidades básicas en tres subgrupos (existencia, relación y crecimiento):", "opts": ["Teoría de McGregor.", "Pirámide de las tres esquinas.", "Teoría ERG.", "Jerarquía de Adams."], "ans": 2, "exp": "La Teoría ERG de Clayton Alderfer reorganiza la pirámide de Maslow en tres grupos: Existencia (necesidades básicas), Relación (necesidades sociales) y Crecimiento (autorrealización)." },
    { "u": "7. Examen Oficial", "q": "La Agencia Tributaria:", "opts": ["Es una entidad de derecho público adscrita al Ministerio de Hacienda.", "Su misión es aplicar el sistema tributario y hacer cumplir el artículo 31 de la Constitución.", "Se creó en 1992.", "Todas son correctas."], "ans": 3, "exp": "La Agencia Estatal de Administración Tributaria (AEAT) fue creada en 1992, está adscrita al Ministerio de Hacienda y su misión es aplicar el sistema tributario según el art. 31 de la Constitución." },
    { "u": "7. Examen Oficial", "q": "La demanda dependerá, entre otros, de:", "opts": ["El comportamiento del consumidor.", "El precio del producto.", "La renta disponible y su distribución.", "Todas son correctas."], "ans": 3, "exp": "La demanda de un producto está condicionada por múltiples factores: el comportamiento del consumidor, el precio del bien y la renta disponible, entre otros." },
    { "u": "7. Examen Oficial", "q": "La organización formal:", "opts": ["Es aquella donde la estructura organizativa la definen los directivos y se refleja en un organigrama con los puestos de trabajo, relaciones jerárquicas y funciones.", "Es aquella donde la estructura organizativa está conformada según las relaciones personales que surgen de forma natural entre los trabajadores.", "Es aquella que procura que su estructura esté en todo momento provista de personal, en sentido tanto cuantitativo como cualitativo.", "Es aquella que impulsa la transformación digital implicando a todos los integrantes en el uso de la tecnología para fomentar un ecosistema abierto y digitalizado."], "ans": 0, "exp": "La organización formal es la estructura oficial definida por la dirección, plasmada en organigramas, manuales de funciones y procedimientos establecidos." },
    { "u": "7. Examen Oficial", "q": "La organización informal:", "opts": ["Es aquella donde la estructura organizativa la define la dirección y se refleja en un organigrama con los puestos de trabajo, relaciones jerárquicas y funciones.", "Es aquella donde la estructura organizativa está conformada según las relaciones personales que surgen de forma natural entre los trabajadores.", "Es aquella que procura que su estructura esté en todo momento provista de personal, en sentido tanto cuantitativo como cualitativo.", "Es aquella que impulsa la transformación digital implicando a todos los integrantes en el uso de la tecnología para fomentar un ecosistema abierto y digitalizado."], "ans": 1, "exp": "La organización informal surge espontáneamente de las relaciones personales entre trabajadores, al margen de la estructura oficial definida por la dirección." },
    { "u": "7. Examen Oficial", "q": "La planificación para establecer el personal de una organización se realiza en dos direcciones:", "opts": ["Expansión laboral y fusión de centros.", "Aumento de personal y reducción de personal.", "Renovación de puestos y reciclaje de puestos actuales.", "Ninguna empresa realiza ya planificaciones de los recursos humanos."], "ans": 1, "exp": "La planificación de plantilla puede orientarse hacia el aumento de personal (cuando la empresa crece o necesita nuevas competencias) o hacia la reducción de personal (reestructuraciones, bajas incentivadas, etc.)." },
    { "u": "7. Examen Oficial", "q": "La T.A.E. (Tasa Anual Equivalente) es la suma de:", "opts": ["Comisión de apertura, comisión de estudio y comisión por cancelación.", "Interés nominal, comisiones y gastos.", "Amortización fija, amortización permanente e impuestos.", "Préstamos, créditos y sus correspondientes tipos de interés."], "ans": 1, "exp": "La TAE recoge el coste real de un producto financiero, incluyendo el tipo de interés nominal, todas las comisiones y los gastos asociados a la operación." },
    { "u": "7. Examen Oficial", "q": "Las normas internas que son establecidas por la dirección para determinar objetivos y prácticas de comunicación comunes para toda la empresa son lo que se denomina:", "opts": ["Planificación de RRHH.", "Política de comunicación.", "Comunicación vertical.", "Flujo comunicativo."], "ans": 1, "exp": "La política de comunicación es el conjunto de normas y directrices que la empresa establece para regular cómo se comunica internamente y externamente." },
    { "u": "7. Examen Oficial", "q": "Las prestaciones pecuniarias exigidas por una Administración pública, como consecuencia de la realización del supuesto de hecho al que la ley vincula el deber de contribuir, se denominan:", "opts": ["Tesorerías.", "Recibos.", "Tributos.", "Letras de cambio."], "ans": 2, "exp": "Los tributos son prestaciones económicas obligatorias exigidas por el Estado u otras administraciones públicas, cuyo hecho imponible está definido por ley." },
    { "u": "7. Examen Oficial", "q": "Los grupos profesionales se definen por:", "opts": ["Las características del trabajador.", "La titulación del trabajador.", "Las aptitudes del trabajador.", "Todas son correctas."], "ans": 3, "exp": "Los grupos profesionales se determinan considerando las características personales, la titulación académica y las aptitudes del trabajador de forma conjunta." },
    { "u": "7. Examen Oficial", "q": "Los indicadores más habituales en el balance social son:", "opts": ["Las variables, los tipos y las consecuencias.", "La eficiencia, la eficacia y el impacto.", "Inputs, outputs e insiders.", "Locales, regionales, nacionales e internacionales."], "ans": 1, "exp": "El balance social mide la responsabilidad social de la empresa mediante tres indicadores clave: eficiencia (uso de recursos), eficacia (logro de objetivos) e impacto (efecto en la sociedad)." },
    { "u": "7. Examen Oficial", "q": "Los préstamos personales:", "opts": ["Suelen tener un plazo máximo de amortización de hasta 15 años.", "Sus intereses siempre son inferiores a los de los créditos hipotecarios.", "Se conocen normalmente como préstamos al consumo.", "Todas son correctas."], "ans": 2, "exp": "Los préstamos personales se denominan préstamos al consumo porque se destinan a financiar bienes o servicios de consumo. No tienen garantía hipotecaria y sus tipos suelen ser superiores a los hipotecarios." },
    { "u": "7. Examen Oficial", "q": "Los recursos humanos se conciben desde tres enfoques:", "opts": ["Político-legal, socioeconómico y laboral.", "Personal, empresarial y social.", "Administrativo-legal, contable-costes y de gestión.", "Actitudinal, competencial y aptitudinal."], "ans": 2, "exp": "La gestión de recursos humanos se aborda desde tres perspectivas: el enfoque administrativo-legal (contratos, normativa), el contable-costes (nóminas, costes laborales) y el de gestión (desarrollo del talento)." },
    { "u": "7. Examen Oficial", "q": "Para la planificación de los recursos humanos:", "opts": ["Es necesario plantear constantes aumentos de personal.", "Se marcan objetivos logísticos y estratégicos.", "Las desviaciones tienen siempre motivos extraordinarios.", "Todas son correctas."], "ans": 1, "exp": "La planificación de RRHH establece objetivos tanto logísticos (cobertura de puestos, formación) como estratégicos (alineación con los objetivos empresariales a largo plazo)." },
    { "u": "7. Examen Oficial", "q": "Para poder elaborar un presupuesto familiar lo más fiel posible a la realidad, el primer paso es:", "opts": ["Identificar gastos e ingresos.", "Contactar con un asesor fiscal.", "Establecer el ahorro con un ingreso fijo.", "Descargar el programa Excel."], "ans": 0, "exp": "El primer paso para elaborar un presupuesto familiar es siempre identificar y clasificar todos los gastos e ingresos existentes para tener una imagen real de la situación financiera." },
    { "u": "7. Examen Oficial", "q": "Renunciar a consumir hoy para consumir más en el futuro, ¿a qué concepto hace referencia?", "opts": ["Consumo.", "Financiación.", "Planificación.", "Ahorro."], "ans": 3, "exp": "El ahorro es la parte de la renta que no se destina al consumo presente, con el objetivo de disponer de mayor capacidad de consumo o inversión en el futuro." }
];