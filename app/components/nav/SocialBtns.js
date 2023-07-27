import React, { useEffect, useRef } from 'react';
import './SocialBtn.css';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';

import { gsap } from "gsap";
import { Expo } from "gsap/all";

function SocialBtns({handleElementHover,handleElementLeave}) {
  const socialMediaRef = useRef(null);
  const tlsocialMediaRef = useRef(null);

  useEffect(() => {
    const tlsocialMedia = gsap.timeline({ paused: true });

    tlsocialMedia.to(
      ".social-media-btn",
      
      {
        duration:0.2,
        // y: 5,
        // x: -13,
        // rotation: 90,
        y: 7,
        x: -7,
        transformOrigin: "50% , 50%",
        rotation: 45,
        ease: Expo.easeInOut,
      },
      0.1
    );

    tlsocialMedia.to(
      ".social-media-data a",
    
      {duration:0.5 ,y: -235, opacity: 1, ease: Expo.easeOut,stagger:0.3 },
      
    );

    tlsocialMedia.reverse();

    socialMediaRef.current.addEventListener("click", () => {
      tlsocialMedia.reversed(!tlsocialMedia.reversed());
    });

    tlsocialMediaRef.current = tlsocialMedia;
  }, []);

  return (
    <div className="social-media" ref={socialMediaRef} onMouseEnter={handleElementHover} onMouseLeave={handleElementLeave}>
      <div className="social-media-btn cursor-link" >
        <div className="social-media-btn-one"></div>
        <div className="social-media-btn-two"></div>
      </div>
      <div className="social-media-data">
        <a href="#" className="social-media-data-icon">
          <FaTwitter />
        </a>
        <a href="#" className="social-media-data-icon">
          <FaInstagram />
        </a>
        <a href="#" className="social-media-data-icon">
          <FaTelegramPlane />
        </a>
      </div>
    </div>
  );
}

export default SocialBtns;
