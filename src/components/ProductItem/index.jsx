import React from "react";

const ProductItem = ({ src, amount, pagetype, name }) => {
  return (
    <div calssName="itemm">
      <div calssName="itemm__image" style={{ backgroundImage: `url(${src})` }}>
        <div calssName="itemm__data">
          {pagetype === "buyerPage" ? (
            <button calssName="itemm__btn">Order Now</button>
          ) : (
            {}
          )}
        </div>
      </div>
      <h4>{name}</h4>
      <div calssName="itemm__data__amount">
        {pagetype === "buyerPage" ? (
          <div calssName="itemm__data__amount">
            <i calssName="fas fa-minus itemm__data__amount__controls"></i>
            <div calssName="itemm__data__amount__number">{amount}</div>
            <i calssName="fas fa-plus itemm__data__amount__controls"></i>
          </div>
        ) : (
          <div class="item-medium__crud-actions">
            <div class="flex-row">
              <div>
                <span class="lable"> 10 pieces</span>
              </div>
            </div>
            <a href="#">
              <i class="fas fa-edit"></i>
            </a>
            <a href="#">
              <i class="fas fa-trash-alt"></i>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
export default ProductItem;
