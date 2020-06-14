import React, { Component } from "react";
import { Link } from "react-router-dom";
import OrderDetaislSection from "../../components/OrderDetailsSection";

export default class OrderDetailsPage extends Component {
  state = {
    orders: [
      {
        status: "Waiting",
        date: "20/5/2020",
        rows: [
          ["product", "Quantity", "Price Per Piece", "Total Price"],
          ["Caramle Cake", "10", "30", "300"],
          ["Figs Tart", "10", "20", "200"],
        ],
        companyLogoImgSrc: "",
      },
      {
        status: "Waiting",
        date: "20/5/2020",
        rows: [
          ["product", "Quantity", "Price Per Piece", "Total Price"],
          ["cake", "20", "100", "2000"],
          ["cake", "30", "100", "3000"],
          ["cake", "40", "100", "4000"],
          ["cake", "50", "100", "5000"],
        ],
        companyLogoImgSrc: "",
      },
      {
        status: "Arrived",
        date: "20/5/2020",
        rows: [
          ["product", "Quantity", "Price Per Piece", "Total Price"],
          ["cake", "20", "100", "2000"],
          ["cake", "30", "100", "3000"],
          ["cake", "40", "100", "4000"],
          ["cake", "50", "100", "5000"],
        ],
        companyLogoImgSrc: "",
      },
      {
        status: "Arrived",
        date: "20/5/2020",
        rows: [
          ["product", "Quantity", "Price Per Piece", "Total Price"],
          ["cake", "20", "100", "2000"],
          ["cake", "30", "100", "3000"],
          ["cake", "40", "100", "4000"],
          ["cake", "50", "100", "5000"],
        ],
        companyLogoImgSrc: "",
      },
    ],
  };
  render() {
    return <OrderDetaislSection rows={this.state.orders[0].rows} />;
  }
}
