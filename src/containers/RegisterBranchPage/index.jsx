import React, { Component } from "react";
import RegisterBranchSection from "../../components/RegisterBranchSection";
import constants from "./constants";
class RegisterBranchPage extends Component {
  state = {
    branchesInfo: [],
    oneBranchInfo: { city: "City", address: "", phone: "" },
    dropdownIsOpen: false
  };

  onChange = event => {
    let oneBranchInfo = { ...this.state.oneBranchInfo };
    oneBranchInfo[event.target.name] = event.target.value;
    this.setState({ oneBranchInfo });
  };

  nextButtonHandle = event => {};
  backButtonHandle = event => {};
  addBranchButtonHandle = event => {
    let { branchesInfo, oneBranchInfo } = this.state;
    branchesInfo.push(oneBranchInfo);
    oneBranchInfo = { city: "City", address: "", phone: "" };
    this.setState({ oneBranchInfo, branchesInfo });
  };

  dropdownIsOpenHandle = event => {
    let dropdownIsOpen = this.state.dropdownIsOpen;
    dropdownIsOpen = !dropdownIsOpen;
    this.setState({ dropdownIsOpen });
  };

  selectCityHandle = event => {
    let oneBranchInfo = { ...this.state.oneBranchInfo };
    let dropdownIsOpen = this.state.dropdownIsOpen;
    oneBranchInfo.city = event.target.textContent;
    dropdownIsOpen = !dropdownIsOpen;
    this.setState({ oneBranchInfo, dropdownIsOpen });
  };
  render() {
    const {
      state: {
        branchesInfo,
        oneBranchInfo: { city, address, phone },
        dropdownIsOpen
      },
      onChange,
      backButtonHandle,
      nextButtonHandle,
      addBranchButtonHandle,
      dropdownIsOpenHandle,
      selectCityHandle
    } = this;

    return (
      <RegisterBranchSection
        cityValue={city}
        addressType={constants.addressType}
        addressPlaceholder={constants.addressPlaceholder}
        addressId={constants.addressId}
        addressName={constants.addressName}
        addressValue={address}
        phoneType={constants.phoneType}
        phonePlaceholder={constants.phonePlaceholder}
        phoneName={constants.phoneName}
        phoneId={constants.phoneId}
        phoneValue={phone}
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
