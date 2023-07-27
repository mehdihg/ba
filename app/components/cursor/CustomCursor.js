import React, { useEffect, useState, useRef } from 'react';
import './CustomCursor.css';
import { gsap } from 'gsap';

const CustomCursor = ({MouseChangeHovered}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const followerRef = useRef(null);
  const cursorRef = useRef(null);
  const loadingCRef = useRef(null);
  const dragge1Ref = useRef(null);
  const dragge2Ref = useRef(null);

  const handleMouseMove = (e) => {
    setPosition({ x: e.pageX, y: e.pageY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const animateCursor = () => {
      const posX = position.x;
      const posY = position.y;

      gsap.to(followerRef.current, {
        left: posX - 15,
        top: posY - 15,
        duration: 0.9, // Shorten the duration for smoother animation
        ease: 'power3.out',
      });

      gsap.to(cursorRef.current, {
        left: posX,
        top: posY,
        duration: 0.3, // Shorten the duration for smoother animation
        ease: 'power3.out',
      });

      gsap.to(loadingCRef.current, {
        left: posX - 15,
        top: posY - 15,
        duration: 0.2, // Shorten the duration for smoother animation
        ease: 'power3.out',
      });

      gsap.to(dragge1Ref.current, {
        left: posX - 28,
        top: posY - 6,
        duration: 0.2, // Shorten the duration for smoother animation
        ease: 'power3.out',
      });

      gsap.to(dragge2Ref.current, {
        left: posX + 20,
        top: posY - 6,
        duration: 0.2, // Shorten the duration for smoother animation
        ease: 'power3.out',
      });
    };

    const animationLoop = gsap.to({}, {
      duration: 0.016,
      repeat: -1,
      onRepeat: animateCursor,
    });

    return () => {
      animationLoop.kill(); // Clean up the GSAP animation on component unmount
    };
  }, [position]);

  return (
    <div className="cursor">
      <div className="dragge-1 cursor-dragge" ref={dragge1Ref}></div>
      <div className="dragge-2 cursor-dragge" ref={dragge2Ref}></div>
      <div className={`main-cursor ${MouseChangeHovered ?'active-a' :''}`} ref={cursorRef}></div>
      <div className={`follow-cursor ${MouseChangeHovered ?'active-a':''}`} ref={followerRef}></div>
      <div className="pace-activity" ref={loadingCRef}></div>
    </div>
  );
};

export default CustomCursor;
