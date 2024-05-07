"use client";
import React, { useState } from "react";
import PetApp from "../../../public/MyWorks/pet-app.svg";
import AIApp from "../../../public/MyWorks/Ai-App.svg";
import TravelApp from "../../../public/MyWorks/Travel-App.svg";
import "./MyWorks.css";
import Image from "next/image";

const MyWorksData = [
  {
    id: 1,
    image: PetApp,
    title: "Pet app UI Screen",
  },

  {
    id: 2,
    image: AIApp,
    title: "AI Robot Market app UI Screen",
  },
  {
    id: 3,
    image: TravelApp,
    title: "Traveling app UI Screen",
  },
  {
    id: 4,
    image: PetApp,
    title: "Smart Home app UI Screen",
  },
  {
    id: 5,
    image: PetApp,
    title: "Creative agency Website landing page",
  },
  {
    id: 6,
    image: PetApp,
    title: "Skill Bridge Website Design",
  },
  {
    id: 7,
    image: PetApp,
    title: "Pet app UI Screen",
  },
  {
    id: 8,
    image: PetApp,
    title: "Pet app UI Screen",
  },
];

const MyWorks = () => {
  const [showMore, setShowMore] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState("");

  const openPopup = (image, title) => {
    setSelectedImage(image);
    setSelectedTitle(title);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const filteredData = showMore ? MyWorksData : MyWorksData.slice(0, 6);

  return (
    <div className="my-works">
      <h2>My Works</h2>
      <p className="my-works-content text-center mt-4 mb-5">
        Witness the brilliance of our previous projects. Our portfolio showcases
        the successful collaborations we&apos;ve had with diverse clients across
        various industries. Let our work speak for itself.
      </p>
      <div className="row">
        {filteredData.map((item) => (
          <div className="col-lg-4 col-md-4 col-sm-12" key={item.id}>
            <div className="my-works-container">
              <h6 className="mb-3">{item.title}</h6>
              <div
                className="my-works-image-container"
                onClick={() => openPopup(item.image, item.title)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "20px",
                  }}
                  width={500}
                  height={300}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      {MyWorksData.length > 6 && (
        <div className="text-center d-flex justify-content-center">
          <button
            className="c-btn d-flex align-items-center justify-content-center"
            onClick={toggleShowMore}
          >
            {showMore ? "Show Less" : "Show More"}
            <Image src="/Button-Icon.png" height={34} width={34} alt="button" />
          </button>
        </div>
      )}
      {showPopup && (
        <div className="popup-container" onClick={closePopup}>
          <div className="popup">
            <div className="popup-image-container">
              <Image
                src={selectedImage}
                alt={selectedTitle}
                width={800}
                height={600}
              />
              <button className="close-btn" onClick={closePopup}>
                X Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyWorks;
