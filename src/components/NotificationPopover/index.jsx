import React from "react";

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
        {orders.map((order) => (
          <li
            // key={order.id}
            className="notification-order"
            onClick={handleOpenOrder}
          >
            <a>{order}</a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default NotificationPopOver;
