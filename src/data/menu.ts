export const menuMaster = {
  brand: {
    label: 'Servistream, inicio',
    href: '/',
    logo: '/img/LOGO-SERVISTREAM-NUEVO_black-01.svg',
  },
  links: [
    { label: 'Hosting', submenu: 'hosting' },
    { label: 'Streaming', submenu: 'streaming' },
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contacto', href: '/contacto' },
  ],
  contact: {
    eyebrow: '¿Tienes alguna pregunta?',
    email: 'soporte@servistream.net',
    phoneLabel: 'WhatsApp | 0991220769',
    phoneHref: 'https://walink.co/4f797c',
  },
  submenus: {
    hosting: [
      {
        title: 'Servicios Web',
        featured: true,
        links: [
          { label: 'Hosting', href: '/web-hosting' },
          { label: 'VPS Hosting', href: '/vps-hosting' },
          { label: 'Wordpress', href: '/wordpress' },
          { label: 'Dominios', href: '/dominios' },
        ],
      },
      {
        title: 'Para Agencias',
        links: [
          { label: 'Páginas Web', href: '/paginas-web' },
          { label: 'Migración', href: '/migracion' },
          { label: 'Reseller Hosting', href: '/reseller-hosting' },
          { label: 'Disponibilidad', href: '/disponibilidad' },
        ],
      },
      {
        title: 'Recursos',
        links: [
          { label: 'Documentación', href: '/documentacion' },
          { label: 'Preguntas frecuentes', href: '/preguntas-frecuentes' },
          { label: 'Estado del servicio', href: '/status' },
        ],
      },
    ],
    streaming: [
      {
        title: 'Streaming',
        featured: true,
        links: [
          { label: 'Radio', href: '/radio-streaming' },
          { label: 'Televisión', href: '/tv-streaming' },
          { label: 'Azuracast', href: '/azuracast' },
          { label: 'Reseller', href: '/reseller-radio' },
        ],
      },
      {
        title: 'Más Servicios',
        links: [
          { label: 'SRT Server', href: '/srt-server' },
          { label: 'VDOPanel', href: '/vdopanel' },
          { label: 'CentovaCast', href: '/radio-cetovacast' },
          { label: '', href: '/servicios' },
          { label: '', href: '/servicios' },
        ],
      },
      {
        title: 'Contáctanos',
        links: [
          { label: 'Escríbenos', href: '/contacto' },
          { label: 'Síguenos en Facebook', href: 'https://facebook.com' },
          { label: 'Conecta en LinkedIn', href: 'https://linkedin.com' },
        ],
      },
    ],
  },
} as const;

export type MenuVariant = 'blanco' | 'negro' | 'transparente';
