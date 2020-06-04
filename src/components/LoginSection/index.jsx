import React, { Component } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
const LoginSection = ({
  emailType,
  emailPlaceholder,
  emailValue,
  PasswordType,
  PasswordPlaceholder,
  PasswordValue,
  onChange,
  onClick
}) => {
  return (
    <div className="login-container">
      <div className="login-img">
        <img className="img-login" src="assets/images/cookies6x6.jpg" />
      </div>
      <div className="login-form-container">
        <div className="login-form">
          <div className="form-header">Login</div>
          <Input
            className="input input--shadow"
            type={emailType}
            placeholder={emailPlaceholder}
            id="email"
            name="email"
            onChange={onChange}
            value={emailValue}
          />
          <Input
            className="input input--shadow"
            type={PasswordType}
            placeholder={PasswordPlaceholder}
            id="Password"
            name="Password"
            onChange={onChange}
            value={PasswordValue}
          />
          <Button
            className="button--rounded button--rounded--s button--rounded--shadow"
            name="Login"
            onClick={onClick}
          />
          <a>Register Now</a>
        </div>
      </div>
    </div>
  );
};

export default LoginSection;
