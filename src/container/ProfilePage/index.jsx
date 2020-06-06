import React from "react";
import Bestsellers from "../../components/BestSellers/index";

const Profile = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default Profile;
