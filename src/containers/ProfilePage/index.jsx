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
import { connect } from "react-redux";
import {
  getAllPaymentTypes,
  getPaymentTypeById,
  editPaymentType,
} from "../../redux-modules/paymentTypes/actions";
import { getCompanyById } from "../../redux-modules/company/actions";
import { editBranch } from "../../redux-modules/branches/actions";
import { getCafeByUserId } from "../../redux-modules/cafes/actions";

class Profile extends Component {
  state = {
    products: dumy.products,
    userProfile: [{ userId: {} }],
    paymentTypes: dumy.paymentTypes,
    isPersonalInfoModalOpen: false,
    isPasswordModalOpen: false,
    isPaymentTypeOpen: false,
    branchData: {},
    selectedIndex: null,
    editBranchModalIsOpen: false,
    dropdownIsOpen: false,
    role: "",
    paymentTypeStatu: "",
    branches: [],
  };

  componentDidMount = async () => {
    let user = JSON.parse(localStorage.getItem("user"));
    let branches = [...this.state.branches];
    branches = user.branches;

    if (user) {
      let role = this.state.role;
      role = user.roleId.name;
      this.setState({ role });
      let userProfile = { ...this.state.userProfile };
      if (role === "Cafe") {
        //getCafeById
        await this.props.getCafeByUserId();
        userProfile = this.props.cafe;
        console.log(userProfile);
        
      } else {
        //getCompanyById
        await this.props.getCompanyById();
        userProfile = this.props.company;
      }
      this.setState({ userProfile });
    }
    this.props.getAllPaymentTypes();
    this.setState({ branches });
  };

  deleteButtonHandle = (index) => {
    let branchList = [...this.state.branchList];
    branchList = branchList.filter((list) => list !== branchList[index]);
    this.setState({ branchList });
  };

  editButtonHandle = (event) => {
    let user = JSON.parse(localStorage.getItem("user"));
    const branch = user.branches.find(
      (branch) => branch.id === event.target.id
    );
    let branchData = { ...this.state.branchData };
    branchData = branch;
    let editBranchModalIsOpen = this.state.editBranchModalIsOpen;
    editBranchModalIsOpen = !editBranchModalIsOpen;
    this.setState({ branchData, editBranchModalIsOpen });
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

  saveModalButtonHandle = async () => {
    let user = JSON.parse(localStorage.getItem("user"));

    let branchData = { ...this.state.branchData };
    await this.props.editBranch(branchData.id, branchData);
    let newBranchData = this.props.branch;
    const branch = user.branches.find(
      (branch) => branch.id === newBranchData.id
    );
    const index = user.branches.indexOf(branch);
    let branches = [...this.state.branches];
    user.branches[index] = newBranchData;
    branches = user.branches;
    let editBranchModalIsOpen = this.state.editBranchModalIsOpen;
    editBranchModalIsOpen = !editBranchModalIsOpen;
    this.setState({
      branchData: newBranchData,
      editBranchModalIsOpen,
      branches,
    });
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
  changePaymentTypeModal = (event) => {
    const id = event.target.id;
    const checked = event.target.checked;
    console.log(checked);

    this.props.editPaymentType(id, checked);
  };
  savePaymentTypeModal = () => {
    console.log("Save PaymentType Modal");
    this.togglePaymentModal();
  };
  cancelPaymentTypeModal = () => {
    console.log("Cancel PaymentType Modal");
    this.togglePaymentModal();
  };

  render() {
    const {
      isShoppingIconHidden,
      isShoppingBagOpen,
      isProductCardModalOpen,
      toggleShoppingBag,
      openProductsCardModal,
      shoppingOrderList,
      numberOfOrders,
    } = this.props;
    const {
      state: {
        products,
        userProfile,
        isPersonalInfoModalOpen,
        branchData,
        dropdownIsOpen,
        editBranchModalIsOpen,
        isPasswordModalOpen,
        isPaymentTypeOpen,
        branches,
        role,
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
              userName={userProfile[0].userId.userName}
              email={userProfile[0].userId.email}
              discription={userProfile[0].userId.description}
              imageUrl={userProfile[0].userId.imageSrc}
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
        {role === "Cafe" && (
          <ShoppingCart
            number={numberOfOrders}
            openShoppingBag={toggleShoppingBag}
            isHidden={isShoppingIconHidden}
          />
        )}
        <ShoppingOrderContainer
          shoppingOrderList={shoppingOrderList}
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
            email={userProfile[0].userId.email}
            userName={userProfile[0].userId.userName}
            discription={userProfile[0].userId.description}
            imageUrl={userProfile[0].userId.imageSrc}
            onClick={openPersonalModal}
          />

          <BranchSection
            branchList={branches}
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
          {role === "Company" && (
            <PaymentType
              paymentTypes={this.props.paymentTypesList}
              openModal={openPaymentModal}
            />
          )}
          {isPaymentTypeOpen && (
            <ModalSection
              isClicked={isPaymentTypeOpen}
              classModifier="myModal__modalContent--password"
            >
              <EditPaymentType
                paymentTypes={this.props.paymentTypesList}
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

const mapStateToProps = (state) => {
  return {
    paymentTypesList: state.paymentTypes.paymentTypesList,
    PaymentType: state.paymentTypes.paymentType,
    company: state.company.company,
    branch: state.branches.branch,
    cafe: state.cafe.cafe,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllPaymentTypes: () => dispatch(getAllPaymentTypes()),
    getPaymentTypeById: () => dispatch(getPaymentTypeById()),
    editPaymentType: (id, checked) => dispatch(editPaymentType(id, checked)),
    getCompanyById: () => dispatch(getCompanyById()),
    editBranch: (id, branch) => dispatch(editBranch(id, branch)),
    getCafeByUserId: () => dispatch(getCafeByUserId()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
