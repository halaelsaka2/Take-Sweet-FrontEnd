import React from "react";
import AboutUsSection from "../../components/AboutUsSection";
import Slideshow from "../../components/SlideShow";
import BestSection from "../../components/BestSection";
import ReviewCard from "../../components/ReviewCard";

const HomePageSection = ({ AboutUsContext, companies }) => (
  <div className="project-container project-container--h">
    <AboutUsSection AboutUsContext={AboutUsContext} />
    <Slideshow />
    <BestSection companies={companies} />
    <ReviewCard />
  </div>
);

export default HomePageSection;
