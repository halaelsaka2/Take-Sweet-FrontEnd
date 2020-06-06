import React, { Component } from "react";
import LoginSection from "../../components/LoginSection";

class LoginPage extends Component {
  state = {
    userAccountInfo: {
      email: "",
      Password: ""
    },
    emailType: "email",
    emailPlaceholder: "Email",
    PasswordType: "password",
    passwordPlaceholder: "Password"
  };
  onChange = event => {
    let userAccountInfo = { ...this.state.userAccountInfo };
    userAccountInfo[event.target.name] = event.target.value;
    this.setState({ userAccountInfo });
  };

  loginButtonHandle = event => console.log(this.state);

  render() {
    const {
      onChange,
      loginButtonHandle,
      state: {
        emailType,
        emailPlaceholder,
        passwordType,
        passwordPlaceholder,
        userAccountInfo: { email, password }
      }
    } = this;
    return (
      <LoginSection
        emailType={emailType}
        emailPlaceholder={emailPlaceholder}
        emailValue={email}
        passwordType={passwordType}
        passwordPlaceholder={passwordPlaceholder}
        passwordValue={password}
        onChange={onChange}
        loginButtonHandle={loginButtonHandle}
      />
    );
  }
}

export default LoginPage;
