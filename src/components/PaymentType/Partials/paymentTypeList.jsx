import React from "react";
import PaymentTypeItem from "./paymentTypeItem";
const PaymentTypeList = ({ paymentTypes }) =>
  paymentTypes.map((item) => <PaymentTypeItem key={item.id} paymentType={item.name} />);

export default PaymentTypeList;
