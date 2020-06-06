import React from "react";
import { Zoom } from "react-slideshow-image";

const images = [
  "assets/images/slider1.jpg",
  "assets/images/slider2.jpg",
  "assets/images/slider3.jpg",
  "assets/images/slider4.jpg",
];

const zoomOutProperties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: false,
};

const Slideshow = ({ width }) => {
  return (
    <div className="slide-container">
      <Zoom {...zoomOutProperties} style={{ width: `${width}` }}>
        {images.map((each, index) => (
          <img key={index} alt="img" style={{ width: "100%" }} src={each} />
        ))}
      </Zoom>
    </div>
  );
};
export default Slideshow;
