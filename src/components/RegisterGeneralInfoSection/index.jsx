import React from "react";
import Input from "../Input";
import Button from "../Button/index";
import Stepper from "../Stepper";

const RegisterGeneralInfoSection = ({
  emailType,
  emailPlaceholder,
  emailValue,
  passwordType,
  passwordPlaceholder,
  passwordValue,
  confirmPasswordType,
  confirmPasswordPlaceholder,
  confirmPasswordValue,
  onChange,
  nextButtonHandle,
}) => {
  return (
    <div className="register-container">
      <div className="register-form-container">
        <div className="register-form">
          <div className="register-header">Register</div>

          <Stepper
            steps={[1, 2, 3]}
            stepClassNames={[
              "circle--active",
              "circle--notTouched",
              "circle--notTouched",
            ]}
            pipeClassNames={["pipe--notTouched", "pipe--notTouched"]}
          />

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
            type={passwordType}
            placeholder={passwordPlaceholder}
            id="password"
            name="password"
            onChange={onChange}
            value={passwordValue}
          />

          <Input
            className="input input--shadow"
            type={confirmPasswordType}
            placeholder={confirmPasswordPlaceholder}
            id="confirmPassword"
            name="confirmPassword"
            onChange={onChange}
            value={confirmPasswordValue}
          />
          <Button
            className="button--rounded button--rounded--s button--rounded--shadow"
            name="Next"
            onClick={nextButtonHandle}
          />
          <a>Already Have An Account</a>
        </div>
      </div>

      <div className="register-img card-overlay">
        <img className="img-register" src="assets/images/cake6x6.jpg" alt="" />
      </div>
    </div>
  );
};
export default RegisterGeneralInfoSection;
