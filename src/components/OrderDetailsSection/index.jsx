import React from "react";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import Textarea from "../Textarea";
import { Container } from "reactstrap";
import Table from "../Table";
import { Button } from "react-scroll";
import { Link } from "react-router-dom";

const OrderDetaislSection = ({rows}) => {
  console.log(rows + "orderSection");
  return (
    <React.Fragment>
      <Header />
      <div className="project-container--h">
        <div className="productLabel">Order Details</div>
      </div>
      <div className="history__line"></div>
      <div className="details-table">
        <Table rows={rows} />
      </div>
      <Container>
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
            <div className="deliverType-container__content__total">
              Total Price
            </div>
            <div className="deliverType-container__content__price">500</div>
            <div className="deliverType-container__content__currency">EGP</div>
          </div>

          <div className="recommindationContainer">
            <div className="recommindationContainer__content">
              <div>Recommindations</div>
              <Textarea className="textarea textarea--orderdetails"></Textarea>
            </div>
          </div>
        </div>
        <div className="buttonsContainer">
          <div className="buttonsContainer__content">
            <Link to="/track-order" className="button--rounded button--rounded--s">Confirm</Link>
            <button
              class="button--rounded button--rounded--s button--rounded--danger"
              id="close"
            >
              Cancel
            </button>
          </div>
        </div>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default OrderDetaislSection;
