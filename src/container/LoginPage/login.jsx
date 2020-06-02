import React from "react";
// import Input from "../components/Input/input";
// import Button from "../components/Button/button";
import Input from "./../../components/Input/input";
import Button from "./../../components/Button/button";

const Login = (props) => {
  return (
    <div className="login-container">
      <div className="login-img">
        <img
          className="img-login"
          src="../go-between-sass/assets/images/cookies6x6.jpg"
        />
      </div>
      <div className="login-form-container">
        <div className="login-form">
          <div className="form-header">Login</div>
          <Input
            className="input input--shadow"
            type="email"
            placeholder="Email"
            id="email"
            name="email"
          />
          <Input
            className="input input--shadow"
            type="password"
            placeholder="Password"
            id="Password"
            name="Password"
          />

          {/* <input className="input input--shadow" type="email" placeholder="Email" /> */}
          {/* <input
            className="input input--shadow"
            type="password"
            placeholder="Password"
          /> */}

          <Button
            className="button--rounded button--rounded--s button--rounded--shadow"
            name="Login"
          />
          {/* <button className="button--rounded button--rounded--s button--rounded--shadow">
            Login
          </button> */}
          <a>Register Now</a>
        </div>
      </div>
    </div>
  );
};
export default Login;
