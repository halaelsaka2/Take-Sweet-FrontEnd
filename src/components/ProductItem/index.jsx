import React from "react";
import PropTypes from "prop-types";

const ProductItem = ({ src, amount, type, name }) => {
  return (
    <div className="itemm">
      <div className="itemm__image" style={{ backgroundImage: `url(${src})` }}>
        <div className="itemm__data">
          {type === "buyer" && (
            <button className="itemm__btn">Order Now</button>
          )}
        </div>
      </div>
      <h4>{name}</h4>
      <div className="itemm__data__amount">
        {type === "buyer" ? (
          <div className="itemm__data__amount">
            <i className="fas fa-minus itemm__data__amount__controls"></i>
            <div className="itemm__data__amount__number">{amount}</div>
            <i className="fas fa-plus itemm__data__amount__controls"></i>
          </div>
        ) : (
          <div className="item-medium__crud-actions">
            <div className="flex-row">
              <div>
                <span className="lable"> 10 pieces</span>
              </div>
            </div>
            <a href="#">
              <i className="fas fa-edit"></i>
            </a>
            <a href="#">
              <i className="fas fa-trash-alt"></i>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  src: PropTypes.string,
  amount: PropTypes.number,
  type: PropTypes.string,
  name: PropTypes.string,
};

export default ProductItem;
