// File: components/Hero.tsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Download } from 'lucide-react';
import HeroIllustration from "../assets/hero-illustration.png";
import LinkedinIcon from "../assets/linkedin.svg";
import XIcon from "../assets/x.svg";
import GithubIcon from "../assets/github.svg";
import GridBackground from "../components/GridBackground"
import Resume from "../assets/Wisdom-Matthew-Urangyork-Software-Engineering.pdf"

const Hero: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="home"
      className="relative w-full md:pt-48 pt-40 bg-[#0A0A23] text-white overflow-hidden"
    >
      <div className='hidden lg:block'>
        <GridBackground/>
      </div>
      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8"
      >
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <p className="text-sm md:text-2xl text-gray-300 mb-2">Hello I’m wisdom urangyork</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white mb-4">
            FULLSTACK SOFTWARE & <br /> DEVOPS ENGINEER
          </h1>
          <p className="text-gray-400 mb-6 max-w-md md:max-w-[95%] md:text-[18px]">
            I build robust, scalable, and user-centered web applications that bring ideas to life.
            With a passion for clean code and seamless design, I specialize in crafting fullstack
            experiences that not only work but feel right.
          </p>

          {/* Resume and Socials */}
          <div className="mb-6 flex flex-col items-start gap-4">
            <a
              href={Resume}
              className="bg-brand text-black px-8 py-4 rounded hover:bg-yellow-400 transition text-sm font-semibold flex items-center"
            >
              Resume <span className="inline-block ml-2"><Download size={16} /></span>
            </a>

            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/in/wisdom-urangyork-bb4818269/" target="_blank" rel="noreferrer"
                className="p-1 bg-white/10 rounded-full hover:bg-brand transition duration-300">
                <img src={LinkedinIcon} alt="LinkedIn" className="w-10 h-10" />
              </a>
              <a href="https://github.com/Codeprince001" target="_blank" rel="noreferrer"
                className="p-1 bg-white/10 rounded-full hover:bg-brand transition duration-300">
                <img src={GithubIcon} alt="GitHub" className="w-10 h-10" />
              </a>
              <a href="https://twitter.com/Kingswisdom001" target="_blank" rel="noreferrer"
                className="p-1 bg-white/10 rounded-full hover:bg-brand transition duration-300">
                <img src={XIcon} alt="X" className="w-10 h-10 rounded-full" />
              </a>
           
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full flex justify-center"
        >
          <div className='hidden md:block'>
            <img
              src={HeroIllustration}
              alt="Software Engineering Illustration"
              className="w-[100%] md:max-w-md object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;