import React from "react";
import { Link } from "react-router-dom";

const NotificationPopOver = ({
  isOpen,
  orders,
  handleToggle,
  handleOpenOrder,
  newOrders,
}) => (
  <div style={{ position: "relative", cursor: "pointer" }}>
    <div onClick={handleToggle}>
      {newOrders.length ? (
        <div className="notification-number">{newOrders.length}</div>
      ) : null}
      <i className="fa fa-lg fa-bell" aria-hidden="true"></i>
    </div>
    <div className={`popOver ${isOpen && "popOver-open"}`}>
      <ul>
        {newOrders.map((order) => (
          <li
            key={order.id}
            className="notification-order"
            onClick={() => handleOpenOrder(order.id)}
          >
            <Link to={`/order-details/${order.id}`}>{order.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default NotificationPopOver;
