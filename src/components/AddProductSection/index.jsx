import React from "react";
import Header from "./../Layouts/Header";
import Footer from "./../Layouts/Footer";
import HistoryStates from "./../HistoryStates";
import { Container } from "reactstrap";
import { ProductImage, ProductDetails } from "./Partials";
// import { products } from "../../redux-modules/products/api.mock";

const AddProducSection = ({
  product,
  constants,
  countItems,
  paymentTypes,
  categories,
  handlers,
  productNameError,
  countItemErrors,
  isAddButtonClicked,
  error,
}) => {
  const { imageSrc } = product;
  const { tabs, currentTabe } = constants;
  return (
    <div class="project-container project-container--h">
      <HistoryStates tabs={tabs} currentTabe={currentTabe} />

      <Container>
        <div class="ProductContainer">
          <ProductImage imgSrc={imageSrc} />
          <ProductDetails
            paymentTypes={paymentTypes}
            product={product}
            handlers={handlers}
            constants={constants}
            productNameError={productNameError}
            countItemErrors={countItemErrors}
            isAddButtonClicked={isAddButtonClicked}
          />
        </div>
      </Container>
    </div>
  );
};
export default AddProducSection;
