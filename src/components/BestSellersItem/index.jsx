import React from "react";

const Bestsellersitem = ({ product }) => (
  <div className="item-medium">
    <div
      className="item-medium__image image"
      style={{
        height: "20rem",
        backgroundImage: "url('" + product.src + "')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
    <a href="#">
      <h4>{product.name}</h4>
      <span className="lable">50%</span>
    </a>
  </div>
);

export default Bestsellersitem;
