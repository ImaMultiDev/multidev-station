export interface Library {
  id: string;
  name: string;
  description: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  popularity: number; // 1-5
  documentation: string;
  installation: string[];
}

export interface FrameworkData {
  id: string;
  name: string;
  description: string;
  icon: string;
  difficulty?: string;
  popularity?: number;
  color?: string;
  documentation: string;
  installation: string[];
  libraries: Library[];
  features?: string[];
  useCases?: string[];
}

export const frameworkData: FrameworkData[] = [
  {
    id: "react",
    name: "React",
    description:
      "Una biblioteca de JavaScript para construir interfaces de usuario interactivas y dinámicas.",
    icon: "react",
    color: "from-primary via-secondary to-accent",
    difficulty: "intermediate",
    popularity: 5,
    documentation: "https://react.dev/",
    installation: ["npx create-react-app mi-app", "cd mi-app", "npm start"],
    libraries: [
      {
        id: "shadcn",
        name: "Shadcn UI",
        description:
          "colección de componentes de interfaz de usuario React, con un enfoque en la accesibilidad, la personalización y el control del desarrollador",
        difficulty: "intermediate",
        popularity: 5,

        documentation: "https://ui.shadcn.com/docs/installation/next",
        installation: [
          "npx shadcn@latest init",
          "npx shadcn@latest add button",
          "// Seguir documentación",
        ],
      },
      {
        id: "materialui",
        name: "Material UI (MUI)",
        description: "",
        difficulty: "intermediate",
        popularity: 5,

        documentation: "",
        installation: [],
      },
      {
        id: "mantine",
        name: "Mantine",
        description: "",
        difficulty: "intermediate",
        popularity: 4,

        documentation: "",
        installation: [],
      },
    ],
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
      "Framework de JavaScript de código abierto, construido sobre React, que simplifica la creación de aplicaciones web de alto rendimiento y fáciles de usar. Permite desarrollar tanto sitios web estáticos como aplicaciones web dinámicas con capacidades avanzadas como renderizado del lado del servidor (SSR), generación estática de sitios (SSG) y optimización automática. ",
    icon: "nextjs",
    color: "from-primary via-secondary to-accent",
    difficulty: "intermediate",
    popularity: 5,
    documentation: "https://nextjs.org/docs",
    installation: [
      "npx create-next-app@latest mi-app",
      "cd mi-app",
      "npm run dev",
    ],
    libraries: [
      {
        id: "prisma",
        name: "Prisma",
        description:
          "Prisma es un ORM (Object-Relational Mapping) de próxima generación diseñado para simplificar la interacción con bases de datos en aplicaciones TypeScript y JavaScript",
        difficulty: "intermediate",
        popularity: 5,

        documentation: "https://www.prisma.io/docs/guides/nextjs",
        installation: [
          "npm install prisma tsx --save-dev",
          "npm install @prisma/extension-accelerate @prisma/client",
          "// Seguir la documentación",
        ],
      },
      {
        id: "nextauthjs",
        name: "NextAuth.js",
        description:
          "librería de autenticación de código abierto diseñada para aplicaciones Next.js. Permite a los desarrolladores implementar la autenticación de forma flexible y segura en sus aplicaciones web sin tener que preocuparse por la gestión de la autenticación de usuarios y sesiones.",
        difficulty: "intermediate",
        popularity: 5,

        documentation: "https://next-auth.js.org/getting-started/example",
        installation: ["npm install next-auth", "// Seguir la documentación"],
      },
      {
        id: "reacthookform",
        name: "ReactHookForm",
        description: "",
        difficulty: "intermediate",
        popularity: 4,

        documentation: "",
        installation: [],
      },
      {
        id: "zod",
        name: "Zod",
        description: "",
        difficulty: "intermediate",
        popularity: 5,

        documentation: "",
        installation: [],
      },
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
      "CMS",
      "Aplicaciones full-stack",
      "Landing pages",
    ],
  },
];
