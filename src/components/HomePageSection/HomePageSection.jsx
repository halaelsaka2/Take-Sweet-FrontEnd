import React from "react";
import AboutUsSection from "../../components/AboutUsSection";
import Slideshow from "../../components/SlideShow";
import BestSection from "../../components/BestSection";
import ReviewCard from "../../components/ReviewCard";
import TextSlider from "../TextSlider";

const HomePageSection = ({ AboutUsContext, companies }) => (
  <div className="project-container">
    <TextSlider />
    <AboutUsSection AboutUsContext={AboutUsContext} />
    <Slideshow />
    <BestSection companies={companies} />
    <ReviewCard />
  </div>
);

export default HomePageSection;
