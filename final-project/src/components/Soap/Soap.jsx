import React from "react";
import ButtonAnimation from "../Button/Buttons";
import "./Soap.css";
import TypewriterEffect from "../TypewriterEffect";
 
const Soap = () => {

    const texts = [
      "HANDCRAFTED ORGANIC PRODUCTS",
      "NATURALLY SOURCED INGREDIENTS",
      "ECO-FRIENDLY PACKAGING",
    ];
  return (
    <div className="container">
      <div className="video-container">
        <video autoPlay loop muted className="video">
          <source src="soap.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay">
          <p className="text-a">
            <TypewriterEffect  texts={texts}/>
          </p>
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
 