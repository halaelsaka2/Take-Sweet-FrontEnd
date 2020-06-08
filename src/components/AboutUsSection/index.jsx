import React from "react";
import AboutUsImageLeft from "../AboutUsImageleft";
import AboutUsImageRight from "../AboutUsImageRight";
const AboutUsSection = ({ AboutUsContext }) => {
  console.log(AboutUsContext);
  return (
    <div className="about-us">
      <div className="about-us__header">About Us</div>
      <div className="about-us__about-us-container">
        {AboutUsContext.map((row) =>
          AboutUsContext.indexOf(row) % 2 === 0 ? (
            <AboutUsImageLeft row={row} />
          ) : (
            <AboutUsImageRight row={row} />
          )
        )}
      </div>
    </div>
  );
};
export default AboutUsSection;
