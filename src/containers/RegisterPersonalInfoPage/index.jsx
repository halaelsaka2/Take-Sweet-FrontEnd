import React, { Component } from "react";
import { connect } from "react-redux";
import RegisterPersonalInfoSection from "../../components/RegisterPersonalInfoSection";
import { getAllRoles } from "../../redux-modules/role/actions";
import { uploadImage } from "../../redux-modules/products/actions";
import constants from "./constants";
class RegisterPersonalInfoPage extends Component {
  state = {
    newUserPersonalInfo: {
      accountType: "Brand/Cafe and Resturant",
      username: "",
      userImage: "",
      imageSrc: "",
    },
    roleId: "",
    dropdownIsOpen: false,
  };

  async componentDidMount() {
    console.log(JSON.parse(localStorage.getItem("newUser")));

    await this.props.getAllRoles();
    console.log("This.props: ", this.props.roles);
  }

  onChange = (event) => {
    let newUserPersonalInfo = { ...this.state.newUserPersonalInfo };
    newUserPersonalInfo[event.target.name] = event.target.value;
    this.setState({ newUserPersonalInfo });
  };

  nextButtonHandle = (event, values) => {
    let newUser = JSON.parse(localStorage.getItem("newUser"));
    let { username, userImage } = this.state.newUserPersonalInfo;
    let roleId = this.state.roleId;
    newUser.roleId = roleId;
    newUser.userName = username;
    newUser.imageSrc = userImage;
    console.log(newUser);
    localStorage.setItem("newUser", JSON.stringify(newUser));
    this.props.history.push("/register-branch");
  };
  backButtonHandle = (event) => {};

  dropdownIsOpenHandle = (event) => {
    let dropdownIsOpen = this.state.dropdownIsOpen;
    dropdownIsOpen = !dropdownIsOpen;
    this.setState({ dropdownIsOpen });
  };

  imageUploadHandler = async (event) => {
    const image = event.target.files[0];
    const formDate = new FormData();
    formDate.set("image", image);
    await this.props.uploadImage(formDate);
    const imageSrc = "http://localhost:3000/" + this.props.imageSrc;
    const newUserPersonalInfo = { ...this.state.newUserPersonalInfo, imageSrc };
    this.setState({ newUserPersonalInfo });
  };

  selectAccountTypeHandle = (event, id) => {
    let newUserPersonalInfo = { ...this.state.newUserPersonalInfo };
    let { dropdownIsOpen, usernamePlaceholder } = this.state;
    let roleId = this.state.roleId;
    let roleName = event.target.textContent;
    roleId = id;
    console.log(event.target.textContent, id);
    newUserPersonalInfo.accountType = roleName;
    newUserPersonalInfo.accountType === "Brand"
      ? (usernamePlaceholder = "Brand Name")
      : (usernamePlaceholder = "Cafe and Resturant Name");
    dropdownIsOpen = !dropdownIsOpen;
    console.log(roleId);
    this.setState({
      newUserPersonalInfo,
      dropdownIsOpen,
      usernamePlaceholder,
      roleId,
    });
  };

  render() {
    const {
      state: {
        newUserPersonalInfo: { accountType, username, userImage, imageSrc },
        dropdownIsOpen,
      },
      imageUploadHandler,
      onChange,
      backButtonHandle,
      nextButtonHandle,
      dropdownIsOpenHandle,
      selectAccountTypeHandle,
      props: { roles },
    } = this;
    console.log(this.props.roles);
    return (
      <RegisterPersonalInfoSection
        imageSrc={imageSrc}
        imageUploadHandler={imageUploadHandler}
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
    imageSrc: state.products.imageSrc,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uploadImage: (image) => dispatch(uploadImage(image)),
    getAllRoles: () => dispatch(getAllRoles()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterPersonalInfoPage);
