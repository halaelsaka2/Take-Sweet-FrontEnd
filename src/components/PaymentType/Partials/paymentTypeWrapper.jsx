import React from "react";
import PaymentTypeList from "./paymentTypeList";
const PaymentWrapper = ({ paymentTypes }) => (
  <div className="branchContainer__branches branchContainer__branches--payment">
    <PaymentTypeList paymentTypes={paymentTypes} />
  </div>
);

export default PaymentWrapper;
