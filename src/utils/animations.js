import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
// Text reveal animation (characters)
export const revealChars = (element, delay = 0) => {
  const chars = element.querySelectorAll('.char');
  return gsap.from(chars, {
    opacity: 0,
    y: 100,
    rotationX: -90,
    stagger: 0.02,
    duration: 1,
    ease: "power4.out",
    delay
  });
};
// Text reveal animation (words)
export const revealWords = (element, delay = 0) => {
  const words = element.querySelectorAll('.word');
  return gsap.from(words, {
    opacity: 0,
    y: 50,
    stagger: 0.05,
    duration: 0.8,
    ease: "power3.out",
    delay
  });
};
// Line reveal animation
export const revealLine = (element, direction = "left", delay = 0) => {
  return gsap.from(element, {
    scaleX: 0,
    transformOrigin: direction === "left" ? "left center" : "right center",
    duration: 1.5,
    delay,
    ease: "power3.inOut"
  });
};
// Fade in animation with scroll trigger
export const fadeInOnScroll = (element, start = "top 80%") => {
  return gsap.from(element, {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: element,
      start: start,
      toggleActions: "play none none none"
    }
  });
};
// Staggered fade in animation with scroll trigger
export const staggerFadeInOnScroll = (parent, children, start = "top 80%", staggerTime = 0.1) => {
  const elements = document.querySelectorAll(`${parent} ${children}`);
  return gsap.from(elements, {
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: staggerTime,
    ease: "power3.out",
    scrollTrigger: {
      trigger: parent,
      start: start,
      toggleActions: "play none none none"
    }
  });
};
// Text scramble effect
export const textScramble = (element, finalText, duration = 2) => {
  const chars = "!<>-_\\/[]{}—=+*^?#________";
  // const originalText = element.innerText;
  let frame = 0;
  const frameRate = 30;
  const frameCount = duration * frameRate;
  const update = () => {
    let output = "";
    const progress = frame / frameCount;
    for (let i = 0; i < finalText.length; i++) {
      const charProgress = Math.max(0, Math.min(1, progress * 2 - i / finalText.length));
      if (charProgress < 1) {
        output += chars[Math.floor(Math.random() * chars.length)];
      } else {
        output += finalText[i];
      }
    }
    element.innerText = output;
    frame++;
    if (frame < frameCount) {
      requestAnimationFrame(update);
    }
  };
  update();
};
// Magnetic effect for buttons and links
export const createMagneticEffect = (element, strength = 30) => {
  const el = document.querySelector(element);
  if (!el) return;
  el.addEventListener('mousemove', e => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(el, {
      x: x * strength / 100,
      y: y * strength / 100,
      duration: 0.3,
      ease: "power2.out"
    });
  });
  el.addEventListener('mouseleave', () => {
    gsap.to(el, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)"
    });
  });
};
// Parallax effect on scroll
export const createParallax = (element, speed = 0.5) => {
  return ScrollTrigger.create({
    trigger: element,
    start: "top bottom",
    end: "bottom top",
    onUpdate: self => {
      const yPos = -self.progress * speed * 100;
      gsap.set(element, {
        y: yPos
      });
    },
    scrub: true
  });
};
// Text mask reveal effect
export const textMaskReveal = (element, mask, direction = "left") => {
  const startPosition = direction === "left" ? "-100%" : "100%";
  const endPosition = "0%";
  gsap.set(mask, {
    x: startPosition
  });
  gsap.set(element, {
    opacity: 1
  });
  const tl = gsap.timeline();
  tl.to(mask, {
    x: endPosition,
    duration: 1,
    ease: "power3.inOut"
  });
  return tl;
};