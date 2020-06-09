import React, { Component } from "react";
import RegisterGeneralInfoSection from "../../components/RegisterGeneralInfoSection";
import constants from "./constants";
class RegisterGeneralInfoPage extends Component {
  state = {
    newUserAccountInfo: {
      email: "",
      password: "",
      confirmPassword: ""
    }
  };
  onChange = event => {
    let newUserAccountInfo = { ...this.state.newUserAccountInfo };
    newUserAccountInfo[event.target.name] = event.target.value;
    this.setState({ newUserAccountInfo });
  };
  nextButtonHandle = event => {}
  render() {
    const {
      onChange,
      nextButtonHandle,
      state: {
        newUserAccountInfo: { email, password, confirmPassword }
      }
    } = this;
    return (
      <RegisterGeneralInfoSection
        emailType={constants.emailType}
        emailPlaceholder={constants.emailPlaceholder}
        emailValue={email}
        emailId={constants.emailId}
        emailName={constants.emailName}
        passwordType={constants.passwordType}
        passwordPlaceholder={constants.passwordPlaceholder}
        passwordId={constants.passwordId}
        passwordName={constants.passwordName}
        passwordValue={password}
        confirmPasswordType={constants.confirmPasswordType}
        confirmPasswordPlaceholder={constants.confirmPasswordPlaceholder}
        confirmPasswordValue={confirmPassword}
        confirmPasswordId={constants.confirmPasswordId}
        confirmPasswordName={constants.confirmPasswordName}
        onChange={onChange}
        nextButtonHandle={nextButtonHandle}
      />
    );
  }
}

export default RegisterGeneralInfoPage;
