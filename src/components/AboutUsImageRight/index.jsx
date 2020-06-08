import React from "react";

const AboutUsImageRight = ({ row }) => (
  <React.Fragment>
    <div></div>
    <div className="about-us__about-us-container__middle-line__circle"></div>
    <div></div>

    <div className="about-us__about-us-container__left-contant-container">
      <div className="about-us__about-us-container__left-contant-container__left-header">
        {row.title}
      </div>
      <div className="about-us__about-us-container__left-contant-container__left-body">
        {row.text}
      </div>
    </div>
    <div className="about-us__about-us-container__middle-line__bottom"></div>
    <div className="about-us__about-us-container__right-img-container">
      <img
        className="about-us__about-us-container__right-img-container__right-img"
        src={row.imgSrc}
        alt=""
      />
    </div>
  </React.Fragment>
);

export default AboutUsImageRight;
