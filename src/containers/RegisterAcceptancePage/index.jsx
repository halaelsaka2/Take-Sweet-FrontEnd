import React, { Component } from "react";
import RegisterAcceptanceSection from "./../../components/RegisterAcceptanceSection";
import constants from "./constants";
import { connect } from "react-redux";
import { userRegister } from "../../redux-modules/users/actions";
import { addBranch } from "../../redux-modules/branches/actions";
import { userLogin } from "../../redux-modules/users/actions";
import { addCompany } from "../../redux-modules/company/actions";
import { addCafe } from "../../redux-modules/cafes/actions";
import { getRoleById } from "../../redux-modules/role/actions";

class RegisterAcceptancePage extends Component {
  componentDidUpdate = () => {
    if (this.props.user.id) {
      window.history.replaceState(null, null, "/");
      this.props.history.push("/profile");
    }
  };
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
    this.props.userRegister(user);
  };

  render() {
    const {
      checkHandle,
      backButtonHandle,
      registerButtonHandle,
      state: { checked },
    } = this;
    console.log(this.props.user, "hahahahhaahahh");

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
  return {
    user: state.user.user,
    branch: state.branches.branch,
    branchIds: state.branches.branchIds,
    token: state.user.token,
    company: state.company.companyList,
    cafe: state.cafe.cafeList,
    role: state.role.roleById,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBranch: (addedBranch) => dispatch(addBranch(addedBranch)),
    userRegister: (user) => dispatch(userRegister(user)),
    userLogin: (user) => dispatch(userLogin(user)),
    addCompany: (company) => dispatch(addCompany(company)),
    addCafe: () => dispatch(addCafe()),
    getRoleById: (id) => dispatch(getRoleById(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterAcceptancePage);
