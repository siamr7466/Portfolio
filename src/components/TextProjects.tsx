import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const TextProjects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const projectsRef = useRef(null);
  const imageRef = useRef(null);
  const projects = [{
    id: 1,
    title: 'E-COMMERCE PLATFORM',
    category: 'WEB DEVELOPMENT',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    year: '2023'
  }, {
    id: 2,
    title: 'FLUTTER APP',
    category: 'MOBILE DEVELOPMENT',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    year: '2022'
  }, {
    id: 3,
    title: 'WORDPRESS THEME',
    category: 'CMS DEVELOPMENT',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    year: '2022'
  }, {
    id: 4,
    title: 'DASHBOARD UI',
    category: 'UI/UX DESIGN',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    year: '2021'
  }, {
    id: 5,
    title: 'SALES ANALYTICS APP',
    category: 'FLUTTER & WEB',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    year: '2021'
  }];
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
    // Projects list animation
    gsap.from(projectsRef.current.children, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      scrollTrigger: {
        trigger: projectsRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
    // Project hover line animation setup
    const projectItems = projectsRef.current.children;
    for (let i = 0; i < projectItems.length; i++) {
      const lineElement = projectItems[i].querySelector('.project-line');
      projectItems[i].addEventListener('mouseenter', () => {
        gsap.to(lineElement, {
          width: '100%',
          duration: 0.4,
          ease: 'power2.out'
        });
        setActiveProject(projects[i]);
        setActiveIndex(i);
        // Animate the image appearance
        if (imageRef.current) {
          gsap.fromTo(imageRef.current, {
            opacity: 0,
            scale: 0.95
          }, {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: 'power2.out'
          });
        }
      });
      projectItems[i].addEventListener('mouseleave', () => {
        gsap.to(lineElement, {
          width: '0%',
          duration: 0.4,
          ease: 'power2.in'
        });
      });
    }
  }, []);
  return <section id="projects" ref={sectionRef} className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h2 ref={headingRef} className="text-5xl md:text-7xl font-black tracking-tighter mb-8 uppercase">
              Selected
              <br />
              <span className="text-gray-600">Projects —</span>
            </h2>
            <p className="text-gray-400 mb-12">
              A curated selection of my projects spanning web development,
              Flutter applications, and WordPress solutions. Each project
              represents my commitment to quality and user experience.
            </p>
            <div ref={projectsRef} className="space-y-8">
              {projects.map((project, index) => <div key={project.id} className={`group cursor-pointer ${activeIndex === index ? 'text-white' : ''}`} onMouseEnter={() => setActiveIndex(index)} onMouseLeave={() => setActiveIndex(null)}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-3xl md:text-4xl font-black tracking-tighter group-hover:text-gray-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-sm font-mono text-gray-500">
                      {project.year}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-400">
                      {project.category}
                    </span>
                    <div className="project-line h-px bg-white w-0 transition-all duration-300"></div>
                  </div>
                </div>)}
            </div>
          </div>
          <div className="lg:col-span-7 relative">
            <div className="sticky top-20">
              {activeIndex !== null ? <div ref={imageRef} className="w-full h-[500px] overflow-hidden">
                  <img src={projects[activeIndex].image} alt={projects[activeIndex].title} className="w-full h-full object-cover" />
                </div> : <div className="w-full h-[500px] bg-gray-900 flex items-center justify-center">
                  <p className="text-gray-700 text-2xl font-black tracking-tighter">
                    HOVER A PROJECT
                  </p>
                </div>}
              <div className="mt-4 flex justify-between">
                <span className="text-xs uppercase tracking-widest text-gray-500">
                  Selected Work
                </span>
                <a href="#" className="text-xs uppercase tracking-widest underline">
                  View All Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <div className="text-[20vw] font-black text-white opacity-5 whitespace-nowrap">
          PROJECTS PROJECTS PROJECTS
        </div>
      </div>
    </section>;
};
export default TextProjects;