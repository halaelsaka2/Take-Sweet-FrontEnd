import React from "react";
import Stepper from "../Stepper";
import Dropdown from "../Dropdown";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Button } from "reactstrap";

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
  roles,
}) => (
  // console.log(roles)
  <div className="register-container">
    <div className="register-form-container">
      <AvForm className="register-form" onValidSubmit={nextButtonHandle}>
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

        <div className="reg-dropdown-container ">
          <Dropdown
            Header={accountType}
            listItems={roles.map((role) => role.name)}
            isOpened={dropdownIsOpen}
            IsOpenHandle={dropdownIsOpenHandle}
            selectionHandle={selectAccountTypeHandle}
            idList={roles.map((role) => role.id)}
          />
        </div>
        <div className="info">
          <AvField
            className="input input--mwh"
            type={usernameType}
            placeholder={usernamePlaceholder}
            name={usernameId}
            id={usernameName}
            value={usernameValue}
            onChange={onChange}
            validate={{
              required: {
                value: true,
                errorMessage: "Name can't be empty",
              },
            }}
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
              // onClick={backButtonHandle}
              color=""
            >
              <Link to="/register-general-info">Back</Link>
            </Button>
            {/* </Link> */}
            <Button
              className="button--rounded button--rounded--s button--rounded--shadow"
              // name="Next"
              // onClick={nextButtonHandle}
              color=""
            >
              Next
            </Button>
          </div>
        </div>
      </AvForm>
    </div>

    <div className="register-img card-overlay">
      <img className="img-register" src="assets/images/cake6x6.jpg" alt="" />
    </div>
  </div>
);

RegisterPersonalInfoSection.defaultProps = {
  roles: [],
};
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
