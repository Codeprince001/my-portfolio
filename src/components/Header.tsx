import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from "../assets/brand-logo.png";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 50);

      if (window.innerWidth >= 768) {
        // Hide header if past hero section (e.g., 600px) and scrolling down
        if (currentY > 600 && currentY > lastScrollY) {
          setHideHeader(true);
        } else {
          setHideHeader(false);
        }
      }

      lastScrollY = currentY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`
        w-full fixed top-0 left-0 z-50 transition-all duration-300
        ${hideHeader ? 'translate-y-[-100%]' : 'translate-y-0'}
      `}
    >
      <div className={`max-w-7xl mx-auto px-4 py-4 bg-brand m-4 rounded-3xl flex items-center justify-between transition-all duration-300 ${isScrolled ? 'bg-brand/60 backdrop-blur-md shadow-md' : ''}`}>
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={Logo} alt="Logo" width={54} className="block" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-center">
          <nav className="flex space-x-8 text-white text-xl font-medium">
            <a href="#home" className="hover:text-black transition">Home</a>
            <a href="#about" className="hover:text-black transition">About Me</a>
            <a href="#services" className="hover:text-black transition">Services</a>
            <a href="#projects" className="hover:text-black transition">Projects</a>
            <a href="#contact" className="hover:text-black transition">Contact</a>
          </nav>
        </div>

        {/* Contact Button */}
        <div className="hidden md:flex">
          <a
            href="#contact"
            className="ml-4 bg-black text-white px-5 py-4 rounded-2xl hover:bg-[#3d2121] transition text-sm font-semibold"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A0A23] px-4 pb-4 space-y-3">
          <a href="#home" className="block text-white hover:text-yellow-400">Home</a>
          <a href="#about" className="block text-white hover:text-yellow-400">About Me</a>
          <a href="#services" className="block text-white hover:text-yellow-400">Services</a>
          <a href="#projects" className="block text-white hover:text-yellow-400">Projects</a>
          <a href="#contact" className="block text-white hover:text-yellow-400">Contact</a>
          <a
            href="#contact"
            className="inline-block bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 transition text-sm font-semibold"
          >
            Contact Me
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
