import React, { Component } from "react";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";
import AboutUsSection from "../../components/AboutUsSection/index";
import Slideshow from "../../components/SlideShow/index";
import BestSection from "../../components/BestSection/index";
import ReviewCard from "../../components/ReviewCard/index";

class Home extends Component {
  state = {
    companies: [
      {
        id: 1,
        name: "company",
        src: "assets/images/lo.png",
      },
      {
        id: 2,
        name: "company",
        src: "assets/images/Logo.png",
      },
      {
        id: 3,
        name: "company",
        src: "assets/images/sb.png",
      },
      {
        id: 4,
        name: "company",
        src: "assets/images/Logoo.jpg",
      },
    ],
  };
  render() {
    const {
      state: { companies },
    } = this;
    return (
      <React.Fragment>
        <Header />
        <div className="project-container project-container--h">
          <AboutUsSection />
          <Slideshow />
          <BestSection companies={companies} />
          <ReviewCard />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
