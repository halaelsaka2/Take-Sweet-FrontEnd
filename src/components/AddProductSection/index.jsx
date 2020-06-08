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
  moreDetailsValue,
  countItemValues,
  checkedCategory,
  onChange,
  onPaymentTypeChange,
  onCategoryChange,
  countItemsChange,
  tabs,
  currentTabe,
  onAddButtonClicked,
  onCancelButtonClicked,
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
          moreDetailsValue={moreDetailsValue}
          countItemsChange={countItemsChange}
          checkedCategory={checkedCategory}
          countItemValues={countItemValues}
          onPaymentTypeChange={onPaymentTypeChange}
          onCategoryChange={onCategoryChange}
          onAddButtonClicked={onAddButtonClicked}
          onCancelButtonClicked={onCancelButtonClicked}
        />
      </div>
    </Container>
  </div>
);

export default AddProducSection;
