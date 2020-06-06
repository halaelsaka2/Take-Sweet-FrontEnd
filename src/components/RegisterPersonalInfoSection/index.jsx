import React from "react";
import Button from "../Button";
import Stepper from "../Stepper";
import Dropdown from "../Dropdown";
import Input from "../Input";
const RegisterPersonalInfoSection = ({
  usernameType,
  usernamePlaceholder,
  usernameValue,
  onChange,
  dropdownIsOpen,
  backButtonHandle,
  nextButtonHandle,
  dropdownIsOpenHandle,
  selectAccountTypeHandle,
  accountType
}) => {
  return (
    <div className="register-container">
      <div className="register-form-container">
        <div className="register-form">
          <div className="register-header">Register</div>
          <Stepper
            steps={[1, 2, 3]}
            stepClassNames={[
              "circle--finished",
              "circle--active",
              "circle--notTouched"
            ]}
            pipeClassNames={["pipe--finished", "pipe--notTouched"]}
          />

          <div className="reg-dropdown-container reg-dropdown-container--regTop">
            <Dropdown
              dropdownHeader={accountType}
              dropdownListItems={["Brand", "Cafe and Resturant"]}
              isOpened={dropdownIsOpen}
              dropdownIsOpenHandle={dropdownIsOpenHandle}
              selectionHandle={selectAccountTypeHandle}
            />
          </div>
          <div className="info">
            <Input
              className="input input--mwh"
              type={usernameType}
              placeholder={usernamePlaceholder}
              name="username"
              id="username"
              value={usernameValue}
              onChange={onChange}
            />
            <div className="info__photo">
              <i className="img-logo fa-8x far fa-image"></i>
            </div>
          </div>
          <div className="button-container">
            <div className="flex-buttons-container">
              <Button
                className="button--rounded button--rounded--s button--rounded--shadow"
                name="Back"
                onClick={backButtonHandle}
              />

              <Button
                className="button--rounded button--rounded--s button--rounded--shadow"
                name="Next"
                onClick={nextButtonHandle}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="register-img card-overlay">
        <img className="img-register" src="assets/images/cake6x6.jpg" alt="" />
      </div>
    </div>
  );
};

export default RegisterPersonalInfoSection;
