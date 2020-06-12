import React, { Component } from "react";
import LoginSection from "../../components/LoginSection";
import constants from "./constants";

class LoginPage extends Component {
  state = {
    userAccountInfo: {
      email: "",
      password: ""
    }
  };
  onChange = event => {
    let userAccountInfo = { ...this.state.userAccountInfo };
    userAccountInfo[event.target.name] = event.target.value;
    this.setState({ userAccountInfo });
  };

  loginButtonHandle = (event, errors, values) => {
    if (errors !== null) return;
    this.props.history.push("/profile");
  };

  render() {
    const {
      onChange,
      loginButtonHandle,
      state: {
        userAccountInfo: { email, password }
      }
    } = this;
    return (
      <LoginSection
        emailType={constants.emailType}
        emailPlaceholder={constants.emailPlaceholder}
        emailId={constants.emailId}
        emailName={constants.emailName}
        emailValue={email}
        passwordType={constants.passwordType}
        passwordId={constants.passwordId}
        passwordName={constants.passwordName}
        passwordPlaceholder={constants.passwordPlaceholder}
        passwordValue={password}
        onChange={onChange}
        loginButtonHandle={loginButtonHandle}
      />
    );
  }
}

export default LoginPage;
