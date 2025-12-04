import React, { useEffect, useRef } from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const ContactSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const contactItemsRef = useRef(null);
  const socialIconsRef = useRef(null);
  const formRef = useRef(null);
  const submitBtnRef = useRef(null);
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
    // Left column animation
    gsap.from(leftColRef.current, {
      x: -50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: leftColRef.current,
        start: 'top 75%',
        toggleActions: 'play none none none'
      }
    });
    // Contact items staggered animation
    gsap.from(contactItemsRef.current.children, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      scrollTrigger: {
        trigger: contactItemsRef.current,
        start: 'top 75%',
        toggleActions: 'play none none none'
      }
    });
    // Social icons animation
    gsap.from(socialIconsRef.current.children, {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: socialIconsRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
    // Right column animation
    gsap.from(rightColRef.current, {
      x: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: rightColRef.current,
        start: 'top 75%',
        toggleActions: 'play none none none'
      }
    });
    // Form fields animation
    gsap.from(formRef.current.elements, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      scrollTrigger: {
        trigger: formRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
    // Submit button animation
    gsap.from(submitBtnRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.5,
      delay: 0.6,
      scrollTrigger: {
        trigger: formRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
    // Add hover effects to social icons
    const socialIcons = socialIconsRef.current.children;
    for (let i = 0; i < socialIcons.length; i++) {
      socialIcons[i].addEventListener('mouseenter', () => {
        gsap.to(socialIcons[i], {
          y: -5,
          scale: 1.2,
          duration: 0.3,
          ease: 'back.out(1.7)'
        });
      });
      socialIcons[i].addEventListener('mouseleave', () => {
        gsap.to(socialIcons[i], {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: 'power1.out'
        });
      });
    }
    // Add focus animations to form fields
    const formFields = formRef.current.elements;
    for (let i = 0; i < formFields.length - 1; i++) {
      formFields[i].addEventListener('focus', () => {
        gsap.to(formFields[i], {
          boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.3)',
          duration: 0.3
        });
      });
      formFields[i].addEventListener('blur', () => {
        gsap.to(formFields[i], {
          boxShadow: 'none',
          duration: 0.3
        });
      });
    }
  }, []);
  return <section id="contact" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16" ref={titleRef}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            I'm always open to new ideas and collaborations.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div ref={leftColRef}>
            <div className="bg-white p-8 rounded-lg shadow-lg h-full transform transition-all duration-300 hover:shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6" ref={contactItemsRef}>
                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mr-4 shrink-0 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <MailIcon size={24} className="text-blue-600 transition-all duration-300 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-1">
                      Email
                    </h4>
                    <a href="mailto:hello@example.com" className="text-blue-600 hover:underline transition-all duration-300 hover:text-blue-800">
                      hello@example.com
                    </a>
                    <p className="text-gray-600 mt-1">
                      Feel free to email me anytime!
                    </p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mr-4 shrink-0 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <PhoneIcon size={24} className="text-blue-600 transition-all duration-300 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-1">
                      Phone
                    </h4>
                    <a href="tel:+1234567890" className="text-blue-600 hover:underline transition-all duration-300 hover:text-blue-800">
                      +1 (234) 567-890
                    </a>
                    <p className="text-gray-600 mt-1">
                      Monday to Friday, 9am-5pm
                    </p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mr-4 shrink-0 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <MapPinIcon size={24} className="text-blue-600 transition-all duration-300 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-1">
                      Location
                    </h4>
                    <p className="text-gray-700">New York, NY</p>
                    <p className="text-gray-600 mt-1">
                      Available for remote work worldwide
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-medium text-gray-800 mb-4">
                  Connect with me
                </h4>
                <div className="flex space-x-4" ref={socialIconsRef}>
                  <a href="#" className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div ref={rightColRef}>
            <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Send Me a Message
              </h3>
              <form className="space-y-6" ref={formRef}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input type="text" id="name" placeholder="Your name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input type="email" id="email" placeholder="Your email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input type="text" id="subject" placeholder="Message subject" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea id="message" rows={5} placeholder="Your message" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" required></textarea>
                </div>
                <button type="submit" ref={submitBtnRef} className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  Send Message <SendIcon size={18} className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;