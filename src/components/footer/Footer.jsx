import Image from "next/image";
import React from "react";
import instagram from "../../../public/icon/Instagram.svg";
import LinkedIn from "../../../public/icon/LinkedIn.svg";
import Twitter from "../../../public/icon/Twitter.svg";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="d-flex justify-content-center gap-4">
          <Image
            src={LinkedIn}
            height={60}
            width={60}
            className="footer-icons"
          />
          <Image
            src={instagram}
            height={60}
            width={60}
            className="footer-icons"
          />
          <Image
            src={Twitter}
            height={60}
            width={60}
            className="footer-icons"
          />
        </div>
        <h3 className="text-center">Thank You!</h3>
        <p className="text-center">
          Thank you for visiting my portfolio website! Your interest and support
          mean the world to me. If you have any inquiries or would like to
          collaborate, feel free to reach out. Looking forward to connecting
          with you!
        </p>
      </div>
    </div>
  );
};

export default Footer;
