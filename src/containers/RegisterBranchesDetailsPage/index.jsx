import React, { Component } from "react";
import RegisterBranchesDetailsSection from "../../components/RegisterBranchesDetailsSection";
class RegisterBrachesDetailsPage extends Component {
  state = {
    branchList: [],
    branchData: { city: "", address: "", phoneNumber: "" },
  };
  componentDidMount = () => {
    console.log("from here");
    let branchList = [...this.state.branchList];
    let user = JSON.parse(localStorage.getItem("newUser"));
    console.log(user);
    branchList = user.branches;
    console.log(branchList);
    this.setState({ branchList });
  };
  backButtonHandle = (event) => {};
  deleteButtonHandle = (index) => {
    let user = JSON.parse(localStorage.getItem("newUser"));
    let branchList = [...this.state.branchList];
    let newBranchList = branchList.filter((list) => list !== branchList[index]);
    branchList = newBranchList;
    user.branches = newBranchList;
    localStorage.setItem("newUser", JSON.stringify(user));
    this.setState({ branchList });
  };

  render() {
    const {
      state: { branchList },
      backButtonHandle,
      deleteButtonHandle,
    } = this;
    return (
      <React.Fragment>
        <RegisterBranchesDetailsSection
          branchList={branchList}
          backButtonHandle={backButtonHandle}
          deleteButtonHandle={deleteButtonHandle}
          isEditBranch={false}
          isBranchTab={false}
          isEdit={false}
        />
      </React.Fragment>
    );
  }
}

export default RegisterBrachesDetailsPage;
