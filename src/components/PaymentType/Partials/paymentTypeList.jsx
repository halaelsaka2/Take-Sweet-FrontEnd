import React from "react";
import PaymentTypeItem from "./paymentTypeItem";
const PaymentTypeList = ({ paymentTypes }) =>
  paymentTypes.map((item) => <PaymentTypeItem paymentType={item} />);

export default PaymentTypeList;
