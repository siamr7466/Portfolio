import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import TypeHero from './components/TypeHero';
import TextProjects from './components/TextProjects';
import TextAbout from './components/TextAbout';
import TextContact from './components/TextContact';
import TypeNav from './components/TypeNav';
export function App() {
  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    // Smooth scrolling setup
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        gsap.to(window, {
          duration: 1,
          scrollTo: targetId,
          ease: 'power3.inOut'
        });
      });
    });
    // Preload animation
    const tl = gsap.timeline();
    tl.to('.preloader', {
      yPercent: -100,
      duration: 0.8,
      ease: 'power3.inOut',
      delay: 0.5
    });
    // Disable right-click to prevent context menu
    document.addEventListener('contextmenu', e => e.preventDefault());
    return () => {
      // Cleanup
      document.removeEventListener('contextmenu', e => e.preventDefault());
    };
  }, []);
  return <div className="typo-portfolio bg-[#0f0f0f] text-white">
      {/* Preloader */}
      <div className="preloader fixed inset-0 z-50 bg-[#0f0f0f] flex items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
          <span className="block overflow-hidden">
            <span className="block transform translate-y-full animate-reveal">
              LOADING
            </span>
          </span>
        </h1>
      </div>
      {/* Navigation */}
      <TypeNav />
      {/* Main content */}
      <main className="relative">
        <TypeHero />
        <TextAbout />
        <TextProjects />
        <TextContact />
      </main>
      {/* Fixed elements */}
      <div className="fixed bottom-8 right-8 text-xs font-mono opacity-30 pointer-events-none">
        &copy; {new Date().getFullYear()} — DESIGN STUDIO
      </div>
    </div>;
}