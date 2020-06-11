import React, { Component } from "react";

import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";
import PersonalInfoSection from "../../components/PersonalInfoSection";
import BranchSection from "../../components/BranchSection";
import BestSection from "../../components/BestSection";
import ModalSection from "../../components/ModalSection";
import EditPersonalInfoModal from "../../components/EditPersonalInfoModal";
import EditBranchSection from "../../components/EditBranchSection";
import { Container } from "reactstrap";
import { dumy } from "./dumy";
import constants from "./constants";

class Profile extends Component {
  state = {
    products: dumy.products,
    branchList: dumy.branchList,
    userProfile: dumy.userProfile,
    isClicked: false,
    branchData: { city: "city", address: "", phone: "" },
    selectedIndex: null,
    editBranchModalIsOpen: false,
    dropdownIsOpen: false
  };

  openModal = () => {
    let isClicked = this.state.isClicked;
    isClicked = !isClicked;
    this.setState({ isClicked });
  };

  deleteButtonHandle = index => {
    let branchList = [...this.state.branchList];
    branchList = branchList.filter(list => list !== branchList[index]);
    this.setState({ branchList });
  };

  editButtonHandle = index => {
    let branchList = [...this.state.branchList];
    let branchData = { ...this.state.branchData };
    let editBranchModalIsOpen = this.state.editBranchModalIsOpen;
    let selectedIndex = this.state.selectedIndex;
    editBranchModalIsOpen = true;
    selectedIndex = index;
    branchData = branchList[index];
    this.setState({
      branchData,
      editBranchModalIsOpen,
      selectedIndex
    });
  };

  onChangeBranchModal = event => {
    let branchData = { ...this.state.branchData };
    branchData[event.target.name] = event.target.value;
    this.setState({ branchData });
  };

  dropdownIsOpenHandle = event => {
    let dropdownIsOpen = this.state.dropdownIsOpen;
    dropdownIsOpen = !dropdownIsOpen;
    this.setState({ dropdownIsOpen });
  };

  selectCityHandle = event => {
    let branchData = { ...this.state.branchData };
    let dropdownIsOpen = this.state.dropdownIsOpen;
    branchData.city = event.target.textContent;
    dropdownIsOpen = !dropdownIsOpen;
    this.setState({ branchData, dropdownIsOpen });
  };

  newBranchModalOpenHandle = () => {
    let editBranchModalIsOpen = this.state.editBranchModalIsOpen;
    editBranchModalIsOpen = true;
    this.setState({ editBranchModalIsOpen });
  };

  cancelModalButtonHandle = () => {
    let editBranchModalIsOpen = this.state.editBranchModalIsOpen;
    editBranchModalIsOpen = false;
    this.setState({ editBranchModalIsOpen });
  };

  saveModalButtonHandle = () => {
    let branchData = { ...this.state.branchData };
    let branchList = [...this.state.branchList];
    let selectedIndex = this.state.selectedIndex;
    let editBranchModalIsOpen = this.state.editBranchModalIsOpen;
    console.log(selectedIndex);
    if (selectedIndex !== null) {
      branchList[selectedIndex] = branchData;
      editBranchModalIsOpen = false;
      selectedIndex = null;
      branchData = { city: "", phone: "", address: "" };
      this.setState({
        editBranchModalIsOpen,
        selectedIndex,
        branchData,
        branchList
      });
    } else if (selectedIndex === null) {
      console.log("beww");
      branchList.push(branchData);
      editBranchModalIsOpen = false;
      branchData = { city: "City", phone: "", address: "" };
      console.log(branchList);
      console.log(branchData);
      this.setState({
        editBranchModalIsOpen,
        branchData,
        branchList
      });
    }
  };

  // saveNewBrachButtonHandle = () => {
  //   let branchData = { ...this.state.branchData };
  //   let branchList = [...this.state.branchList];
  //   let editBranchModalIsOpen = this.state.editBranchModalIsOpen;
  //   branchList.push(branchData);
  //   editBranchModalIsOpen = false;
  //   branchData = { city: "City", phone: "", address: "" };
  //   this.setState({
  //     editBranchModalIsOpen,
  //     branchData,
  //     branchList
  //   });
  // };
  render() {
    const {
      state: {
        products,
        userProfile,
        branchList,
        isClicked,
        branchData,
        dropdownIsOpen,
        editBranchModalIsOpen
      },

      openModal,
      deleteButtonHandle,
      editButtonHandle,
      dropdownIsOpenHandle,
      selectCityHandle,
      cancelModalButtonHandle,
      onChangeBranchModal,
      newBranchModalOpenHandle,
      saveModalButtonHandle
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
        {/* <Header /> */}
        <Container>
          <PersonalInfoSection
            email={userProfile.email}
            userName={userProfile.userName}
            discription={userProfile.discription}
            imageUrl={userProfile.imageUrl}
            onClick={openModal}
          />

          <BranchSection
            branchList={branchList}
            deleteButtonHandle={deleteButtonHandle}
            editButtonHandle={editButtonHandle}
            newBranchModalOpenHandle={newBranchModalOpenHandle}
          />
          <EditBranchSection
            isOpen={editBranchModalIsOpen}
            branchData={branchData}
            addressType={constants.addressType}
            addressPlaceholder={constants.addressPlaceholder}
            addressId={constants.addressId}
            addressName={constants.addressName}
            phoneType={constants.phoneType}
            phonePlaceholder={constants.phonePlaceholder}
            phoneName={constants.phoneName}
            phoneId={constants.phoneId}
            dropdownIsOpen={dropdownIsOpen}
            dropdownIsOpenHandle={dropdownIsOpenHandle}
            selectCityHandle={selectCityHandle}
            cancelModalButtonHandle={cancelModalButtonHandle}
            onChange={onChangeBranchModal}
            saveModalButtonHandle={saveModalButtonHandle}
          />
          <div className="project-container project-container--h">
            <BestSection products={products} />
          </div>
        </Container>
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}

export default Profile;
