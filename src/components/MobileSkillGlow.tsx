import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { skills } from '../constants/skills';

const MobileSkillGlow: React.FC = () => {
  const controlsArray = skills.map(() => useAnimation());

  useEffect(() => {
    let current = 0;

    const loopGlow = async () => {
      while (true) {
        // Reset all
        await Promise.all(
          controlsArray.map((ctrl, i) =>
            ctrl.start({
              filter: 'brightness(1)',
              boxShadow: '0 0 0px rgba(0,0,0,0)',
              transition: { duration: 0.2 },
            })
          )
        );

        // Glow current
        await controlsArray[current].start({
          filter: 'brightness(1.4)',
          boxShadow: '0 0 10px rgba(239,156,1,0.8)',
          transition: { duration: 0.4 },
        });

        current = (current + 1) % skills.length;
        await new Promise((res) => setTimeout(res, 300)); // pause between glows
      }
    };

    loopGlow();
  }, [controlsArray]);

  return (
    <div className="grid grid-cols-3 gap-4 sm:hidden justify-items-center">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          animate={controlsArray[index]}
          className="bg-[#1E1E2F] p-4 rounded-full"
        >
          <img
            alt={skill.name}
            src={skill.icon}
            className="w-10 h-10 object-contain"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default MobileSkillGlow;
