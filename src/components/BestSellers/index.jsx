import React from "react";
import Bestsellersitem from "../BestSellersItem";
import PropTypes from "prop-types";
import CompanyItem from "../CompanyItem";

const Bestsellers = ({ products }) => {
  return (
    <div class="bestContainer">
      <div class="bestContainer__header">Best Seller</div>
      <div class="list-container list-container--grid">
        {products.map((product) => (
          // <Bestsellersitem product={product} />
          <CompanyItem src={product.src} />
        ))}
      </div>
    </div>
  );
};

export default Bestsellers;

Bestsellers.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.objectOf({
      id: PropTypes.number,
      name: PropTypes.string,
      src: PropTypes.string, //imgSrc
    })
  ),
};
