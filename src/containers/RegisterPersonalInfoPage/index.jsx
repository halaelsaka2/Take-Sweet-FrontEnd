import React, { Component } from "react";
import { connect } from "react-redux";
import RegisterPersonalInfoSection from "../../components/RegisterPersonalInfoSection";
import { getAllRoles } from "../../redux-modules/role/actions";
import constants from "./constants";
class RegisterPersonalInfoPage extends Component {
  state = {
    newUserPersonalInfo: {
      accountType: "Brand/Cafe and Resturant",
      username: "",
      userImage: "",
    },
    dropdownIsOpen: false,
  };

  async componentDidMount() {
    await this.props.getAllRoles();
    console.log("This.props: ", this.props.roles);
  }

  onChange = (event) => {
    let newUserPersonalInfo = { ...this.state.newUserPersonalInfo };
    newUserPersonalInfo[event.target.name] = event.target.value;
    this.setState({ newUserPersonalInfo });
  };

  nextButtonHandle = (event, values) => {
    this.props.history.push("/register-branch");
  };
  backButtonHandle = (event) => {};

  dropdownIsOpenHandle = (event) => {
    let dropdownIsOpen = this.state.dropdownIsOpen;
    dropdownIsOpen = !dropdownIsOpen;
    this.setState({ dropdownIsOpen });
  };

  selectAccountTypeHandle = (event, id) => {
    let newUserPersonalInfo = { ...this.state.newUserPersonalInfo };
    let { dropdownIsOpen, usernamePlaceholder } = this.state;
    console.log(event.target.textContent, id);
    newUserPersonalInfo.accountType = event.target.textContent;
    newUserPersonalInfo.accountType === "Brand"
      ? (usernamePlaceholder = "Brand Name")
      : (usernamePlaceholder = "Cafe and Resturant Name");
    dropdownIsOpen = !dropdownIsOpen;
    this.setState({ newUserPersonalInfo, dropdownIsOpen, usernamePlaceholder });
  };

  render() {
    const {
      state: {
        newUserPersonalInfo: { accountType, username, userImage },
        dropdownIsOpen,
      },
      onChange,
      backButtonHandle,
      nextButtonHandle,
      dropdownIsOpenHandle,
      selectAccountTypeHandle,
      props: { roles },
    } = this;
    // if (roles !== "undefined") {
    // const x = roles.map((i) => i.name);
    // console.log(
    //   "beeeb",
    //   x

    // .map((role) => role.name)
    // );
    // }
    console.log(this.props.roles);
    return (
      <RegisterPersonalInfoSection
        accountType={accountType}
        username={username}
        userImage={userImage}
        usernameType={constants.usernameType}
        usernamePlaceholder={constants.usernamePlaceholder}
        usernamName={constants.usernameName}
        usernameId={constants.usernameId}
        dropdownIsOpen={dropdownIsOpen}
        onChange={onChange}
        backButtonHandle={backButtonHandle}
        nextButtonHandle={nextButtonHandle}
        dropdownIsOpenHandle={dropdownIsOpenHandle}
        selectAccountTypeHandle={selectAccountTypeHandle}
        roles={this.props.roles}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    roles: state.role.roles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllRoles: () => dispatch(getAllRoles()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterPersonalInfoPage);
