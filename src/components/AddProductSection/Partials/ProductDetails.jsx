import React from "react";
import Textarea from "../../Textarea";
import Input from "../../Input";
import Button from "../../Button";
import { AvField } from "availity-reactstrap-validation";
import AvForm from "availity-reactstrap-validation/lib/AvForm";

const ProductDetails = ({
  countItems,
  categories,
  productNameValue,
  productNameError,
  countItemValues,
  countItemErrors,
  onChange,
  onCategoryChange,
  checkedCategory,
  categoryError,
  onAddButtonClicked,
  onCancelButtonClicked,
}) => {
  // console.log(error);
  return (
    <div className="productDetailsContainer">
      <AvForm>
        <AvField
          name="name"
          label="Product Name"
          type="text"
          errorMessage="Invalid name"
          onChange={onChange}
          value={productNameValue}
          error={productNameError}
          validate={{
            required: {
              value: true,
              errorMessage: "Please enter a name (Required)",
            },
            minLength: { value: 3 },
            maxLength: { value: 16 },
          }}
          className="input input--m"
        />

        <div className="countContainer">
          {countItems.map((countItem, index) => (
            <div className="countItem">
              <AvField
                name={countItem.name}
                label={countItem.label}
                type="number"
                errorMessage="Invalid name"
                onChange={onChange}
                value={productNameValue}
                error={productNameError}
                validate={{
                  required: {
                    value: true,
                    errorMessage: "Please enter a number (Required)",
                  },
                  maxLength: {
                    value: 16,
                    errorMessage: "Your name must be between 1 and 6 numbers",
                  },
                }}
                className="input input--m"
                onChange={onChange}
                value={countItemValues[index]}
              />
              {countItem.unit}
            </div>
          ))}
        </div>

        {/* <label>paymentTypes</label>
    <div className="paymentsContianer">
      <br />
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
    </div> */}

        <label>Categories</label>
        <div className="categoryContainer">
          {categories.map((category) => (
            <div className="categoryItem">
              <Input
                key={category.id}
                type="radio"
                className="categoryItem__input"
                name="category"
                value={category.id}
                onChange={onCategoryChange}
                checked={checkedCategory === category.id && checkedCategory}
                error={categoryError}
              />
              <label className="categoryItem__name">{category.name}</label>
            </div>
          ))}
        </div>

        <div className="btnContainer">
          <Button
            className="button--rounded--s"
            name="Add"
            onClick={onAddButtonClicked}
            type="submit"
          />
          <Button
            className="button--rounded--s button--rounded--danger"
            name="Cancel"
            onClick={onCancelButtonClicked}
          />
        </div>
      </AvForm>
    </div>
  );
};

ProductDetails.defaultProps = {
  paymentTypes: ["cash"],
};
export default ProductDetails;
