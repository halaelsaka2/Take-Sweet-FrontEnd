import React, { Component } from "react";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";
import AboutUsSection from "../../components/AboutUsSection";
import Slideshow from "../../components/SlideShow";
import BestSection from "../../components/BestSection";
import ReviewCard from "../../components/ReviewCard";

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
    AboutUsContext: [
      {
        imgSrc: "assets/images/cookies6x6.jpg",
        title: "Our Shops",
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        imgSrc: "assets/images/companies.jpg",
        title: "Our Company",
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        imgSrc: "assets/images/waffle.jpeg",
        title: "Our Products",
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        imgSrc: "assets/images/cake6x6.jpg",
        title: "Our Plan",
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
    ],
  };
  render() {
    const {
      state: { companies, AboutUsContext },
    } = this;
    return (
      <React.Fragment>
        <Header />
        <div className="project-container project-container--h">
          <AboutUsSection AboutUsContext={AboutUsContext} />
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
