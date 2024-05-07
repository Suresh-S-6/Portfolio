"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
const MySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <Slider {...settings} className="slider">
      <div className="slider-content">
        {/* <Image src="/Slider-Icon.svg" height={30} width={30} alt="icon" /> */}
        User Experience Design
      </div>
      <div className="slider-content">
        {/* <Image src="/Slider-Icon.svg" height={30} width={30} alt="icon" /> */}
        User Experience Design
      </div>
      <div className="slider-content">
        {/* <Image src="/Slider-Icon.svg" height={30} width={30} alt="icon" /> */}
        User Experience Design
      </div>
      <div className="slider-content">
        {/* <Image src="/Slider-Icon.svg" height={30} width={30} alt="icon" /> */}
        User Experience Design
      </div>
      <div className="slider-content">
        {/* <Image src="/Slider-Icon.svg" height={30} width={30} alt="icon" /> */}
        User Experience Design
      </div>
      <div className="slider-content">
        {/* <Image src="/Slider-Icon.svg" height={30} width={30} alt="icon" /> */}
        User Experience Design
      </div>
      <div className="slider-content">
        {/* <Image src="/Slider-Icon.svg" height={30} width={30} alt="icon" /> */}
        User Experience Design
      </div>
      <div className="slider-content">
        {/* <Image src="/Slider-Icon.svg" height={30} width={30} alt="icon" /> */}
        User Experience Design
      </div>
      <div className="slider-content">
        {/* <Image src="/Slider-Icon.svg" height={30} width={30} alt="icon" /> */}
        User Experience Design
      </div>
      <div className="slider-content">
        {/* <Image src="/Slider-Icon.svg" height={30} width={30} alt="icon" /> */}
        User Experience Design
      </div>

      {/* Add more slides as needed */}
    </Slider>
  );
};

export default MySlider;
