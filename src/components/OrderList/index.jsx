import React from "react";
import PropTypes from "prop-types";
import { Container } from "reactstrap";

import OrderCard from "../OrderCard";
const OrderList = ({ orders, onReorder, onCancel }) => (
  <Container fluid="xl">
    {orders.length > 0 && (
      <div className="order-container">
        {orders.map((order, index) => (
          <OrderCard
            rows={order.rows}
            status={order.status}
            key={index}
            date={order.date}
            onReorder={onReorder}
            onCancel={onCancel}
            companyLogoImgSrc={order.companyLogoImgSrc}
          />
        ))}
      </div>
    )}
  </Container>
);

OrderList.defaultProps = {
  orders: [],
};
OrderList.propTypes = {
  orders: PropTypes.array,
  onReorder: PropTypes.func,
  onCancel: PropTypes.func,
  
};
export default OrderList;
