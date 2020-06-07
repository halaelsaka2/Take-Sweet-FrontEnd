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
  backButtonHandle = event => console.log("back is clicked");
  cancelButtonHandle = index => {
    let branchList = [...this.state.branchList];

    // branchList.pop(event.target.value);
    branchList = branchList.filter(list => list !== branchList[index]);
    console.log(index);
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
      />
    );
  }
}

export default RegisterBrachesDetailsPage;
