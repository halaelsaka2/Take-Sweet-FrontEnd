import React from "react";
import BranchList from "./partials/BranchList";
import ProfileLabel from "../ProfileLabel";

const BranchContiner = ({
  branchList,
  isEditBranch,
  additionalStyle,
  isBranchTab,
  cancelIcon,
  ListAdditionalStyle,
  cancelButtonHandle
}) => (
  <React.Fragment>
    {isBranchTab && (
      <ProfileLabel className="profileLabel" content="Branches" />
    )}

    <div className={`branchContainer ${additionalStyle}`}>
      <div className="branchContainer__content">
        {isEditBranch && (
          <div className="branchContainer__edit">
            <div className="branchContainer__edit__icon" id="editBranch">
              <i className="fas fa-pencil-alt"></i>
            </div>
          </div>
        )}

        <div className="branchContainer__branches">
          <BranchList
            branchList={branchList}
            cancelIcon={cancelIcon}
            ListAdditionalStyle={ListAdditionalStyle}
            cancelButtonHandle={cancelButtonHandle}
          ></BranchList>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default BranchContiner;
