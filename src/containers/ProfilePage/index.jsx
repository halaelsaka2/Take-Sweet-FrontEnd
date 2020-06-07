import React, { Component } from "react";

import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";
import BestSection from "../../components/BestSection";

class Profile extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "product",
        src: "assets/images/Product-1.jpg",
      },
      {
        id: 2,
        name: "product",
        src: "assets/images/Product-1.jpg",
      },
      {
        id: 3,
        name: "product",
        src: "assets/images/Product-1.jpg",
      },
      {
        id: 4,
        name: "product",
        src: "assets/images/Product-1.jpg",
      },
    ],
  };
  render() {
    const {
      state: { products },
    } = this;
    return (
      <React.Fragment>
        <Header />
        <div className="project-container project-container--h">
          <BestSection products={products} />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Profile;

{
  /* <BestSection
        
      /> */
}
