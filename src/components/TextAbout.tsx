import React, { useEffect, useRef, memo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const TextAbout = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Heading animation
    gsap.from(headingRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'top 40%',
        scrub: 1
      }
    });
    // Text paragraphs animation
    gsap.from(textRef.current.children, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
    // Stats animation
    gsap.from(statsRef.current.children, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      scrollTrigger: {
        trigger: statsRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
    // Text reveal animation on scroll
    const lines = document.querySelectorAll('.reveal-line');
    lines.forEach(line => {
      const innerText = line.querySelector('.reveal-text');
      gsap.from(innerText, {
        y: '100%',
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: line,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    });
  }, []);
  return <section id="about" ref={sectionRef} className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h2 ref={headingRef} className="text-5xl md:text-7xl font-black tracking-tighter mb-8 uppercase">
              About
              <br />
              <span className="text-gray-600">Me —</span>
            </h2>
            <div ref={textRef} className="space-y-6 text-gray-400">
              <p>
                I'm a versatile developer specializing in web development,
                Flutter applications, and WordPress solutions. With a strong
                background in both development and sales, I bring a unique
                perspective to every project.
              </p>
              <p>
                My approach combines clean code with user-focused design,
                ensuring that every application not only functions flawlessly
                but also delivers an exceptional user experience.
              </p>
              <p>
                Based in Dhaka, Bangladesh, I work with clients globally to
                create responsive websites, cross-platform mobile applications,
                and custom WordPress solutions tailored to their specific needs.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7 lg:pl-12">
            <div className="overflow-hidden mb-12">
              <h3 className="reveal-line overflow-hidden relative">
                <span className="reveal-text relative block text-7xl md:text-9xl font-black tracking-tighter uppercase">
                  Designer
                </span>
              </h3>
              <h3 className="reveal-line overflow-hidden relative">
                <span className="reveal-text relative block text-7xl md:text-9xl font-black tracking-tighter uppercase">
                  Developer
                </span>
              </h3>
              <h3 className="reveal-line overflow-hidden relative">
                <span className="reveal-text relative block text-7xl md:text-9xl font-black tracking-tighter uppercase">
                  Creator
                </span>
              </h3>
            </div>
            <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div>
                <h4 className="text-4xl md:text-5xl font-black mb-1">5+</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider">
                  Years Experience
                </p>
              </div>
              <div>
                <h4 className="text-4xl md:text-5xl font-black mb-1">50+</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider">
                  Projects
                </p>
              </div>
              <div>
                <h4 className="text-4xl md:text-5xl font-black mb-1">20+</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider">
                  Clients
                </p>
              </div>
              <div>
                <h4 className="text-4xl md:text-5xl font-black mb-1">∞</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider">
                  Creativity
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Skills */}
        <div className="mt-32">
          <div className="flex flex-wrap text-sm font-mono">
            <div className="w-full md:w-1/2 lg:w-1/3 mb-8">
              <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4">
                Design
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  UI/UX Design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  Typography
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  Motion Design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  Brand Identity
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 mb-8">
              <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4">
                Development
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  React & JavaScript
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  Flutter & Dart
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  WordPress & PHP
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  Responsive Web Design
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 mb-8">
              <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4">
                Tools
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  Figma & Sketch
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  Adobe Creative Suite
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  VS Code
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  Git & GitHub
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default TextAbout;