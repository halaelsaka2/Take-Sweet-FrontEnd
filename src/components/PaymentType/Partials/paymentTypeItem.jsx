import React from "react";
const PaymentTypeItem = ({ paymentType, src }) => (
  <div className="branchContainer__branches__location">
    <div className="branch-header-flex">
      <div className="branch-icons-flex">
        <img className="paymentImg" src={`${src}`} alt="paymentType" />
      </div>
    </div>
  </div>
);

export default PaymentTypeItem;
