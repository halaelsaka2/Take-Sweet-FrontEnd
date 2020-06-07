import React from "react";
import BranchList from "./partials/BranchList";
import ProfileLabel from "../ProfileLabel";

const Branch = ({ branchList, isEditBranch }) => (
  <React.Fragment>
    <ProfileLabel className="profileLabel" content="Branches" />
    <div className="branchContainer">
      <div className="branchContainer__content">
        {isEditBranch && (
          <div className="branchContainer__edit">
            <div className="branchContainer__edit__icon" id="editBranch">
              <i className="fas fa-pencil-alt"></i>
            </div>
          </div>
        )}

        <div class="branchContainer__branches">
          <BranchList branchList={branchList}></BranchList>;
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default Branch;
