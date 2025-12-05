import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const TypeHero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    // Fallback animation since SplitText is a premium plugin and might not be available
    // In a real production environment with Club GreenSock, we would import it properly

    const tl = gsap.timeline();

    tl.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: 'power4.out',
      delay: 0.5
    });

    tl.from(subtitleRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.7');

    tl.from(scrollIndicatorRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.5');

    // Floating animation for scroll indicator
    gsap.to(scrollIndicatorRef.current, {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative pt-20 pb-20">
      <div className="container mx-auto px-6">
        <h1 ref={titleRef} className="text-6xl md:text-9xl lg:text-[12rem] font-black tracking-tighter leading-none text-center mb-8 uppercase">
          Siam
          <br />
          Rahman
        </h1>
        <p ref={subtitleRef} className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto text-center font-light">
          Web Developer, Flutter Developer, WordPress Expert & Professional
          Sales Specialist
        </p>

        {/* Decorative elements - hidden on small screens to prevent overflow */}
        <div className="hidden md:block absolute top-1/4 left-8 text-9xl font-black text-white opacity-5 select-none pointer-events-none">
          S
        </div>
        <div className="hidden md:block absolute bottom-1/4 right-8 text-9xl font-black text-white opacity-5 select-none pointer-events-none">
          R
        </div>
        <div className="hidden md:block absolute top-1/3 right-1/4 text-9xl font-black text-white opacity-5 select-none pointer-events-none">
          A
        </div>
      </div>

      <div ref={scrollIndicatorRef} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer">
        <a href="#about" className="flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest mb-2 opacity-50">
            Scroll
          </span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.29289 23.7071C7.68342 24.0976 8.31658 24.0976 8.70711 23.7071L15.0711 17.3431C15.4616 16.9526 15.4616 16.3195 15.0711 15.9289C14.6805 15.5384 14.0474 15.5384 13.6569 15.9289L8 21.5858L2.34315 15.9289C1.95262 15.5384 1.31946 15.5384 0.928932 15.9289C0.538408 16.3195 0.538408 16.9526 0.928932 17.3431L7.29289 23.7071ZM7 0V23H9V0H7Z" fill="white" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default TypeHero;