import React from "react";
import PaymentTypeList from "./paymentTypeList";
const PaymentWrapper = ({ paymentTypes }) => (
  <div className="branchContainer__branches">
    <PaymentTypeList paymentTypes={paymentTypes} />
  </div>
);

export default PaymentWrapper;
