const EXAM_DATA = [
    {
        "u": "1. Lógica digital",
        "q": "¿A qué número binario corresponde el número en BCD: 22?",
        "opts": [
            "0010 0010",
            "0010",
            "No existe",
            "10110"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "1. Lógica digital",
        "q": "¿A qué número binario corresponde el número en decimal: 11?",
        "opts": [
            "1101",
            "1001",
            "1011",
            "1111"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "1. Lógica digital",
        "q": "¿A qué número decimal corresponde el número en binario: 1101?:",
        "opts": [
            "1101",
            "14",
            "13",
            "12"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "1. Lógica digital",
        "q": "¿Cuál de estos sistemas de numeración trabaja con ocho símbolos?:",
        "opts": [
            "El binario",
            "El decimal",
            "El octal",
            "El hexadecimal"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "1. Lógica digital",
        "q": "¿Qué nombre le corresponde a la siguiente definición: son aquellas que pueden tomar valores discretos, es decir, pueden tener dos niveles: 0 o 1?",
        "opts": [
            "Señales digitales",
            "Señales analógicas",
            "Circuitos secuenciales",
            "Circuitos combinacionales"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "1. Lógica digital",
        "q": "¿Qué nombre le corresponde a la siguiente definición: son herramientas que nos ayudan a comprender el comportamiento y resultado de las puertas lógicas de forma gráfica?",
        "opts": [
            "Señales digitales",
            "Tablas de verdad",
            "Puertas lógicas",
            "Circuitos secuenciales"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "1. Lógica digital",
        "q": "En los mapas de Karnaugh, ya sean minterms O maxterms, ¿cómo debemos agrupar estos conjuntos de números?",
        "opts": [
            "En potencias de 10",
            "En potencias de 8",
            "En potencias de 16",
            "En potencias de 2"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "1. Lógica digital",
        "q": "Las agrupaciones en un mapa de Karnaugh no se podrán hacer de forma:",
        "opts": [
            "Horizontal",
            "Diagonal",
            "Vertical",
            "Se pueden hacer de las 3 formas"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "1. Lógica digital",
        "q": "Si nos encontramos con la siguiente expresión lógica: $Q=A^{*}B^{*}C,$ estamos hablando de la función lógica:",
        "opts": [
            "NOR",
            "OR",
            "AND",
            "NAND"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "1. Lógica digital",
        "q": "Una ecuación con maxterms es:",
        "opts": [
            "Una suma de sumas",
            "Una suma de productos",
            "Un producto de productos",
            "Un producto de sumas"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "2. Autómatas programables industriales",
        "q": "¿A qué elemento corresponde la siguiente definición: es la que se encarga de ejecutar el programa de usuario y, como su nombre indica, la información se borra cuando se apaga el dispositivo?",
        "opts": [
            "ROM",
            "RAM",
            "Firmware",
            "REM"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "2. Autómatas programables industriales",
        "q": "¿A qué se le suele denominar el \"cerebro\" de un autómata?",
        "opts": [
            "A los módulos de E/S",
            "Al puerto de comunicación",
            "A la CPU",
            "A la ROM"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "2. Autómatas programables industriales",
        "q": "¿Cuál de los siguientes datos no es un estándar de señal analógica?",
        "opts": [
            "1-20 mA",
            "0-10 VDC",
            "4-20 mA",
            "0-20 mA"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "2. Autómatas programables industriales",
        "q": "¿Cuál de los siguientes lenguajes de programación es también conocido como GRAFCET?",
        "opts": [
            "SCL",
            "LD",
            "SFC",
            "ST"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "2. Autómatas programables industriales",
        "q": "¿Cuál de los siguientes lenguajes de programación usa una forma gráfica con funciones lógicas?",
        "opts": [
            "IL",
            "SCL",
            "LD",
            "FBD"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "2. Autómatas programables industriales",
        "q": "¿Cuál es el cable que se usará para conectar nuestro ordenador con un autómata programable?",
        "opts": [
            "RJ-10",
            "RJ-35",
            "JR-45",
            "RJ-45"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "2. Autómatas programables industriales",
        "q": "¿Qué lenguaje de programación es el formado por diagramas de contactos O escalera?:",
        "opts": [
            "SFC",
            "FBD",
            "IL",
            "LD o KOP"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "2. Autómatas programables industriales",
        "q": "A los autómatas programables se les conocerá también como:",
        "opts": [
            "PCL",
            "PC",
            "PLC",
            "LCP"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "2. Autómatas programables industriales",
        "q": "Los autómatas programables que tienes todos sus elementos en una sola unidad se Ilaman:",
        "opts": [
            "Autómatas modulares",
            "Autómatas compactos",
            "No pueden ir en una sola unidad",
            "Las dos primeras respuestas son correctas"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "2. Autómatas programables industriales",
        "q": "Si hablamos de I/O, se está haciendo referencia a:",
        "opts": [
            "Entradas y salidas",
            "Zona de memoria de un PLC",
            "Sistema de comunicación",
            "Ninguna de ellas"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "3. Programación de relés programables en FBD",
        "q": "¿A que concepto corresponde la siguiente definición: son bloques de funciones especiales que nos posibilitan crear eventos en función de un tiempo prefijado?",
        "opts": [
            "Contadores",
            "Temporizadores",
            "Biestables",
            "Ninguna es correcta"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "3. Programación de relés programables en FBD",
        "q": "¿Cómo llama Siemens al lenguaje FBD?",
        "opts": [
            "KOP",
            "FUP",
            "PLC",
            "SCL"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "3. Programación de relés programables en FBD",
        "q": "¿Qué tipo de circuitos son los que cogen la salida y la usan para meterla en forma de entrada?",
        "opts": [
            "Biestables",
            "Realimentados",
            "Paralelo",
            "Ninguna es correcta"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "3. Programación de relés programables en FBD",
        "q": "¿Qué tipo de lenguaje es el que emplea LOGO?",
        "opts": [
            "SFC",
            "ST",
            "FBD",
            "IL"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "3. Programación de relés programables en FBD",
        "q": "El contador del autómata LOGO realiza su control por medio de:",
        "opts": [
            "2 entradas y 1 parámetro",
            "3 entradas y 2 parámetros",
            "3 entradas y 1 parámetro",
            "2 entradas y 2 parámetros"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "3. Programación de relés programables en FBD",
        "q": "Las marcas o bits auxiliares son usadas en las operaciones externas de la memoria del autómata. ¿Es correcta esta frase?:",
        "opts": [
            "Si",
            "No, solo en interiores",
            "No, en interiores y exteriores",
            "El autómata no tiene memoria interna"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "3. Programación de relés programables en FBD",
        "q": "Los flancos descendentes van ligados a la función:",
        "opts": [
            "OR",
            "AND",
            "NAND",
            "NOR"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "3. Programación de relés programables en FBD",
        "q": "Si un pulsador está asociado a un flanco positivo, el pulso se detecta:",
        "opts": [
            "Mientras el pulsador está accionado",
            "Cuando el pulsador no está asociado",
            "Cuando justo se acciona el pulsador",
            "Cuando justo se suelta el pulsador"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "3. Programación de relés programables en FBD",
        "q": "TOF quiere decir:",
        "opts": [
            "Temporizador a la desconexión",
            "Temporizador a la conexión",
            "Generador de impulsos",
            "Temporizador con memoria"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "3. Programación de relés programables en FBD",
        "q": "TON quiere decir:",
        "opts": [
            "Temporizador a la conexión",
            "Temporizador a la desconexión",
            "Generador de impulsos",
            "Temporizador con memoria"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "4. Programación en STEP 7 (I)",
        "q": "¿A qué término corresponde la siguiente definición: se pueden también Ilamar funciones, tienen programas y pueden llamarlos o Ilamar a otros bloques?",
        "opts": [
            "FC",
            "FB",
            "OB",
            "DB"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "4. Programación en STEP 7 (I)",
        "q": "¿A qué término corresponde la siguiente definición: Son iguales que los FC, pero deberán tener siempre un bloque de datos (DB) asociado?",
        "opts": [
            "FC",
            "FB",
            "OB",
            "DB"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "4. Programación en STEP 7 (I)",
        "q": "¿Cuáles de estas direcciones de entradas y salidas es incorrecta?",
        "opts": [
            "%Q3.3",
            "%Q1.0",
            "%I2.5",
            "%14.8"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "4. Programación en STEP 7 (I)",
        "q": "¿Cuántos bits habrá en 1 palabra?",
        "opts": [
            "24",
            "16",
            "8",
            "32"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "4. Programación en STEP 7 (I)",
        "q": "¿Cuántos bytes hay en 1 doble palabra?",
        "opts": [
            "6 bytes",
            "4 bytes",
            "2 bytes",
            "8 bytes"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "4. Programación en STEP 7 (I)",
        "q": "¿Qué lenguaje de programación no es aceptado por los S7-1200?",
        "opts": [
            "KOP",
            "AWL",
            "FUP",
            "SCL"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "4. Programación en STEP 7 (I)",
        "q": "¿Qué tipo de función lógica se emplea en este segmento?",
        "opts": [
            "OR",
            "NAND",
            "XOR",
            "AND"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "4. Programación en STEP 7 (I)",
        "q": "¿Qué tipo de función lógica se emplea en este segmento?",
        "opts": [
            "OR",
            "AND",
            "Las dos anteriores",
            "Ninguna de las dos primeras"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "4. Programación en STEP 7 (I)",
        "q": "El símbolo % en una variable quiere decir que...",
        "opts": [
            "Es simbólica",
            "Es un número",
            "Es de tipo absoluto",
            "Es un temporizador"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "4. Programación en STEP 7 (I)",
        "q": "Para evitar señales permanentes usaremos...",
        "opts": [
            "Marcas",
            "Biestables",
            "Flancos",
            "Contadores"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "5. Programación en STEP 7 (II)",
        "q": "¿A qué término corresponde la siguiente definición: Cuando recibamos un pulso, este temporizador se pondrá en funcionamiento después de esperar el tiempo programado (PT). La señal de entrada deberá mantenerse para que se ejecute la salida. Si se desactiva, se reseteará el tiempo y la salida se pone a 0?",
        "opts": [
            "ΤΟΝ",
            "TOF",
            "TR",
            "TONR"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "5. Programación en STEP 7 (II)",
        "q": "¿A qué tipo de marcas corresponde esta imagen?",
        "opts": [
            "Marcas de sistema",
            "Marcas de arranque",
            "Marcas de ciclo",
            "Marcas de potencia"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "5. Programación en STEP 7 (II)",
        "q": "¿A que temporizador corresponderá este cronograma?",
        "opts": [
            "ΤΟΝ",
            "TOF",
            "TONR",
            "TP"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "5. Programación en STEP 7 (II)",
        "q": "¿Cuándo ejecutaremos el OB de arranque (OB100)?",
        "opts": [
            "Solamente una vez cuando pase de RUN a STOP",
            "Dos veces cuando pasa de RUN a STOP",
            "Solamente una vez cuando pase de STOP a RUN",
            "El OB100 no es un OB de arranque"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "5. Programación en STEP 7 (II)",
        "q": "¿Para qué sirve un contador CTD?",
        "opts": [
            "Contar",
            "Descontar",
            "Las dos anteriores son correctas",
            "Es un tipo de temporizador"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "5. Programación en STEP 7 (II)",
        "q": "¿Qué quiere decir TOF?",
        "opts": [
            "Temporizador de impulsos",
            "Temporizador con retardo a la conexión",
            "Temporizador con retardo a la desconexión",
            "Temporizador con retardo a la conexión con memoria"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "5. Programación en STEP 7 (II)",
        "q": "¿Qué tipo de temporizadores serán los que admiten los S7-1200?",
        "opts": [
            "IEC",
            "SIMATIC",
            "Los dos tipos",
            "Ninguno de ellos"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "5. Programación en STEP 7 (II)",
        "q": "En este contador CTUD, ¿qué función tendrá la entrada PV?",
        "opts": [
            "Carga el valor de preselección (PV) en el contador",
            "Entrada para incrementar",
            "Entrada para decrementar",
            "Valor de preselección al que se le activa la salida QU"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "5. Programación en STEP 7 (II)",
        "q": "En la siguiente imagen, ¿Qué significa la salida ET?",
        "opts": [
            "Tiempo de preselección en formato TIME",
            "Dato de salida del tiempo transcurrido",
            "Salida de activación",
            "Ninguna de ellas"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "5. Programación en STEP 7 (II)",
        "q": "Si usamos la función IN_RANG y los valores MAX y MIN son 25 y 15, respectivamente, la salida Q se activará cuando el valor VAL sea:",
        "opts": [
            "27",
            "16",
            "14",
            "No existe dicha función"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "6. GRAFCET",
        "q": "¿A qué término corresponde la siguiente definición: Representará los diferentes estados de un sistema secuencial. El símbolo será un cuadrado con un número en su interior y que será de paso o inicial?",
        "opts": [
            "Macroetapas",
            "Transiciones",
            "Etapas",
            "Homing"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "6. GRAFCET",
        "q": "¿A qué término corresponde la siguiente definición: será una parte del GRAFCET, la cual se inicializará solo cuando vayamos a iniciar el proceso. En los PLC pasará de STOP a RUN y se Ilama arranque en caliente?",
        "opts": [
            "Parada",
            "Rearme",
            "Selección de secuencias",
            "Homing o secuencia de inicialización"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "6. GRAFCET",
        "q": "¿A qué término corresponde la siguiente definición: Son condiciones que permitirán el paso de información de una etapa a otra?",
        "opts": [
            "Etapas",
            "Macroetapas",
            "Homing",
            "Transiciones"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "6. GRAFCET",
        "q": "¿A qué tipo de acción corresponde la siguiente imagen?",
        "opts": [
            "Acción condicionada a un límite de tiempo",
            "Acciones por flancos",
            "Acciones por eventos",
            "Acción condicionada"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "6. GRAFCET",
        "q": "¿A qué tipo de acción corresponde la siguiente imagen?",
        "opts": [
            "Condicionada",
            "Continua",
            "Con retardo a la conexión",
            "Con retardo a la desconexión"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "6. GRAFCET",
        "q": "¿A qué tipo de GRAFCET corresponde la siguiente imagen?",
        "opts": [
            "De secuencia continua",
            "Etapas fuente y pozo",
            "Secuencia de inicialización",
            "De secuencias opcionales"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "6. GRAFCET",
        "q": "¿Cuál es la regla de sintaxis del GRAFCET correcta?",
        "opts": [
            "Será de suma importancia que la lectura se realiza de abajo hacia arriba",
            "Será de suma importancia que la lectura se realiza de arriba hacia abajo",
            "Ambas son correctas",
            "Ninguna es correcta"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "6. GRAFCET",
        "q": "GRAFCET se trata de:",
        "opts": [
            "Un lenguaje de programación",
            "Un tipo de memoria",
            "Un tipo de diagrama",
            "Un esquema eléctrico"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "6. GRAFCET",
        "q": "SFC se trata de:",
        "opts": [
            "Un esquema eléctrico",
            "Un tipo de datos usado en las secuencias",
            "Un lenguaje de programación",
            "Un tipo de PLC"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "6. GRAFCET",
        "q": "Una etapa pozo es:",
        "opts": [
            "Una etapa inicial",
            "Una etapa que Ilamará al GRAFCET parcial",
            "Una etapa que no tiene transición de salida",
            "Una etapa de finalización"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "7. GRAFCET en lenguaje de contactos (KOP)",
        "q": "¿A qué acción corresponderá la siguiente imagen?",
        "opts": [
            "Desactivación",
            "Activación",
            "Continua",
            "Condicionada"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "7. GRAFCET en lenguaje de contactos (KOP)",
        "q": "¿A qué acción corresponderá la siguiente imagen?",
        "opts": [
            "Desactivación",
            "Activación",
            "Por pulsos",
            "Limite"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "7. GRAFCET en lenguaje de contactos (KOP)",
        "q": "¿A qué acción corresponderá la siguiente imagen?",
        "opts": [
            "Con contadores",
            "Con Actuadores",
            "Con temporizadores",
            "Condicionadas a eventos"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "7. GRAFCET en lenguaje de contactos (KOP)",
        "q": "¿A qué término corresponde esta definición: En esta zona se programarán las etapas y transiciones del GRAFCET. La zona secuencial se escribirá como un bloque FC que se le llamará desde el bloque principal OB1.",
        "opts": [
            "Zona secuencial",
            "Zona combinacional",
            "Zona de acciones",
            "Zona de inicialización"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "7. GRAFCET en lenguaje de contactos (KOP)",
        "q": "¿A qué término corresponde esta definición: Esta zona corresponderá a aquella en la cual se ejecutan las acciones en cada una de las etapas correspondientes. Lo más aconsejable es usar un único FC para programar estas zonas de acciones sobre todo para trabajar con acciones en las salidas?",
        "opts": [
            "Zona de inicialización",
            "Zona secuencial",
            "Zona de acciones",
            "Saltos y retornos desde múltiples etapas"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "7. GRAFCET en lenguaje de contactos (KOP)",
        "q": "¿A qué término corresponde esta definición: Se trata de la zona que representa todo lo que tendrá que ocurrir para que se inicie la ejecución del programa?",
        "opts": [
            "Zona de inicialización",
            "Zona secuencial",
            "Zona de acciones",
            "Saltos y retornos desde múltiples etapas"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "7. GRAFCET en lenguaje de contactos (KOP)",
        "q": "¿Cómo se Ilamaremos al GRAFCET que contiene el OB1?",
        "opts": [
            "Director",
            "Jefe",
            "Maestro",
            "Líder"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "7. GRAFCET en lenguaje de contactos (KOP)",
        "q": "¿Cuáles de estas opciones no es una zona de programación del GRAFCET?",
        "opts": [
            "Zona secuencial",
            "Zona combinacional",
            "Zona de acciones",
            "Zona de inicialización"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "7. GRAFCET en lenguaje de contactos (KOP)",
        "q": "¿Qué quiere decir si nos encontramos en un GRAFCET la transición 3s/X1?",
        "opts": [
            "Es una acción temporizada",
            "Es una transición temporizada",
            "Las dos anteriores son correctas",
            "Ninguna de las dos primeras es correcta"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "7. GRAFCET en lenguaje de contactos (KOP)",
        "q": "¿Qué serán las variables que asociamos a las etapas?",
        "opts": [
            "Salidas",
            "Entradas",
            "Controladores",
            "Marcas"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "8. Modos de funcionamiento y estructuración en GRAFCET",
        "q": "¿A qué término corresponde la siguiente definición: \"constaran de dos partes: representación del GRAFCET principal y una cadena que se ejecutara\"?",
        "opts": [
            "Modo por pasos",
            "Macroetapas",
            "Parada",
            "Ninguna es correcta"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "8. Modos de funcionamiento y estructuración en GRAFCET",
        "q": "¿A qué término corresponde la siguiente definición: \"Este tipo de válvulas las controlaremos con dos señales, una para el avance y otra para el retroceso\"?",
        "opts": [
            "Acciones sobre válvulas monoestables",
            "Acciones sobre válvulas biestables",
            "Acciones sobre actuadores eléctricos tipo motor",
            "Ninguna es correcta"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "8. Modos de funcionamiento y estructuración en GRAFCET",
        "q": "¿A qué término corresponde la siguiente definición: “será interrumpir el funcionamiento del proceso ya que podría ocurrir cualquier tipo de problema y tener la necesidad de detener los movimientos de la maquina en seco”?",
        "opts": [
            "Modo por pasos",
            "Macroetapas",
            "Parada",
            "Ninguna es correcta"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "8. Modos de funcionamiento y estructuración en GRAFCET",
        "q": "¿A qué término corresponde la siguiente definición: “tienen la característica de que cuando no realizamos ninguna acción sobre ella vuelven a su posición de reposo, por lo que para controlar este tipo de válvulas no será necesaria ninguna condición”?",
        "opts": [
            "Acciones sobre válvulas monoestables",
            "Acciones sobre válvulas biestables",
            "Acciones sobre actuadores eléctricos tipo motor",
            "Ninguna es correcta"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "8. Modos de funcionamiento y estructuración en GRAFCET",
        "q": "¿Cómo podemos encontrar habitualmente una parada?",
        "opts": [
            "Normalmente abierta (NO)",
            "Normalmente cerrada (NC)",
            "Ninguna es correcta",
            "Las dos primeras son correctas"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "8. Modos de funcionamiento y estructuración en GRAFCET",
        "q": "¿Cómo se le llama al GRAFCET que tenemos en la izquierda de la imagen?",
        "opts": [
            "GRAFCET líder",
            "GRAFCET Profesor",
            "GRAFCET Maestro",
            "Ninguna de las anteriores es correcta"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "8. Modos de funcionamiento y estructuración en GRAFCET",
        "q": "¿Qué bloque será el que usemos para la inicialización?",
        "opts": [
            "OB10",
            "OB1000",
            "OB200",
            "OB100"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "8. Modos de funcionamiento y estructuración en GRAFCET",
        "q": "¿Qué quiere decir Gn?",
        "opts": [
            "Número de etapas",
            "Número de transiciones",
            "Número de GRAFCET",
            "Número de funciones"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "8. Modos de funcionamiento y estructuración en GRAFCET",
        "q": "En los procesos automatizados, ¿hay un modo manual?",
        "opts": [
            "Si, siempre",
            "No, nunca",
            "En la minoría de los procesos",
            "Todas son correctas"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "8. Modos de funcionamiento y estructuración en GRAFCET",
        "q": "Las acciones en el modo por pasos será...",
        "opts": [
            "sobre válvulas monoestables",
            "sobre válvulas biestables",
            "sobre actuadores eléctricos tipo motor",
            "Todas son correctas"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "9. Tratamiento de datos y señales analógicas en STEP 7",
        "q": "¿A qué término corresponde la siguiente definición: “la sintaxis será PIWxxx en señales analógicas y en señales digitales PQWxxx, y xxx será el número del canal analógico.”?",
        "opts": [
            "Direccionamiento a zonas de memoria",
            "Direccionamiento a la entrada",
            "Direccionamiento a la salida",
            "Direccionamiento a la periferia"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "9. Tratamiento de datos y señales analógicas en STEP 7",
        "q": "¿A qué término corresponde la siguiente definición: “lo usaremos para enviar datos a la zona de memoria que nosotros deseemos del PLC.”?",
        "opts": [
            "MOVE",
            "Temporizadores",
            "Contadores",
            "Biestables"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "9. Tratamiento de datos y señales analógicas en STEP 7",
        "q": "¿A qué término corresponde la siguiente definición: “Un número en coma flotante escalará el valor para ajustarlo entre un rango máximo y mínimo de valores y ese valor será una variable en formato INT”?",
        "opts": [
            "SCALE_X",
            "NORM_X",
            "MOVE",
            "Ninguna de las anteriores"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "9. Tratamiento de datos y señales analógicas en STEP 7",
        "q": "¿A qué término corresponde la siguiente definición:” Tendremos que saber el tipo de señal que se admite cuando vayamos a trabajar en la conexión de un hardware. Debemos conocer si la tensión o intensidad es unipolar (valores positivos) o bipolar (negativos y positivos)”?",
        "opts": [
            "Tipo de dispositivo",
            "Tipo de función",
            "Tipo de señal",
            "Todas son correctas"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "9. Tratamiento de datos y señales analógicas en STEP 7",
        "q": "¿A qué tipo de datos corresponden los datos numéricos (enteros y reales), caracteres y booleanos?",
        "opts": [
            "Compuestos",
            "Simples",
            "Mixtos",
            "Todas son correctas"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "9. Tratamiento de datos y señales analógicas en STEP 7",
        "q": "¿Cuál es el tamaño del tipo de dato REAL?",
        "opts": [
            "16 bits",
            "8 bits",
            "32 bits",
            "Ninguna de ellas"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "9. Tratamiento de datos y señales analógicas en STEP 7",
        "q": "¿Qué tipos de datos son los que nos ofrece el STEP 7?",
        "opts": [
            "Simples",
            "Compuestos",
            "Mixtos",
            "Las dos primeras son ciertas"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "9. Tratamiento de datos y señales analógicas en STEP 7",
        "q": "¿Se podrán hacer operaciones matemáticas básicas en STEP 7?",
        "opts": [
            "No",
            "Si",
            "Solo se podrá sumar y restar",
            "Solo se podrá multiplicar y dividir"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "9. Tratamiento de datos y señales analógicas en STEP 7",
        "q": "La entrada OUT representará…",
        "opts": [
            "El resultado de la operación",
            "No mostrará nada",
            "Un valor booleano siempre",
            "Ninguna es correcta"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "9. Tratamiento de datos y señales analógicas en STEP 7",
        "q": "La salida del bloque SCALE_X tendrá una salida en formato de…",
        "opts": [
            "Entero",
            "Decimal",
            "Coma flotante",
            "Las dos primeras son correctas"
        ],
        "ans": 0,
        "exp": ""
    },
    { "u": "10. Examen Oficial", "q": "¿A qué número binario corresponde el número en decimal: 11?", "opts": ["1101", "1001", "1011", "1111"], "ans": 2, "exp": "11 en decimal = 8+2+1 = 1011 en binario." },
    { "u": "10. Examen Oficial", "q": "¿A qué número decimal corresponde el número en binario: 1101?", "opts": ["1101", "14", "13", "12"], "ans": 2, "exp": "1101 en binario = 8+4+1 = 13 en decimal." },
    { "u": "10. Examen Oficial", "q": "¿A qué se le suele denominar el \"cerebro\" de un autómata?", "opts": ["A los módulos de E/S", "Al puerto de comunicación", "A la CPU", "A la ROM"], "ans": 2, "exp": "La CPU (Unidad Central de Procesamiento) es el cerebro del autómata: ejecuta el programa y gestiona las entradas y salidas." },
    { "u": "10. Examen Oficial", "q": "¿A qué término corresponde la siguiente definición: \"asignará un valor lógico '1' a una variable. Es similar al SET\"?", "opts": ["Asignación directa", "Asignación de activación", "Asignación de desactivación", "Ninguna de ellas"], "ans": 1, "exp": "La asignación de activación (SET) fuerza una variable a '1' y la mantiene activa aunque desaparezca la condición de activación." },
    { "u": "10. Examen Oficial", "q": "¿A qué término corresponde la siguiente definición: \"constaran de dos partes, representación del GRAFCET principal y una cadena que se ejecutará cuando se llama la macroetapa\"?", "opts": ["Etapas incluyentes", "Megaetapas", "Modo por pasos", "Ninguna de ellas"], "ans": 3, "exp": "La definición corresponde a las macroetapas, sin embargo la opción correcta según el enunciado es 'Ninguna de ellas', ya que la descripción no se ajusta exactamente a ninguno de los términos listados." },
    { "u": "10. Examen Oficial", "q": "¿A qué término corresponde la siguiente definición: \"No se borra ni apaga el sistema en el caso de un fallo técnico\"?", "opts": ["RAM", "ROM", "RUM", "Ninguno de ellos"], "ans": 1, "exp": "La ROM (Read Only Memory) es una memoria no volátil que conserva su contenido aunque se produzca un fallo técnico o se corte la alimentación." },
    { "u": "10. Examen Oficial", "q": "¿A qué término corresponde la siguiente definición: \"Se usará para la detección de una entrada en una etapa\"?", "opts": ["Flanco descendente", "Flanco ascendente", "Acción límite", "Ninguna de ellas"], "ans": 1, "exp": "El flanco ascendente detecta el paso de '0' a '1' de una señal, usándose habitualmente para detectar la activación de una entrada en una etapa GRAFCET." },
    { "u": "10. Examen Oficial", "q": "¿Cómo llama Siemens al lenguaje FBD?", "opts": ["KOP", "FUP", "PLC", "SCL"], "ans": 1, "exp": "Siemens denomina FUP (Funktionsplan) a lo que en la norma IEC se conoce como FBD (Function Block Diagram)." },
    { "u": "10. Examen Oficial", "q": "¿Cómo podemos encontrar habitualmente una parada de emergencia?", "opts": ["Normalmente abierta (NO)", "Normalmente cerrada (NC)", "Ninguna es correcta", "Las dos primeras son correctas"], "ans": 1, "exp": "Las paradas de emergencia se cablean normalmente cerradas (NC) por seguridad: si se rompe el cable o falla el contacto, el sistema se detiene." },
    { "u": "10. Examen Oficial", "q": "En un esquema con dos GRAFCET, ¿cómo se denomina el GRAFCET principal que coordina al resto?", "opts": ["GRAFCET líder", "GRAFCET Profesor", "GRAFCET Maestro", "Ninguna de las anteriores es correcta"], "ans": 2, "exp": "El GRAFCET Maestro es el GRAFCET principal que coordina y gestiona el resto de GRAFCET esclavos del sistema." },
    { "u": "10. Examen Oficial", "q": "¿Cómo se llamará al GRAFCET que contiene el OB1?", "opts": ["Director", "Jefe", "Maestro", "Líder"], "ans": 2, "exp": "El GRAFCET Maestro reside en el OB1 (bloque de organización principal) y coordina la ejecución del resto de bloques GRAFCET." },
    { "u": "10. Examen Oficial", "q": "¿Cuál de los siguientes lenguajes de programación es también conocido como GRAFCET?", "opts": ["SCL", "LD", "SFC", "ST"], "ans": 2, "exp": "SFC (Sequential Function Chart) es el lenguaje definido en la norma IEC 61131-3 que equivale al GRAFCET francés." },
    { "u": "10. Examen Oficial", "q": "¿Cuál es el cable que se usará para conectar nuestro ordenador con un autómata programable?", "opts": ["RJ-10", "RJ-35", "JR-45", "RJ-45"], "ans": 3, "exp": "El conector RJ-45 es el estándar para redes Ethernet y se usa para la comunicación entre el PC y el autómata programable vía PROFINET o similar." },
    { "u": "10. Examen Oficial", "q": "¿Cuál es el tamaño del tipo de dato REAL?", "opts": ["16 bits", "8 bits", "32 bits", "Ninguna de ellas"], "ans": 2, "exp": "El tipo de dato REAL (coma flotante IEEE 754 de precisión simple) ocupa 32 bits (4 bytes)." },
    { "u": "10. Examen Oficial", "q": "¿Cuál es la regla de sintaxis del GRAFCET correcta?", "opts": ["Será de suma importancia que la lectura se realiza de abajo hacia arriba", "Será de suma importancia que la lectura se realiza de arriba hacia abajo", "Ambas son correctas", "Ninguna es correcta"], "ans": 1, "exp": "La lectura del GRAFCET se realiza siempre de arriba hacia abajo, siguiendo la secuencia lógica de las etapas y transiciones." },
    { "u": "10. Examen Oficial", "q": "¿Cuáles de estas zonas NO están en la programación del GRAFCET?", "opts": ["Zona de inicialización", "Zona secuencial", "Zona de acciones", "Zona combinacional"], "ans": 3, "exp": "El GRAFCET se estructura en zona de inicialización, zona secuencial y zona de acciones. La zona combinacional no forma parte de su estructura." },
    { "u": "10. Examen Oficial", "q": "¿Cuántos bits habrá en 1 palabra (word)?", "opts": ["24", "16", "8", "32"], "ans": 1, "exp": "En la nomenclatura de los autómatas Siemens (y en la norma general), 1 palabra (word) equivale a 16 bits (2 bytes)." },
    { "u": "10. Examen Oficial", "q": "¿Cuántos tipos de temporizadores software (IEC) hay?", "opts": ["3", "4", "5", "6"], "ans": 1, "exp": "Los temporizadores IEC en STEP 7 / TIA Portal son 4: TON (retardo conexión), TOF (retardo desconexión), TP (impulso) y TONR (retardo conexión con memoria)." },
    { "u": "10. Examen Oficial", "q": "¿Existe la puerta lógica NXOR?", "opts": ["No", "Solo la XOR", "Sí existe", "Sí existe, pero se escribe XORN"], "ans": 2, "exp": "Sí existe la puerta NXOR (también llamada XNOR), que es la negación de la XOR: su salida es '1' cuando ambas entradas son iguales." },
    { "u": "10. Examen Oficial", "q": "¿Para qué sirve un contador CTD?", "opts": ["Contar", "Descontar", "Las dos anteriores son correctas", "Es un tipo de temporizador"], "ans": 1, "exp": "CTD (Count Down) es un contador descendente: decrementa su valor en cada flanco ascendente de la señal de entrada." },
    { "u": "10. Examen Oficial", "q": "¿Podremos pasar de un sistema hexadecimal a un sistema octal?", "opts": ["Sí, siempre", "No, nunca", "Depende del número en hexadecimal", "De octal a hexadecimal sí, pero de hexadecimal a octal no"], "ans": 0, "exp": "Siempre es posible convertir entre sistemas de numeración: hexadecimal → binario → octal (o cualquier otra base)." },
    { "u": "10. Examen Oficial", "q": "¿Qué bloque será el que usemos para la inicialización en TIA Portal / STEP 7?", "opts": ["OB10", "OB1000", "OB200", "OB100"], "ans": 3, "exp": "El OB100 es el bloque de organización de arranque (STARTUP): se ejecuta una sola vez al iniciar el autómata, antes de que empiece el ciclo del OB1." },
    { "u": "10. Examen Oficial", "q": "¿Qué es un biestable?", "opts": ["Un circuito con una memoria", "Un tipo de dato", "Un actuador", "Ninguna de ellas"], "ans": 0, "exp": "Un biestable es un circuito secuencial con dos estados estables que puede almacenar un bit de información (memoria de 1 bit)." },
    { "u": "10. Examen Oficial", "q": "¿Qué lenguaje de programación es el formado por diagramas de contactos o escalera?", "opts": ["SFC", "FBD", "IL", "LD o KOP"], "ans": 3, "exp": "LD (Ladder Diagram) o KOP (Kontaktplan, nombre Siemens) es el lenguaje basado en diagramas de contactos, que simula los esquemas de relés eléctricos." },
    { "u": "10. Examen Oficial", "q": "¿Qué nombre reciben las herramientas que ayudan a comprender el comportamiento de las puertas lógicas de forma gráfica?", "opts": ["Señales digitales", "Tablas de verdad", "Puertas lógicas", "Circuitos secuenciales"], "ans": 1, "exp": "Las tablas de verdad son herramientas gráficas que muestran la salida de una puerta lógica para todas las combinaciones posibles de sus entradas." },
    { "u": "10. Examen Oficial", "q": "¿Qué serán las variables que asociamos a las etapas en un GRAFCET?", "opts": ["Salidas", "Entradas", "Controladores", "Marcas"], "ans": 3, "exp": "Las etapas del GRAFCET se asocian a variables internas llamadas marcas (bits de memoria), que toman el valor '1' cuando la etapa está activa." },
    { "u": "10. Examen Oficial", "q": "¿Qué tamaño tiene el tipo de dato CHAR?", "opts": ["4 bits", "8 bits", "16 bits", "32 bits"], "ans": 1, "exp": "El tipo CHAR (carácter ASCII) ocupa 8 bits (1 byte), suficiente para representar los 256 caracteres del código ASCII extendido." },
    { "u": "10. Examen Oficial", "q": "En FBD, ¿cómo se denomina la función especial que activa una salida y la mantiene aunque desaparezca la señal de activación, hasta que llega una señal de reset?", "opts": ["Relé de impulsos", "Relé autoenclavador", "Retardo a la conexión", "Retardo a la desconexión"], "ans": 1, "exp": "El relé autoenclavador (SR/RS) activa su salida con una señal SET y la mantiene activa hasta recibir una señal RESET, independientemente de que la entrada original desaparezca." },
    { "u": "10. Examen Oficial", "q": "En FBD, una función cuya salida es '1' si AL MENOS UNA de sus entradas es '1', ¿qué tipo de función es?", "opts": ["NOR", "AND", "OR", "NAND"], "ans": 2, "exp": "La función OR (O lógica) activa su salida cuando al menos una de sus entradas está activa. Es la suma lógica." },
    { "u": "10. Examen Oficial", "q": "En un segmento FBD, una función cuya salida es '1' SOLO cuando TODAS sus entradas son '1', ¿qué tipo de función lógica es?", "opts": ["OR", "NAND", "XOR", "AND"], "ans": 3, "exp": "La función AND (Y lógica) solo activa su salida cuando todas las entradas están a '1'. Es el producto lógico." },
    { "u": "10. Examen Oficial", "q": "¿Qué tipo de temporizadores admiten los autómatas S7-1200?", "opts": ["IEC", "SIMATIC", "Los dos tipos", "Ninguno de ellos"], "ans": 0, "exp": "Los S7-1200 solo admiten temporizadores IEC (norma internacional). Los temporizadores SIMATIC son exclusivos de los S7-300/400." },
    { "u": "10. Examen Oficial", "q": "¿Qué tipos de datos ofrece el STEP 7?", "opts": ["Simples", "Compuestos", "Mixtos", "Las dos primeras son ciertas"], "ans": 3, "exp": "STEP 7 ofrece tipos de datos simples (BOOL, INT, REAL...) y tipos de datos compuestos (ARRAY, STRUCT, STRING...). Ambas categorías son correctas." },
    { "u": "10. Examen Oficial", "q": "¿TIA Portal es capaz de programar todos los modelos de autómatas Siemens?", "opts": ["No, ya que el LOGO! también es un PLC y se programa con el LOGO! SOFT COMFORT", "Sí", "Solo el S7-1200", "Solo el S7-1500"], "ans": 0, "exp": "TIA Portal programa los S7-1200, S7-1500 y otros, pero el LOGO! (micro-PLC de Siemens) se programa con el software específico LOGO! SOFT COMFORT." },
    { "u": "10. Examen Oficial", "q": "El OB de arranque o STARTUP será...", "opts": ["OB1", "OB100", "OB10", "Ninguno de ellos"], "ans": 1, "exp": "El OB100 es el bloque de organización de arranque (STARTUP): se ejecuta una única vez al poner el autómata en RUN, antes de iniciar el ciclo principal del OB1." },
    { "u": "10. Examen Oficial", "q": "GRAFCET se trata de:", "opts": ["Un tipo de memoria técnica", "Un esquema eléctrico", "Un tipo de diagrama", "Ninguna de las respuestas anteriores es correcta"], "ans": 2, "exp": "GRAFCET (Graphe Fonctionnel de Commande Étapes Transitions) es un tipo de diagrama funcional que describe el comportamiento secuencial de un sistema automatizado." },
    { "u": "10. Examen Oficial", "q": "La salida del bloque NORM_X tendrá una salida en formato de...", "opts": ["Entero", "Decimal", "Coma flotante", "Las dos primeras son correctas"], "ans": 2, "exp": "El bloque NORM_X normaliza un valor de entrada a un rango [0.0, 1.0] y lo expresa siempre en formato de coma flotante (REAL)." },
    { "u": "10. Examen Oficial", "q": "Las salidas en un LOGO! están situadas en la parte...", "opts": ["Derecha", "De abajo", "De arriba", "Izquierda"], "ans": 1, "exp": "En el LOGO! SOFT COMFORT, los bloques de función tienen las entradas a la izquierda y las salidas en la parte de abajo del diagrama." },
    { "u": "10. Examen Oficial", "q": "Se trata del bloque principal (main) en TIA Portal / STEP 7...", "opts": ["OB1", "OB100", "OB10", "Ninguno de ellos"], "ans": 0, "exp": "El OB1 es el bloque de organización principal (main): el autómata lo ejecuta cíclicamente de forma continua durante el funcionamiento normal." },
    { "u": "10. Examen Oficial", "q": "TOF quiere decir:", "opts": ["Temporizador a la desconexión", "Temporizador a la conexión", "Generador de impulsos", "Temporizador con memoria"], "ans": 0, "exp": "TOF (Timer Off-Delay) es un temporizador de retardo a la desconexión: mantiene la salida activa durante el tiempo preestablecido después de que la entrada pase a '0'." },
    { "u": "10. Examen Oficial", "q": "Una de las reglas que deben aplicarse para hacer un GRAFCET es...", "opts": ["Hará falta poner una etapa inicial", "Hay que hacer la lectura de arriba hacia abajo", "El GRAFCET maestro tendrá que volver a la etapa de reposo", "Todas las respuestas anteriores son correctas"], "ans": 3, "exp": "Las tres son reglas obligatorias del GRAFCET: debe existir una etapa inicial, la lectura es de arriba a abajo, y el GRAFCET maestro debe volver a la etapa de reposo al finalizar el ciclo." }
];