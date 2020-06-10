import React, { Component } from "react";
import RegisterBranchesDetailsSection from "../../components/RegisterBranchesDetailsSection";
import EditBranchSection from "../../components/EditBranchSection";
import constants from "./constans";
class RegisterBrachesDetailsPage extends Component {
  state = {
    branchList: [
      {
        city: "Ismailia",
        address: "Ismailia, nemra6",
        phone: "+012 999 999 999"
      },
      {
        city: "Cairo",
        address: "New Cairo, tseen street",
        phone: "+012 999 999 999"
      },
      {
        city: "Alexandria",
        address: "mahatt el raml",
        phone: "+012 999 999 999"
      }
    ],
    branchData: { city: "", address: "", phone: "" },
    selectedIndex: Number,
    editBranchModalIsOpen: false,
    dropdownIsOpen: false
  };
  backButtonHandle = event => {};
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

  onChange = event => {
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

  cancelModalButtonHandle = () => {
    let editBranchModalIsOpen = this.state.editBranchModalIsOpen;
    editBranchModalIsOpen = false;
    this.setState({ editBranchModalIsOpen });
  };

  saveModalButtonHandle = () => {
    let editBranchModalIsOpen = this.state.editBranchModalIsOpen;
    let branchData = { ...this.state.branchData };
    let branchList = [...this.state.branchList];
    let selectedIndex = this.state.selectedIndex;
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
  };
  render() {
    const {
      state: { branchList, editBranchModalIsOpen, branchData, dropdownIsOpen },
      backButtonHandle,
      deleteButtonHandle,
      editButtonHandle,
      dropdownIsOpenHandle,
      selectCityHandle,
      cancelModalButtonHandle,
      onChange,
      saveModalButtonHandle
    } = this;
    return (
      <React.Fragment>
        <RegisterBranchesDetailsSection
          branchList={branchList}
          backButtonHandle={backButtonHandle}
          deleteButtonHandle={deleteButtonHandle}
          editButtonHandle={editButtonHandle}
          isEditBranch={false}
          isBranchTab={false}
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
          onChange={onChange}
          saveModalButtonHandle={saveModalButtonHandle}
        />
      </React.Fragment>
    );
  }
}

export default RegisterBrachesDetailsPage;
