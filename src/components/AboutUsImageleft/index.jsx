import React from "react";
import { Row } from "reactstrap";

const AboutUsImageLeft = ({ row }) => {
  return (
    <React.Fragment>
      <div></div>
      <div class="about-us__about-us-container__middle-line__circle"></div>
      <div></div>

      <div class="about-us__about-us-container__left-img-container">
        <img
          class="about-us__about-us-container__left-img-container__left-img"
          src={row.imgSrc}
          alt=""
        />
      </div>
      <div class="about-us__about-us-container__middle-line"></div>
      <div class="about-us__about-us-container__right-contant-container">
        <div class="about-us__about-us-container__right-contant-container__right-header">
          {row.title}
        </div>
        <div class="about-us__about-us-container__right-contant-container__right-body">
          {row.text}
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutUsImageLeft;
