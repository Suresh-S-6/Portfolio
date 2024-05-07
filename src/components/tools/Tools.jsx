import Image from "next/image";
import React from "react";
import "./Tools.css";
const Tools = () => {
  return (
    <div>
      <h2>Tools I Use with Ease</h2>
      <p className="text-center mb-5">
        I have gained proficiency in a diverse array of tools, equipping me to
        craft robust and innovative solutions.
      </p>
      <div className="row ">
        <div className="col-md-6">
          <div className="tool-container">
            <Image src="/Tools/Figma.svg" height={80} width={80} alt="figma" />
            <h6>Figma</h6>
            <p>
              Figma serves as our collaborative design playground, facilitating
              seamless teamwork and iteration. With its powerful features for
              prototyping and UI design, we craft visually stunning interfaces
              while maintaining consistency and efficiency throughout the design
              process.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="tool-container">
            <Image
              src="/Tools/Adobe-Illustrator.svg"
              height={80}
              width={80}
              alt="figma"
            />
            <h6>Adobe Illustrator</h6>
            <p>
              Adobe Illustrator is our go-to tool for vector graphics,
              empowering us to create scalable illustrations and customize
              designs with precision. Our vector graphics powerhouse, enabling
              precise and scalable designs effortlessly while unleashing
              boundless creativity.
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6 col-lg-4">
          <div className="tool-container">
            <Image src="/Tools/Canva.svg" height={80} width={80} alt="figma" />
            <h6>Canva</h6>
            <p>
              Canva: Simplifies our design process with its user-friendly
              platform, offering a variety of templates and tools for creating
              eye-catching graphics.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="tool-container">
            <Image
              src="/Tools/Adobe-XD.svg"
              height={80}
              width={80}
              alt="figma"
            />
            <h6>Adobe XD</h6>
            <p>
              Adobe XD: Our UX/UI design tool of choice for crafting captivating
              interfaces with ease, Crafting captivating interfaces is a breeze
              with its intuitive features.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="tool-container">
            <Image
              src="/Tools/Adobe-Photoshop.svg"
              height={80}
              width={80}
              alt="figma"
            />
            <h6>Adobe Photoshop</h6>
            <p>
              Photoshop: The ultimate tool for image editing and graphic design.
              With its versatile features, we create stunning visuals and
              manipulate images with precision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
