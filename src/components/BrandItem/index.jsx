import React from "react";
import PropTypes from "prop-types";

const BrandItem = ({ src }) => (
  <div className="item-medium">
    <div
      className="item-medium__image image"
      style={{
        backgroundImage: `url(${src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "20rem 20rem",
      }}
    ></div>
  </div>
);

BrandItem.protoTypes = {
  src: PropTypes.string,
};

export default BrandItem;
