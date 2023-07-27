import React, { useEffect } from 'react';
import Link from 'next/link';
import { gsap, TimelineMax, Expo } from 'gsap';
import './NavBtns.css'
import { Poppins } from 'next/font/google'
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
const popins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '700','900'],
  display: 'swap'
  
})
const NavBtns = ({handleElementLeave,handleElementHover}) => {

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
    <>
      <div className="navbar-btn cursor-link">
        <div className="menu-btn" onMouseEnter={handleElementHover} onMouseLeave={handleElementLeave}>
          <div className="menu-btn-one"></div>
          <div className="menu-btn-two"></div>
        </div>
        <Link href="./cart">
          <div className="cart-btn cursor-link" onMouseEnter={handleElementHover} onMouseLeave={handleElementLeave}>
            <div className="cart-btn-one"></div>
            <div className="cart-btn-two"></div>
            <div className="cart-btn-badges">
              <p className="cart-btn-badges-counter">0</p>
            </div>
          </div>
        </Link>
      </div>

      <div className="menu-overly">
        <div className="menu-data row">
          <div className="menu-col-data">
            <ul className="menu-content-data">
              <li className={popins.className}>Navigation</li>
              <li>
                <Link href="./" className={`${"aaa"} ${popins.className}`} onMouseEnter={handleElementHover} onMouseLeave={handleElementLeave}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="./products" className={`${"aaa pro"} ${popins.className}`} onMouseEnter={handleElementHover} onMouseLeave={handleElementLeave}>
                  Products
                </Link>
              </li>
              <li>
                <Link href="./collections" className={`${"aaa coll"} ${popins.className}`} onMouseEnter={handleElementHover} onMouseLeave={handleElementLeave}> 
                  Collections
                </Link>
              </li>
              <li>
                <Link href="#" className={`${"aaa"} ${popins.className}`} onMouseEnter={handleElementHover} onMouseLeave={handleElementLeave}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="./about" className={`${"aaa"} ${popins.className}`} onMouseEnter={handleElementHover} onMouseLeave={handleElementLeave}>
                  About
                </Link>
              </li>
              <li>
                <Link href="./contact" className={`${"aaa"} ${popins.className}`} onMouseEnter={handleElementHover} onMouseLeave={handleElementLeave}>
                  Contact
                </Link>
              </li>
              <li className="menu-language">
                <Link href="#" className={`${"aaa menu-language"} ${popins.className}`} onMouseEnter={handleElementHover} onMouseLeave={handleElementLeave}>
                  EN
                </Link>
                <Link href="#" className={`${"aaa menu-language"} ${popins.className}`} onMouseEnter={handleElementHover} onMouseLeave={handleElementLeave}>
                  العربية
                </Link>
                <Link href="#" className={`${"aaa menu-language"} ${popins.className}`} onMouseEnter={handleElementHover} onMouseLeave={handleElementLeave}>
                  فا
                </Link>
              </li>
            </ul>
          </div>

          <div className="menu-col-address">
            <ul className="menu-content-address">
              <li>Let’s talk</li>
              <li>
                <a href="#" className={`${"aaaa"} ${popins.className}`}>
                  info@dar.band
                </a>
              </li>
              <li className={popins.className}>+98 990 011 5787</li>
              <li className="menu-social-media-data-icon">
                <a href="#" className="menu-social-media-data-icon" onMouseEnter={handleElementHover} onMouseLeave={handleElementLeave}>
                  <FaTwitter/>
                </a>
                <a href="#" className="menu-social-media-data-icon" onMouseEnter={handleElementHover} onMouseLeave={handleElementLeave}>
                  <FaInstagram/>
                </a>
                <a href="#" className="menu-social-media-data-icon" onMouseEnter={handleElementHover} onMouseLeave={handleElementLeave}>
                  <FaTelegramPlane/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBtns;
