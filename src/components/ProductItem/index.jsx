import React from "react";
import PropTypes from "prop-types";
import { repeat } from "lodash";
import { Link } from "react-router-dom";
import Input from "../Input";

const ProductItem = ({
  item,
  src,
  minPieces,
  type,
  name,
  addToCart,
  price,
  minusHandler,
  plusHandler,
  id,
  deleteHandle,
  amount,
  amountHandler,
  onSaleStyle,
  isCompany,
  isDeal,
  onSale,
  onSaleHandle,
}) => {
  function isOnSale() {
    return onSaleStyle === true ? "line-through" : "none";
  }
  console.log(id);
  return (
    <React.Fragment>
      {type === "buyer" ? (
        <div className="itemm">
          <div
            className="itemm__image"
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            // style="background-image: url('assets/images/Product-1.jpg');"
          >
            {/* className="history-tab" */}
            {onSaleStyle && (
              <div className="discount">
                <div className="discount-text">50% off</div>
              </div>
            )}

            <div className="itemm__data">
              <button className="itemm__btn" onClick={() => addToCart(id)}>
                Order Now
              </button>
            </div>
          </div>
          <h4>{name}</h4>
          {onSaleStyle ? (
            <span style={{ textDecoration: isOnSale() }} className="itemm-data">
              {price * 2} EGP
            </span>
          ) : (
            <span style={{ textDecoration: isOnSale() }} className="itemm-data">
              {price} EGP
            </span>
          )}

          {onSaleStyle && <span className="itemm-data">{price} EGP</span>}
          <div className="itemm__data__amount">
            <i
              className="fas fa-minus itemm__data__amount__controls"
              id="minus"
              onClick={(event) => amountHandler(event, id)}
            ></i>

            <div className="itemm__data__amount__number">{amount}</div>

            <i
              className="fas fa-plus itemm__data__amount__controls"
              id="plus"
              onClick={(event) => amountHandler(event, id)}
            ></i>
          </div>
        </div>
      ) : (
        <div className="item-medium">
          <div
            className="item-medium__image image"
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
          {isCompany && (
            <div className="onSaleCard">
              <Input
                type={"checkbox"}
                defaultChecked={onSale}
                checked={onSale}
                onChange={(event) => onSaleHandle(event, item)}
              />
              <span>On Sale</span>
            </div>
          )}
          <a href="#">
            <h4>{name}</h4>
            <div className="flex-row">
              <div>
                <span className="lable"> {amount} pieces</span>
              </div>
            </div>
          </a>

          {isDeal && (
            <div className="item-medium__crud-actions">
              <Link to={`/edit/${id}`}>
                <i className="fas fa-edit"></i>
              </Link>
              <a href="#" onClick={() => deleteHandle(id)}>
                <i className="fas fa-trash-alt"></i>
              </a>
            </div>
          )}
        </div>
      )}

      {/* <div className="itemm">
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
        )
      

            } */}
    </React.Fragment>
  );
};

ProductItem.defaultProps = {
  onSaleStyle: false,
  isCompany: false,
  isDeal: true,
  onSale: false,
};

ProductItem.propTypes = {
  src: PropTypes.string,
  amount: PropTypes.number,
  type: PropTypes.string,
  name: PropTypes.string,
};

export default ProductItem;
