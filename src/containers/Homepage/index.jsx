import React from "react";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";
import AboutUsSection from "../../components/AboutUsSection";
import Slideshow from "../../components/SlideShow";
import BestSection from "../../components/BestSection";
import ReviewCard from "../../components/ReviewCard";

import constents from "./constents";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="project-container project-container--h">
        <AboutUsSection AboutUsContext={constents.AboutUsContext} />
        <Slideshow />
        <BestSection companies={constents.companies} />
        <ReviewCard />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
