// ICONOS (Astro components)
import GithubIcon from "../icon/GithubIcon.astro";
import LinkedinIcon from "../icon/LinkedinIcon.astro";
import GmailIcon from "../icon/GmailIcon.astro";
import AstroIcon from "../icon/AstroIcon.astro";
import Tailwindcss from "../icon/tailwindcss.astro";
import Vercel from "../icon/vercel.astro";
import ReactIcon from "../icon/react.astro";
import TypescriptIcon from "../icon/typeScript.astro";
import NextIcon from "../icon/next.astro";
import NodejsIcon from "../icon/nodejs.astro";
import Html5Icon from "../icon/HTML5.astro";
import Css3Icon from "../icon/CSS3.astro";
import JavascriptIcon from "../icon/javaScript.astro";
import GitIcon from "../icon/git.astro";
import MysqlIcon from "../icon/mysql.astro";

// LINKS Y DATOS DE CONTACTO
export const GITHUB_URL = "https://github.com/BrankoMuruaga";
export const GITHUB_REPOSITORIES_URL = `${GITHUB_URL}?tab=repositories`;
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/branko-muruaga-17b332249/";
export const GMAIL = "muruagabranko253@gmail.com";
export const FORMSPREE_URL = "https://formspree.io/f/mqabgkyj";

// REDES SOCIALES
export const SOCIALS = [
  {
    name: "GitHub",
    href: GITHUB_REPOSITORIES_URL,
    label: "GitHub",
    icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    href: LINKEDIN_URL,
    label: "LinkedIn",
    icon: LinkedinIcon,
  },
  {
    name: "Gmail",
    href: `mailto:${GMAIL}`,
    label: "Gmail",
    icon: GmailIcon,
  },
];

// STACK TECNOLÓGICO PRINCIPAL (footer)
export const TECH_STACKS = [
  {
    desc: "Hecho con",
    name: "Astro",
    icon: AstroIcon,
    alt: "Logo de Astro",
  },
  {
    desc: "Estilizado con",
    name: "TailwindCSS",
    icon: Tailwindcss,
    alt: "Logo de TailwindCSS",
  },
  {
    desc: "Desplegado en",
    name: "Vercel",
    icon: Vercel,
    alt: "Logo de Vercel",
  },
];

// DATOS DE LA SECCIÓN HOME
export const HOME_INFO = {
  name: "Branko Muruaga",
  subtitle: "Desarrollador de Software",
  description:
    "Desarrollo <span class='text-[var(--sec)] shiny-sec'>frontend</span> moderno para crear experiencias digitales interactivas, fluidas y a la medida de tus ideas.",
  socials: SOCIALS,
};

// DATOS DE LA SECCIÓN CONTACTO
export const CONTACT_INFO = {
  title: "Hablemos",
  subtitle: "Contacto",
  message:
    "¿Tienes una pregunta o un proyecto en mente? No dudes en ponerte en contacto.",
  locationLabel: "Ubicación:",
  location: "Argentina, Buenos Aires",
  placeholders: {
    name: "Nombre",
    email: "Correo electrónico",
    message: "Mensaje",
    button: "Enviar",
  },
  success: "✅ ¡Gracias por tu mensaje!",
};

// ITEMS DE NAVEGACIÓN PRINCIPAL
export const NAV_ITEMS = [
  {
    label: "Inicio",
    href: "#home",
  },
  {
    label: "Proyectos",
    href: "#projects",
  },
  {
    label: "Contacto",
    href: "#contact",
  },
];

// LISTADO DE TECNOLOGÍAS (logoWall)
export const TECHNOLOGIES = [
  {
    name: "Astro",
    icon: AstroIcon,
  },
  {
    name: "React",
    icon: ReactIcon,
  },
  {
    name: "TypeScript",
    icon: TypescriptIcon,
  },
  {
    name: "TailwindCSS",
    icon: Tailwindcss,
  },
  {
    name: "Next.js",
    icon: NextIcon,
  },
  {
    name: "Node.js",
    icon: NodejsIcon,
  },
  {
    name: "HTML5",
    icon: Html5Icon,
  },
  {
    name: "CSS3",
    icon: Css3Icon,
  },
  {
    name: "JavaScript",
    icon: JavascriptIcon,
  },
  {
    name: "Git",
    icon: GitIcon,
  },
  {
    name: "MySQL",
    icon: MysqlIcon,
  },
];

// PROYECTOS DESTACADOS
// Ahora los proyectos están en src/data/projects.ts
export { PROJECTS } from "../data/projects";
