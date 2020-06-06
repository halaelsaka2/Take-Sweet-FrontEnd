import React, { Component } from "react";
import RegisterGeneralInfoSection from "../../components/RegisterGeneralInfoSection";
class RegisterGeneralInfoPage extends Component {
  state = {
    newUserAccountInfo: {
      email: "",
      password: "",
      confirmPassword: ""
    },
    emailType: "email",
    emailPlaceholder: "Email",
    passwordType: "password",
    passwordPlaceholder: "Password",
    confirmPasswordType: "password",
    confirmPasswordPlaceholder: "Confirm Password"
  };
  onChange = event => {
    let newUserAccountInfo = { ...this.state.newUserAccountInfo };
    newUserAccountInfo[event.target.name] = event.target.value;
    this.setState({ newUserAccountInfo });
  };
  nextButtonHandle = event => console.log(this.state);
  render() {
    const {
      onChange,
      nextButtonHandle,
      state: {
        newUserAccountInfo: { email, password, confirmPassword },
        emailType,
        emailPlaceholder,
        passwordType,
        passwordPlaceholder,
        confirmPasswordType,
        confirmPasswordPlaceholder
      }
    } = this;
    return (
      <RegisterGeneralInfoSection
        emailType={emailType}
        emailPlaceholder={emailPlaceholder}
        emailValue={email}
        passwordType={passwordType}
        passwordPlaceholder={passwordPlaceholder}
        passwordValue={password}
        confirmPasswordType={confirmPasswordType}
        confirmPasswordPlaceholder={confirmPasswordPlaceholder}
        confirmPasswordValue={confirmPassword}
        onChange={onChange}
        nextButtonHandle={nextButtonHandle}
      />
    );
  }
}

export default RegisterGeneralInfoPage;
