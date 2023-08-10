import React, { useEffect, useRef, useState } from "react";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import Image from "next/image";
import { Poppins } from "next/font/google";
import firstSlide from "../../(user)/assets/images/2.jpg";
import secondSlide from "../../(user)/assets/images/11.jpg";
import thirdSlide from "../../(user)/assets/images/16.jpg";
import "./Slider.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ProductBtn from "./ProductBtn";
const popins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export default function MainSlider() {









  const flickityOptions = {
    imagesLoaded: true,
    percentPosition: false,
    cellAlign: "center",
    contain: true,
    wrapAround: true,
    accessibility: true,
    pageDots: false,
    prevNextButtons: false,
    autoPlay: 6000,
    pauseAutoPlayOnHover: false,
    arrowShape: {
      x0: 10,
      x1: 60,
      y1: 50,
      x2: 60,
      y2: 45,
      x3: 15,
    },
    fade:true,
    selectedAttraction: 0.01,
friction: 0.2
  };

      
  return (
    <div className="main">

        <Flickity className="home-carousel-main"
              
              elementType={'div'} // default 'div'
              options={flickityOptions} // takes flickity options {}
              disableImagesLoaded={false}
        >
        <div className="home-carousel-cell">
                <Image src={firstSlide} fill={true} />

                <div className="home-carousel-content"
                
                >
                  <p>01</p>
                  <h3>Model</h3>
                  <h2>
                    <a href="#Glasses" className={popins.className}>
                      CheshmBand
                    </a>
                  </h2>
                </div>
              </div>
              <div className="home-carousel-cell">
                <Image src={secondSlide} fill={true} />

                <div className="home-carousel-content"

                >
                  <p>01</p>
                  <h3>Model</h3>
                  <h2>
                    <a href="#Glasses" className={popins.className}>
                      Mochband
                    </a>
                  </h2>
                </div>
              </div>
              <div className="home-carousel-cell">
                <Image src={thirdSlide} fill={true} />
                
                <div className="home-carousel-content"
   
                >
                  <p>01</p>
                  <h3>Model</h3>
                  <h2>
                    <a href="#Glasses" className={popins.className}>
                      Polband
                    </a>
                  </h2>
                </div>
              </div>
             
        </Flickity>
  



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
      <ProductBtn/>
    </div>
  );
}
