import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Me from "../assets/me.png";

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="relative py-4 lg:py-16 bg-[#0A0A23] text-white overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-24">

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.3, delay: 0.5 }}
          className="relative w-full sm:w-3/4 md:w-[40%] flex justify-center items-center mx-auto"
        >
         {/* Blurred Backgrounds with glow */}
          <div
            className="
              hidden sm:block
              absolute w-72 h-72 sm:w-80 sm:h-80
              bg-yellow-400 rounded-full
              blur-[30px]
              top-20 -right-5 z-0
              opacity-20
              shadow-[0_0_60px_15px_rgba(239,156,1,0.5)]
            "
          ></div>
          <div
            className="
              hidden sm:block
              absolute w-64 h-64 sm:w-72 sm:h-72
              bg-yellow-300 rounded-full
              blur-[30px]
              top-10 -left-10 z-0
              opacity-10
              shadow-[0_0_40px_10px_rgba(239,156,1,0.4)]
            "
          ></div>

          <div
            className="
              relative z-10 rounded-full
              border-2 sm:border-4 border-yellow-500
              w-60 h-60 sm:w-72 sm:h-72
              overflow-hidden shadow-lg
              mt-20"
          >
            <img
              src={Me}
              alt="Wisdom Urangyork"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full md:w-[60%]"
        >
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-brand mb-4 text-center md:text-left">
            About Me
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base text-center md:text-left">
            I’m a passionate Full Stack Software Engineer with a strong foundation in both frontend and backend development.
            My technical toolkit includes React.js, Next.js, TypeScript, Express, MongoDB, Flask, and the core trio of HTML, CSS, and JavaScript.
            <br /><br />
            I specialize in building scalable, user-centric applications and integrating intelligent AI agents into real-world solutions. With certifications in UI/UX Design from Google and Frontend Development from Meta, I blend design thinking with engineering precision to deliver seamless digital experiences.
            <br /><br />
            I also bring DevOps skills to the table, enabling smooth deployment pipelines and infrastructure automation. I thrive in collaborative environments, adapt quickly to new challenges, and take pride in solving complex problems with creative and strategic thinking.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
