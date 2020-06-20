import React from "react";
import PropTypes from "prop-types";
import { repeat } from "lodash";
import { Link } from "react-router-dom";

const ProductItem = ({
  src,
  minPieces,
  type,
  name,
  addToCart,
  price,
  minusHandler,
  plusHandler,
  id,
  amount,
  amountHandler,
}) => {
  // console.log(id);
  return (
    <React.Fragment>
      {type === "buyer" ? (
        <div className="itemm">
          <div
            className="itemm__image"
            style={{
              backgroundImage: `url(/${src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            // style="background-image: url('assets/images/Product-1.jpg');"
          >
            <div className="itemm__data">
              <button className="itemm__btn" onClick={() => addToCart(id)}>
                Order Now
              </button>
            </div>
          </div>
          <h4>{name}</h4>
          <div className="itemm-data">{price} EGP</div>
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
            // "
            //   background-image: url('assets/images/Product-1.jpg');
            //   background-size: cover;
            //   background-repeat: no-repeat;
            //   background-position: center;
            // "
          ></div>
          <a href="#">
            <h4>{name}</h4>
            <div className="flex-row">
              <div>
                <span className="lable"> {amount} pieces</span>
              </div>
            </div>
          </a>
          <div className="item-medium__crud-actions">
            <Link to={`/edit/${id}`}>
              <i className="fas fa-edit"></i>
            </Link>
            <a href="#">
              <i className="fas fa-trash-alt"></i>
            </a>
          </div>
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

ProductItem.propTypes = {
  src: PropTypes.string,
  amount: PropTypes.number,
  type: PropTypes.string,
  name: PropTypes.string,
};

export default ProductItem;
