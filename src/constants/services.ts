// File: constants/services.ts
import { Code, Server, Settings, PenTool } from 'lucide-react';

interface Service {
  icon: any;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Code,
    title: 'Frontend Engineering',
    description:
      'Crafting responsive, fast, and beautiful web interfaces using modern tools like React, Tailwind, and Next.js. Ensuring seamless user experiences across all devices.',
  },
  {
    icon: Server,
    title: 'Backend Engineering',
    description:
      'Building robust and scalable server-side applications with Node.js, MongoDB, and REST APIs to power secure and efficient data-driven systems.',
  },
  {
    icon: Settings,
    title: 'Dev-Ops',
    description:
      'Automating deployment pipelines, CI/CD, and managing scalable cloud infrastructure platforms like AWS, Vercel, and Docker for maximum performance and uptime.',
  },
  {
    icon: PenTool,
    title: 'UI/UX Design',
    description:
      'Designing intuitive, engaging interfaces and user journeys in Figma—translating complex ideas into elegant, user-friendly digital experiences.',
  },
];
