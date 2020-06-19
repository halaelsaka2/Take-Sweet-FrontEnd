import React, { Component } from "react";
import RegisterAcceptanceSection from "./../../components/RegisterAcceptanceSection";
import constants from "./constants";
import { connect } from "react-redux";
import { userRegister } from "../../redux-modules/users/actions";
import { addBranch } from "../../redux-modules/branches/actions";

class RegisterAcceptancePage extends Component {
  state = { checked: false };
  checkHandle = (event) => {
    let checked = { ...this.state.checked };
    checked = event.target.checked;
    this.setState({ checked });
  };
  backButtonHandle = (event) => {
    this.props.history.push("/register-branch");
  };

  registerButtonHandle = async (event) => {
    let user = JSON.parse(localStorage.getItem("newUser"));
    let branches = user.branches;
    let branch = await branches.map((addedBranch) => {
      this.props.addBranch(addedBranch);
    });

    user.branches = this.props.branchIds;

    await this.props.userRegister(user);

    console.log(this.props.user);

    // let companyObject = {
    //   userProfile: {
    //     email: "elabd@gmail.com",
    //     userName: "El Abd",
    //     discription:
    //       "Whether you are looking for the perfect cake for a celebration, browsing breakfast ideas on searching for catering options for large meetings or celebrations; our food has something for everyone",
    //     imageUrl: "assets/images/ElAbd.jpg",
    //   },

    //   branchList: [
    //     // { city: "Cairo", address: "el maadi", phone: "0128855888" },
    //     { city: "Cairo", address: "el zamalk", phone: "01060621024" },
    //     // { city: "Alexandra", address: "Green plaza", phone: "0128855888" },
    //   ],
    //   role: "company",
    // };
    // localStorage.setItem("userObject", JSON.stringify(companyObject));
    // window.history.replaceState(null, null, "/");
    // this.props.history.push("/login");
  };

  render() {
    const {
      checkHandle,
      backButtonHandle,
      registerButtonHandle,
      state: { checked },
    } = this;
    return (
      <RegisterAcceptanceSection
        checked={checked}
        inputId={constants.inputId}
        inputType={constants.inputType}
        inputName={constants.inputName}
        checkHandle={checkHandle}
        backButtonHandle={backButtonHandle}
        registerButtonHandle={registerButtonHandle}
      />
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state.branches);
  return {
    user: state.user.user,
    branch: state.branches.branch,
    branchIds: state.branches.branchIds,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userRegister: (user) => dispatch(userRegister(user)),
    addBranch: (addedBranch) => dispatch(addBranch(addedBranch)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterAcceptancePage);
