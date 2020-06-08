import React from "react";

const Bestsellersitem = ({ product }) => {
  return (
    <div className="item-medium">
      <div
        className="item-medium__image image"
        style={{
          backgroundImage: "url('" + product.src + "')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <a href="#">
        <h4>{product.name}</h4>
        <span className="lable">50%</span>
      </a>
    </div>
  );
};

export default Bestsellersitem;
