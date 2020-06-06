import React from "react";
import Bestsellersitem from "../BestSellersItem/index";

const Bestsellers = ({ products }) => {
  return (
    <React.Fragment>
      <div class="bestContainer">
        <div class="bestContainer__header">Best Seller</div>
        <div class="list-container list-container--grid">
          {products.map((product) => (
            <Bestsellersitem product={product} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Bestsellers;
