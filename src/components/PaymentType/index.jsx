import React from "react";
import { PaymentWrapper } from "./Partials";
import ProfileLabel from "./../ProfileLabel/index";
const PaymentType = ({ paymentTypes ,openModal}) => (
  <React.Fragment>
    <ProfileLabel className="profileLabel" content="PaymentTypes" />
    <div className="branchContainer">
      <div className="branchContainer__edit">
        <div className="branchContainer__edit__icon" id="editBranch" onClick={openModal}>
          <i className="fas fa-pencil-alt"></i>
        </div>
      </div>
      <PaymentWrapper paymentTypes={paymentTypes} />
    </div>
  </React.Fragment>
);

export default PaymentType;
