import React from "react";
import PropTypes from "prop-types";
import { Container } from "reactstrap";

import OrderCard from "../OrderCard";
const OrderList = ({
  orders,
  onReorder,
  handleCancelOrder,
  role,
  handleStatusChange,
}) => (
  <Container fluid="xl">
    {orders.length > 0 ? (
      <div className="order-container">
        {orders.map((order, index) => (
          <OrderCard
            rows={order.orderProducts}
            status={order.status}
            key={index}
            date={order.date}
            onReorder={onReorder}
            onCancel={handleCancelOrder}
            companyLogoImgSrc={order.companyId.imageSrc}
            id={order.id}
            role={role}
            handleStatusChange={handleStatusChange}
          />
        ))}
      </div>
    ) : (
      <div className="empty-products">
        <span>There Is No Orders Yet</span>
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
