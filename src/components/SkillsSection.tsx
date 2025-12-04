import React, { useEffect, useRef } from 'react';
import { CodeIcon, LayoutIcon, ServerIcon, PenToolIcon } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const SkillsSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Title animation
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
    // Cards staggered animation
    gsap.from(cardsRef.current.children, {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      scrollTrigger: {
        trigger: cardsRef.current,
        start: 'top 75%',
        toggleActions: 'play none none none'
      }
    });
    // Animate skill bars
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    ScrollTrigger.batch(skillBars, {
      interval: 0.1,
      batchMax: 3,
      onEnter: batch => {
        gsap.fromTo(batch, {
          width: 0
        }, {
          width: '100%',
          duration: 1.5,
          stagger: 0.1,
          ease: 'power2.out'
        });
      },
      start: 'top 85%'
    });
    // Add hover effects to cards
    const cards = cardsRef.current.children;
    for (let i = 0; i < cards.length; i++) {
      cards[i].addEventListener('mouseenter', () => {
        gsap.to(cards[i], {
          y: -10,
          scale: 1.03,
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          duration: 0.3
        });
      });
      cards[i].addEventListener('mouseleave', () => {
        gsap.to(cards[i], {
          y: 0,
          scale: 1,
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          duration: 0.3
        });
      });
    }
  }, []);
  return <section id="skills" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16" ref={titleRef}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            My Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I've spent years refining my skills across various technologies and
            methodologies. Here's where my expertise lies:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" ref={cardsRef}>
          {/* Frontend Development */}
          <div className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300">
            <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center mb-6 transform transition-transform duration-500 hover:rotate-12">
              <CodeIcon size={28} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Frontend Development
            </h3>
            <p className="text-gray-600 mb-4">
              Building responsive and interactive user interfaces with modern
              frameworks.
            </p>
            <div className="space-y-2">
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block text-gray-600">
                      React
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-blue-600">
                      90%
                    </span>
                  </div>
                </div>
                <div className="flex h-2 mb-4 overflow-hidden rounded bg-blue-100">
                  <div style={{
                  width: '90%'
                }} className="bg-blue-600 skill-bar-fill" data-width="90%"></div>
                </div>
              </div>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block text-gray-600">
                      JavaScript
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-blue-600">
                      95%
                    </span>
                  </div>
                </div>
                <div className="flex h-2 mb-4 overflow-hidden rounded bg-blue-100">
                  <div style={{
                  width: '95%'
                }} className="bg-blue-600 skill-bar-fill" data-width="95%"></div>
                </div>
              </div>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block text-gray-600">
                      CSS/Tailwind
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-blue-600">
                      85%
                    </span>
                  </div>
                </div>
                <div className="flex h-2 overflow-hidden rounded bg-blue-100">
                  <div style={{
                  width: '85%'
                }} className="bg-blue-600 skill-bar-fill" data-width="85%"></div>
                </div>
              </div>
            </div>
          </div>
          {/* Backend Development */}
          <div className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300">
            <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center mb-6 transform transition-transform duration-500 hover:rotate-12">
              <ServerIcon size={28} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Backend Development
            </h3>
            <p className="text-gray-600 mb-4">
              Creating robust server-side applications and APIs.
            </p>
            <div className="space-y-2">
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block text-gray-600">
                      Node.js
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-blue-600">
                      85%
                    </span>
                  </div>
                </div>
                <div className="flex h-2 mb-4 overflow-hidden rounded bg-blue-100">
                  <div style={{
                  width: '85%'
                }} className="bg-blue-600 skill-bar-fill" data-width="85%"></div>
                </div>
              </div>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block text-gray-600">
                      Express
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-blue-600">
                      80%
                    </span>
                  </div>
                </div>
                <div className="flex h-2 mb-4 overflow-hidden rounded bg-blue-100">
                  <div style={{
                  width: '80%'
                }} className="bg-blue-600 skill-bar-fill" data-width="80%"></div>
                </div>
              </div>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block text-gray-600">
                      MongoDB
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-blue-600">
                      75%
                    </span>
                  </div>
                </div>
                <div className="flex h-2 overflow-hidden rounded bg-blue-100">
                  <div style={{
                  width: '75%'
                }} className="bg-blue-600 skill-bar-fill" data-width="75%"></div>
                </div>
              </div>
            </div>
          </div>
          {/* UI/UX Design */}
          <div className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300">
            <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center mb-6 transform transition-transform duration-500 hover:rotate-12">
              <PenToolIcon size={28} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              UI/UX Design
            </h3>
            <p className="text-gray-600 mb-4">
              Creating beautiful and intuitive user interfaces and experiences.
            </p>
            <div className="space-y-2">
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block text-gray-600">
                      Figma
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-blue-600">
                      80%
                    </span>
                  </div>
                </div>
                <div className="flex h-2 mb-4 overflow-hidden rounded bg-blue-100">
                  <div style={{
                  width: '80%'
                }} className="bg-blue-600 skill-bar-fill" data-width="80%"></div>
                </div>
              </div>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block text-gray-600">
                      User Research
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-blue-600">
                      70%
                    </span>
                  </div>
                </div>
                <div className="flex h-2 mb-4 overflow-hidden rounded bg-blue-100">
                  <div style={{
                  width: '70%'
                }} className="bg-blue-600 skill-bar-fill" data-width="70%"></div>
                </div>
              </div>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block text-gray-600">
                      Prototyping
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-blue-600">
                      85%
                    </span>
                  </div>
                </div>
                <div className="flex h-2 overflow-hidden rounded bg-blue-100">
                  <div style={{
                  width: '85%'
                }} className="bg-blue-600 skill-bar-fill" data-width="85%"></div>
                </div>
              </div>
            </div>
          </div>
          {/* Web Performance */}
          <div className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300">
            <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center mb-6 transform transition-transform duration-500 hover:rotate-12">
              <LayoutIcon size={28} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Web Performance
            </h3>
            <p className="text-gray-600 mb-4">
              Optimizing websites for speed, accessibility, and SEO.
            </p>
            <div className="space-y-2">
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block text-gray-600">
                      Optimization
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-blue-600">
                      90%
                    </span>
                  </div>
                </div>
                <div className="flex h-2 mb-4 overflow-hidden rounded bg-blue-100">
                  <div style={{
                  width: '90%'
                }} className="bg-blue-600 skill-bar-fill" data-width="90%"></div>
                </div>
              </div>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block text-gray-600">
                      SEO
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-blue-600">
                      75%
                    </span>
                  </div>
                </div>
                <div className="flex h-2 mb-4 overflow-hidden rounded bg-blue-100">
                  <div style={{
                  width: '75%'
                }} className="bg-blue-600 skill-bar-fill" data-width="75%"></div>
                </div>
              </div>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block text-gray-600">
                      Accessibility
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-blue-600">
                      85%
                    </span>
                  </div>
                </div>
                <div className="flex h-2 overflow-hidden rounded bg-blue-100">
                  <div style={{
                  width: '85%'
                }} className="bg-blue-600 skill-bar-fill" data-width="85%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default SkillsSection;