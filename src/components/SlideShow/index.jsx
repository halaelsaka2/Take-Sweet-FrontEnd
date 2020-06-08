import React from "react";
import { Zoom } from "react-slideshow-image";
import PropTypes from "prop-types";

const images = [
  "assets/images/slider1.jpg",
  "assets/images/slider2.jpg",
  "assets/images/slider3.jpg",
  "assets/images/slider4.jpg",
];

const SlideShow = ({ width, arrows, duration }) => {
  return (
    <div className="slide-container">
      <Zoom
        {...zoomOutProperties}
        arrows={arrows}
        duration={duration}
        style={{ width: `${width}` }}
      >
        {images.map((each, index) => (
          <img key={index} alt="img" style={{ width: "100%" }} src={each} />
        ))}
      </Zoom>
    </div>
  );
};
const zoomOutProperties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: false,
};

SlideShow.propTypes = {
  width: PropTypes.string,
  arrows: PropTypes.bool,
  duration: PropTypes.number,
};

export default SlideShow;
