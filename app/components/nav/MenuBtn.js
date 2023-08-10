import { Expo, gsap } from 'gsap';
import React, { useEffect } from 'react'

function MenuBtn({handleElementLeave,handleElementHover}) {
    useEffect(() => {
        const menuBtn = document.querySelector('.menu-btn');
        const menuBtnContents = document.querySelectorAll('.menu-content-data li');
        const tlMenuBtn = new gsap.timeline({ paused: true });
    
        tlMenuBtn.to('.menu-btn-one', 0.2, { y: 7, transformOrigin: '50% 50%', rotation: 45, ease: Expo.easeInOut }, 0.1);
        tlMenuBtn.to('.menu-btn-two', 0.2, { y: -7, transformOrigin: '50% 50%', rotation: -45, ease: Expo.easeInOut }, 0.1);
        tlMenuBtn.to('.menu-overly', 0.5, { top: '0%', ease: Expo.easeInOut }, 0.2);
        tlMenuBtn.staggerFrom('.menu-overly ul li', 0.8, { y: 20, opacity: 0, ease: Expo.easeInOut }, 0.1);
        tlMenuBtn.reverse();
    
        const toggleMenu = () => {
          tlMenuBtn.reversed(!tlMenuBtn.reversed());
        };
    
        menuBtn.addEventListener('click', toggleMenu);
    
        menuBtnContents.forEach((menuBtnContent) => {
          menuBtnContent.addEventListener('click', toggleMenu);
        });
    
        // Cleanup event listeners on unmount
        return () => {
          menuBtn.removeEventListener('click', toggleMenu);
          menuBtnContents.forEach((menuBtnContent) => {
            menuBtnContent.removeEventListener('click', toggleMenu);
          });
        };
      }, []);
  return (
    <div className="menu-btn" onMouseEnter={handleElementHover} onMouseLeave={handleElementLeave}>
    <div className="menu-btn-one"></div>
    <div className="menu-btn-two"></div>
  </div>
  )
}

export default MenuBtn