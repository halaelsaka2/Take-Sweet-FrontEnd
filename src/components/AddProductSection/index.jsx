import React from "react";
import Header from "./../Layouts/Header";
import Footer from "./../Layouts/Footer";
import HistoryStates from "./../HistoryStates";
import { Container } from "reactstrap";
import { ProductImage, ProductDetails } from "./Partials";

const AddProducSection = ({
  imgSrc,
  countItems,
  paymentTypes,
  categories,
  productNameValue,
  productNameError,
  countItemValues,
  countItemErrors,
  checkedCategory,
  onChange,
  onPaymentTypeChange,
  onCategoryChange,
  countItemsChange,
  tabs,
  currentTabe,
  handleSubmit,
  onCancelButtonClicked,
  isAddButtonClicked,
  error,
}) => (
  <div class="project-container project-container--h">
    <HistoryStates tabs={tabs} currentTabe={currentTabe} />

    <Container>
      <div class="ProductContainer">
        <ProductImage imgSrc={imgSrc} />

        <ProductDetails
          countItems={countItems}
          paymentTypes={paymentTypes}
          categories={categories}
          onChange={onChange}
          productNameValue={productNameValue}
          productNameError={productNameError}
          countItemsChange={countItemsChange}
          countItemValues={countItemValues}
          countItemErrors={countItemErrors}
          checkedCategory={checkedCategory}
          onPaymentTypeChange={onPaymentTypeChange}
          onCategoryChange={onCategoryChange}
          handleSubmit={handleSubmit}
          onCancelButtonClicked={onCancelButtonClicked}
          isAddButtonClicked={isAddButtonClicked}
        />
      </div>
    </Container>
  </div>
);

export default AddProducSection;
