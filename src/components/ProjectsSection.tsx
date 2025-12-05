import React, { useEffect, useState, useRef } from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const filterBtnsRef = useRef(null);
  const projectsGridRef = useRef(null);
  const ctaButtonRef = useRef(null);
  const projects = [{
    id: 1,
    title: 'E-Commerce Platform',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    description: 'A full-stack e-commerce platform with payment integration and admin dashboard.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#'
  }, {
    id: 2,
    title: 'Finance Dashboard',
    category: 'ui',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    description: 'A responsive dashboard for tracking financial metrics and investments.',
    technologies: ['React', 'Chart.js', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#'
  }, {
    id: 3,
    title: 'Task Management App',
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    description: 'A mobile-first task management application with real-time updates.',
    technologies: ['React Native', 'Firebase', 'Redux'],
    liveUrl: '#',
    githubUrl: '#'
  }, {
    id: 4,
    title: 'Portfolio Website',
    category: 'ui',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    description: 'A creative portfolio website for a digital artist with animations.',
    technologies: ['React', 'GSAP', 'Styled Components'],
    liveUrl: '#',
    githubUrl: '#'
  }, {
    id: 5,
    title: 'Real Estate Platform',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    description: 'A platform for listing and searching real estate properties with map integration.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Leaflet'],
    liveUrl: '#',
    githubUrl: '#'
  }, {
    id: 6,
    title: 'Weather App',
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1530908295418-a12e326966ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    description: 'A weather application with location-based forecasts and notifications.',
    technologies: ['React Native', 'OpenWeather API', 'Geolocation'],
    liveUrl: '#',
    githubUrl: '#'
  }];
  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);
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
    // Filter buttons animation
    gsap.from(filterBtnsRef.current.children, {
      y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      scrollTrigger: {
        trigger: filterBtnsRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
    // Initial projects animation
    animateProjectCards();
    // CTA button animation
    gsap.from(ctaButtonRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ctaButtonRef.current,
        start: 'top 90%',
        toggleActions: 'play none none none'
      }
    });
  }, []);
  // Animate project cards when filter changes
  useEffect(() => {
    if (projectsGridRef.current.children.length > 0) {
      animateProjectCards();
    }
  }, [filter]);
  const animateProjectCards = () => {
    // Clear any existing animations
    gsap.killTweensOf(projectsGridRef.current.children);
    // Set initial state
    gsap.set(projectsGridRef.current.children, {
      opacity: 0,
      y: 50
    });
    // Animate cards in
    gsap.to(projectsGridRef.current.children, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      delay: 0.2
    });
  };
  return <section id="projects" className="py-20 bg-white" ref={sectionRef}>
    <div className="container mx-auto px-4 md:px-8">
      <div className="text-center mb-16" ref={titleRef}>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          My Projects
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one was built to solve a
          specific problem or explore new technologies.
        </p>
      </div>
      <div className="flex justify-center mb-10" ref={filterBtnsRef}>
        <div className="flex flex-wrap gap-2 justify-center">
          <button onClick={() => setFilter('all')} className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === 'all' ? 'bg-blue-600 text-white transform scale-110' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:-translate-y-1'}`}>
            All Projects
          </button>
          <button onClick={() => setFilter('web')} className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === 'web' ? 'bg-blue-600 text-white transform scale-110' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:-translate-y-1'}`}>
            Web Apps
          </button>
          <button onClick={() => setFilter('mobile')} className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === 'mobile' ? 'bg-blue-600 text-white transform scale-110' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:-translate-y-1'}`}>
            Mobile Apps
          </button>
          <button onClick={() => setFilter('ui')} className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === 'ui' ? 'bg-blue-600 text-white transform scale-110' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:-translate-y-1'}`}>
            UI/UX Design
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={projectsGridRef}>
        {filteredProjects.map(project => <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-4 hover:shadow-xl border border-gray-100 project-card">
          <div className="h-48 overflow-hidden group">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => <span key={index} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium transition-all duration-300 hover:bg-blue-600 hover:text-white">
                {tech}
              </span>)}
            </div>
            <div className="flex gap-3">
              <a href={project.liveUrl} className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 transition-all duration-300 hover:translate-x-1" target="_blank" rel="noopener noreferrer">
                <ExternalLinkIcon size={16} /> Live Demo
              </a>
              <a href={project.githubUrl} className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-all duration-300 hover:translate-x-1" target="_blank" rel="noopener noreferrer">
                <GithubIcon size={16} /> Source Code
              </a>
            </div>
          </div>
        </div>)}
      </div>
      <div className="text-center mt-12" ref={ctaButtonRef}>
        <a href="#" className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          View All Projects
        </a>
      </div>
    </div>
  </section>;
};
export default ProjectsSection;