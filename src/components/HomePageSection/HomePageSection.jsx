import React from "react";
import AboutUsSection from "../../components/AboutUsSection";
import Slideshow from "../../components/SlideShow";
import BestSection from "../../components/BestSection";
import ReviewCard from "../../components/ReviewCard";
import TextSlider from "../TextSlider";

const HomePageSection = ({ AboutUsContext, companies }) => (
  <div className="project-container" id={"home"}>
    <Slideshow />
    <AboutUsSection AboutUsContext={AboutUsContext} />
    <TextSlider />
    <BestSection companies={companies} />
    <ReviewCard />
  </div>
);

export default HomePageSection;
