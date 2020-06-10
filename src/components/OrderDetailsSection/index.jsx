import React from "react";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import Textarea from "../Textarea";
import { Table } from "reactstrap";

const OrderDetaislSection = () => (
  <React.Fragment>
    <Header />
    <div class="project-container--h">
      <div class="productLabel">Order Details</div>
    </div>
    <div class="history__line"></div>
    <div class="details-table">
      <Table></Table>
    </div>
    <div class="detailsContainerr">
      <div class="paymentType-container">
        <div class="paymentType-container__content">
          <label> Payment Types</label>
          <div class="status-current status-current--details">
            <div class="wrapping">
              <input
                type="radio"
                id="cash"
                name="card-0"
                class="status-current__circle"
              />
              <label for="cash">Cash</label>
            </div>
            <div class="wrapping">
              <input
                type="radio"
                id="us"
                name="card-0"
                class="status-current__circle"
              />
              <label for="creditCard">Credit Card</label>
            </div>
            <div class="wrapping">
              <input
                type="radio"
                id="mobile"
                name="card-0"
                class="status-current__circle"
              />
              <label for="mobile">Mobile Payment</label>
            </div>
          </div>
        </div>
      </div>
      <div class="deliverType-container__content">
        <div class="deliverType-container__content__total">Total Price</div>
        <div class="deliverType-container__content__price">160</div>
        <div class="deliverType-container__content__currency">EGP</div>
      </div>

      <div class="recommindationContainer">
        <div class="recommindationContainer__content">
          <div>Recommindations</div>
          <Textarea></Textarea>
        </div>
      </div>
    </div>
    <Footer />
  </React.Fragment>
);

export default OrderDetaislSection;
