import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface TypeNavProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const TypeNav: React.FC<TypeNavProps> = ({ isOpen, toggleMenu }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Animate menu items when menu opens
      gsap.fromTo('.menu-item', {
        y: 50,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out'
      });

      // Prevent body scrolling when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    toggleMenu();

    if (location.pathname === '/') {
      gsap.to(window, {
        duration: 1,
        scrollTo: target,
        ease: 'power3.inOut'
      });
    } else {
      navigate('/');
      // Allow time for navigation before scrolling (if we wanted to implement deep linking)
      setTimeout(() => {
        gsap.to(window, {
          duration: 1,
          scrollTo: target,
          ease: 'power3.inOut'
        });
      }, 100);
    }
  };

  return (
    <>
      <nav className={`fixed w-full z-50 mix-blend-difference transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="text-xl font-black tracking-tighter cursor-pointer hover:opacity-70 transition-opacity">
            SIAM RAHMAN
          </Link>
          <button onClick={toggleMenu} className="uppercase text-sm tracking-widest cursor-pointer hover:opacity-70 transition-opacity">
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>

      {/* Full screen menu */}
      <div className={`fixed inset-0 bg-[#0f0f0f] z-30 flex items-center justify-center transition-transform duration-700 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto px-6">
          <ul className="text-5xl md:text-7xl lg:text-9xl font-black space-y-4">
            <li className="overflow-hidden">
              <a href="#home" className="menu-item block py-2 hover:text-gray-400 transition-colors duration-300 cursor-pointer" onClick={(e) => handleLinkClick(e, '#home')}>
                HOME
              </a>
            </li>
            <li className="overflow-hidden">
              <a href="#about" className="menu-item block py-2 hover:text-gray-400 transition-colors duration-300 cursor-pointer" onClick={(e) => handleLinkClick(e, '#about')}>
                ABOUT
              </a>
            </li>
            <li className="overflow-hidden">
              <a href="#projects" className="menu-item block py-2 hover:text-gray-400 transition-colors duration-300 cursor-pointer" onClick={(e) => handleLinkClick(e, '#projects')}>
                PROJECTS
              </a>
            </li>
            <li className="overflow-hidden">
              <a href="#contact" className="menu-item block py-2 hover:text-gray-400 transition-colors duration-300 cursor-pointer" onClick={(e) => handleLinkClick(e, '#contact')}>
                CONTACT
              </a>
            </li>
          </ul>

          <div className="absolute bottom-10 left-6 right-6 flex justify-between text-sm font-mono text-gray-500">
            <div>© {new Date().getFullYear()}</div>
            <div className="flex space-x-6">
              <a href="https://x.com/siamrofficial76" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
                TWITTER
              </a>
              <a href="https://www.instagram.com/siam._.rahman/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
                INSTAGRAM
              </a>
              <a href="https://www.linkedin.com/in/siam-rahman76" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
                LINKEDIN
              </a>
              <a href="https://github.com/siamr7466" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
                GITHUB
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TypeNav;