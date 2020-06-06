import React from "react";
import Bestsellersitem from "../BestSellersItem/index";

const Bestsellers = ({ products }) => {
  return (
    <div class="bestContainer">
      <div class="bestContainer__header">Best Seller</div>
      <div class="list-container list-container--grid">
        {products.map((product) => (
          <Bestsellersitem product={product} />
        ))}
      </div>
    </div>
  );
};

export default Bestsellers;
