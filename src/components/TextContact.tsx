import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const TextContact = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const footerRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<{ name?: string, email?: string, message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));

    // Clear error when user starts typing
    if (formErrors[id as keyof typeof formErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [id]: ''
      }));
    }
  };

  const validateForm = () => {
    const errors: { name?: string, email?: string, message?: string } = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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

    // Form animation
    gsap.from(formRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: formRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    // Info animation
    if (infoRef.current) {
      const infoElement = infoRef.current as HTMLElement;
      gsap.from(infoElement.children, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: infoRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    }

    // Footer animation
    // Kept the ref but removed the element as per user request, so this animation might target null which is fine in GSAP (it just won't do anything)
    // Or I can remove this block. I'll keep it for now as the ref is still defined.
    if (footerRef.current) {
      gsap.from(footerRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 95%',
          toggleActions: 'play none none none'
        }
      });
    }

    // Form field animations on focus
    if (formRef.current) {
      const formElement = formRef.current as HTMLElement;
      const formFields = formElement.querySelectorAll('input, textarea');
      formFields.forEach(field => {
        field.addEventListener('focus', () => {
          gsap.to(field, {
            borderColor: 'rgba(255, 255, 255, 1)',
            duration: 0.3
          });
        });
        field.addEventListener('blur', () => {
          gsap.to(field, {
            borderColor: 'rgba(255, 255, 255, 0.1)',
            duration: 0.3
          });
        });
      });
    }
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="min-h-screen py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h2 ref={headingRef} className="text-5xl md:text-7xl font-black tracking-tighter mb-8 uppercase">
              Let's<br />
              <span className="text-gray-600">Connect —</span>
            </h2>
            <p className="text-gray-400 mb-12">
              Have a project in mind or want to discuss potential opportunities?
              I'm always open to new ideas and collaborations.
            </p>

            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="text-xs uppercase tracking-widest text-gray-500 block mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b ${formErrors.name ? 'border-red-500' : 'border-white border-opacity-10'} py-2 focus:outline-none text-white transition-all duration-300`}
                  required
                />
                {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="text-xs uppercase tracking-widest text-gray-500 block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b ${formErrors.email ? 'border-red-500' : 'border-white border-opacity-10'} py-2 focus:outline-none text-white transition-all duration-300`}
                  required
                />
                {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-gray-500 block mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b ${formErrors.message ? 'border-red-500' : 'border-white border-opacity-10'} py-2 focus:outline-none text-white transition-all duration-300`}
                  required
                ></textarea>
                {formErrors.message && <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>}
              </div>

              <div>
                {submitStatus === 'success' && (
                  <p className="text-green-500 mb-4">Your message has been sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-500 mb-4">Failed to send message. Please try again later.</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`relative overflow-hidden group bg-white bg-opacity-0 border border-white border-opacity-20 text-white px-6 py-3 transition-all duration-300 hover:bg-opacity-5 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <span className="relative z-10 text-sm uppercase tracking-widest">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-7 lg:pl-12">
            <div className="relative h-full flex flex-col justify-between">
              <div ref={infoRef} className="space-y-8">
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4">Contact Information</h3>
                  <ul className="space-y-2">
                    <li className="text-xl">siamrahman7466@gmail.com</li>
                    <li className="text-xl">01725963600</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4">Location</h3>
                  <p className="text-xl">Dhaka, Bangladesh</p>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4">Social</h3>
                  <div className="flex space-x-6">
                    <a href="https://x.com/siamrofficial76" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-400 transition-colors duration-300">Twitter</a>
                    <a href="https://www.instagram.com/siam._.rahman/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-400 transition-colors duration-300">Instagram</a>
                    <a href="https://www.linkedin.com/in/siam-rahman76" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-400 transition-colors duration-300">LinkedIn</a>
                    <a href="https://github.com/siamr7466" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-400 transition-colors duration-300">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-20 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
        <div className="text-[20vw] font-black text-white opacity-5 whitespace-nowrap">
          CONTACT CONTACT CONTACT
        </div>
      </div>
    </section>
  );
};

export default TextContact;