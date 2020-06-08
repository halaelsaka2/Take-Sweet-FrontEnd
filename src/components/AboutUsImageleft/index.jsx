import React from "react";
import { Row } from "reactstrap";

const AboutUsImageLeft = ({ row }) => (
  <React.Fragment>
    <div></div>
    <div className="about-us__about-us-container__middle-line__circle"></div>
    <div></div>

    <div className="about-us__about-us-container__left-img-container">
      <img
        className="about-us__about-us-container__left-img-container__left-img"
        src={row.imgSrc}
        alt=""
      />
    </div>
    <div className="about-us__about-us-container__middle-line"></div>
    <div className="about-us__about-us-container__right-contant-container">
      <div className="about-us__about-us-container__right-contant-container__right-header">
        {row.title}
      </div>
      <div className="about-us__about-us-container__right-contant-container__right-body">
        {row.text}
      </div>
    </div>
  </React.Fragment>
);

export default AboutUsImageLeft;
