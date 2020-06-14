import React from "react";
import Bestsellersitem from "../BestSellersItem";
import PropTypes from "prop-types";

const Bestsellers = ({ products }) => (
  <div className="bestContainer">
    <div className="bestContainer__header">Best Selles</div>
    <div className="list-container list-container--grid">
      {products.map((product) => (
        <Bestsellersitem product={product} key={product.id} />
      ))}
    </div>
  </div>
);

export default Bestsellers;

Bestsellers.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      name: PropTypes.string,
      src: PropTypes.string,
    })
  ),
};
