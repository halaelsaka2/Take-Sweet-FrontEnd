import React, { Component } from "react";

import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";
import PersonalInfoSection from "../../components/PersonalInfoSection";
import BranchSection from "../../components/BranchSection";
import BestSection from "../../components/BestSection";
import ModalSection from "../../components/ModalSection";
import EditPersonalInfoModal from "../../components/EditPersonalInfoModal";
import { Container } from "reactstrap";
import { dumy } from "./dumy";

class Profile extends Component {
  state = {
    products: dumy.products,
    branchList: dumy.branchList,
    userProfile: dumy.userProfile,
    isClicked: false,
  };

  openModal = () => {
    let isClicked = this.state.isClicked;
    isClicked = !isClicked;
    this.setState({ isClicked });
  };
  render() {
    const {
      state: { products, userProfile, branchList, isClicked },
      openModal,
    } = this;
    return (
      <React.Fragment>
        {isClicked && (
          <ModalSection isClicked={isClicked}>
            <EditPersonalInfoModal
              isClicked={isClicked}
              userName={userProfile.userName}
              email={userProfile.email}
              discription={userProfile.discription}
              imageUrl={userProfile.imageUrl}
            />
          </ModalSection>
        )}
        <Header />
        <Container>
          <PersonalInfoSection
            email={userProfile.email}
            userName={userProfile.userName}
            discription={userProfile.discription}
            imageUrl={userProfile.imageUrl}
            onClick={openModal}
          />

          <BranchSection branchList={branchList} />
          <div className="project-container project-container--h">
            <BestSection products={products} />
          </div>
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Profile;

/* <BestSection
        
      /> */
