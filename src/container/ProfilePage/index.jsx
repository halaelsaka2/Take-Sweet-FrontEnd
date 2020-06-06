import React from "react";
import Bestsellers from "../../components/BestSellers/index";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";

const Profile = () => {
  return (
    <React.Fragment>
      <Header />
      <Bestsellers
        products={[
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
        ]}
      />
      <Footer />
    </React.Fragment>
  );
};

export default Profile;
