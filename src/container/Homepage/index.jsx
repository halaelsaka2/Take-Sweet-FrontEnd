import React, { Component } from "react";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";
import BestSection from "../../components/BestSection";

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
          <BestSection companies={companies} />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
