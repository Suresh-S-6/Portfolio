import React from "react";
import "./Skills.css";
import Image from "next/image";
const Skills = () => {
  return (
    <div className="skills">
      <h2 className="text-center">My Skills and Expertise</h2>
      <p className="text-center skills-main-content">
        Unlock the potential of your projects with my design expertise. From
        graphic design to user experience, I bring a range of skills to the
        table, ensuring impactful and memorable design solutions for every
        challenge.
      </p>
      <div className="row">
        {" "}
        {/* skill 1 */}
        <div className="col-lg-4 col-md-6">
          <div className="skills-container">
            <div className="skills-icon-circle">
              <Image
                src="/Skills/Modern-Design.svg"
                height={40}
                width={40}
                alt="design"
              />
            </div>
            <p className="skills-heading">Modern Design Trends</p>
            <p className="skills-content">
              Creating visually appealing designs that stay current with
              contemporary trends.
            </p>
          </div>
        </div>
        {/* skill 2 */}
        <div className="col-lg-4 col-md-6">
          <div className="skills-container">
            <div className="skills-icon-circle">
              <Image
                src="/Skills/Modern-Design.svg"
                height={40}
                width={40}
                alt="design"
              />
            </div>
            <p className="skills-heading">Modern Design Trends</p>
            <p className="skills-content">
              Creating visually appealing designs that stay current with
              contemporary trends.
            </p>
          </div>
        </div>
        {/* skill 3 */}
        <div className="col-lg-4 col-md-6">
          <div className="skills-container">
            <div className="skills-icon-circle">
              <Image
                src="/Skills/Customised-designs.svg"
                height={40}
                width={40}
                alt="design"
              />
            </div>
            <p className="skills-heading">Customized Designs</p>
            <p className="skills-content">
              Crafting unique designs tailored to each project&apos;s individual
              vision and requirements.
            </p>
          </div>
        </div>
        <hr className="hr-tag" />
        {/* skill 4 */}
        <div className="col-lg-4 col-md-6">
          <div className="skills-container">
            <div className="skills-icon-circle">
              <Image
                src="/Skills/Mobile-Friendly.svg"
                height={40}
                width={40}
                alt="design"
              />
            </div>
            <p className="skills-heading">Mobile-Friendly Design</p>
            <p className="skills-content">
              Creating visually appealing designs that stay current with
              contemporary trends.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="skills-container">
            <div className="skills-icon-circle">
              <Image
                src="/Skills/Strategic-Desgin.svg"
                height={40}
                width={40}
                alt="design"
              />
            </div>
            <p className="skills-heading">Strategic Design Thinking</p>
            <p className="skills-content">
              Utilizing data-driven insights to achieve both aesthetic and
              business objectives.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="skills-container">
            <div className="skills-icon-circle">
              <Image
                src="/Skills/User-Focused.svg"
                height={40}
                width={40}
                alt="design"
              />
            </div>
            <p className="skills-heading">User-Focused Design</p>
            <p className="skills-content">
              Placing users at the forefront to ensure intuitive and accessible
              design solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
