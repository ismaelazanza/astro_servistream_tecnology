export type BlogPost = {
  slug: string;
  category: string;
  date: string;
  readingTime: string;
  title: string;
  excerpt: string;
  icon: string;
  tone: 'blue' | 'mint' | 'coral' | 'violet' | 'amber';
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'elegir-hosting-para-crecer', category: 'Hosting', date: 'Guías para empezar', readingTime: '6 min', icon: 'language', tone: 'blue',
    title: 'Cómo elegir un hosting que acompañe el crecimiento de tu sitio',
    excerpt: 'Capacidad, velocidad, soporte y seguridad: los puntos que conviene revisar antes de contratar.',
    intro: 'Un buen hosting no solo mantiene un sitio publicado. Es la base para que tus visitas puedan navegar con rapidez, tu equipo pueda trabajar con tranquilidad y el proyecto tenga espacio para crecer.',
    sections: [
      { heading: 'Empieza por las necesidades reales de tu proyecto', paragraphs: ['Antes de comparar planes, identifica qué tipo de sitio vas a publicar. Un portafolio, una tienda, un sitio institucional o un WordPress con mucho contenido no consumen los mismos recursos.', 'Revisa cuántas visitas recibes, qué aplicaciones utilizas y si esperas campañas o temporadas con más tráfico. Estos datos hacen más fácil escoger una capacidad adecuada.'] },
      { heading: 'La velocidad también depende de la infraestructura', paragraphs: ['El almacenamiento rápido, una configuración optimizada y recursos suficientes reducen el tiempo de respuesta. Esto influye en la experiencia de cada visitante y ayuda a que el equipo administre el sitio sin fricciones.', 'Busca una plataforma que explique con claridad qué incluye: espacio, transferencia, copias de seguridad, certificado SSL y herramientas de administración.'] },
      { heading: 'El soporte es parte del servicio', paragraphs: ['Cuando ocurre una incidencia, necesitas una respuesta comprensible y a tiempo. Elige un proveedor con canales de soporte definidos y con experiencia en la tecnología que usa tu sitio.', 'Un hosting preparado para crecer te permite empezar con lo necesario y ampliar recursos cuando tu proyecto lo requiera.'] },
    ],
  },
  {
    slug: 'como-crear-radio-online', category: 'Radio online', date: 'Streaming de audio', readingTime: '7 min', icon: 'radio', tone: 'mint',
    title: 'Todo lo que necesitas para poner tu radio en internet', excerpt: 'Una guía clara para emitir en vivo, automatizar tu programación y llegar a tu audiencia.',
    intro: 'Crear una radio online combina contenido, una señal estable y una forma sencilla de llegar a los oyentes. No necesitas resolver todo a la vez: una estación puede empezar con una emisión en vivo y crecer con automatización.',
    sections: [
      { heading: 'Define cómo vas a emitir', paragraphs: ['Puedes transmitir en vivo desde tu estudio o programar listas mediante AutoDJ. La primera alternativa es ideal para programas en tiempo real; la segunda mantiene la estación al aire fuera del horario de producción.', 'Elige una calidad de audio acorde a tu audiencia y a la conexión disponible. Una configuración equilibrada entrega una escucha estable en móviles y equipos de escritorio.'] },
      { heading: 'Prepara una identidad que se reconozca', paragraphs: ['Nombre, imagen, separadores y programación dan coherencia a una estación. Organiza estos elementos desde el inicio para que cada emisión mantenga el mismo tono.', 'Un reproductor web y enlaces compatibles con aplicaciones de audio facilitan que nuevos oyentes encuentren la señal.'] },
      { heading: 'Mide y mejora con constancia', paragraphs: ['Las estadísticas de audiencia ayudan a reconocer qué horarios y contenidos conectan mejor. Usa esa información para ajustar tu programación y comunicar los próximos programas.', 'Una radio online se construye emisión a emisión: lo importante es mantener una señal confiable y una experiencia clara para cada oyente.'] },
    ],
  },
  {
    slug: 'canal-tv-streaming-profesional', category: 'Video', date: 'Streaming de TV', readingTime: '6 min', icon: 'live_tv', tone: 'coral',
    title: 'Transmite tu canal de TV con una señal lista para crecer', excerpt: 'Conoce las piezas de una emisión profesional: calidad, distribución y control de contenido.',
    intro: 'Un canal de TV online permite llevar eventos, programas y contenido bajo demanda a una audiencia que consume video desde distintos dispositivos. La clave es preparar una operación simple y consistente.',
    sections: [
      { heading: 'Cuida la calidad desde el origen', paragraphs: ['La experiencia comienza en la cámara, el encoder y la conexión desde la que envías tu señal. Verifica la resolución, el bitrate y la estabilidad antes de cada emisión.', 'Las pruebas previas ayudan a detectar problemas de audio, sincronización o conectividad antes de que llegue tu audiencia.'] },
      { heading: 'Organiza contenido en vivo y programado', paragraphs: ['Combina transmisiones en directo con contenido programado para mantener el canal activo. Un panel de control centralizado permite definir horarios, listas y material de respaldo.', 'La organización también simplifica el trabajo del equipo: todos saben qué está al aire y qué contenido sigue.'] },
      { heading: 'Distribuye donde está tu audiencia', paragraphs: ['Un reproductor integrado en tu web, enlaces para aplicaciones y diferentes calidades de señal amplían las opciones para ver el canal.', 'Acompaña cada emisión con una comunicación clara: horario, tema y enlace directo para verla.'] },
    ],
  },
  {
    slug: 'seguridad-base-sitio-confiable', category: 'Seguridad', date: 'Buenas prácticas', readingTime: '5 min', icon: 'verified_user', tone: 'violet',
    title: 'SSL, copias de seguridad y actualizaciones: la base de un sitio confiable', excerpt: 'Pequeñas decisiones técnicas que ayudan a proteger la información y la continuidad de tu proyecto.',
    intro: 'La seguridad de un sitio se construye con hábitos simples y constantes. Certificados, actualizaciones y respaldos no son tareas aisladas: juntos crean una base para responder mejor ante imprevistos.',
    sections: [
      { heading: 'Mantén las actualizaciones al día', paragraphs: ['El núcleo de tu CMS, los temas y los complementos deben actualizarse con frecuencia. Las nuevas versiones corrigen errores y reducen riesgos conocidos.', 'Antes de realizar cambios importantes, verifica que exista un respaldo reciente y revisa la compatibilidad de los componentes.'] },
      { heading: 'Usa conexiones seguras', paragraphs: ['Un certificado SSL protege la comunicación entre el sitio y las personas que lo visitan. También ayuda a que navegadores y usuarios identifiquen una conexión confiable.', 'Revisa que todas las páginas y formularios carguen mediante HTTPS y evita recursos que mantengan enlaces inseguros.'] },
      { heading: 'Respaldos que realmente puedas recuperar', paragraphs: ['Una copia de seguridad es útil cuando puedes localizarla y restaurarla. Define una frecuencia según la cantidad de cambios que recibe tu sitio.', 'Conserva respaldos fuera de la ubicación principal y revisa periódicamente el procedimiento de restauración.'] },
    ],
  },
  {
    slug: 'nvme-velocidad-sitio-web', category: 'Hosting', date: 'Rendimiento web', readingTime: '4 min', icon: 'speed', tone: 'amber',
    title: 'Por qué los discos NVMe hacen la diferencia en la velocidad', excerpt: 'Entiende cómo el almacenamiento influye en la respuesta de tu sitio y la experiencia de tus visitantes.',
    intro: 'Cuando un sitio carga una página, consulta archivos, bases de datos e imágenes. La rapidez con la que el servidor accede a esos datos forma parte de la experiencia final.',
    sections: [
      { heading: 'Menos espera al acceder a los datos', paragraphs: ['NVMe es una tecnología de almacenamiento diseñada para trabajar con velocidades de lectura y escritura elevadas. En un entorno web, ayuda a responder con mayor agilidad cuando el sitio necesita acceder a información.', 'Su impacto es especialmente relevante en sitios con bases de datos, catálogos, formularios o muchas actualizaciones.'] },
      { heading: 'La velocidad es un conjunto de decisiones', paragraphs: ['El almacenamiento es una pieza importante, pero no trabaja solo. Caché, optimización de imágenes, configuración del servidor y código eficiente también influyen.', 'El objetivo es reducir pasos innecesarios y entregar una experiencia ágil sin perder estabilidad.'] },
    ],
  },
  {
    slug: 'cuando-migrar-sitio-servidor', category: 'Soporte', date: 'ServiStream', readingTime: '5 min', icon: 'swap_horiz', tone: 'blue',
    title: 'Cuándo es el momento de migrar tu sitio a un nuevo servidor', excerpt: 'Señales concretas para decidir una migración ordenada, segura y sin interrupciones innecesarias.',
    intro: 'Migrar no siempre significa que algo esté mal. Muchas veces es el paso natural cuando un proyecto aumenta su tráfico, incorpora nuevas herramientas o necesita un entorno más adecuado.',
    sections: [
      { heading: 'Reconoce las señales de crecimiento', paragraphs: ['Tiempos de carga irregulares, límites frecuentes de recursos y dificultades para actualizar son señales para revisar tu entorno actual.', 'También conviene planificar una migración cuando el sitio incorpora una tienda, un área privada o una campaña importante.'] },
      { heading: 'Prepara una migración ordenada', paragraphs: ['Haz un inventario de archivos, bases de datos, correos y configuraciones especiales. Esto reduce sorpresas y permite validar el resultado después del traslado.', 'Programa el cambio en un horario de menor actividad y define quién validará formularios, enlaces y correos al finalizar.'] },
    ],
  },
];

export const featuredPost = blogPosts[0];
