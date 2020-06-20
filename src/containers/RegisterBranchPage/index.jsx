import React, { Component } from "react";
import RegisterBranchSection from "../../components/RegisterBranchSection";
import constants from "./constants";
class RegisterBranchPage extends Component {
  state = {
    branchesInfo: [],
    oneBranchInfo: { city: "City", address: "", phoneNumber: "" },
    dropdownIsOpen: false,
  };

  componentDidMount = () => {
    console.log("from here");
    let branchesInfo = [...this.state.branchesInfo];
    let user = JSON.parse(localStorage.getItem("newUser"));
    if (user.branches) {
      branchesInfo = user.branches;
    } else {
      branchesInfo = [];
    }
    this.setState({ branchesInfo });
  };

  onChange = (event) => {
    let oneBranchInfo = { ...this.state.oneBranchInfo };
    oneBranchInfo[event.target.name] = event.target.value;
    this.setState({ oneBranchInfo });
  };

  nextButtonHandle = (event) => {
    // let newUser = JSON.parse(localStorage.getItem("newUser"));
    let branchesInfo = [...this.state.branchesInfo];
    let oneBranchInfo = { ...this.state.oneBranchInfo };
    // newUser.branches = branchesInfo;
    // localStorage.setItem("newUser", JSON.stringify(newUser));
    // console.log(newUser);
    this.props.history.push("/register-acceptance");
  };
  backButtonHandle = (event) => {
    this.props.history.push("/register-personal-info");
  };
  addBranchButtonHandle = (event, values) => {
    let newUser = JSON.parse(localStorage.getItem("newUser"));
    let { branchesInfo, oneBranchInfo } = this.state;
    branchesInfo.push(oneBranchInfo);
    oneBranchInfo = { city: "City", address: "", phoneNumber: "" };
    newUser.branches = branchesInfo;
    localStorage.setItem("newUser", JSON.stringify(newUser));
    console.log(newUser);
    this.setState({ oneBranchInfo, branchesInfo });
  };

  dropdownIsOpenHandle = (event) => {
    let dropdownIsOpen = this.state.dropdownIsOpen;
    dropdownIsOpen = !dropdownIsOpen;
    this.setState({ dropdownIsOpen });
  };

  selectCityHandle = (event, id) => {
    let oneBranchInfo = { ...this.state.oneBranchInfo };
    let dropdownIsOpen = this.state.dropdownIsOpen;
    oneBranchInfo.city = event.target.textContent;
    dropdownIsOpen = !dropdownIsOpen;
    this.setState({ oneBranchInfo, dropdownIsOpen });
  };
  render() {
    const {
      state: { branchesInfo, oneBranchInfo, dropdownIsOpen },
      onChange,
      backButtonHandle,
      nextButtonHandle,
      addBranchButtonHandle,
      dropdownIsOpenHandle,
      selectCityHandle,
    } = this;

    return (
      <RegisterBranchSection
        cities={constants.cities}
        branchInfo={oneBranchInfo}
        addressType={constants.addressType}
        addressPlaceholder={constants.addressPlaceholder}
        addressId={constants.addressId}
        addressName={constants.addressName}
        phoneType={constants.phoneType}
        phonePlaceholder={constants.phonePlaceholder}
        phoneName={constants.phoneName}
        phoneId={constants.phoneId}
        addBranchButtonHandle={addBranchButtonHandle}
        onChange={onChange}
        backButtonHandle={backButtonHandle}
        nextButtonHandle={nextButtonHandle}
        numberOfBranches={branchesInfo.length}
        dropdownIsOpen={dropdownIsOpen}
        dropdownIsOpenHandle={dropdownIsOpenHandle}
        selectCityHandle={selectCityHandle}
      />
    );
  }
}

export default RegisterBranchPage;
