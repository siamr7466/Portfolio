import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
const Cursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [isActiveLink, setIsActiveLink] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    const onMouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0
      });
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3
      });
    };
    const onMouseDown = () => setIsActive(true);
    const onMouseUp = () => setIsActive(false);
    const onMouseEnterLink = () => setIsActiveLink(true);
    const onMouseLeaveLink = () => setIsActiveLink(false);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    const links = document.querySelectorAll('a, button, .cursor-pointer');
    links.forEach(link => {
      link.addEventListener('mouseenter', onMouseEnterLink);
      link.addEventListener('mouseleave', onMouseLeaveLink);
    });
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      links.forEach(link => {
        link.removeEventListener('mouseenter', onMouseEnterLink);
        link.removeEventListener('mouseleave', onMouseLeaveLink);
      });
    };
  }, []);
  useEffect(() => {
    // Update cursor appearance based on state
    if (isActiveLink) {
      gsap.to(cursorRef.current, {
        scale: 1.5,
        duration: 0.3,
        backgroundColor: 'rgba(255, 255, 255, 0)',
        border: '1px solid rgba(255, 255, 255, 0.4)'
      });
      gsap.to(followerRef.current, {
        scale: 2,
        duration: 0.3,
        backgroundColor: 'rgba(255, 255, 255, 0.1)'
      });
    } else if (isActive) {
      gsap.to(cursorRef.current, {
        scale: 0.8,
        duration: 0.3
      });
      gsap.to(followerRef.current, {
        scale: 0.8,
        duration: 0.3
      });
    } else {
      gsap.to(cursorRef.current, {
        scale: 1,
        duration: 0.3,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        border: '0px solid rgba(255, 255, 255, 0)'
      });
      gsap.to(followerRef.current, {
        scale: 1,
        duration: 0.3,
        backgroundColor: 'rgba(255, 255, 255, 0.1)'
      });
    }
  }, [isActive, isActiveLink, mousePosition]);
  return <>
      <div ref={cursorRef} className="fixed w-4 h-4 rounded-full bg-white bg-opacity-30 pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference" style={{
      left: mousePosition.x,
      top: mousePosition.y
    }}></div>
      <div ref={followerRef} className="fixed w-8 h-8 rounded-full bg-white bg-opacity-10 pointer-events-none z-40 transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference" style={{
      left: mousePosition.x,
      top: mousePosition.y
    }}></div>
    </>;
};
export default Cursor;