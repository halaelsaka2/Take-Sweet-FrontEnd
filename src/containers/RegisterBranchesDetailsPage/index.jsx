import React, { Component } from "react";
import RegisterBranchesDetailsSection from "../../components/RegisterBranchesDetailsSection";
class RegisterBrachesDetailsPage extends Component {
  state = {
    branchList: [
      {
        cityName: "Ismailia",
        address: "Ismailia, nemra6",
        phoneNumber: "+012 999 999 999"
      },
      {
        cityName: "Cairo",
        address: "New Cairo, tseen street",
        phoneNumber: "+012 999 999 999"
      },
      {
        cityName: "Alexandria",
        address: "mahatt el raml",
        phoneNumber: "+012 999 999 999"
      }
    ]
  };
  backButtonHandle = event => {};
  cancelButtonHandle = index => {
    let branchList = [...this.state.branchList];
    branchList = branchList.filter(list => list !== branchList[index]);
    this.setState({ branchList });
  };
  render() {
    const {
      state: { branchList },
      backButtonHandle,
      cancelButtonHandle
    } = this;
    return (
      <RegisterBranchesDetailsSection
        branchList={branchList}
        backButtonHandle={backButtonHandle}
        cancelButtonHandle={cancelButtonHandle}
        isEditBranch={false}
        isBranchTab={false}
      />
    );
  }
}

export default RegisterBrachesDetailsPage;
