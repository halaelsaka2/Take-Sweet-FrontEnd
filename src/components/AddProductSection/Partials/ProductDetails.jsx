import React from "react";
import Textarea from "../../Textarea";
import Input from "../../Input";
import Button from "../../Button";

const ProductDetails = ({
  countItems,
  categories,
  productNameValue,
  moreDetailsValue,
  checkedCategory,
  countItemValues,
  paymentTypes,
  onChange,
  onPaymentTypeChange,
  onCategoryChange,
  onAddButtonClicked,
  onCancelButtonClicked,
}) => (
  <div className="productDetailsContainer">
    <label>Product Name</label>
    <Input
      className="input input--m"
      placeholder="Product name"
      name="name"
      onChange={onChange}
      value={productNameValue}
      type="text"
    />

    <div className="countContainer">
      {countItems.map((countItem, index) => (
        <div className="countItem">
          <div className="countItem__info">{countItem.label}</div>
          <Input
            key={index}
            className="countItem__input"
            type="number"
            name={countItem.name}
            onChange={onChange}
            value={countItemValues[index]}
          />
          <label className="countItem__info">{countItem.unit}</label>
        </div>
      ))}
    </div>

    <label>paymentTypes</label>
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
    </div>

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
      />
      <Button
        className="button--rounded--s button--rounded--danger"
        name="Cancel"
        onClick={onCancelButtonClicked}
      />
    </div>
  </div>
);

ProductDetails.defaultProps = {
  paymentTypes: ["cash"],
};
export default ProductDetails;
