import React from "react";
import AboutUsImageLeft from "../AboutUsImageleft";
import AboutUsImageRight from "../AboutUsImageRight";

const AboutUsSection = ({ AboutUsContext }) => (
  <div className="about-us">
    <div className="about-us__header">About Us</div>
    <div className="about-us__about-us-container">
      {AboutUsContext.map((row) =>
        AboutUsContext.indexOf(row) % 2 === 0 ? (
          <AboutUsImageLeft row={row} key={row.title} />
        ) : (
          <AboutUsImageRight row={row} key={row.title} />
        )
      )}
    </div>
  </div>
);

export default AboutUsSection;
