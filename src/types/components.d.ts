export interface Project {
  title: string;
  image: string;
  link: string;
  preview?: string;
  status?: string;
  description?: string;
  tags?: string[];
}
// Tipos y interfaces extraídos de los componentes de la carpeta components

export interface Tech {
  desc: string;
  name: string;
  icon: any;
  alt: string;
}

export interface SocialLink {
  href: string;
  icon: any; // Componente React/Astro
  label: string;
}
