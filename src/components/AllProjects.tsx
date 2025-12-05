import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

const allProjects = [
    {
        id: 1,
        title: 'E-COMMERCE PLATFORM',
        category: 'WEB DEVELOPMENT',
        image: '/images/ecommerce.png',
        year: '2023',
        description: 'A full-featured e-commerce solution with real-time inventory management.'
    },
    {
        id: 2,
        title: 'FLUTTER APP',
        category: 'MOBILE DEVELOPMENT',
        image: '/images/flutter.png',
        year: '2022',
        description: 'Cross-platform mobile application for lifestyle tracking.'
    },
    {
        id: 3,
        title: 'WORDPRESS THEME',
        category: 'CMS DEVELOPMENT',
        image: '/images/wordpress.png',
        year: '2022',
        description: 'Custom high-performance WordPress theme for creative agencies.'
    },
    {
        id: 4,
        title: 'DASHBOARD UI',
        category: 'UI/UX DESIGN',
        image: '/images/dashboard.png',
        year: '2021',
        description: 'Data visualization dashboard for enterprise analytics.'
    },
    {
        id: 5,
        title: 'SALES ANALYTICS APP',
        category: 'FLUTTER & WEB',
        image: '/images/analytics.png',
        year: '2021',
        description: 'Comprehensive sales tracking and forecasting tool.'
    },
    {
        id: 6,
        title: 'PORTFOLIO V1',
        category: 'WEB DESIGN',
        image: '/images/wordpress.png', // Reusing image for demo
        year: '2020',
        description: 'First iteration of personal portfolio website.'
    },
    {
        id: 7,
        title: 'TASK MANAGER',
        category: 'REACT APP',
        image: '/images/dashboard.png', // Reusing image for demo
        year: '2020',
        description: 'Productivity application for team collaboration.'
    }
];

const AllProjects = () => {
    const containerRef = useRef(null);
    const headingRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Heading animation
        gsap.from(headingRef.current, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });

        // Projects animation
        const projects = document.querySelectorAll('.project-card');
        gsap.from(projects, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%'
            }
        });

        // Scroll to top on mount
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#0f0f0f] text-white py-20 px-6">
            <div className="container mx-auto">
                <header className="flex justify-between items-center mb-20">
                    <Link to="/" className="text-xl font-black tracking-tighter hover:opacity-70 transition-opacity">
                        SIAM RAHMAN
                    </Link>
                    <Link to="/" className="text-xs uppercase tracking-widest hover:text-gray-400 transition-colors">
                        Back to Home
                    </Link>
                </header>

                <div ref={containerRef}>
                    <h1 ref={headingRef} className="text-5xl md:text-8xl font-black tracking-tighter mb-16 uppercase">
                        All<br />
                        <span className="text-gray-600">Projects —</span>
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
                        {allProjects.map((project) => (
                            <div key={project.id} className="project-card group cursor-pointer">
                                <div className="overflow-hidden mb-6 aspect-video bg-gray-900">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                </div>
                                <div className="flex justify-between items-baseline mb-2">
                                    <h3 className="text-2xl md:text-3xl font-black tracking-tighter group-hover:text-gray-300 transition-colors">
                                        {project.title}
                                    </h3>
                                    <span className="text-sm font-mono text-gray-500">{project.year}</span>
                                </div>
                                <div className="flex justify-between items-center border-t border-gray-800 pt-4 mt-4">
                                    <span className="text-xs uppercase tracking-widest text-gray-400">{project.category}</span>
                                    <p className="text-sm text-gray-500 max-w-xs text-right hidden md:block">{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <footer className="mt-32 border-t border-gray-900 pt-12 flex justify-between items-end">
                    <div className="text-[10vw] font-black text-gray-900 leading-none select-none">
                        WORK
                    </div>
                    <div className="text-right text-xs text-gray-500 font-mono mb-4">
                        &copy; 2025 — Siam Rahman
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default AllProjects;
