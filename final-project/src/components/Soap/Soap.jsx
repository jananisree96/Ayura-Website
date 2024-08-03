import React from "react";
import ButtonAnimation from "../Button/Buttons";
import "./Soap.css"; 

const Soap = () => {
  return (
    <div className="container">
      <div className="video-container">
        <video autoPlay loop className="video">
          <source src="soap.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay">
          <p className="text-a">HANDCRAFTED ORGANIC SOAPS</p>
          <p className="text-b">
            JUST LIKE NATURE
            <br /> INTENDED
          </p>
          <div className="button-container">
            <ButtonAnimation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Soap;
