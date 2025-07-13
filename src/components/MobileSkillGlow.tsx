// File: components/MobileSkillGlow.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../constants/skills';

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.3,
      repeat: Infinity,
    },
  },
};

const itemVariants = {
  initial: { filter: 'brightness(1)', boxShadow: '0 0 0 rgba(0, 0, 0, 0)' },
  animate: {
    filter: 'brightness(1.3)',
    boxShadow: '0 0 10px rgba(239,156,1,0.8)',
    transition: {
      duration: 0.5,
      yoyo: Infinity,
    },
  },
};

const MobileSkillGlow: React.FC = () => {
  return (
    <motion.div
      className="grid grid-cols-3 gap-4 sm:hidden justify-items-center"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="bg-[#1E1E2F] p-3 rounded-full"
        >
          <img
            alt={skill.name}
            src={skill.icon}
            className="w-10 h-10 object-contain"
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default MobileSkillGlow;
