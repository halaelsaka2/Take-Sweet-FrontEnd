import React from "react";

const AboutUsImageRight = ({ row }) => {
  return (
    <React.Fragment>
      <div></div>
      <div class="about-us__about-us-container__middle-line__circle"></div>
      <div></div>

      <div class="about-us__about-us-container__left-contant-container">
        <div class="about-us__about-us-container__left-contant-container__left-header">
          {row.title}
        </div>
        <div class="about-us__about-us-container__left-contant-container__left-body">
          {row.text}
        </div>
      </div>
      <div class="about-us__about-us-container__middle-line__bottom"></div>
      <div class="about-us__about-us-container__right-img-container">
        <img
          class="about-us__about-us-container__right-img-container__right-img"
          src={row.imgSrc}
          alt=""
        />
      </div>
    </React.Fragment>
  );
};

export default AboutUsImageRight;
