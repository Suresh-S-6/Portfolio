import Image from "next/image";
import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <div className="row">
        <div className="col-lg-6">
          <Image
            src="/About/Image.svg"
            alt="Picture of the author"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            width={400}
            height={300}
          />
        </div>
        <div className="col-lg-6">
          <div className="about-content-container">
            <div className="about-top">
              <h5 className="about-content-heading">Introduction</h5>
              <p className="about-content">
                As a UI/UX designer, I thrive on the intersection of creativity
                and functionality, where every pixel serves a purpose. My
                journey from commerce to design has been driven by a relentless
                curiosity and a desire to bring meaningful ideas to life. My
                ultimate goal as a designer is to make a positive impact through
                my work, enriching the lives of users and helping businesses
                thrive in an increasingly digital world.
              </p>
            </div>
            <hr />
            <div className="about-bottom">
              <h5 className="about-content-heading">Contact Information</h5>
              <div className="row">
                <div className="col-md-6">
                  <p className="about-content-subheading">Email</p>
                  <p className="about-content">pkv004433@gmail.com</p>
                </div>
                <div className="col-md-6">
                  <p className="about-content-subheading">Phone</p>
                  <p className="about-content">+91 8608122028</p>
                </div>
              </div>
            </div>
            <div className="about-links mt-3">
              <div className="linkedin-about">
                <Image
                  src="/About/LinkedIn.svg"
                  height={30}
                  width={30}
                  alt=""
                />
                <p className="mb-0">LinkedIn</p>
              </div>
              <div className="linkedin-about">
                <Image src="/About/Bento.svg" height={30} width={30} alt="" />
                <p className="mb-0">Bento</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
