import React from "react";
import BranchList from "./BranchList";

const BranchContiner = (props) => (
  <React.Fragment>
    <div className="profileLabel">Branches</div>
    <div className="branchContainer">
      <div className="branchContainer__content">
        <div className="branchContainer__edit">
          <div className="branchContainer__edit__icon" id="editBranch">
            <i className="fas fa-pencil-alt"></i>
          </div>
        </div>
        <div class="branchContainer__branches">
          <BranchList branchList={props.branchList}></BranchList>;
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default BranchContiner;
