import type { Project } from "../types/components";

// PROYECTOS DESTACADOS
// Puedes agregar, quitar o modificar proyectos fácilmente. Usa los campos opcionales para más flexibilidad.
export const PROJECTS: Project[] = [
  {
    title: "MoviesForDevs",
    image: "/moviesfordevs.png",
    link: "https://github.com/gothsec/MoviesForDevs",
    preview: "https://movies-for-devs.vercel.app",
    status: "En desarrollo",
    description: "Encuentra películas para programadores.",
    tags: ["Astro", "React", "TailwindCSS"],
  },
  {
    title: "StockIn",
    image: "/stockin.png",
    link: "https://github.com/gothsec/stockin-demo",
    preview: "https://stockin-demo.vercel.app",
    status: "En desarrollo",
    description: "Gestión de stock simple y moderna.",
    tags: ["Astro", "TypeScript"],
  },
  {
    title: "Svgl.app",
    image: "/svgl.png",
    link: "https://github.com/pheralb/svgl",
    preview: "https://svgl.app",
    status: "Colaborador",
    description: "Editor visual de SVG online.",
    tags: ["Astro", "React"],
  },
  {
    title: "Tron Legacy Web",
    image: "/tron.png",
    link: "https://github.com/Gothsec/Tron-Legacy-web",
    preview: "https://tron-legacy-web.vercel.app/",
    status: "Template (no oficial)",
    description: "Landing inspirada en Tron Legacy.",
    tags: ["Astro", "CSS3"],
  },
];
