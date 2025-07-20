import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { webProjects } from '../constants/webProject';
import ProjectCard from './ProjectCard';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const ProjectSlider: React.FC = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    mode: "snap",
    breakpoints: {
      "(max-width: 639px)": {
        slides: { perView: 1.2, spacing: 10 },
      },
      "(min-width: 640px) and (max-width: 1023px)": {
        slides: { perView: 2.2, spacing: 15 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3.5, spacing: 20 },
      },
    },
    slides: { perView: 1.2, spacing: 10 },
  });

  return (
    <div id="projects" className="bg-[#0A0A23] py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-brand mb-8 text-center">Projects</h2>

      <div className="overflow-hidden px-4 relative">
        <div ref={sliderRef} className="keen-slider">
          {webProjects.slice(0, 5).map((project) => (
            <div key={project.id} className="keen-slider__slide">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Slide Buttons */}
        <div className='hidden md:block'>
        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute top-1/2 -translate-y-1/2 left-2 z-10 border border-brand text-black p-2 rounded-full hover:scale-105 transition cursor-pointer"
        >
          <FaArrowLeft className='text-brand'/>
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute top-1/2 -translate-y-1/2 text-brand right-2 z-10 border border-brand text-black p-2 rounded-full hover:scale-105 transition cursor-pointer"
        >
          <FaArrowRight/>
        </button>
          </div>
      </div>

      <div className="text-center mt-6">
        <a
          href="/projects"
          className="inline-block bg-brand text-black font-medium py-3 px-4 rounded-2xl hover:bg-opacity-90 transition"
        >
          Show More →
        </a>
      </div>
    </div>
  );
};

export default ProjectSlider;
