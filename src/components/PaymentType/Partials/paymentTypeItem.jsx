import React from "react";
const PaymentTypeItem = ({ paymentType }) => (
  <div className="branchContainer__branches__location">
    <span className="branchContainer__branches__location__header">
      {paymentType}
    </span>
  </div>
);

export default PaymentTypeItem;
