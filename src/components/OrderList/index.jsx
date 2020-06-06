import React from "react"
import OrderCard from "../OrderCard";
import { Container } from "reactstrap";
const OrderList = ({ orders, onReorder, onCancel }) => (
    <Container fluid="xl" >
        <div className="order-container">{
            orders.map((order, index) =>
                <OrderCard
                    rows={order.rows}
                    status={order.status}
                    key={index}
                    date={order.date}
                    onReorder={onReorder}
                    onCancel={onCancel} />
            )}
        </div>
    </Container>);

export default OrderList;