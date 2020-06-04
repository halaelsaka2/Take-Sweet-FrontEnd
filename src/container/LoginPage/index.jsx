import React, { Component } from "react";
import LoginSection from "../../components/LoginSection";

class Login extends Component {
  state = {
    userAccountInfo: {
      email: "",
      Password: ""
    },
    emailType: "email",
    emailPlaceholder: "Email",
    PasswordType: "password",
    PasswordPlaceholder: "Password"
  };
  onChange = event => {
    let userAccountInfo = { ...this.state.userAccountInfo };
    userAccountInfo[event.target.name] = event.target.value;
    this.setState({ userAccountInfo });
  };

  onClick = event => console.log(this.state);

  render() {
    const {
      onChange,
      onClick,
      state: {
        emailType,
        emailPlaceholder,
        PasswordType,
        PasswordPlaceholder,
        userAccountInfo: { email, Password }
      }
    } = this;
    return (
      <LoginSection
        emailType={emailType}
        emailPlaceholder={emailPlaceholder}
        emailValue={email}
        PasswordType={PasswordType}
        PasswordPlaceholder={PasswordPlaceholder}
        PasswordValue={Password}
        onChange={onChange}
        onClick={onClick}
      />
    );
  }
}

export default Login;
