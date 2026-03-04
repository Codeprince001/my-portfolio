// File: constants/services.ts
import { Code, Server, Settings, Brain } from 'lucide-react';

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
      'Building robust and scalable server-side applications with Node.js, Python, MongoDB, Postgres and REST APIs to power secure and efficient data-driven systems.',
  },
  {
    icon: Settings,
    title: 'Cloud & Dev-Ops',
    description:
      'Automating deployment pipelines, CI/CD, and managing scalable cloud infrastructure platforms like AWS, VPS and Docker and Kubernetes for maximum performance and uptime.',
  },
  {
    icon: Brain,
    title: 'AI/LLM',
    description:
      'Developing intelligent solutions with AI and Large Language Models, integrating cutting-edge machine learning capabilities to create smart, adaptive applications.',
  },
];
