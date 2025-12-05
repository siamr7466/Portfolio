import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import TypeHero from './components/TypeHero';
import TextProjects from './components/TextProjects';
import TextAbout from './components/TextAbout';
import TextContact from './components/TextContact';
import TypeNav from './components/TypeNav';

export function App() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const preloaderRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        const next = prev + Math.floor(Math.random() * 10) + 1;
        if (next >= 100) {
          clearInterval(interval);
          return 100;
        }
        return next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (loadingProgress === 100) {
      // Register GSAP plugins
      gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

      // Smooth scrolling setup
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = e.currentTarget as HTMLAnchorElement;
          const targetId = target.getAttribute('href');
          if (targetId) {
            gsap.to(window, {
              duration: 1,
              scrollTo: targetId,
              ease: 'power3.inOut'
            });
          }
        });
      });

      // Preloader exit animation
      const tl = gsap.timeline();

      // Fade out text and bar
      tl.to('.loader-content', {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut'
      })
        // Slide up the background
        .to(preloaderRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: 'power3.inOut'
        });

      // Disable right-click to prevent context menu
      document.addEventListener('contextmenu', e => e.preventDefault());
      return () => {
        // Cleanup
        document.removeEventListener('contextmenu', e => e.preventDefault());
      };
    }
  }, [loadingProgress]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="typo-portfolio bg-[#0f0f0f] text-white">
      {/* Preloader */}
      <div
        ref={preloaderRef}
        className="preloader fixed inset-0 z-[100] bg-[#0f0f0f] flex items-end justify-end p-8 md:p-12"
      >
        <div className="loader-content w-full max-w-xs text-right font-mono font-extralight">
          <div className="text-6xl md:text-8xl mb-4 tracking-tighter" style={{ fontFamily: "'Roboto Mono', monospace", fontWeight: 200 }}>
            {loadingProgress}%
          </div>
          <div className="flex flex-col items-end">
            <div className="text-xs uppercase tracking-[0.2em] mb-2 text-gray-500">
              Loading Experience
            </div>
            <div className="w-full h-[1px] bg-gray-800 relative overflow-hidden">
              <div
                ref={barRef}
                className="absolute top-0 right-0 h-full bg-white transition-all duration-100 ease-out"
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <TypeNav isOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* Main content */}
      <main className="relative">
        <TypeHero />
        <TextAbout />
        <TextProjects />
        <TextContact />
      </main>

      {/* Fixed elements */}
      <div className={`fixed bottom-8 right-8 text-xs font-mono opacity-30 pointer-events-none z-40 hidden md:block transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-30'}`}>
        &copy; 2025 — SIAM RAHMAN
      </div>
    </div>
  );
}