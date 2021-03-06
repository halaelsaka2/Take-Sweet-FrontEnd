import React from "react";
import Button from "../Button";
import Stepper from "../Stepper";
import BranchSection from "../BranchSection";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const RegisterBranchesDetailsSection = ({
  branchList,
  backButtonHandle,
  deleteButtonHandle,
  editButtonHandle,
  isEditBranch,
  isBranchTab,
  isEdit
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
            "circle--active"
          ]}
          pipeClassNames={["pipe--finished", "pipe--finished"]}
        />

        <BranchSection
          branchStyle={"branchContainer--register"}
          branchList={branchList}
          isEditBranch={isEditBranch}
          isBranchTab={isBranchTab}
          ListAdditionalStyle={"branchContainer__branches--2branches"}
          deleteButtonHandle={deleteButtonHandle}
          editButtonHandle={editButtonHandle}
          isEdit={isEdit}
        />

        <div className="button-container">
          <div className="flex-buttons-container">
            <Link to="register-branch">
              <Button
                className="button--rounded button--rounded--s button--rounded--shadow"
                name="Back"
                onClick={backButtonHandle}
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
RegisterBranchesDetailsSection.defaultProps={
  branchList:[]
}
RegisterBranchesDetailsSection.propTypes = {
  branchList: PropTypes.array,
  isEditBranch: PropTypes.bool,
  isBranchTab: PropTypes.bool,
  backButtonHandle: PropTypes.func,
  cancelButtonHandle: PropTypes.func
};
export default RegisterBranchesDetailsSection;
