import React, { Component } from "react";

import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";
import PersonalInfoSection from "../../components/PersonalInfoSection";
import BranchSection from "../../components/BranchSection";
import BestSection from "../../components/BestSection";
import { Container } from "reactstrap";

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
    userProfile: {
      email: "halaelsaka2@gmail.com",
      userName: "Nola Cafe",
      discription:
        "blablablablabalablablbalablbalbblalblablablablablablblablablabalb",
      imageUrl: "",
    },
    branchList: [
      {
        cityName: "Ismailia",
        address: "Ismailia, nemra6",
        phoneNumber: "+012 999 999 999",
      },
      {
        cityName: "Cairo",
        address: "New Cairo, tseen street",
        phoneNumber: "+012 999 999 999",
      },
      {
        cityName: "Alexandria",
        address: "mahatt el raml",
        phoneNumber: "+012 999 999 999",
      },
    ],
  };
  render() {
    const {
      state: { products, userProfile, branchList },
    } = this;
    return (
      <React.Fragment>
        <Header />
        <Container>
          <PersonalInfoSection
            email={userProfile.email}
            userName={userProfile.userName}
            discription={userProfile.discription}
            imageUrl={userProfile.imageUrl}
          />
          <BranchSection branchList={branchList} />
        </Container>
        <div className="project-container project-container--h">
          <BestSection products={products} />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Profile;

/* <BestSection
        
      /> */
