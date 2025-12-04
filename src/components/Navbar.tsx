import React, { useEffect, useState, useRef } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { gsap } from 'gsap';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);
  const menuItemsRef = useRef(null);
  const logoRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Initial animation for navbar
  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-link');
    // Animate logo
    gsap.from(logoRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    });
    // Animate nav links
    gsap.from(navLinks, {
      y: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      delay: 0.3,
      ease: 'power3.out'
    });
    // Animate navbar background
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
  }, []);
  // Animation for mobile menu
  useEffect(() => {
    if (isOpen) {
      const mobileLinks = document.querySelectorAll('.mobile-nav-link');
      gsap.from(mobileLinks, {
        x: -30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.4,
        ease: 'power3.out'
      });
    }
  }, [isOpen]);
  return <nav ref={navRef} className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a ref={logoRef} href="#" className="text-2xl font-bold text-blue-600 transition-all duration-300 hover:text-blue-800 transform hover:scale-105">
              Portfolio
            </a>
          </div>
          <div ref={menuItemsRef} className="hidden md:flex space-x-8">
            <a href="#home" className="nav-link text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:-translate-y-1 hover:scale-105">
              Home
            </a>
            <a href="#about" className="nav-link text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:-translate-y-1 hover:scale-105">
              About
            </a>
            <a href="#skills" className="nav-link text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:-translate-y-1 hover:scale-105">
              Skills
            </a>
            <a href="#projects" className="nav-link text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:-translate-y-1 hover:scale-105">
              Projects
            </a>
            <a href="#contact" className="nav-link text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:-translate-y-1 hover:scale-105">
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-blue-600 transition-all duration-300 transform hover:rotate-180">
              {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isOpen && <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="mobile-nav-link text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:pl-2" onClick={() => setIsOpen(false)}>
                Home
              </a>
              <a href="#about" className="mobile-nav-link text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:pl-2" onClick={() => setIsOpen(false)}>
                About
              </a>
              <a href="#skills" className="mobile-nav-link text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:pl-2" onClick={() => setIsOpen(false)}>
                Skills
              </a>
              <a href="#projects" className="mobile-nav-link text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:pl-2" onClick={() => setIsOpen(false)}>
                Projects
              </a>
              <a href="#contact" className="mobile-nav-link text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:pl-2" onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;