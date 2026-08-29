// Datos reales del portafolio basados en los proyectos de GitHub (https://github.com/antwny)

export interface ProjectGalleryItem {
  url: string;
  title: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  stack: string[];
  url: string;
  liveUrl?: string;
  badge: string;
  category: 'ALL' | 'FULL-STACK' | 'FRONTEND' | 'BACKEND' | 'ENTERPRISE';
  image: string;
  gallery?: ProjectGalleryItem[];
  highlights?: string[];
  featured?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

export const USER = {
  name: 'Antony A. Benites',
  role: 'Desarrollador Full-Stack & Ingeniero de Software',
  tagline:
    'Desarrollo sistemas full-stack de alto rendimiento con Java, Spring Boot, ASP.NET Core, Angular y React, diseñados con rigor arquitectónico, bases de datos relacionales y sensibilidad técnica.',
  email: 'anto***@gmail.com',
  location: 'Perú (GMT-5)',
};

export const MOCK_PROJECTS: Project[] = [
  {
    id: 'maido-spring',
    title: 'MAIDO SPRING',
    subtitle: 'Sistema Web de Pedidos Online & ERP Nikkei',
    description:
      'Sistema web full-stack de alta fidelidad para pedidos online y gestión integral de un restaurante gastronómico Nikkei. Arquitectura desacoplada en dos capas: backend en Spring Boot con DTOs, seguridad y persistencia JPA, junto a frontend reactivo en Angular 19 con carrito persistente y reportes ejecutivos en PDF con JasperReports.',
    stack: ['Angular 19', 'Spring Boot 4.1', 'Java 21', 'MySQL 8.0', 'Spring Security', 'JasperReports', 'REST API', 'Maven'],
    url: 'https://github.com/antwny/maido-spring',
    badge: 'Full-Stack / E-Commerce',
    category: 'FULL-STACK',
    image: 'assets/projects/maido/home.png',
    featured: true,
    highlights: [
      'Clean Layered Architecture (Controllers, DTOs, Entities, Repositories, Services)',
      'Frontend modular en Angular 19 con carrito reactivo persistente en LocalStorage',
      'Dashboard administrativo con KPIs en tiempo real y gestión de estados de pedidos',
      'Motor JasperReports para emisión de reportes contables y facturación en PDF'
    ],
    gallery: [
      { url: 'assets/projects/maido/home.png', title: 'Portada Principal Nikkei', caption: 'Hero interactivo con estética editorial y navegación optimizada.' },
      { url: 'assets/projects/maido/catalog.png', title: 'Catálogo con Filtrado en Vivo', caption: 'Exploración de platillos por categorías, buscador en vivo y badges.' },
      { url: 'assets/projects/maido/cart.png', title: 'Carrito de Compras Reactivo', caption: 'Persistencia de estado en LocalStorage y cálculo en tiempo real.' },
      { url: 'assets/projects/maido/checkout.png', title: 'Checkout & Pasarela de Pago', caption: 'Simulación de pago seguro y generación de recibo digital.' },
      { url: 'assets/projects/maido/mis-pedidos.png', title: 'Timeline de Seguimiento', caption: 'Seguimiento en tiempo real del estado de entrega y reorden rápida.' },
      { url: 'assets/projects/maido/dashboard-admin.png', title: 'Dashboard Administrativo', caption: 'Métricas de ingresos, tickets promedio y pedidos recientes.' },
      { url: 'assets/projects/maido/platillos-admin.png', title: 'Gestión de Platillos (CRUD)', caption: 'Control de inventario, edición de precios y subida de fotografías.' },
      { url: 'assets/projects/maido/reportes-admin.png', title: 'Reportes JasperReports PDF', caption: 'Emisión de reportes de ventas y balances con exportación a PDF.' }
    ]
  },
  {
    id: 'aniquem',
    title: 'PORTAL ANIQUEM',
    subtitle: 'CRM Institucional & Sistema Cloud (ERP/CRM)',
    description:
      'Plataforma centralizada de gestión empresarial y CRM diseñada para optimizar los procesos operativos de la fundación Aniquem. Permite administración de alianzas estratégicas, pipeline comercial, agenda institucional inteligente con Google Meet y control de acceso por roles (RBAC) con sincronización Google Apps Script / Sheets en tiempo real.',
    stack: ['React', 'TypeScript', 'Vite', 'Google Apps Script', 'Google Sheets', 'Tailwind UI', 'Lucide Icons'],
    url: 'https://github.com/antwny/aniquem-portal-mvp',
    liveUrl: 'https://antwny.github.io/aniquem-portal-mvp/',
    badge: 'Plataforma Cloud / CRM',
    category: 'FRONTEND',
    image: 'assets/projects/aniquem/login.png',
    featured: true,
    highlights: [
      'CRM de Alianzas: Seguimiento de empresas, contactos clave, RUC y pipeline por etapas',
      'Calendario Inteligente con detección proactiva de colisiones y automatización Google Meet',
      'Sincronización bidireccional mediante Webhooks de Google Apps Script y base Google Sheets',
      'Gestión de Usuarios (RBAC) con sesiones seguras AuthContext'
    ],
    gallery: [
      { url: 'assets/projects/aniquem/login.png', title: 'Portal de Acceso Corporativo', caption: 'Autenticación con sesiones seguras AuthContext y control de roles RBAC.' },
      { url: 'assets/projects/aniquem/aniquem.png', title: 'Identidad & Plataforma Cloud', caption: 'Integración en tiempo real con Google Sheets y Webhooks de Google Apps Script.' },
      { url: 'assets/projects/aniquem/logo.png', title: 'Emblema Institucional Aniquem', caption: 'Sistema desarrollado a medida para optimizar los procesos operativos de la ONG.' }
    ]
  },
  {
    id: 'style-store',
    title: 'STYLE STORE',
    subtitle: 'Boutique de Moda Contemporánea E-Commerce SPA',
    description:
      'Single Page Application de e-commerce moderna para tienda de ropa. Incluye navegación interactiva, buscador dinámico en tiempo real, catálogo con filtros por categoría, página de detalle de producto con carrusel de fotografías, carrito de compras persistente en LocalStorage y formulario de checkout validado.',
    stack: ['React', 'JavaScript', 'CSS Grid', 'Vanilla CSS', 'Responsive Design', 'LocalStorage'],
    url: 'https://github.com/antwny/Style-Store',
    liveUrl: 'https://antwny.github.io/Style-Store/',
    badge: 'E-Commerce / Frontend SPA',
    category: 'FRONTEND',
    image: 'assets/projects/style-store/homepage.png',
    featured: true,
    highlights: [
      'Experiencia interactiva tipo SPA sin recargas de página',
      'Buscador dinámico en tiempo real y catálogo filtrable',
      'Carrito de compras persistente en LocalStorage con cálculo en vivo',
      'Maquetación 100% responsiva diseñada con Vanilla CSS y CSS Grid'
    ],
    gallery: [
      { url: 'assets/projects/style-store/homepage.png', title: 'Portada Principal & Hero', caption: 'Portada editorial con banners dinámicos y colecciones de temporada.' },
      { url: 'assets/projects/style-store/mujerespage.png', title: 'Catálogo Colección Femenina', caption: 'Grid de productos con tarjetas interactivas, precios dinámicos y badges.' },
      { url: 'assets/projects/style-store/detallepage.png', title: 'Detalle de Producto & Tallas', caption: 'Selector de tallas, control de unidades y carrusel de fotografías.' },
      { url: 'assets/projects/style-store/carritopage.png', title: 'Carrito de Compras Reactivo', caption: 'Gestión en vivo de ítems agregados con cálculo de subtotal y envío.' },
      { url: 'assets/projects/style-store/checkoutpage.png', title: 'Checkout & Datos de Envío', caption: 'Formulario estructurado para recolección de despacho y método de pago.' },
      { url: 'assets/projects/style-store/busquedapage.png', title: 'Motor de Búsqueda Integrado', caption: 'Filtrado de resultados por coincidencia textual directa en el catálogo.' }
    ]
  },
  {
    id: 'ensupunto',
    title: 'EN SU PUNTO',
    subtitle: 'ERP Gastronómico & Sistema Operativo por Roles',
    description:
      'Sistema web empresarial de gestión operativa para restaurantes diseñado bajo una arquitectura desacoplada por 4 roles (Admin, Mesero, Chef y Cajero). Construido con Spring Boot, HTMX 1.9 y Thymeleaf para proporcionar una experiencia ultra-rápida tipo SPA, con mapa interactivo de mesas, monitor de cocina KDS, módulo de cobro con cuentas divididas (Split Bills) y boletas en PDF.',
    stack: ['Java 17', 'Spring Boot 3.x', 'HTMX 1.9', 'Thymeleaf', 'MySQL 8.0', 'JasperReports', 'Lombok'],
    url: 'https://github.com/karlahuarcayacar-cell/ensupunto',
    badge: 'Full-Stack / HTMX & Spring',
    category: 'FULL-STACK',
    image: 'assets/projects/ensupunto/salon-mesas.png',
    featured: true,
    highlights: [
      'Arquitectura desacoplada por roles: Admin, Mesero (Salón), Chef (Cocina) y Cajero',
      'Interactividad reactiva tipo SPA mediante HTMX 1.9 y Thymeleaf Layout Dialect',
      'Módulo de Facturación y Caja con soporte de Cuentas Divididas (Split Bills)',
      'Motor JasperReports para emisión de boletas y reportes de ventas integrados'
    ],
    gallery: [
      { url: 'assets/projects/ensupunto/salon-mesas.png', title: 'Mapa de Mesas Interactivo', caption: 'Representación visual del salón con cambio de estado de mesas en tiempo real.' },
      { url: 'assets/projects/ensupunto/nuevo-pedido.png', title: 'Toma de Pedidos & Comandas', caption: 'Carrito interactivo con notas de preparación por plato y catálogo.' },
      { url: 'assets/projects/ensupunto/monitor-cocina.png', title: 'Monitor de Cocina (Chef)', caption: 'Cola de preparación organizada por orden de llegada (FIFO).' },
      { url: 'assets/projects/ensupunto/caja.png', title: 'Módulo de Caja & Cuentas Divididas', caption: 'Cobro regular o fraccionado entre N comensales con liberación de mesas.' },
      { url: 'assets/projects/ensupunto/admin.png', title: 'Panel de Administración & KPIs', caption: 'Métricas de ingresos, transacciones completadas y CRUDs del negocio.' },
      { url: 'assets/projects/ensupunto/boleta.png', title: 'Emisión de Boleta & PDF', caption: 'Generación de comprobantes y reportes contables vía JasperReports.' },
      { url: 'assets/projects/ensupunto/login.png', title: 'Control de Acceso por Roles', caption: 'Autenticación segura para Meseros, Chefs, Cajeros y Administradores.' }
    ]
  },
  {
    id: 'maido-aspnet',
    title: 'MAIDO ASP.NET',
    subtitle: 'ERP Gastronómico & Plataforma Cloud MVC en Vivo',
    description:
      'Sistema web de gestión gastronómica y pedidos en línea desarrollado sobre ASP.NET Core 10.0 MVC y SQL Server. Implementa arquitectura en capas (Domain, Application, Infrastructure, Presentation), transacciones atómicas con OPENJSON, reportería ejecutiva con QuestPDF y despliegue activo en la nube Somee.',
    stack: ['ASP.NET Core 10.0', 'C# 13', 'SQL Server', 'ADO.NET', 'OPENJSON', 'QuestPDF', 'AJAX', 'Somee Cloud'],
    url: 'https://github.com/karlahuarcayacar-cell/maido-aspnet',
    liveUrl: 'https://maido-aspnet.somee.com/',
    badge: 'ASP.NET MVC / Cloud ERP',
    category: 'ENTERPRISE',
    image: 'assets/projects/maido-aspnet/home.png',
    featured: true,
    highlights: [
      'Clean N-Tier Architecture (Domain, Application, Infrastructure, Presentation)',
      'Acceso a datos ADO.NET con Procedimientos Almacenados y OPENJSON transaccional',
      'Despliegue activo en producción sobre servidor en la nube Somee.com',
      'Generación de reportes ejecutivos de ventas y balance con QuestPDF'
    ],
    gallery: [
      { url: 'assets/projects/maido-aspnet/home.png', title: 'Portada Principal Nikkei MVC', caption: 'Hero gastronómico en Somee Cloud con diseño Nikkei Noir.' },
      { url: 'assets/projects/maido-aspnet/catalog.png', title: 'Catálogo con AJAX & Filtros', caption: 'Exploración de platillos por categorías y búsqueda reactiva en vivo.' },
      { url: 'assets/projects/maido-aspnet/cart.png', title: 'Carrito de Compras AJAX', caption: 'Cálculo en vivo de subtotal, IGV (18%) y total con alertas SweetAlert2.' },
      { url: 'assets/projects/maido-aspnet/pedidos.png', title: 'Gestión de Pedidos & Trazabilidad', caption: 'Control de órdenes, trazabilidad de despachos y cambios de estado.' },
      { url: 'assets/projects/maido-aspnet/dashboard.png', title: 'Dashboard Administrativo (/Admin)', caption: 'Métricas de ventas diarias, pedidos pendientes y tickets promedio.' },
      { url: 'assets/projects/maido-aspnet/usuarios.png', title: 'Administración de Usuarios & Roles', caption: 'Gestión de cuentas de clientes, asignación de roles y privilegios.' },
      { url: 'assets/projects/maido-aspnet/mi-perfil.png', title: 'Módulo de Perfil de Cliente', caption: 'Información de cuenta y actualización de datos de despacho.' },
      { url: 'assets/projects/maido-aspnet/login.png', title: 'Autenticación & Sesiones', caption: 'Control de acceso seguro para clientes y panel administrativo.' }
    ]
  },
  {
    id: 'portafolio-v3',
    title: 'PORTAFOLIO WEB V2',
    subtitle: 'Portafolio Brutalista Editorial de Alta Gama',
    description:
      'Portafolio web personal desarrollado con Angular 19 y TypeScript bajo una estética Brutalista Editorial. Cuenta con tipografía monumental, micro-interacciones fluidas, soporte de temas claro/oscuro y componentes modulares reactivos.',
    stack: ['Angular 19', 'TypeScript', 'CSS Grid', 'BEM', 'Responsive Design'],
    url: 'https://github.com/antwny/portafolio-v3',
    liveUrl: 'https://antwny.github.io/portafolio-v3/',
    badge: 'Frontend / Angular 19',
    category: 'FRONTEND',
    image: 'assets/projects/portafolio-v3/hero-y-navbar.png',
    featured: true,
    highlights: [
      'Diseño editorial de vanguardia con Space Grotesk y IBM Plex Mono',
      'Directivas personalizadas de revelación y animaciones CSS puras',
      'Modo claro y oscuro con persistencia en localStorage',
      'Arquitectura modular basada en componentes y Angular Signals'
    ],
    gallery: [
      { url: 'assets/projects/portafolio-v3/hero-y-navbar.png', title: 'Portada Principal & Hero', caption: 'Diseño monumental brutalista editorial con reloj en vivo y tipografía Space Grotesk.' },
      { url: 'assets/projects/portafolio-v3/sobre-mi.png', title: 'Perfil Profesional & Manifiesto', caption: 'Filosofía de desarrollo, trayectoria técnica y pilares fundamentales.' },
      { url: 'assets/projects/portafolio-v3/proyectos.png', title: 'Galería de Proyectos Seleccionados', caption: 'Índice interactivo de proyectos con layout editorial y badges.' },
      { url: 'assets/projects/portafolio-v3/proyectos-2.png', title: 'Detalle de Proyectos & Especificaciones', caption: 'Desglose técnico de arquitectura, base de datos y stacks empleados.' },
      { url: 'assets/projects/portafolio-v3/archivo.png', title: 'Archivo de Experimentos', caption: 'Registro cronológico de implementaciones, scripts y proyectos de investigación.' },
      { url: 'assets/projects/portafolio-v3/stack.png', title: 'Póster de Tecnologías & Stack', caption: 'Catálogo de herramientas, lenguajes y frameworks con microinteracciones.' },
      { url: 'assets/projects/portafolio-v3/contacto.png', title: 'Contacto & Redes', caption: 'Módulo de inicio de contacto con copiado rápido y enlaces sociales.' }
    ]
  }
];

export const MOCK_EXPERIENCE: Experience[] = [
  {
    company: 'Freelance',
    role: 'Soporte Técnico & Infraestructura',
    period: 'Ene 2021 — Actualidad',
    description:
      'Diagnóstico y solución de incidencias de hardware y software, instalación y configuración de entornos Linux y Windows, configuración de redes y optimización del rendimiento de equipos y servidores.',
    tech: ['Linux', 'Windows', 'Redes', 'Hardware', 'Bash'],
  },
  {
    company: 'Sector Industrial',
    role: 'Operaciones Industriales',
    period: 'Ene 2022 — Mar 2025',
    description:
      'Trabajo en empresas del sector industrial bajo estándares de calidad, seguridad y trabajo en equipo, fortaleciendo disciplina, responsabilidad y mejora continua.',
    tech: ['Calidad', 'Seguridad', 'Trabajo en equipo', 'Procesos'],
  },
];

export const MOCK_CERTIFICATIONS: string[] = [
  'IT Essentials — Cisco Networking Academy',
  'Networking Basics — Cisco Networking Academy',
  'Linux Unhatched — Cisco Networking Academy',
  'Python Essentials — Santander Open Academy',
  'BCP Lab Social 2026 — Banco de Crédito del Perú',
];

export const MOCK_SOCIAL: SocialLink[] = [
  { name: 'GitHub', icon: 'github', url: 'https://github.com/antwny' },
  { name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/antony-benites' },
  { name: 'Correo', icon: 'mail', url: 'mailto:anto***@gmail.com' }
];

export const MOCK_SKILLS: string[] = [
  'Java 21 · Spring Boot',
  'C# · ASP.NET Core',
  'Angular 19',
  'React & TypeScript',
  'HTMX 1.9 & Thymeleaf',
  'MySQL & MariaDB',
  'SQL Server',
  'JasperReports & QuestPDF',
  'APIs REST & DTOs',
  'Linux (Arch / Bash)',
  'Git & GitHub',
  'Python',
  'HTML5 & CSS Grid',
  'IT Essentials & Redes',
];
