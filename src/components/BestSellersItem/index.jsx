import React from "react";

const Bestsellersitem = ({ product }) => {
  return (
    <div className="item-medium">
      <div
        className="item-medium__image image"
        style={{
          backgroundImage: "url('" + product.src + "')",
          "background-size": "cover",
          "background-repeat": "no-repeat",
          "background-position": "center",
        }}
      ></div>
      <a href="#">
        <h4>{product.name}</h4>
      </a>
      <div className="item-medium__crud-actions">
        <a href="#">
          <i className="fas fa-edit"></i>
        </a>
        <a href="#">
          <i className="fas fa-trash-alt"></i>
        </a>
      </div>
    </div>
  );
};

export default Bestsellersitem;
