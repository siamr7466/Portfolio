import React, { useEffect, useRef } from 'react';
import { UserIcon, CalendarIcon, MapPinIcon, BriefcaseIcon } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const AboutSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const contentRef = useRef(null);
  const infoItemsRef = useRef(null);
  const buttonRef = useRef(null);
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
    // Image animation
    gsap.from(imageWrapperRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: imageWrapperRef.current,
        start: 'top 75%',
        toggleActions: 'play none none none'
      }
    });
    // Content animation
    gsap.from(contentRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: contentRef.current,
        start: 'top 75%',
        toggleActions: 'play none none none'
      }
    });
    // Info items staggered animation
    gsap.from(infoItemsRef.current.children, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      scrollTrigger: {
        trigger: infoItemsRef.current,
        start: 'top 75%',
        toggleActions: 'play none none none'
      }
    });
    // Button animation
    gsap.from(buttonRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.5,
      delay: 0.6,
      scrollTrigger: {
        trigger: infoItemsRef.current,
        start: 'top 75%',
        toggleActions: 'play none none none'
      }
    });
    // Image hover effect
    imageWrapperRef.current.addEventListener('mouseenter', () => {
      gsap.to(imageWrapperRef.current.querySelector('img'), {
        scale: 1.05,
        duration: 0.4
      });
      gsap.to(imageWrapperRef.current.querySelector('.image-bg'), {
        scale: 1.1,
        duration: 0.4
      });
    });
    imageWrapperRef.current.addEventListener('mouseleave', () => {
      gsap.to(imageWrapperRef.current.querySelector('img'), {
        scale: 1,
        duration: 0.4
      });
      gsap.to(imageWrapperRef.current.querySelector('.image-bg'), {
        scale: 1,
        duration: 0.4
      });
    });
  }, []);
  return <section id="about" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16" ref={titleRef}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative cursor-pointer" ref={imageWrapperRef}>
            <div className="absolute inset-0 transform translate-x-4 translate-y-4 bg-blue-600 rounded-lg image-bg transition-transform duration-500"></div>
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Professional portrait" className="relative z-10 rounded-lg w-full h-auto shadow-lg transition-transform duration-500" />
          </div>
          <div ref={contentRef}>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Who I Am</h3>
            <p className="text-gray-600 mb-6">
              I'm a passionate full-stack developer with over 5 years of
              experience building web applications and digital experiences. I
              specialize in JavaScript technologies and have a strong eye for
              design and user experience.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6" ref={infoItemsRef}>
              <div className="flex items-center transform transition-transform duration-300 hover:translate-x-2">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <UserIcon size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500">Name</h4>
                  <p className="font-medium">John Doe</p>
                </div>
              </div>
              <div className="flex items-center transform transition-transform duration-300 hover:translate-x-2">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <CalendarIcon size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500">Experience</h4>
                  <p className="font-medium">5+ Years</p>
                </div>
              </div>
              <div className="flex items-center transform transition-transform duration-300 hover:translate-x-2">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <MapPinIcon size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500">Location</h4>
                  <p className="font-medium">New York, USA</p>
                </div>
              </div>
              <div className="flex items-center transform transition-transform duration-300 hover:translate-x-2">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <BriefcaseIcon size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500">Available for</h4>
                  <p className="font-medium">Freelance & Full-time</p>
                </div>
              </div>
            </div>
            <a href="#contact" ref={buttonRef} className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;