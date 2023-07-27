import React, { useEffect, useRef, useState } from "react";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import Image from "next/image";
import { Poppins } from "next/font/google";
import firstSlide from "../../(user)/assets/images/2.jpg";
import secondSlide from "../../(user)/assets/images/11.jpg";
import thirdSlide from "../../(user)/assets/images/16.jpg";
import { motion,useAnimation } from "framer-motion";
import "./Slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const popins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export default function MainSlider() {




  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 2500,

  };

      const container = {
        hidden: { y: 20, opacity: 0 },
        show: {
          y: 0,
          opacity: 1,
          transition: {
            ease: [0.17, 0.40, 0.67, 0.83],
          },
        },
      };




      
  return (
    <div className="main">

        <Slider {...settings} className="home-carousel-main" >
        <div className="home-carousel-cell">
                <Image src={firstSlide} fill={true} />

                <motion.div className="home-carousel-content"
                variants={container}
                initial="hidden"
                animate={"show"}
                >
                  <p>01</p>
                  <h3>Model</h3>
                  <h2>
                    <a href="#Glasses" className={popins.className}>
                      CheshmBand
                    </a>
                  </h2>
                </motion.div>
              </div>
              <div className="home-carousel-cell">
                <Image src={secondSlide} fill={true} />

                <motion.div className="home-carousel-content"
                variants={container}
                initial="hidden"
                animate={"show"}
                >
                  <p>01</p>
                  <h3>Model</h3>
                  <h2>
                    <a href="#Glasses" className={popins.className}>
                      CheshmBand
                    </a>
                  </h2>
                </motion.div>
              </div>
              <div className="home-carousel-cell">
                <Image src={thirdSlide} fill={true} />
                
                <motion.div className="home-carousel-content"
                variants={container}
                initial="hidden"
                animate={"show"}
                >
                  <p>01</p>
                  <h3>Model</h3>
                  <h2>
                    <a href="#Glasses" className={popins.className}>
                      CheshmBand
                    </a>
                  </h2>
                </motion.div>
              </div>

        </Slider>
  



      {/**/ }

      <div className="home-carousel-option">
        <div className="home-carousel-button-arrow home-carousel-button-previous" >
          <div className="home-carousel-button-left-icon"></div>
        </div>
        <div className="home-carousel-status-counter-wrapper">
          <span>0</span>
          <span className="home-carousel-status">1</span>
        </div>

        <div className="home-carousel-progress-bar-back">
          <div className="home-carousel-progress-bar" ></div>
        </div>

        <div className="home-carousel-status-length-wrapper">
          <span>0</span>
          <span className="home-carousel-status-length">2</span>
        </div>

        <div className="home-carousel-button-arrow home-carousel-button-next" >
          <div className="home-carousel-button-right-icon"></div>
        </div>
      </div>
    </div>
  );
}
