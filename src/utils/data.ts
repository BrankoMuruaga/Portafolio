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

export const GITHUB_URL = "https://github.com/BrankoMuruaga";
export const GITHUB_REPOSITORIES_URL =
  "https://github.com/BrankoMuruaga?tab=repositories";
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/branko-muruaga-17b332249/";
export const GMAIL = "muruagabranko253@gmail.com";
export const FORMSPREE_URL = "https://formspree.io/f/mqabgkyj";

export const SOCIALS = [
  {
    name: "GitHub",
    url: GITHUB_URL,
    icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    url: LINKEDIN_URL,
    icon: LinkedinIcon,
  },
  {
    name: "Gmail",
    url: `mailto:${GMAIL}`,
    icon: GmailIcon,
  },
];

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

export const HOME_INFO = {
  name: "Branko Muruaga",
  subtitle: "Desarrollador de Software",
  description:
    "Transformando ideas en experiencias digitales interactivas y fluidas con desarrollo <span class='text-[var(--sec)] shiny-sec'>frontend</span> de vanguardia.",
  socials: SOCIALS,
};

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

export const PROJECTS = [
  {
    title: "MoviesForDevs",
    image: "/moviesfordevs.png",
    link: "https://github.com/gothsec/MoviesForDevs",
    preview: "https://movies-for-devs.vercel.app",
    status: "En desarrollo",
  },
  {
    title: "StockIn",
    image: "/stockin.png",
    link: "https://github.com/gothsec/stockin-demo",
    preview: "https://stockin-demo.vercel.app",
    status: "En desarrollo",
  },
  {
    title: "Svgl.app",
    image: "/svgl.png",
    link: "https://github.com/pheralb/svgl",
    preview: "https://svgl.app",
    status: "Colaborador",
  },
  {
    title: "Tron Legacy Web",
    image: "/tron.png",
    link: "https://github.com/Gothsec/Tron-Legacy-web",
    preview: "https://tron-legacy-web.vercel.app/",
    status: "Template (no oficial)",
  },
];
