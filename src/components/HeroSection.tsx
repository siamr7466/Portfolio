import React, { useEffect, useRef } from 'react';
import { ChevronDownIcon } from 'lucide-react';
import { gsap } from 'gsap';
const HeroSection = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const shape1Ref = useRef(null);
  const shape2Ref = useRef(null);
  const shape3Ref = useRef(null);
  const bgLayerRef = useRef(null);
  useEffect(() => {
    // Create a timeline for sequential animations
    const tl = gsap.timeline({
      defaults: {
        ease: 'power3.out'
      }
    });
    // Background animation
    tl.from(bgLayerRef.current, {
      opacity: 0,
      duration: 1.5
    });
    // Text animations
    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8
    }, '-=0.8');
    tl.from(subtitleRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8
    }, '-=0.6');
    tl.from(descRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8
    }, '-=0.6');
    // Button animations
    tl.from(buttonsRef.current.children, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2
    }, '-=0.4');
    // Decorative shapes animations
    tl.from([shape1Ref.current, shape2Ref.current, shape3Ref.current], {
      scale: 0,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'back.out(1.7)'
    }, '-=1');
    // Scroll indicator animation
    tl.from(scrollIndicatorRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.5
    }, '-=0.5');
    // Create floating animation for decorative shapes
    gsap.to(shape2Ref.current, {
      y: -15,
      rotation: 5,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
    gsap.to(shape3Ref.current, {
      y: 15,
      rotation: -5,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 0.5
    });
    // Mouse move parallax effect
    const heroSection = document.querySelector('#home');
    heroSection.addEventListener('mousemove', e => {
      const xPos = (e.clientX / window.innerWidth - 0.5) * 20;
      const yPos = (e.clientY / window.innerHeight - 0.5) * 20;
      gsap.to([shape1Ref.current, shape2Ref.current, shape3Ref.current], {
        x: xPos,
        y: yPos,
        duration: 1,
        ease: 'power1.out'
      });
    });
    return () => {
      heroSection.removeEventListener('mousemove', () => {
        // cleanup
      });
    };
  }, []);
  return <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      <div ref={bgLayerRef} className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-no-repeat bg-cover opacity-5"></div>
      <div className="container mx-auto px-4 md:px-8 py-20 relative z-10">
        <div className="max-w-3xl">
          <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Hi, I'm{' '}
            <span className="text-blue-600 inline-block hover:scale-110 transition-transform duration-300">
              John Doe
            </span>
          </h1>
          <h2 ref={subtitleRef} className="text-2xl md:text-3xl font-semibold text-gray-600 mb-6">
            Full Stack Developer & UI/UX Designer
          </h2>
          <p ref={descRef} className="text-lg text-gray-600 mb-8 max-w-2xl">
            I build exceptional digital experiences that are fast, accessible,
            visually appealing, and responsive. Let's create something amazing
            together.
          </p>
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
            <a href="#projects" className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-center">
              View My Work
            </a>
            <a href="#contact" className="inline-block px-8 py-3 bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-center">
              Contact Me
            </a>
          </div>
        </div>
      </div>
      <div ref={scrollIndicatorRef} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-500 hover:text-blue-600 transition-colors">
          <ChevronDownIcon size={32} />
        </a>
      </div>
      {/* Abstract shapes for design */}
      <div ref={shape1Ref} className="hidden md:block absolute right-0 bottom-0 w-1/3 h-1/3 bg-blue-100 rounded-tl-full opacity-30"></div>
      <div ref={shape2Ref} className="hidden md:block absolute right-10 top-40 w-16 h-16 bg-blue-400 rounded-full opacity-20"></div>
      <div ref={shape3Ref} className="hidden md:block absolute left-20 bottom-40 w-24 h-24 bg-blue-300 rounded-full opacity-20"></div>
    </section>;
};
export default HeroSection;