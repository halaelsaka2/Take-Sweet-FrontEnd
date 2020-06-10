import React from "react";
import Button from "../Button";
import Stepper from "../Stepper";
import Dropdown from "../Dropdown";
import Input from "../Input";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const RegisterPersonalInfoSection = ({
  usernameType,
  usernamePlaceholder,
  usernameValue,
  usernameName,
  usernameId,
  onChange,
  dropdownIsOpen,
  backButtonHandle,
  nextButtonHandle,
  dropdownIsOpenHandle,
  selectAccountTypeHandle,
  accountType,
}) => (
  <div className="register-container">
    <div className="register-form-container">
      <div className="register-form">
        <div className="register-header">Register</div>
        <Stepper
          steps={[1, 2, 3]}
          stepClassNames={[
            "circle--finished",
            "circle--active",
            "circle--notTouched",
          ]}
          pipeClassNames={["pipe--finished", "pipe--notTouched"]}
        />

        <div className="reg-dropdown-container reg-dropdown-container--regTop">
          <Dropdown
            Header={accountType}
            ListItems={["Brand", "Cafe and Resturant"]}
            isOpened={dropdownIsOpen}
            IsOpenHandle={dropdownIsOpenHandle}
            selectionHandle={selectAccountTypeHandle}
          />
        </div>
        <div className="info">
          <Input
            className="input input--mwh"
            type={usernameType}
            placeholder={usernamePlaceholder}
            name={usernameId}
            id={usernameName}
            value={usernameValue}
            onChange={onChange}
          />
          <div className="info__photo">
            <i className="img-logo fa-8x far fa-image"></i>
          </div>
        </div>
        <div className="button-container">
          <div className="flex-buttons-container">
            <Link to="/register-general-info">
              <Button
                className="button--rounded button--rounded--s button--rounded--shadow"
                name="Back"
                onClick={backButtonHandle}
              />
            </Link>
            <Link to="/register-branch">
              <Button
                className="button--rounded button--rounded--s button--rounded--shadow"
                name="Next"
                onClick={nextButtonHandle}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>

    <div className="register-img card-overlay">
      <img className="img-register" src="assets/images/cake6x6.jpg" alt="" />
    </div>
  </div>
);
RegisterPersonalInfoSection.propTypes = {
  usernameType: PropTypes.string,
  usernamePlaceholder: PropTypes.string,
  usernameValue: PropTypes.string,
  usernameName: PropTypes.string,
  usernameId: PropTypes.string,
  accountType: PropTypes.string,
  dropdownIsOpen: PropTypes.bool,
  onChange: PropTypes.func,
  backButtonHandle: PropTypes.func,
  nextButtonHandle: PropTypes.func,
  dropdownIsOpenHandle: PropTypes.func,
  selectAccountTypeHandle: PropTypes.func,
};
export default RegisterPersonalInfoSection;
