import React, { Component } from "react";
import { Link } from "react-router-dom";
import OrderDetaislSection from "../../components/OrderDetailsSection";

export default class OrderDetailsPage extends Component {
  state = {
    order: {
      status: "Waiting",
      date: "20/5/2020",
      rows: [
        ["Choclate cake", "10", "30", "300"],
        ["Figs Tart", "10", "20", "200"],
      ],
      companyLogoImgSrc: "",
      comments: "",
      paymentType: "",
    },
    paymentTypes: [],
  };
  handleChange = (e) => {
    let { order } = this.state;
    order.comments = e.target.value;
    this.setState({ order });
  };
  handlePaymentTypeChange = (e) => {
    const order = { ...this.state.order };
    const paymentTypeSelected = parseInt(e.target.value);
    order.paymentType = paymentTypeSelected;
    this.setState({ order });
  };
  handleSubmit = () => {
    console.log(this.state.order);
    // this.props.history.push("/track-order");
  };
  handleCancel = () => {
    this.props.history.push("/buyer");
  };
  render() {
    const {
      state: { order },
      handleChange,
      handlePaymentTypeChange,
      handleCancel,
      handleSubmit,
    } = this;
    return (
      <OrderDetaislSection
        rows={order.rows}
        isDeletable={true}
        recommendationsValue={order.comments}
        checkedPaymentType={order.paymentType}
        handlePaymentTypeChange={handlePaymentTypeChange}
        onChange={handleChange}
        confirmButtonHandle={handleSubmit}
        cancelButtonHandle={handleCancel}
      />
    );
  }
}
