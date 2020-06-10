import React from "react";
import Stepper from "../Stepper";
import Dropdown from "../Dropdown";
import Button from "../Button";
import Input from "../Input";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const RegisterBranchSection = ({
  cityValue,
  addressType,
  addressPlaceholder,
  addressValue,
  addressId,
  addressName,
  phoneType,
  phonePlaceholder,
  phoneValue,
  phoneId,
  phoneName,
  onChange,
  addBranchButtonHandle,
  numberOfBranches,
  backButtonHandle,
  nextButtonHandle,
  dropdownIsOpen,
  dropdownIsOpenHandle,
  selectCityHandle,
}) => (
  <div className="register-container">
    <div className="register-form-container">
      <div className="register-form">
        <div className="register-header">Register</div>
        <Stepper
          steps={[1, 2, 3]}
          stepClassNames={[
            "circle--finished",
            "circle--finished",
            "circle--active",
          ]}
          pipeClassNames={["pipe--finished", "pipe--finished"]}
        />

        <div className="branches-container">
          <div className="profileLabel  profileLabel--left">Branches</div>
          <div className="branches-div">
            <div className="reg-dropdown-container reg-dropdown-container--reg4">
              <Dropdown
                additionalStyle={"dropdown--br1"}
                Header={cityValue}
                ListItems={[
                  "Cairo",
                  "Alexandria",
                  "Ismailia",
                  "Portsaid",
                  "Suez",
                ]}
                isOpened={dropdownIsOpen}
                IsOpenHandle={dropdownIsOpenHandle}
                selectionHandle={selectCityHandle}
              />
            </div>
            <div id="location">
              <div className="location-container">
                <Input
                  className="input input--mwh"
                  type={addressType}
                  placeholder={addressPlaceholder}
                  name={addressName}
                  id={addressId}
                  value={addressValue}
                  onChange={onChange}
                />
                <i className="fas fa-2x fa-map-marker-alt map-icon "></i>
              </div>
              <Input
                className="input input--mwh"
                type={phoneType}
                placeholder={phonePlaceholder}
                name={phoneName}
                id={phoneId}
                value={phoneValue}
                onChange={onChange}
              />
              <div className="add-branch">
                <Button
                  className="button--rounded button--rounded--s button--rounded--shadow"
                  name="Add"
                  onClick={addBranchButtonHandle}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="branches-link">
          {numberOfBranches > 0 && (
            <React.Fragment>
              <span>{numberOfBranches} Brach.</span>
              <Link to="/register-branch-details">check your branches</Link>
            </React.Fragment>
          )}
        </div>
        <div className="button-container">
          <div className="flex-buttons-container">
            <Button
              className="button--rounded button--rounded--s button--rounded--shadow"
              name="Back"
              onClick={backButtonHandle}
            />
            <Link to="register-acceptance">
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

    <div className="register-img">
      <img className="img-register" src="assets/images/cake6x6.jpg" alt="" />
    </div>
  </div>
);

RegisterBranchSection.propTypes = {
  cityValue: PropTypes.string,
  addressType: PropTypes.string,
  addressPlaceholder: PropTypes.string,
  addressValue: PropTypes.string,
  addressId: PropTypes.string,
  addressName: PropTypes.string,
  phoneType: PropTypes.string,
  phonePlaceholder: PropTypes.string,
  phoneValue: PropTypes.string,
  phoneId: PropTypes.string,
  phoneName: PropTypes.string,
  onChange: PropTypes.func,
  addBranchButtonHandle: PropTypes.func,
  backButtonHandle: PropTypes.func,
  nextButtonHandle: PropTypes.func,
  dropdownIsOpen: PropTypes.bool,
  dropdownIsOpenHandle: PropTypes.func,
  selectCityHandle: PropTypes.func,
  numberOfBranches: PropTypes.number,
};
export default RegisterBranchSection;
