import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BrandItem = ({ src }) => (
  <div className="item-medium">
    <Link to="buyer">
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
    </Link>
  </div>
);

BrandItem.protoTypes = {
  src: PropTypes.string,
};

export default BrandItem;
