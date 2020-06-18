import React from "react";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import Textarea from "../Textarea";
import { Container } from "reactstrap";
import Table from "../Table";

import { Link } from "react-router-dom";
import Input from "./../Input/index";
import Button from "./../Button/index";

const OrderDetaislSection = ({
  rows,
  isDeletable,
  paymentTypes = [
    { id: 1, name: "cash" },
    {
      id: 2,
      name: "visa",
    },
    { id: 3, name: "credit-card" },
  ],
  checkedPaymentType,
  onChange,
  recommendationsValue,
  handlePaymentTypeChange,
  confirmButtonHandle,
  cancelButtonHandle,
}) => {
  console.log(rows + "orderSection");
  return (
    <React.Fragment>
      <Header />
      <div className="project-container--h">
        <div className="productLabel">Order Details</div>
      </div>
      <div className="history__line"></div>
      <div className="details-table">
        <Table rows={rows} isDeletable={isDeletable} />
      </div>
      <Container>
        <div className="detailsContainerr">
          <div className="paymentType-container">
            <div className="paymentType-container__content">
              <label> Payment Types</label>
              <div className="status-current status-current--details">
                {paymentTypes.map((paymentType) => (
                  <div className="wrapping">
                    <Input
                      key={paymentType.id}
                      type="radio"
                      id={paymentType.id}
                      name="card-0"
                      className="status-current__circle"
                      onChange={handlePaymentTypeChange}
                      value={paymentType.id}
                      checked={
                        checkedPaymentType === paymentType.id &&
                        checkedPaymentType
                      }
                    />
                    <label htmlFor={paymentType}>{paymentType.name}</label>
                  </div>
                ))}
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
              <div>Recommendations</div>
              <Textarea
                name={"recommendations"}
                value={recommendationsValue}
                className="textarea textarea--orderdetails"
                onChange={onChange}
              ></Textarea>
            </div>
          </div>
        </div>
        <div className="buttonsContainer">
          <div className="buttonsContainer__content">
            <Button
              to="/track-order"
              className="button--rounded button--rounded--s"
              name="Confirm"
              onClick={confirmButtonHandle}
            />

            <Button
              className="button--rounded button--rounded--s button--rounded--danger"
              id="close"
              name="Cancel"
              onClick={cancelButtonHandle}
            />
          </div>
        </div>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default OrderDetaislSection;
