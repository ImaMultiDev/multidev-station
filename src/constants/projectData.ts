export interface Technology {
  id: string;
  name: string;
  description: string;
  icon: string;
  category:
    | "language"
    | "framework"
    | "library"
    | "tool"
    | "database"
    | "platform";
  difficulty: "beginner" | "intermediate" | "advanced";
  popularity: number; // 1-5
  documentation: string;
  installation: string[];
  features: string[];
  useCases: string[];
}

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  technologies: Technology[];
  roadmap: {
    title: string;
    description: string;
    items: string[];
  }[];
  resources: {
    title: string;
    type: "documentation" | "tutorial" | "course" | "tool" | "template";
    url: string;
    description: string;
    free: boolean;
  }[];
}

export const projectsData: ProjectData[] = [
  {
    id: "web",
    title: "Aplicación Web",
    description: "Desarrollo de aplicaciones web modernas y responsive",
    icon: "web",
    color: "from-primary via-secondary to-accent",
    technologies: [
      {
        id: "react",
        name: "React",
        description:
          "Una biblioteca de JavaScript para construir interfaces de usuario interactivas y dinámicas.",
        icon: "react",
        category: "framework",
        difficulty: "intermediate",
        popularity: 5,
        documentation: "https://react.dev/",
        installation: ["npx create-react-app mi-app", "cd mi-app", "npm start"],
        features: [
          "Componentes reutilizables",
          "Virtual DOM para rendimiento optimizado",
          "Hooks para lógica de estado",
          "Gran ecosistema y comunidad",
          "React Router para navegación",
        ],
        useCases: [
          "SPAs (Single Page Applications)",
          "Dashboards interactivos",
          "E-commerce",
          "Redes sociales",
          "Aplicaciones de productividad",
        ],
      },
      {
        id: "nextjs",
        name: "Next.js",
        description:
          "Framework de React con renderizado del lado del servidor y generación de sitios estáticos.",
        icon: "nextjs",
        category: "framework",
        difficulty: "intermediate",
        popularity: 5,
        documentation: "https://nextjs.org/docs",
        installation: [
          "npx create-next-app@latest mi-app",
          "cd mi-app",
          "npm run dev",
        ],
        features: [
          "Renderizado del lado del servidor (SSR)",
          "Generación de sitios estáticos (SSG)",
          "API Routes integradas",
          "Optimización automática de imágenes",
          "File-based routing",
        ],
        useCases: [
          "Sitios web corporativos",
          "E-commerce de alto rendimiento",
          "Blogs y CMS",
          "Aplicaciones full-stack",
          "Landing pages optimizadas para SEO",
        ],
      },
      {
        id: "vue",
        name: "Vue.js",
        description:
          "Framework progresivo de JavaScript para construir interfaces de usuario.",
        icon: "vue",
        category: "framework",
        difficulty: "beginner",
        popularity: 4,
        documentation: "https://vuejs.org/",
        installation: [
          "npm create vue@latest mi-proyecto",
          "cd mi-proyecto",
          "npm install",
          "npm run dev",
        ],
        features: [
          "Curva de aprendizaje suave",
          "Composition API flexible",
          "Reactividad integrada",
          "Excelente documentación",
          "Ecosistema oficial (Router, Store)",
        ],
        useCases: [
          "Aplicaciones de mediana complejidad",
          "Prototipos rápidos",
          "Interfaces administrativas",
          "Aplicaciones progresivas (PWA)",
          "Integración en proyectos existentes",
        ],
      },
      {
        id: "angular",
        name: "Angular",
        description:
          "Plataforma y framework para construir aplicaciones web de una sola página usando TypeScript.",
        icon: "angular",
        category: "framework",
        difficulty: "advanced",
        popularity: 4,
        documentation: "https://angular.io/docs",
        installation: [
          "npm install -g @angular/cli",
          "ng new mi-app",
          "cd mi-app",
          "ng serve",
        ],
        features: [
          "Framework completo y opinionado",
          "TypeScript por defecto",
          "Dependency Injection",
          "CLI potente",
          "Arquitectura basada en componentes",
        ],
        useCases: [
          "Aplicaciones empresariales complejas",
          "Sistemas de gestión",
          "Aplicaciones bancarias",
          "Portales corporativos",
          "Aplicaciones de gran escala",
        ],
      },
    ],
    roadmap: [
      {
        title: "Fundamentos",
        description: "Conceptos básicos para comenzar",
        items: [
          "HTML5 semántico y accesibilidad",
          "CSS3 moderno (Flexbox, Grid, Variables)",
          "JavaScript ES6+ (Arrow functions, Destructuring, Modules)",
          "Responsive Design y Mobile First",
          "Git y control de versiones",
        ],
      },
      {
        title: "Framework Frontend",
        description: "Domina un framework principal",
        items: [
          "Elegir React, Vue o Angular",
          "Componentes y props/data binding",
          "Estado y gestión de eventos",
          "Routing y navegación",
          "Hooks/Composition API/Services",
        ],
      },
      {
        title: "Herramientas de Desarrollo",
        description: "Optimiza tu flujo de trabajo",
        items: [
          "Build tools (Vite, Webpack)",
          "Package managers (npm, yarn, pnpm)",
          "CSS frameworks (Tailwind, Bootstrap)",
          "Testing (Jest, Cypress, Testing Library)",
          "Linting y formatting (ESLint, Prettier)",
        ],
      },
      {
        title: "Temas Avanzados",
        description: "Mejora el rendimiento y la experiencia",
        items: [
          "Performance optimization",
          "Progressive Web Apps (PWA)",
          "Server-Side Rendering (SSR)",
          "Micro frontends",
          "Web Components",
        ],
      },
    ],
    resources: [
      {
        title: "MDN Web Docs",
        type: "documentation",
        url: "https://developer.mozilla.org/",
        description: "Documentación completa de tecnologías web",
        free: true,
      },
      {
        title: "Frontend Masters",
        type: "course",
        url: "https://frontendmasters.com/",
        description: "Cursos avanzados de desarrollo frontend",
        free: false,
      },
      {
        title: "Create React App",
        type: "template",
        url: "https://create-react-app.dev/",
        description: "Boilerplate oficial para proyectos React",
        free: true,
      },
      {
        title: "Vue.js Devtools",
        type: "tool",
        url: "https://devtools.vuejs.org/",
        description: "Extensión de navegador para debugging Vue",
        free: true,
      },
    ],
  },
  {
    id: "backend",
    title: "Backend/API REST",
    description: "Desarrollo de APIs y servicios backend robustos",
    icon: "api",
    color: "from-secondary via-accent to-primary",
    technologies: [
      {
        id: "nodejs",
        name: "Node.js",
        description:
          "Entorno de ejecución de JavaScript del lado del servidor basado en V8.",
        icon: "nodejs",
        category: "platform",
        difficulty: "intermediate",
        popularity: 5,
        documentation: "https://nodejs.org/docs/",
        installation: [
          "Descargar desde nodejs.org",
          "npm init -y",
          "npm install express",
          "Crear servidor básico",
        ],
        features: [
          "Event-driven y non-blocking I/O",
          "NPM con millones de paquetes",
          "JavaScript en el backend",
          "Excelente para APIs REST",
          "Microservicios y aplicaciones real-time",
        ],
        useCases: [
          "APIs REST y GraphQL",
          "Microservicios",
          "Aplicaciones real-time (chat, gaming)",
          "Herramientas de desarrollo",
          "Servicios de streaming",
        ],
      },
      {
        id: "express",
        name: "Express.js",
        description: "Framework web minimalista y flexible para Node.js.",
        icon: "express",
        category: "framework",
        difficulty: "beginner",
        popularity: 5,
        documentation: "https://expressjs.com/",
        installation: [
          "npm install express",
          "const express = require('express')",
          "const app = express()",
          "app.listen(3000)",
        ],
        features: [
          "Minimalista y no opinionado",
          "Middleware system potente",
          "Routing robusto",
          "Gran ecosistema",
          "Perfecto para APIs REST",
        ],
        useCases: [
          "APIs REST simples y complejas",
          "Aplicaciones web tradicionales",
          "Proxy servers",
          "Middleware personalizado",
          "Prototipado rápido",
        ],
      },
      {
        id: "python",
        name: "Python",
        description:
          "Lenguaje de programación de alto nivel, interpretado y de propósito general.",
        icon: "python",
        category: "language",
        difficulty: "beginner",
        popularity: 5,
        documentation: "https://docs.python.org/",
        installation: [
          "Descargar desde python.org",
          "pip install flask/django",
          "python -m venv venv",
          "source venv/bin/activate",
        ],
        features: [
          "Sintaxis clara y legible",
          "Ecosistema rico en bibliotecas",
          "Excelente para data science",
          "Frameworks web maduros",
          "Comunidad activa y grande",
        ],
        useCases: [
          "APIs y servicios web",
          "Data science y ML",
          "Automatización y scripting",
          "Aplicaciones científicas",
          "Desarrollo rápido de prototipos",
        ],
      },
    ],
    roadmap: [
      {
        title: "Fundamentos de Backend",
        description: "Conceptos esenciales del desarrollo backend",
        items: [
          "HTTP y protocolos de comunicación",
          "APIs REST y diseño de endpoints",
          "Bases de datos relacionales y NoSQL",
          "Autenticación y autorización",
          "Seguridad web básica",
        ],
      },
      {
        title: "Lenguaje y Framework",
        description: "Domina tu stack principal",
        items: [
          "Node.js/Python/Java/C# - elige uno",
          "Framework web (Express, Django, Spring)",
          "ORM/ODM para bases de datos",
          "Validation y error handling",
          "Testing unitario e integración",
        ],
      },
      {
        title: "Bases de Datos",
        description: "Gestión de datos eficiente",
        items: [
          "SQL y diseño de esquemas",
          "PostgreSQL/MySQL",
          "MongoDB/Redis (NoSQL)",
          "Migrations y seeds",
          "Query optimization",
        ],
      },
      {
        title: "DevOps y Despliegue",
        description: "Lleva tu aplicación a producción",
        items: [
          "Docker y containerización",
          "CI/CD pipelines",
          "Cloud deployment (AWS, GCP, Azure)",
          "Monitoring y logging",
          "Load balancing y escalabilidad",
        ],
      },
    ],
    resources: [
      {
        title: "Node.js Best Practices",
        type: "documentation",
        url: "https://github.com/goldbergyoni/nodebestpractices",
        description: "Guía completa de mejores prácticas para Node.js",
        free: true,
      },
      {
        title: "Postman",
        type: "tool",
        url: "https://www.postman.com/",
        description: "Herramienta para testing de APIs",
        free: true,
      },
      {
        title: "Express.js Template",
        type: "template",
        url: "https://github.com/expressjs/generator",
        description: "Generador de aplicaciones Express",
        free: true,
      },
    ],
  },
  // Puedes continuar con los demás tipos de proyecto...
];
