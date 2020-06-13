import React, { Component } from "react";
import LoginSection from "../../components/LoginSection";
import constants from "./constants";

class LoginPage extends Component {
  state = {
    user: {
      email: "",
      password: ""
    }
  };

  inputHandler = event => {
    const { name, value } = event.target;
    const user = { ...this.state.user };
    user[name] = value;
    this.setState({ user });
  };

  loginButtonHandle = (event, values) => {
    let user = { ...this.state.user };
    let companyObject = {
      userProfile: {
        email: "elabd@gmail.com",
        userName: "El Abd",
        discription: "this is El Abd",
        imageUrl: ""
      },

      branchList: [
        { city: "Cairo", address: "el maadi", phone: "0128855888" },
        { city: "Cairo", address: "el zamalk", phone: "0128855888" },
        { city: "Alexandra", address: "Green plaza", phone: "0128855888" }
      ],
      role: "company"
    };

    let cafeObject = {
      userProfile: {
        email: "moka@gmail.com",
        userName: "Moka",
        discription: "this is moka",
        imageUrl: ""
      },

      branchList: [
        { city: "ismailia", address: "nemra6", phone: "0128855888" }
      ],
      role: "cafe"
    };

    if (user.email === companyObject.userProfile.email) {
      localStorage.setItem("userObject", JSON.stringify(companyObject));
    } else if (user.email === cafeObject.userProfile.email) {
      localStorage.setItem("userObject", JSON.stringify(cafeObject));
    }

    this.props.history.replace("/profile");
  };
  render() {
    const {
      inputHandler,
      loginButtonHandle,
      state: {
        user: { email, password }
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
        onChange={inputHandler}
        loginButtonHandle={loginButtonHandle}
      />
    );
  }
}

export default LoginPage;
