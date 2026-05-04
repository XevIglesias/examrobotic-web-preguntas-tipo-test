const EXAM_DATA = [
    {
        "u": "1. Introducción a los sistemas electromecánicos, neumáticos e hidráulicos",
        "q": "¿Cómo se llama el sistema automático donde existe una retroalimentación entre el proceso y el equipo de control?",
        "opts": [
            "Bucle cerrado",
            "Bucle abierto",
            "Lógica cableada",
            "Lógica programada"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "1. Introducción a los sistemas electromecánicos, neumáticos e hidráulicos",
        "q": "¿Cuál de los siguientes es uno de los objetivos que persigue la automatización?",
        "opts": [
            "Aumentar el número de operarios en una empresa",
            "Facilitar el proceso de producción.",
            "Eliminar la jerarquía de empresa",
            "Reducir la inversión necesaria para aumentar la producción"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "1. Introducción a los sistemas electromecánicos, neumáticos e hidráulicos",
        "q": "¿Cuál de los siguientes sistemas se considera electromecánico?:",
        "opts": [
            "Una bicicleta estática",
            "Un gato para el coche",
            "Una taladradora",
            "La amortiguación de un coche"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "1. Introducción a los sistemas electromecánicos, neumáticos e hidráulicos",
        "q": "Al autómata programable también se le conoce como:",
        "opts": [
            "CPU",
            "PLC",
            "AutoProg",
            "PID"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "1. Introducción a los sistemas electromecánicos, neumáticos e hidráulicos",
        "q": "En la lógica cableada, las uniones entre elementos se basan en:",
        "opts": [
            "La red eléctrica.",
            "La experiencia y álgebra de Boole.",
            "Un microcontrolador.",
            "Un microordenador"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "1. Introducción a los sistemas electromecánicos, neumáticos e hidráulicos",
        "q": "En los sistemas neumáticos podemos distinguir dos partes o circuitos:",
        "opts": [
            "La toma de aire y la salida de aire",
            "La válvula y el actuador",
            "La lógica programada y la lógica cableada",
            "La unidad de producción y tratamiento de aire y el circuito de utilización"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "1. Introducción a los sistemas electromecánicos, neumáticos e hidráulicos",
        "q": "Indica cuál de las siguientes partes no forman parte de la estructura de un sistema automático",
        "opts": [
            "Cuadro general de baja tensión.",
            "Valla o perímetro de seguridad",
            "Sensores y detectores.",
            "Receptores y actuadores."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "1. Introducción a los sistemas electromecánicos, neumáticos e hidráulicos",
        "q": "Indica que elemento es un sistema hidráulico.",
        "opts": [
            "El freno de un coche",
            "Una bomba de aire para inflar ruedas",
            "Un telar",
            "Unas cadenas de transporte"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "1. Introducción a los sistemas electromecánicos, neumáticos e hidráulicos",
        "q": "Las partes de un sistema hidráulico son:",
        "opts": [
            "El depósito, las tuberías y el actuador.",
            "El depósito, la bomba, las válvulas y el actuador.",
            "El depósito, la purga, el secador y el controlador de velocidad.",
            "El compresor, las válvulas, la bomba y el actuador."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "1. Introducción a los sistemas electromecánicos, neumáticos e hidráulicos",
        "q": "Los sistemas electromecánicos",
        "opts": [
            "Se alimentan con electricidad",
            "Pueden transformar el movimiento lineal en circular",
            "Pueden llegar a ser sistemas complejos y de grandes dimensiones debido a las cadenas cinéticas que lo componen",
            "Todas las respuestas son correctas"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "2. Reconocimiento de dispositivos electromecánicos, neumáticos e hidráulicos",
        "q": "¿Qué puede causar la presencia de impurezas y humedad en el aire comprimido?:",
        "opts": [
            "Desengrase de los actuadores",
            "Oxidación de elementos neumáticos por la presencia de agua.",
            "Corrosión de la tubería.",
            "Todas las afirmaciones son correctas."
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "2. Reconocimiento de dispositivos electromecánicos, neumáticos e hidráulicos",
        "q": "El circuito de fuerza:",
        "opts": [
            "Representa los elementos de control.",
            "Representa la alimentación de los receptores del circuito.",
            "Suele tener una tensión de 24 V.",
            "Ninguna de las anteriores es correcta."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "2. Reconocimiento de dispositivos electromecánicos, neumáticos e hidráulicos",
        "q": "Indica cuál de los siguientes no es un dispositivo de un sistema eléctrico:",
        "opts": [
            "Relé.",
            "Contactor.",
            "Válvula.",
            "Transductor."
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "2. Reconocimiento de dispositivos electromecánicos, neumáticos e hidráulicos",
        "q": "Indica cuál de los siguientes no es un dispositivo de un sistema hidráulico:",
        "opts": [
            "Compresor hidráulico.",
            "Electroválvula hidráulica",
            "Filtro hidráulico.",
            "Cilindro hidráulico."
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "2. Reconocimiento de dispositivos electromecánicos, neumáticos e hidráulicos",
        "q": "Indica cuál de los siguientes no es un dispositivo de un sistema neumático:",
        "opts": [
            "Válvula.",
            "Conmutadores.",
            "Amplificador de presión.",
            "Convertidor de señal neumático-eléctrico."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "2. Reconocimiento de dispositivos electromecánicos, neumáticos e hidráulicos",
        "q": "Indica que tipo de válvulas ofrecen una resistencia al cilindro de impulsión:",
        "opts": [
            "Válvula hidráulica de globo.",
            "Válvula hidráulica de contrabalance.",
            "Válvula hidráulica de compuerta.",
            "Válvula hidráulica de control direccional."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "2. Reconocimiento de dispositivos electromecánicos, neumáticos e hidráulicos",
        "q": "Las bombas de caudal variable:",
        "opts": [
            "Trabajan a mayor presión que las bombas de caudal fijo.",
            "Necesitan cambiar la velocidad de giro para variar el caudal.",
            "Son menos utilizadas que las de caudal fijo.",
            "Se rompen si trabajan con presiones altas."
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "2. Reconocimiento de dispositivos electromecánicos, neumáticos e hidráulicos",
        "q": "Los racores son:",
        "opts": [
            "Elementos de protección.",
            "Elementos neumáticos o hidráulicos de unión.",
            "Elementos eléctricos de unión.",
            "Elementos de cableado."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "2. Reconocimiento de dispositivos electromecánicos, neumáticos e hidráulicos",
        "q": "Los sistemas síncronos:",
        "opts": [
            "Están gobernados por una señal de reloj.",
            "Son sistemas eléctricos.",
            "Son sistemas neumáticos.",
            "Cuentan con un interruptor final de carrera."
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "2. Reconocimiento de dispositivos electromecánicos, neumáticos e hidráulicos",
        "q": "Una válvula 5/2:",
        "opts": [
            "Consta de 5 posiciones y 2 vías.",
            "Consta de 5 llaves y 2 vías.",
            "Consta de 5 vías y 2 posiciones.",
            "Consta de 5 llaves y 2 posiciones."
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "3. Dibujo de croquis y esquemas de sistemas de control eléctrico cableados, neumáticos e hidráulicos",
        "q": "EI GRAFCET es:",
        "opts": [
            "Un tipo de esquema eléctrico.",
            "Es un modelo de representación vectorial.",
            "Es un modelo de representación gráfica de sistemas neumáticos e hidráulicos.",
            "Es el modelo más complejo de representación neumática."
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "3. Dibujo de croquis y esquemas de sistemas de control eléctrico cableados, neumáticos e hidráulicos",
        "q": "En la corriente continua:",
        "opts": [
            "El sentido de flujo de los electrones varía.",
            "Encontramos sistemas trifásicos.",
            "La obtenemos de pilas y baterías.",
            "Distinguimos entre monofásica y trifásica."
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "3. Dibujo de croquis y esquemas de sistemas de control eléctrico cableados, neumáticos e hidráulicos",
        "q": "En la siguiente imagen, el número ! indica:",
        "opts": [
            "Que es un elemento auxiliar.",
            "A que actuador va ligado esa válvula.",
            "Que es un elemento captador de información.",
            "Que es un actuador."
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "3. Dibujo de croquis y esquemas de sistemas de control eléctrico cableados, neumáticos e hidráulicos",
        "q": "Indica a que elemento pertenece la siguiente imagen: !",
        "opts": [
            "Válvula 2/2 pilotada por presión.",
            "Válvula 3/2 pilotada por presión",
            "Válvula 4/2 pilotada por presión.",
            "Válvula 5/2 pilotada por presión."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "3. Dibujo de croquis y esquemas de sistemas de control eléctrico cableados, neumáticos e hidráulicos",
        "q": "Indica a que elemento pertenece la siguiente imagen: !",
        "opts": [
            "Motor eléctrico.",
            "Manómetro.",
            "Metro.",
            "Medidor."
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "3. Dibujo de croquis y esquemas de sistemas de control eléctrico cableados, neumáticos e hidráulicos",
        "q": "Indica a que elemento pertenece la siguiente imagen: !",
        "opts": [
            "Bomba hidráulica de caudal fijo.",
            "Bomba hidráulica de caudal bidireccional.",
            "Bomba neumática de caudal variable.",
            "Bomba hidráulica de caudal variable."
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "3. Dibujo de croquis y esquemas de sistemas de control eléctrico cableados, neumáticos e hidráulicos",
        "q": "Indica a que elemento pertenece la siguiente imagen: !",
        "opts": [
            "Cilindro de simple efecto con retorno por esfuerzos externos.",
            "Cilindro de doble efecto.",
            "Cilindro de simple efecto con carrera por resorte.",
            "Cilindro de doble efecto con carrera por resorte."
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "3. Dibujo de croquis y esquemas de sistemas de control eléctrico cableados, neumáticos e hidráulicos",
        "q": "Indica a que elemento pertenece la siguiente imagen: !",
        "opts": [
            "Motor neumático con un sentido de giro.",
            "Motor neumático con dos sentidos de giro.",
            "Motor hidráulico con un sentido de giro.",
            "Motor hidráulico con dos sentidos de giro."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "3. Dibujo de croquis y esquemas de sistemas de control eléctrico cableados, neumáticos e hidráulicos",
        "q": "La corriente alterna:",
        "opts": [
            "Permite mayor eficiencia en el transporte que la CC.",
            "Puede ser monofásica o trifásica.",
            "Se utiliza en las instalaciones de viviendas en forma de Baja o Muy Baja Tensión.",
            "Todas las anteriores son correctas."
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "3. Dibujo de croquis y esquemas de sistemas de control eléctrico cableados, neumáticos e hidráulicos",
        "q": "Los circuitos de fuerza:",
        "opts": [
            "Representan la alimentación de los receptores en los esquemas eléctricos.",
            "Representan la alimentación de los receptores en los esquemas neumáticos.",
            "Representan la alimentación de los receptores en los esquemas hidráulicos.",
            "Representan el control y mando de los receptores en los esquemas eléctricos."
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "4. Procedimientos para el arranque de motores",
        "q": "¿Qué instrucción marca la relación entre corriente máxima y nominal del motor?:",
        "opts": [
            "UNE-ISO 12450:2014.",
            "No existe ninguna instrucción que lo marque.",
            "ITC-BT-47.",
            "El manual de instrucciones."
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "4. Procedimientos para el arranque de motores",
        "q": "Cuál no es un tipo de motor:",
        "opts": [
            "Motor asimétrico.",
            "Motor síncrono.",
            "Motor asíncrono.",
            "Motor monofásico."
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "4. Procedimientos para el arranque de motores",
        "q": "El arranque mediante resistencias estatóricas se usa en:",
        "opts": [
            "Máquinas de gran inercia.",
            "Máquinas trifásicas",
            "Máquinas de gran potencia.",
            "Máquinas de par elevado."
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "4. Procedimientos para el arranque de motores",
        "q": "El arranque que cuenta con un solo devanado se llama:",
        "opts": [
            "Arranque directo.",
            "Arranque por autotransformador.",
            "Arranque estrella.",
            "Arranque mediante resistencias rotóricas."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "4. Procedimientos para el arranque de motores",
        "q": "El sistema de arranque más económico es:",
        "opts": [
            "El arranque directo",
            "Arranque por resistencias estatóricas.",
            "Arranque mediante resistencias rotóricas.",
            "Arranque seco."
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "4. Procedimientos para el arranque de motores",
        "q": "En el arranque mediante resistencias rotóricas:",
        "opts": [
            "El arranque es barato.",
            "Permite modificar el número de resistencias.",
            "Tarda más de 30 segundos en arrancar.",
            "Es fácil de mantener."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "4. Procedimientos para el arranque de motores",
        "q": "Qué se necesita en el arranque de motores:",
        "opts": [
            "Un par muy bajo.",
            "Un par muy elevado.",
            "Un valor de corriente mayor que el de la corriente umbral.",
            "El mínimo valor de corriente posible."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "4. Procedimientos para el arranque de motores",
        "q": "Solo se puede realizar arranque directo si:",
        "opts": [
            "La potencia de motor es mayor que la de la instalación.",
            "Si el motor no se puede controlar.",
            "Si la instalación aguanta la demanda térmica.",
            "Si se necesita un aumento lento y progresivo de la velocidad del motor."
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "4. Procedimientos para el arranque de motores",
        "q": "Tipo de arranque para motores trifásicos:",
        "opts": [
            "Arranque de conexión en estrella",
            "Arranque con conexión en cuadrado",
            "Arranque en jaula.",
            "Todas las afirmaciones son correctas."
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "4. Procedimientos para el arranque de motores",
        "q": "Una ventaja del arranque en estrella-triangulo:",
        "opts": [
            "Par de arranque muy alto.",
            "Fiabilidad en máquinas que arrancan en vacío.",
            "Gran cantidad de ajustes.",
            "Pocas perturbaciones."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "5. Elementos de protección y medida",
        "q": "Anomalías que pueden hacer que un interruptor se desconecte son:",
        "opts": [
            "Descargas eléctricas a personas.",
            "Sobreintensidades.",
            "Todas son correctas.",
            "Cortocircuito."
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "5. Elementos de protección y medida",
        "q": "El aparato con el que medimos la tensión se llama:",
        "opts": [
            "Contactor.",
            "Fasímetro.",
            "Voltímetro.",
            "Capacímetro."
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "5. Elementos de protección y medida",
        "q": "El lugar donde se instalan todos los dispositivos de protección:",
        "opts": [
            "Cuadro de luces interiores.",
            "Cuadro general de protección y mando.",
            "Caja de protección.",
            "Cabina de control y protección."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "5. Elementos de protección y medida",
        "q": "La norma que define los parámetros que deben cumplir los elementos de protección es:",
        "opts": [
            "ICT-BT-12.",
            "Código ANSI.",
            "UNE-EN-ISO 1450:2018.",
            "La normativa europea de elementos protectores."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "5. Elementos de protección y medida",
        "q": "Las Instrucciones Técnicas Complementarias que tratan los equipos de protección son:",
        "opts": [
            "ITC-BT-1 a la ITC-BT-25.",
            "ITC-BT-21 a la ITC-BT-24.",
            "ITC-BT-30 a la ITC-BT-35.",
            "ITC-BT-1 a la ITC-BT-5."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "5. Elementos de protección y medida",
        "q": "Los relés de protección de tensión:",
        "opts": [
            "Suelen funcionar con corriente monofásica.",
            "Suelen funcionar con corriente trifásica.",
            "Se encuentran siempre separados del resto de interruptores.",
            "No se pueden regular."
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "5. Elementos de protección y medida",
        "q": "No es un dispositivo de protección:",
        "opts": [
            "Interruptor de control de corriente.",
            "Interruptor diferencial.",
            "Interruptor magnetotérmico.",
            "Interruptor de control de potencia."
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "5. Elementos de protección y medida",
        "q": "No es una parte de la instalación de una puesta a tierra:",
        "opts": [
            "La derivación de la línea de corriente.",
            "El electrodo de tierra",
            "El borne principal de puesta a tierra.",
            "La línea principal de tierra."
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "5. Elementos de protección y medida",
        "q": "Para evitar corrientes de fuga:",
        "opts": [
            "Se instalan interruptores anticorrientes.",
            "Se usa la toma a tierra.",
            "Se deja todo el material aislado con varias capas.",
            "Nunca se van a generar corrientes de fuga."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "5. Elementos de protección y medida",
        "q": "Tipos de relés que nos podemos encontrar:",
        "opts": [
            "Relé de inducción",
            "Relé térmico.",
            "Relé electrodinámico.",
            "Todas las afirmaciones son correctas."
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "6. Circuitos combinacionales",
        "q": "¿Con qué circuito operacional obtenemos salidas en binario a través de entradas no codificadas?:",
        "opts": [
            "Codificadores.",
            "Binarizadores.",
            "Multiplexor.",
            "Traductor."
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "6. Circuitos combinacionales",
        "q": "¿Con que circuito podemos comparar dos números binarios?:",
        "opts": [
            "Decodificador.",
            "Observador.",
            "Comparador binario.",
            "Todas las respuestas son correctas."
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "6. Circuitos combinacionales",
        "q": "¿Cuántas entradas podemos obtener de los codificadores?:",
        "opts": [
            "2 elevado al número de salidas",
            "2 veces el número de salidas",
            "El número de salidas más 2",
            "Siempre 4."
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "6. Circuitos combinacionales",
        "q": "¿En qué circuito combinacional entran varios datos y solamente aparece por la salida el que seleccionemos?:",
        "opts": [
            "Selector",
            "Comparador binario.",
            "Multioperador.",
            "Multiplexor."
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "6. Circuitos combinacionales",
        "q": "¿En qué circuito combinacional hacemos la sima binaria de los dos dígitos de entrada?:",
        "opts": [
            "Circuito operacional.",
            "Circuito semisumador.",
            "Circuito matemático.",
            "Circuito sumatorio."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "6. Circuitos combinacionales",
        "q": "¿En qué tipo de circuito combinacional introducimos un número y activamos solo una salida?:",
        "opts": [
            "Multiplexor.",
            "Decodificador.",
            "Selector.",
            "Comparador binario."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "6. Circuitos combinacionales",
        "q": "¿Qué circuito combinacional nos permite coger una información en serie y transformarla a paralelo?:",
        "opts": [
            "Paralelizador.",
            "Demultiplexor.",
            "Comparador combinacional.",
            "Codificador."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "6. Circuitos combinacionales",
        "q": "El circuito integrado SN74LS151N es:",
        "opts": [
            "Un comparador.",
            "Ese circuito integrado no existe.",
            "Un multiplexor.",
            "Un codificador."
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "6. Circuitos combinacionales",
        "q": "Indica cuál de los siguientes no es un dispositivo de un sistema neumático:",
        "opts": [
            "Válvula.",
            "Conmutadores.",
            "Amplificador de presión.",
            "Convertidor de señal neumático-eléctrico."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "6. Circuitos combinacionales",
        "q": "Os circuitos combinacionales están formados por:",
        "opts": [
            "Un conjunto de puertas lógicas.",
            "Muchos sistemas de control.",
            "Son sistemas n.",
            "Cuentan con un interruptor final de carrera."
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "7. Sistemas de numeración y códigos",
        "q": "¿Cómo se le denomina también al sistema binario?",
        "opts": [
            "Sistema en base 2.",
            "Sistema en base 8.",
            "Sistema en base 10.",
            "Sistema en base 16."
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "7. Sistemas de numeración y códigos",
        "q": "¿Cómo se le denomina también al sistema decimal?",
        "opts": [
            "Sistema en base 2.",
            "Sistema en base 8.",
            "Sistema en base 10.",
            "Sistema en base 16."
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "7. Sistemas de numeración y códigos",
        "q": "¿Cómo se le denomina también al sistema hexadecimal?",
        "opts": [
            "Sistema en base 2.",
            "Sistema en base 8.",
            "Sistema en base 10.",
            "Sistema en base 16."
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "7. Sistemas de numeración y códigos",
        "q": "¿Cómo se le denomina también al sistema octal?",
        "opts": [
            "Sistema en base 2.",
            "Sistema en base 8.",
            "Sistema en base 10.",
            "Sistema en base 16."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "7. Sistemas de numeración y códigos",
        "q": "¿Cuál de estas no es una característica del código Gray?",
        "opts": [
            "Las combinaciones binarias adyacentes son las que difieren solamente en un bit.",
            "Las combinaciones de números que se corresponden con números decimales consecutivos son adyacentes.",
            "Es un código cíclico.",
            "Todas son correctas."
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "7. Sistemas de numeración y códigos",
        "q": "¿Cuáles es el código hexadecimal que corresponde con el numero en código decimal 12?",
        "opts": [
            "1D.",
            "C.",
            "C.",
            "3."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "7. Sistemas de numeración y códigos",
        "q": "¿Cuáles es el código Johnson que corresponde con el numero en código decimal 6?",
        "opts": [
            "11110.",
            "00111.",
            "11100.",
            "11111."
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "7. Sistemas de numeración y códigos",
        "q": "¿Cuáles es el código octal que corresponde con el numero en código binario 1000?",
        "opts": [
            "8.",
            "12.",
            "10.",
            "14."
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "7. Sistemas de numeración y códigos",
        "q": "En el código BCD (Binary-Coded Decimal) cada cifra está compuesta por:",
        "opts": [
            "4 bits binarios.",
            "10 bits binarios.",
            "8 bits binarios.",
            "2 bits binarios."
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "7. Sistemas de numeración y códigos",
        "q": "Para pasar de un número decimal a binario:",
        "opts": [
            "hay que ir realizando sucesivas multiplicaciones tradicionales por 2, de forma que el primer digito del nuevo número será un bit.",
            "hay que ir realizando sucesivas divisiones tradicionales entre 2, de forma que el resto de cada división será un bit.",
            "hay que ir realizando sucesivas sumas tradicionales sumándole 2, de forma que el último digito del nuevo número será un bit.",
            "hay que ir realizando sucesivas restas tradicionales restándole 2, de forma que el último digito del nuevo número será un bit."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "8. Autómatas programables",
        "q": "¿Cuál de estas funciones no es propia de un autómata programable?",
        "opts": [
            "Lectura de señales de pulsadores.",
            "Lectura de señales de interruptores de posición.",
            "Lectura de señales de detectores de nivel.",
            "Todas son correctas."
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "8. Autómatas programables",
        "q": "¿Cuál de estos es un grupo para calificar a los autómatas programables?",
        "opts": [
            "Gama baja.",
            "Gama media.",
            "Autómatas multiprocesadores.",
            "Todas son correctas."
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "8. Autómatas programables",
        "q": "¿Dónde se encuentra la memoria en un autómata programable?",
        "opts": [
            "Módulo de entrada.",
            "CPU.",
            "Módulo de salida.",
            "Todas son falsas."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "8. Autómatas programables",
        "q": "En que lenguaje de programación el programa se crea a partir del esquema que resulta al realizar la tabla de Karnaugh y sus correspondientes puertas lógicas.",
        "opts": [
            "FUP.",
            "KOP.",
            "AWL.",
            "Todas son correctas."
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "8. Autómatas programables",
        "q": "La composición interna de un autómata se efectúa de manera:",
        "opts": [
            "Analógica.",
            "Digital.",
            "Ambas.",
            "Todas son falsas."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "8. Autómatas programables",
        "q": "La ventaja del sistema digital frente al analógico es:",
        "opts": [
            "Ofrecer una mayor precisión.",
            "Menos sensibilidad al ruido.",
            "El numero de operaciones que hay que realizar son menores.",
            "Todas son correctas."
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "8. Autómatas programables",
        "q": "Las designaciones de las entradas se realizan mediante la letra:",
        "opts": [
            "E.",
            "I.",
            "A.",
            "A y B son correctas."
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "8. Autómatas programables",
        "q": "Las designaciones de las salidas se realizan mediante la letra:",
        "opts": [
            "E.",
            "Q.",
            "A.",
            "B y C son correctas."
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "8. Autómatas programables",
        "q": "Los autómatas contienen otros elementos como:",
        "opts": [
            "Paneles pulsadores.",
            "Visualizadores de texto.",
            "Paquete SCADA.",
            "Todas son correctas."
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "8. Autómatas programables",
        "q": "Una instrucción en STEP 7 cuenta con una parte que marca la función a realizar llamada…",
        "opts": [
            "receptor",
            "salida",
            "operacional",
            "contactor"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "9. Programación de esquemas cableados",
        "q": "A qué tipo de temporizador corresponde esta imagen",
        "opts": [
            "TOF",
            "TON",
            "TONR.",
            "Ninguno"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "9. Programación de esquemas cableados",
        "q": "Como se denomina a un temporizador que retarda la desconexión tras la desactivación de la señal:",
        "opts": [
            "TOF",
            "TON",
            "TONR.",
            "TONT"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "9. Programación de esquemas cableados",
        "q": "En este esquema unifilar que pasa si activamos el pulsador E0.2:",
        "opts": [
            "Se detiene todo el sistema",
            "Se activa todo el sistema",
            "Se activa el contactor K1 desactivando K2",
            "Se activa el contactor K2 desactivando K1"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "9. Programación de esquemas cableados",
        "q": "En la siguiente imagen qué información nos proporciona el temporizador:",
        "opts": [
            "El temporizador activará la señal tras 10 segundos",
            "El temporizador activará la señal tras 1000 milisegundos",
            "El temporizador desactivará la señal tras 1 segundo",
            "Todas son falsas"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "9. Programación de esquemas cableados",
        "q": "En la siguiente imagen que representa el elemento A0.0.:",
        "opts": [
            "Pulsador NC de paro del sistema",
            "Pulsador NA de marcha del sistema",
            "Salida NC de la Bobina",
            "Contactor y salida del mismo"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "9. Programación de esquemas cableados",
        "q": "En qué tipo de Contador podemos sumar y restar un evento :",
        "opts": [
            "Contador CTU",
            "Contador CTUD",
            "Ambos contadores",
            "Ninguno."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "9. Programación de esquemas cableados",
        "q": "Qué acción realiza el circuito que aparece en pantalla",
        "opts": [
            "Suma un tiempo de activación hasta que se completa y activa la salida",
            "Retrasa la activación de una señal un tiempo determinado",
            "Retrasa la desactivación de una señal un tiempo determinado",
            "Ninguna es verdadera"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "9. Programación de esquemas cableados",
        "q": "Qué formato es el más utilizado a la hora de pasar un esquema clásico al programa de automata:",
        "opts": [
            "FUP",
            "KOP",
            "AWL",
            "PHP"
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "9. Programación de esquemas cableados",
        "q": "Señala la opción correcta con respecto a las marcas a la hora de automatizar:",
        "opts": [
            "Para asignar contactores que no están conectados a elementos de fuerza",
            "En SIMATIC utilizaremos la letra M seguida de 2 números (entrada y salida)",
            "Se utilizan para no saturar al programa.",
            "Todas son verdaderas"
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "9. Programación de esquemas cableados",
        "q": "Si quisiéramos programar un temporizador para que retarde la activación 8 segundos que temporizador utilizaríamos y qué parámetro fijaremos",
        "opts": [
            "T32 800",
            "T36 800",
            "T37 80",
            "T34 80"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "10. Programación con OMRON",
        "q": "¿Cuál de estas no es un área de memoria de los autómatas Omron?",
        "opts": [
            "Relés internos.",
            "Relés expuestos.",
            "Relés auxiliares.",
            "Memoria de datos."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "10. Programación con OMRON",
        "q": "¿Qué modelo de la serie CPM2A tiene 24 entradas?",
        "opts": [
            "CPM2A-20.",
            "CP2A-30.",
            "CPM2A-40.",
            "CPM2A-60."
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "10. Programación con OMRON",
        "q": "¿Qué modelo de la serie CPM2A tiene 24 salidas?",
        "opts": [
            "CPM2A-20.",
            "CP2A-30.",
            "CPM2A-40.",
            "CPM2A-60."
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "10. Programación con OMRON",
        "q": "¿Qué modelo de la serie CxxH tiene 12 entradas?",
        "opts": [
            "C20H",
            "C28H",
            "C40H",
            "C60H"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "10. Programación con OMRON",
        "q": "¿Qué modelo de la serie CxxH tiene 16 salidas?",
        "opts": [
            "C20H",
            "C28H",
            "C40H",
            "C60H"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "10. Programación con OMRON",
        "q": "¿Qué modulo no contiene a la serie CQM1?",
        "opts": [
            "Módulo de entrada y salida analógica.",
            "Módulo de comunicación por red.",
            "Módulo de lazo de control de temperaturas.",
            "Todas son correctas."
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "10. Programación con OMRON",
        "q": "cuando hablamos del paso de 0 a 1 será…",
        "opts": [
            "el flanco positivo.",
            "el flanco negativo.",
            "el flanco neutro.",
            "Todas son correctas."
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "10. Programación con OMRON",
        "q": "cuando hablamos del paso de 1 a 0 será…",
        "opts": [
            "el flanco positivo.",
            "el flanco negativo.",
            "el flanco neutro.",
            "Todas son correctas."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "10. Programación con OMRON",
        "q": "La programación por contactos en Omron se denomina…",
        "opts": [
            "Brackets",
            "Segment",
            "Ladder",
            "Ninguna de las anteriores es correcta"
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "10. Programación con OMRON",
        "q": "Los conectores de los autómatas Omron…",
        "opts": [
            "tendrán 9 pines, el cable que conectaremos al PC será hembra y el del autómata será macho.",
            "tendrán 12 pines, el cable que conectaremos al PC será hembra y el del autómata será macho.",
            "tendrán 9 pines, el cable que conectaremos al PC será macho y el del autómata será hembra.",
            "tendrán 12 pines, el cable que conectaremos al PC será macho y el del autómata será hembra."
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "11. Ejemplos de programas",
        "q": "¿Cuál es el primer paso a la hora de montar el cableado de un autómata?:",
        "opts": [
            "Conectar las entradas.",
            "Conectar las salidas.",
            "Hacer una prueba del programa.",
            "Lubricar la máquina."
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "11. Ejemplos de programas",
        "q": "¿Para qué administramos tensión a las entradas?:",
        "opts": [
            "Para poder probar el dispositivo.",
            "Para evitar riesgos eléctricos.",
            "Para poder electrocutarnos.",
            "No se administra tensión a las entradas."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "11. Ejemplos de programas",
        "q": "El PLC es:",
        "opts": [
            "Un proceso de programación.",
            "Una computadora usada en ingeniería.",
            "Las siglas de un autómata programable.",
            "Ese término no existe."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "11. Ejemplos de programas",
        "q": "El S7-200 es de la marca:",
        "opts": [
            "Amazon.",
            "Google.",
            "SIEMENS.",
            "South Automatic."
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "11. Ejemplos de programas",
        "q": "El S7-200 es un:",
        "opts": [
            "Automata.",
            "PLC.",
            "Elemento de conexión.",
            "Estándar de los autómatas."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "11. Ejemplos de programas",
        "q": "Hemos visto el ejemplo de este proceso automatizado:",
        "opts": [
            "Control de temperatura de un aire acondicionado.",
            "Todas las respuestas son correctas.",
            "Control de velocidad de dos bombas de agua para control de un depósito.",
            "Funcionamiento de la alarma de un reloj analógico."
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "11. Ejemplos de programas",
        "q": "Los relés:",
        "opts": [
            "Aguantan corrientes de 2 A.",
            "No se pueden estropear.",
            "Nunca afectan a otras partes de la instalación.",
            "Se recomienda su uso si los tiempos de respuesta superna los 15 ms."
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "11. Ejemplos de programas",
        "q": "Los relés:",
        "opts": [
            "Se suelen usar entre la salida y el contactor.",
            "Todas las respuestas son correctas.",
            "Pueden controlar tensiones de 220 V en continua o alterna.",
            "Son más económicos que una tarjeta de salida."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "11. Ejemplos de programas",
        "q": "Los tipos de salida que podemos tener:",
        "opts": [
            "Relé.",
            "Transistor.",
            "Tiristor.",
            "Todas las respuestas son correctas."
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "11. Ejemplos de programas",
        "q": "Un final de carrera es un sensor de:",
        "opts": [
            "Contacto.",
            "Luz.",
            "Temperatura.",
            "Humedad."
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "12. Elementos de neumática",
        "q": "¿Con que dos parámetros identificamos a las válvulas distribuidoras?",
        "opts": [
            "Tiempo en activo y tiempo inactivas.",
            "El tipo de accionamiento y las veces que puede accionarse.",
            "Número de conexiones y número de posiciones de conmutación.",
            "Número de entradas y número de salidas."
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "12. Elementos de neumática",
        "q": "¿Qué tipo de cilindros llevan un muelle?:",
        "opts": [
            "Cilindros de doble efecto con amortiguador.",
            "Cilindros de simple efecto.",
            "Cilindros de doble efecto.",
            "Ningún cilindro lleva muelle."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "12. Elementos de neumática",
        "q": "Es un tipo de válvulas en los circuitos neumáticos:",
        "opts": [
            "Válvula opositora.",
            "Válvula sumadora",
            "Válvula de simultaneidad.",
            "Válvula compresora."
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "12. Elementos de neumática",
        "q": "Las tuberías en instalaciones neumáticas suelen ser de:",
        "opts": [
            "Latón.",
            "Acero.",
            "Plastico.",
            "Todas las respuestas son correctas."
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "12. Elementos de neumática",
        "q": "Los tipos de compresión de aire son:",
        "opts": [
            "Volumétrica y turbocompresión.",
            "Neumática e hidráulica.",
            "Eléctrica y magnética.",
            "Motórica y comprebólica."
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "12. Elementos de neumática",
        "q": "No es un elemento principal de las instalaciones neumáticas:",
        "opts": [
            "Separador.",
            "Presionador.",
            "Unidad acondicionadora.",
            "Acumulador."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "12. Elementos de neumática",
        "q": "No es un tipo de accionamiento en las válvulas distribuidoras:",
        "opts": [
            "Accionamiento por voz.",
            "Accionamiento manual.",
            "Accionamiento eléctrico.",
            "Accionamiento neumático."
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "12. Elementos de neumática",
        "q": "No es un tipo de cilindro:",
        "opts": [
            "De simple efecto",
            "Todas las respuestas son correctas.",
            "De doble efecto.",
            "De triple efecto."
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "12. Elementos de neumática",
        "q": "Una unidad acondicionadora no está compuesta por:",
        "opts": [
            "Compresor.",
            "Filtro.",
            "Regulador de presión.",
            "Engrasador."
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "12. Elementos de neumática",
        "q": "Una válvula 4/3:",
        "opts": [
            "Tiene 4 posiciones y 3 conexiones.",
            "Tiene 4 conexiones y 3 posiciones.",
            "No existe este tipo de válvula.",
            "Son las más usadas."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "13. Hidráulica aplicada",
        "q": "¿A qué tipo de energía afecta el rozamiento del fluido con las paredes de la tubería?:",
        "opts": [
            "Todas las respuestas son correctas.",
            "Energía hidráulica.",
            "Energía hidrostática.",
            "Energía hidrodinámica."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "13. Hidráulica aplicada",
        "q": "¿Con que aparato medimos la presión de una instalación hidráulica?:",
        "opts": [
            "Higómetro.",
            "Manómetro.",
            "Balanza.",
            "Termómetro."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "13. Hidráulica aplicada",
        "q": "Con que medida calcularemos la presión en el S.I:",
        "opts": [
            "Pascales.",
            "Bar.",
            "Atmosferas.",
            "Voltios."
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "13. Hidráulica aplicada",
        "q": "No es un elemento indispensable en una instalación hidráulica:",
        "opts": [
            "Alternador.",
            "Depósito de aceite.",
            "Filtro.",
            "Manómetro."
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "13. Hidráulica aplicada",
        "q": "No es un rendimiento que afecte al rendimiento de una bomba:",
        "opts": [
            "Rendimiento mecánico.",
            "Rendimiento eléctrico.",
            "Rendimiento volumétrico.",
            "Rendimiento total."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "13. Hidráulica aplicada",
        "q": "No es un tipo de válvula de una instalación hidráulica:",
        "opts": [
            "Válvula reguladora de presión.",
            "Válvula reguladora de caudal.",
            "Válvula reguladora de intensidad.",
            "Válvula distribuidora."
        ],
        "ans": 2,
        "exp": ""
    },
    {
        "u": "13. Hidráulica aplicada",
        "q": "S.I son las siglas de:",
        "opts": [
            "Sistema Interno.",
            "Sistema Internacional.",
            "Sustancia Intrusa.",
            "Soporte Inclinado."
        ],
        "ans": 1,
        "exp": ""
    },
    {
        "u": "13. Hidráulica aplicada",
        "q": "Las bombas de pistones, según la posición de sus émbolos pueden ser:",
        "opts": [
            "Axiales o radiales",
            "Solo pueden ser axiales",
            "Solo pueden ser radiales",
            "De paletas o engranajes"
        ],
        "ans": 0,
        "exp": ""
    },
    {
        "u": "13. Hidráulica aplicada",
        "q": "Tipo de energía que tiene un fluido:",
        "opts": [
            "Energía hidrostática.",
            "Energía hidráulica.",
            "Energía hidrodinámica.",
            "Todas las respuestas son correctas."
        ],
        "ans": 3,
        "exp": ""
    },
    {
        "u": "13. Hidráulica aplicada",
        "q": "Una de las características más importantes en una bomba hidráulica es:",
        "opts": [
            "La presión que da.",
            "El número de revoluciones.",
            "Todas las respuestas son correctas.",
            "El caudal."
        ],
        "ans": 2,
        "exp": ""
    }
];