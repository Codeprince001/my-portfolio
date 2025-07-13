// File: components/Skills.tsx
import React from 'react';
import { skills } from '../constants/skills';
import {motion} from "framer-motion"

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-[#0A0A23] text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-brand mb-6 text-center">Skills</h2>
        <p className='text-gray-400 mb-12 text-base sm:text-lg max-w-2xl mx-auto'>Here’s a snapshot of the technologies and tools I work with. From building interfaces to deploying scalable infrastructure,
           these are the stacks I use to bring ideas to life.
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
         {skills.map((skill, index) => (
            <div key={index} className="group flex flex-col items-center space-y-3">
              <motion.div
                className="bg-[#1E1E2F] p-3 sm:p-4 rounded-full cursor-pointer"
                whileHover={{
                  scale: 1.25,
                  rotate: [0, 5, -5, 5, 0],
                  transition: { duration: 0.5, ease: "easeIn" },
                }}
              >
                <img
                  alt={skill.name}
                  src={skill.icon}
                  className="w-4 h-4 sm:w-12 sm:h-12 filter group-hover:brightness-125 group-hover:drop-shadow-[0_0_5px_rgba(239,156,1,0.8)] transition"
                />
              </motion.div>

             <div
              className="
                opacity-100 scale-100 sm:opacity-0 sm:scale-90 group-hover:opacity-100 group-hover:scale-100
                transition duration-300 ease-in-out
                text-xs px-4 py-1 rounded-full bg-gray-700 group-hover:bg-[#EF9C01] text-white
              "
            >
              {skill.name}
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
