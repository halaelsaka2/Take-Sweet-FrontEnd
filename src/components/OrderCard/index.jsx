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
  role,
  handleStatusChange,
}) => {
  console.log(id, status, "ordercaaard");
  return (
    <div className="order-card">
      <div className="order-card__header">
        <div className="order-card__header__logo">
          <img src={companyLogoImgSrc} alt="" />
          <div className="order-card__header__logo__date">{date}</div>
        </div>
        <div className="status-current">
          {role === "Cafe" && (
            <React.Fragment>
              <div
                className={`color-circle
                    ${status === "Waiting" && "color-circle--wating"}
                    ${status === "Arrived" && "color-circle--arrived"}
                    ${status === "Cancelled" && "color-circle--canceled"}`}
              ></div>
              <label>{status}</label>
            </React.Fragment>
          )}
          {role === "Company" && (
            <form>
              <input
                type="radio"
                id={id}
                name="Waiting"
                value={status}
                onChange={(event)=>handleStatusChange(event,id)}
                checked={status === "Waiting"}
              />
              <label htmlFor="Waiting" className="OrderCardRadio ">
                Waiting
              </label>
              <input
                type="radio"
                id={id}
                name="Arrived"
                value={status}
                onChange={(event)=>handleStatusChange(event,id)}
                checked={status === "Arrived"}
              />
              <label htmlFor="Arrived" className="OrderCardRadio ">
                Arrived
              </label>
              <input
                type="radio"
                id={id}
                name="Cancelled"
                value={status}
                onChange={(event)=>handleStatusChange(event,id)}
                checked={status === "Cancelled"}
              />
              <label htmlFor="Cancelled" className="OrderCardRadio ">
                Cancelled
              </label>
            </form>
          )}
        </div>
      </div>
      <div className="order-card__content">
        <div className="details-table details-table--order">
          <Table rows={rows} />
        </div>
        <div className="order-card__content__buttons">
          {role === "Cafe" && (
            <React.Fragment>
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
              {/* <Link to="/user-history">Show more</Link> */}
            </React.Fragment>
          )}
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
