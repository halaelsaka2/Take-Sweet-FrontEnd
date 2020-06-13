import React, { Component } from "react";

import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";
import PersonalInfoSection from "../../components/PersonalInfoSection";
import BranchSection from "../../components/BranchSection";
import BestSection from "../../components/BestSection";
import ModalSection from "../../components/ModalSection";
import EditPersonalInfoModal from "../../components/EditPersonalInfoModal";
import EditBranchSection from "../../components/EditBranchSection";
import EditPasswordModal from "../../components/EditPasswordModal";
import PaymentType from "../../components/PaymentType";
import { Container } from "reactstrap";
import { dumy } from "./dumy";
import constants from "./constants";
import EditPaymentType from "../../components/EditPaymentTypeModal";
import HistoryIcon from "../../components/HistoryIcon";
import ShoppingCart from "../../components/ShoppingCart";
import ShoppingOrderContainer from "../../components/ShoppingOrderSection";
import ProductCardsSection from "../../components/ProductCardsSection";

class Profile extends Component {
  state = {
    products: dumy.products,
    branchList: dumy.branchList,
    userProfile: dumy.userProfile,
    paymentTypes: dumy.paymentTypes,
    isPersonalInfoModalOpen: false,
    isPasswordModalOpen: false,
    isPaymentTypeOpen: false,
    branchData: { city: "city", address: "", phone: "" },
    selectedIndex: null,
    editBranchModalIsOpen: false,
    dropdownIsOpen: false,
  };

  deleteButtonHandle = (index) => {
    let branchList = [...this.state.branchList];
    branchList = branchList.filter((list) => list !== branchList[index]);
    this.setState({ branchList });
  };

  editButtonHandle = (index) => {
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
      selectedIndex,
    });
  };

  onChangeBranchModal = (event) => {
    let branchData = { ...this.state.branchData };
    branchData[event.target.name] = event.target.value;
    this.setState({ branchData });
  };

  dropdownIsOpenHandle = (event) => {
    let dropdownIsOpen = this.state.dropdownIsOpen;
    dropdownIsOpen = !dropdownIsOpen;
    this.setState({ dropdownIsOpen });
  };

  selectCityHandle = (event) => {
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
        branchList,
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
        branchList,
      });
    }
  };

  ///////////personalInfoModal///////
  togglePersonalModal = () => {
    let isPersonalInfoModalOpen = this.state.isPersonalInfoModalOpen;
    isPersonalInfoModalOpen = !isPersonalInfoModalOpen;
    this.setState({ isPersonalInfoModalOpen });
  };
  openPersonalModal = () => {
    this.togglePersonalModal();
  };
  savePersonalInfoModal = () => {
    console.log("save Data in Personal info modal");
    this.togglePersonalModal();
  };
  cancelPersonalInfoModal = () => {
    console.log("closed Personal info modal");
    this.togglePersonalModal();
  };
  changePersonalInfoModal = () => {
    console.log("change in Personal info modal");
  };

  //////////////PasswordModal///////
  togglePasswordModal = () => {
    let isPasswordModalOpen = this.state.isPasswordModalOpen;
    isPasswordModalOpen = !isPasswordModalOpen;
    this.setState({ isPasswordModalOpen });
  };
  openPasswordModal = () => {
    this.togglePersonalModal();
    this.togglePasswordModal();
  };

  changePasswordModal = () => {
    console.log("change Password modal");
  };

  savePasswordModal = () => {
    console.log("save Password Modal");
    this.togglePasswordModal();
    this.togglePersonalModal();
  };

  cancelPasswordModal = () => {
    console.log("Close Password Modal");
    this.togglePersonalModal();
    this.togglePasswordModal();
  };

  /////////PaymentTypeModal///////////
  togglePaymentModal = () => {
    let isPaymentTypeOpen = this.state.isPaymentTypeOpen;
    isPaymentTypeOpen = !isPaymentTypeOpen;
    this.setState({ isPaymentTypeOpen });
  };
  openPaymentModal = () => {
    this.togglePaymentModal();
  };
  changePaymentTypeModal = () => {
    console.log("change PaymentType Modal");
  };
  savePaymentTypeModal = () => {
    console.log("Save PaymentType Modal");
    this.togglePaymentModal();
  };
  cancelPaymentTypeModal = () => {
    console.log("Cancel PaymentType Modal");
    this.togglePaymentModal();
  };

  /////////////Shopping Cart Icon/////////
  // openShoppingBag = () => {
  //   let isShoppingIconHidden = this.state.isShoppingIconHidden;
  //   isShoppingIconHidden = !isShoppingIconHidden;
  //   let isShoppingBagOpen = this.state.isShoppingBagOpen;
  //   isShoppingBagOpen = !isShoppingBagOpen;
  //   this.setState({ isShoppingIconHidden, isShoppingBagOpen });
  // };

  // closeShoppingBag = () => {
  //   let isShoppingIconHidden = this.state.isShoppingIconHidden;
  //   isShoppingIconHidden = !isShoppingIconHidden;
  //   let isShoppingBagOpen = this.state.isShoppingBagOpen;
  //   isShoppingBagOpen = !isShoppingBagOpen;
  //   this.setState({ isShoppingIconHidden, isShoppingBagOpen });
  // };
  // openProductsCardModal = () => {
  //   console.log("beo");

  //   let isProductCardModalOpen = this.state.isProductCardModalOpen;
  //   isProductCardModalOpen = !isProductCardModalOpen;
  //   this.setState({ isProductCardModalOpen });
  // };
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
      isShoppingIconHidden,
      isShoppingBagOpen,
      isProductCardModalOpen,
      toggleShoppingBag,
      openProductsCardModal
    } = this.props;
    const {
      state: {
        products,
        userProfile,
        branchList,
        isPersonalInfoModalOpen,
        branchData,
        dropdownIsOpen,
        editBranchModalIsOpen,
        isPasswordModalOpen,
        isPaymentTypeOpen,
        paymentTypes,
      },

      openPersonalModal,
      deleteButtonHandle,
      editButtonHandle,
      dropdownIsOpenHandle,
      selectCityHandle,
      cancelModalButtonHandle,
      onChangeBranchModal,
      newBranchModalOpenHandle,
      saveModalButtonHandle,
      savePersonalInfoModal,
      cancelPersonalInfoModal,
      changePersonalInfoModal,
      changePasswordModal,
      savePasswordModal,
      cancelPasswordModal,
      openPasswordModal,
      changePaymentTypeModal,
      savePaymentTypeModal,
      cancelPaymentTypeModal,
      openPaymentModal,
    } = this;
    return (
      <React.Fragment>
        {isPersonalInfoModalOpen && (
          <ModalSection isClicked={isPersonalInfoModalOpen}>
            <EditPersonalInfoModal
              isClicked={isPersonalInfoModalOpen}
              userName={userProfile.userName}
              email={userProfile.email}
              discription={userProfile.discription}
              imageUrl={userProfile.imageUrl}
              onSave={savePersonalInfoModal}
              onCancel={cancelPersonalInfoModal}
              onChange={changePersonalInfoModal}
              openPasswordModal={openPasswordModal}
            />
          </ModalSection>
        )}

        {isPasswordModalOpen && (
          <ModalSection
            isClicked={isPasswordModalOpen}
            classModifier="myModal__modalContent--password"
          >
            <EditPasswordModal
              onChange={changePasswordModal}
              onSave={savePasswordModal}
              onCancel={cancelPasswordModal}
            />
          </ModalSection>
        )}

        <Header />
        <HistoryIcon />
        <ShoppingCart
          number={2}
          openShoppingBag={toggleShoppingBag}
          isHidden={isShoppingIconHidden}
        />
        <ShoppingOrderContainer
          shoppingOrderList={[1, 2, 3]}
          isOpen={isShoppingBagOpen}
          closeShoppingBag={toggleShoppingBag}
          openCardModal={openProductsCardModal}
        />
        {isProductCardModalOpen && (
          <ProductCardsSection
            isClicked={isProductCardModalOpen}
            productCards={products}
            closeProductsModal={openProductsCardModal}
            handleDelete
          />
        )}
        <Container>
          <PersonalInfoSection
            email={userProfile.email}
            userName={userProfile.userName}
            discription={userProfile.discription}
            imageUrl={userProfile.imageUrl}
            onClick={openPersonalModal}
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
          <PaymentType
            paymentTypes={paymentTypes}
            openModal={openPaymentModal}
          />
          {isPaymentTypeOpen && (
            <ModalSection
              isClicked={isPaymentTypeOpen}
              classModifier="myModal__modalContent--password"
            >
              <EditPaymentType
                paymentTypes={paymentTypes}
                onPaymentTypeChange={changePaymentTypeModal}
                onSave={savePaymentTypeModal}
                onCancel={cancelPaymentTypeModal}
              />
            </ModalSection>
          )}
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
