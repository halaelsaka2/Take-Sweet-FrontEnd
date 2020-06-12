import React from "react";
import PropTypes from "prop-types";
import Input from "../Input";
import Button from "../Button";

const EditPaymentType = ({
  paymentTypes,
  onPaymentTypeChange,
  onSave,
  onCancel,
}) => (
  <div className="myModal__modalContent__body">
    <div className="paymentsContianer">
      {paymentTypes.map((paymentType) => (
        <div className="paymentItem">
          <Input
            key={paymentType.id}
            type="checkbox"
            className="paymentItem__input"
            onChange={onPaymentTypeChange}
            name={paymentType.name}
            value={paymentType.name}
            checked={paymentType.checked}
          />
          <lable className="paymentItem__name">{paymentType.name}</lable>
        </div>
      ))}
    </div>

    <div className="lastContent__buttons">
      <Button
        className="button--rounded button--rounded--s"
        name="Save"
        onClick={onSave}
      />
      <Button
        className="button--rounded button--rounded--s button--rounded--danger"
        name="Cancel"
        onClick={onCancel}
      />
    </div>
  </div>
);

EditPaymentType.propTypes = {
  paymentTypes: PropTypes.array,
  onPaymentTypeChange: PropTypes.func,
  onCancel: PropTypes.func,
  onSave: PropTypes.func,
};
export default EditPaymentType;
