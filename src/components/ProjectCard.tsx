// components/ProjectCard.tsx
import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  repo: string;
  demo: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-secondary rounded-2xl shadow-xl overflow-hidden text-white p-5 max-w-[340px] mx-auto flex flex-col h-full transition hover:scale-[1.015] hover:shadow-2xl duration-300">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />

      <h3 className="text-lg sm:text-xl font-semibold mb-1">{project.title}</h3>
      <p className="text-sm text-gray-400 mb-4 leading-relaxed line-clamp-3">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-700 text-xs px-3 py-1 rounded-full text-white"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto flex justify-between gap-3">
        <a
          href={project.repo}
          target="_blank"
          className="w-full text-center bg-gray-800 hover:bg-gray-700 text-sm py-2 rounded font-medium transition"
        >
          Code
        </a>
        <a
          href={project.demo}
          target="_blank"
          className="w-full text-center bg-brand hover:bg-opacity-90 text-sm py-2 rounded font-medium transition"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
