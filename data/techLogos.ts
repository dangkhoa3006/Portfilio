import { createElement, type ReactNode } from 'react';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiHtml5,
  SiCss3,
  SiGit,
  SiMongodb,
  SiPostgresql,
  SiDocker
} from 'react-icons/si';

export const techLogos: Array<{ node: ReactNode; title?: string; href?: string }> = [
  { node: createElement(SiJavascript), title: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { node: createElement(SiTypescript), title: 'TypeScript', href: 'https://www.typescriptlang.org' },
  { node: createElement(SiReact), title: 'React', href: 'https://react.dev' },
  { node: createElement(SiNextdotjs), title: 'Next.js', href: 'https://nextjs.org' },
  { node: createElement(SiNodedotjs), title: 'Node.js', href: 'https://nodejs.org' },
  { node: createElement(SiPython), title: 'Python', href: 'https://www.python.org' },
  { node: createElement(SiHtml5), title: 'HTML5', href: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { node: createElement(SiCss3), title: 'CSS3', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { node: createElement(SiTailwindcss), title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
  { node: createElement(SiGit), title: 'Git', href: 'https://git-scm.com' },
  { node: createElement(SiMongodb), title: 'MongoDB', href: 'https://www.mongodb.com' },
  { node: createElement(SiPostgresql), title: 'PostgreSQL', href: 'https://www.postgresql.org' },
  { node: createElement(SiDocker), title: 'Docker', href: 'https://www.docker.com' }
];

export default techLogos;


