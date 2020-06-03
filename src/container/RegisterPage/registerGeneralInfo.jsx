import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button/button";
import States from "./../../components/States";

const RegisterGeneralInfo = (props) => {
  return (
    <React.Fragment>
      <div class="register-container">
        <div class="register-form-container">
          <div class="register-form">
            <div class="register-header">Register</div>

            <States
              classNameC1="circle circle--s circle--active"
              classNameP1="pipe pipe--s pipe--notTouched"
              classNameC2="circle circle--s circle--notTouched"
              classNameP2="pipe pipe--s pipe--notTouched"
              classNameC3="circle circle--s circle--notTouched"
            />

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
              id="password"
              name="password"
            />

            <Input
              className="input input--shadow"
              type="password"
              placeholder="Confirm Password"
              id="confirmPassword"
              name="confirmPassword"
            />
            <Button
              className="button--rounded button--rounded--s button--rounded--shadow"
              name="Register"
            />
            <a>Already Have An Account</a>
          </div>
        </div>

        <div class="register-img card-overlay">
          <img class="img-register" src="assets/images/cake6x6.jpg" />
        </div>
      </div>
    </React.Fragment>
  );
};
export default RegisterGeneralInfo;
