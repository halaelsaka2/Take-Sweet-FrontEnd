import React from "react";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import Textarea from "../Textarea";
import { Table } from "reactstrap";

const OrderDetaislSection = () => (
  <React.Fragment>
    <Header />
    <div className="project-container--h">
      <div className="productLabel">Order Details</div>
    </div>
    <div className="history__line"></div>
    <div className="details-table">
      <Table></Table>
    </div>
    <div className="detailsContainerr">
      <div className="paymentType-container">
        <div className="paymentType-container__content">
          <label> Payment Types</label>
          <div className="status-current status-current--details">
            <div className="wrapping">
              <input
                type="radio"
                id="cash"
                name="card-0"
                className="status-current__circle"
              />
              <label for="cash">Cash</label>
            </div>
            <div className="wrapping">
              <input
                type="radio"
                id="us"
                name="card-0"
                className="status-current__circle"
              />
              <label for="creditCard">Credit Card</label>
            </div>
            <div className="wrapping">
              <input
                type="radio"
                id="mobile"
                name="card-0"
                className="status-current__circle"
              />
              <label for="mobile">Mobile Payment</label>
            </div>
          </div>
        </div>
      </div>
      <div className="deliverType-container__content">
        <div className="deliverType-container__content__total">Total Price</div>
        <div className="deliverType-container__content__price">160</div>
        <div className="deliverType-container__content__currency">EGP</div>
      </div>

      <div className="recommindationContainer">
        <div className="recommindationContainer__content">
          <div>Recommindations</div>
          <Textarea></Textarea>
        </div>
      </div>
    </div>
    <Footer />
  </React.Fragment>
);

export default OrderDetaislSection;
