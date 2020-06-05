import React from "react";

const ProductItem = ({ src, Name, amount }) => {
  return (
    <div calssName="itemm">
      <div calssName="itemm__image" style={{ backgroundImage: `url(${src})` }}>
        <div calssName="itemm__data">
          <button calssName="itemm__btn">Order Now</button>
        </div>
      </div>
      <h4>{Name}</h4>
      <div calssName="itemm__data__amount">
        <i calssName="fas fa-minus itemm__data__amount__controls"></i>
        <div calssName="itemm__data__amount__number">{amount}</div>
        <i calssName="fas fa-plus itemm__data__amount__controls"></i>
      </div>
    </div>
  );
};
export default ProductItem;
