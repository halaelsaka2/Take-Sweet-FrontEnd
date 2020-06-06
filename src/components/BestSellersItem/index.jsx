import React from "react";

const Bestsellersitem = ({ product }) => {
  console.log(product.src);
  return (
    <div class="item-medium">
      <div
        class="item-medium__image image"
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
      <div class="item-medium__crud-actions">
        <a href="#">
          <i class="fas fa-edit"></i>
        </a>
        <a href="#">
          <i class="fas fa-trash-alt"></i>
        </a>
      </div>
    </div>
  );
};

export default Bestsellersitem;
