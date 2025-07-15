// components/Footer.tsx
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#14141F] text-white py-10 px-6 sm:px-12 pt-8">
      {/* Floating scroll-to-top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-[#EF9C01] hover:bg-opacity-90 text-white p-3 rounded-full shadow-lg transition z-50"
        aria-label="Scroll to top"
      >
        <FaArrowUp/>
      </button>

      {/* Write-up */}
      <div className="text-center mb-6">
        <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto">
          Thank you for exploring my work! I'm passionate about building meaningful digital experiences.
          Let’s connect and create something amazing together.
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mt-4">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#EF9C01] transition"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#EF9C01] transition"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#EF9C01] transition"
        >
          <FaTwitter size={24} />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
