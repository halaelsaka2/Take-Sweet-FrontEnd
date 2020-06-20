import React from "react";
import {
  AvField,
  AvForm,
  AvRadio,
  AvRadioGroup,
} from "availity-reactstrap-validation";
import { Button } from "reactstrap";
import Textarea from "../../Textarea";
import Input from "../../Input";

const ProductDetails = ({
  type,
  product: { categoryId, name, availableAmount, minPieces, price },
  handlers: { handleSubmit, onChange, onCategoryChange, onCancelButtonClicked },
  constants: { countItems, categories },
  isAddButtonClicked,
}) => {
  // console.log(checkedCategory);
  console.log(type);
  const product = { category: categoryId.name };
  const countItemValues = [availableAmount, minPieces, price];
  return (
    <div className="productDetailsContainer">
      <AvForm onValidSubmit={handleSubmit} model={product}>
        <AvField
          name="name"
          label="Product Name"
          type="text"
          errorMessage="Invalid name"
          onChange={onChange}
          value={name}
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
                value={name}
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

        <label style={{ marginBottom: "1rem" }}>Categories</label>
        <AvRadioGroup
          className="categoryContainer"
          name="category"
          required
          inline
          errorMessage="Pick one!"
        >
          {categories.map((category) => {
            // console.log(category.name);
            return (
              <AvRadio
                label={category.name}
                value={category.name}
                onChange={onCategoryChange}
              />
            );
          })}
        </AvRadioGroup>

        <div className="btnContainer">
          <Button
            className="button--rounded--s"
            name={type === "add" ? "add" : "edit"}
            type="submit"
            color=""
            onClick={handleSubmit}
          >
            {type === "add" ? "Add" : "Edit"}
          </Button>

          <Button
            className="button--rounded--s button--rounded--danger"
            name="Cancel"
            onClick={onCancelButtonClicked}
            color=""
          >
            Cancel
          </Button>
        </div>
      </AvForm>
    </div>
  );
};

ProductDetails.defaultProps = {
  paymentTypes: ["cash"],
};
export default ProductDetails;
