// File: components/Services.tsx
import React from 'react';
import { motion, easeOut } from 'framer-motion';
import { services } from '../constants/services';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut} },
};

const Services: React.FC = () => (
  <section id="services" className="py-20 bg-[#0A0A23] text-white">
    <div className="max-w-[90rem] mx-auto px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-brand mb-4">Services</h2>
      <p className="text-gray-400 mb-12 text-base sm:text-lg max-w-2xl mx-auto">
        Here’s how I turn ideas into clean, scalable, and impactful digital solutions.
      </p>

      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {services.map(({ icon: Icon, title, description }, index) => (
          <motion.div
            key={index}
            className="bg-[#141432] cursor-pointer rounded-2xl p-8 shadow-md border border-transparent hover:border-yellow-500 hover:shadow-yellow-500/10 transition duration-300 transform hover:-translate-y-2"
            variants={cardVariants}
          >
            <div className="text-brand mb-6 flex justify-center">
              <Icon size={48} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Services;
