import React from "react";
import Bestsellers from "../../components/BestSellers/index";
<<<<<<< Updated upstream
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";
=======
import Header from "../../components/Layouts/Header/index";
import Footer from "../../components/Layouts/Footer/index";
>>>>>>> Stashed changes

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
