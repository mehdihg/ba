"use client";
import React, { useEffect, useRef, useState } from "react";
import { Expo, gsap } from "gsap";
import Link from "next/link";
import "./LogoBand.css";

function LogoBand({handleElementHover,handleElementLeave}) {
    const [isHovered, setIsHovered] = useState(false);
    const logoBandRef = useRef(null);
    const letterBRef = useRef(null);
    const pointBRef = useRef(null);
    const letterDRef = useRef(null);
    const letterNRef = useRef(null);
    const pointNRef = useRef(null);
    useEffect(() => {
        // GSAP timeline for the logoBand animations
        const tlLogoBand = gsap.timeline({ paused: true });
    
        tlLogoBand.to(
          letterBRef.current,
          {
            height: "20px",
            width: "20px",
            right: -30,
            opacity: 1,
            ease: Expo.easeInOut,
          },
          "set"
        );
    
        tlLogoBand.to(
          pointBRef.current,
          {
            right: -24,
            top: 7,
            opacity: 1,
            ease: Expo.easeInOut,
          },
          "set"
        );
    
        tlLogoBand.to(
          letterDRef.current,
          {
            height: "20px",
            width: "20px",
            right: 30,
            opacity: 1,
            ease: Expo.easeInOut,
          },
          "set"
        );
    
        tlLogoBand.to(
          letterNRef.current,
          {
            height: "20px",
            width: "20px",
            right: 0,
            opacity: 1,
            ease: Expo.easeInOut,
          },
          "set"
        );
    
        tlLogoBand.to(
          pointNRef.current,
          {
            right: 7,
            top: 7,
            opacity: 1,
            ease: Expo.easeInOut,
          },
          "set"
        );
    
        // Save the timeline in the logoBandRef for future use
        logoBandRef.current.tlLogoBand = tlLogoBand;
      }, []);
    
      // Function to handle the mouse enter event
      const onMouseEnterHandler = () => {
        setIsHovered(true);
        handleElementHover()
      };
    
      // Function to handle the mouse leave event
      const onMouseLeaveHandler = () => {
        setIsHovered(false);
        handleElementLeave()
      };
    
      useEffect(() => {
        // Play or reverse the timeline based on the hover state
        if (logoBandRef.current.tlLogoBand) {
          if (isHovered) {
            logoBandRef.current.tlLogoBand.play();
          } else {
            logoBandRef.current.tlLogoBand.reverse();
          }
        }
      }, [isHovered]);
    
      return (
        <div>
          <Link href="/">
            <div
              className="logo-band cursor-link"
              onMouseEnter={onMouseEnterHandler}
              onMouseLeave={onMouseLeaveHandler}
              ref={logoBandRef}
              
            >
              <div className="letter-b" ref={letterBRef}></div>
              <div className="letter-n" ref={letterNRef}></div>
              <div className="letter-d" ref={letterDRef}></div>
              <div className="point-b" ref={pointBRef}></div>
              <div className="point-n" ref={pointNRef}></div>
            </div>
          </Link>
        </div>
      );
}

export default LogoBand