import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import MyWorks from "@/components/myWorks/MyWorks";
import Skills from "@/components/skills/Skills";
import Slider from "@/components/slider/Slider";
import Tools from "@/components/tools/Tools";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <Slider />
      <div className="container">
        <Skills />
        <About />
        <Tools />
        <MyWorks />
      </div>
    </div>
  );
};

export default page;
