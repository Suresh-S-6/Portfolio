import React from "react";
import Header from "../header/Header";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand } from "@fortawesome/free-solid-svg-icons";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <Header />
        <div className="hero-content-container">
          <Image
            src="/Hero/Hero-Image.svg"
            alt="image"
            width={100}
            height={90}
          />
          <div className="vignesh-text">
            <p className="d-flex gap-3">
              <FontAwesomeIcon
                icon={faHand}
                style={{ color: "#FFD43B", width: "19px" }}
                className="shake-icon"
              />
              Vignesh Welcome&apos;s You
            </p>{" "}
            {/* Added hand wave icon */}
          </div>
          <h1 className="hero-heading">
            Elevate Your Digital Experience with Innovative Design
          </h1>
          <p className="hero-content">
            I am a passionate and experienced UI/UX designer, committed to
            crafting visually captivating and intuitively functional digital
            experiences. Explore my portfolio to witness the transformative
            power of effective design in action.
          </p>
          <button className="c-btn">Design Showcase</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
