// components/ProjectSlider.tsx
import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { webProjects } from '../constants/webProject';
import ProjectCard from './ProjectCard';

const ProjectSlider: React.FC = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    mode: "snap",
    breakpoints: {
    "(max-width: 639px)": {
      slides: { perView: 1.2, spacing: 10 }, // Mobile
    },
    "(min-width: 640px) and (max-width: 1023px)": {
      slides: { perView: 2.2, spacing: 15 }, // Tablet
    },
    "(min-width: 1024px)": {
      slides: { perView: 3.5, spacing: 20 }, // Desktop
    },
  },
  slides: { perView: 1.2, spacing: 10 }, // Default (e.g., very small devices)
});

  return (
    <div id='projects' className=" bg-[#0A0A23]">
      <h2 className="text-2xl md:text-3xl font-bold text-brand mb-4 text-center pb-8">Projects</h2>

      <div ref={sliderRef} className="keen-slider">
        {webProjects.slice(0, 5).map((project) => (
          <div key={project.id} className="keen-slider__slide">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <a
          href="/projects"
          className="inline-block bg-brand text-black font-medium py-4 px-6 rounded-2xl hover:bg-opacity-90 transition"
        >
          Show More →
        </a>
      </div>
    </div>
  );
};

export default ProjectSlider;
