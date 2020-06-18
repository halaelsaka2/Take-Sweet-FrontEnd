import React from "react";
import PropTypes from "prop-types";

import Table from "../Table";
import Button from "../Button";
import { Link } from "react-router-dom";

const OrderCard = ({
  rows,
  status,
  date,
  onReorder,
  onCancel,
  companyLogoImgSrc,
  id,
}) => {
  // console.log(id);
  return (
    <div className="order-card">
      <div className="order-card__header">
        <div className="order-card__header__logo">
          <img src={companyLogoImgSrc} alt="" />
          <div className="order-card__header__logo__date">{date}</div>
        </div>
        <div className="status-current">
          <div
            className={`color-circle 
                    ${status === "Waiting" && "color-circle--wating"} 
                    ${status === "Arrived" && "color-circle--arrived"}
                    ${status === "Cancelled" && "color-circle--canceled"}`}
          ></div>
          <label>{status}</label>
        </div>
      </div>
      <div className="order-card__content">
        <div className="details-table details-table--order">
          <Table rows={rows} />
        </div>
        <div className="order-card__content__buttons">
          <Button
            className="button--rounded button--rounded--s"
            name="Reorder"
            onClick={() => onReorder(id)}
          />

          {status === "Waiting" && (
            <Button
              className="button--rounded button--rounded--s button--rounded--danger"
              name="Cancel"
              onClick={() => onCancel(id)}
            />
          )}
          <Link to="/user-history">Show more</Link>
        </div>
      </div>
    </div>
  );
};

OrderCard.defaultProps = {
  status: "Waiting",
  date: Date.now(),
  companyLogoImgSrc: "https://via.placeholder.com/150",
};
OrderCard.propTypes = {
  rows: PropTypes.array,
  status: PropTypes.string,
  companyLogoImgSrc: PropTypes.string,
  onReorder: PropTypes.func,
  onCancel: PropTypes.func,
};
export default OrderCard;
