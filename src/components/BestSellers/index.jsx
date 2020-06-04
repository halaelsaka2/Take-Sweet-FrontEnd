import React from "react";
import Bestsellersitem from "./components/BestSellersItem/index";

const Bestsellers = () => {
  const { products } = props;
  return (
    <React.Fragment>
      <div class="bestContainer">
        <div class="bestContainer__header">Best Seller</div>
        <div class="list-container list-container--grid">
          {products.map(prod => (
            <Bestsellersitem product={prod} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Bestsellers;
