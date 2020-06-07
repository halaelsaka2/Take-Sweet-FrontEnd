import React, { Component } from "react";

import TrackOrderSection from "../../components/TrackOrderSection";
class TrackOrder extends Component {
  state = {
    orders: [
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
        companyLogoImgSrc:""
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
        companyLogoImgSrc:""
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
        companyLogoImgSrc:""
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
        companyLogoImgSrc:""
      },
    ],
    statusTabs: ["All", "Waiting", "Arrived", "Cancelled"],
    currentTabe: 0,
    currentPage: 1,
    ordersPerPage: 3,
    statusorders: [],
  };

  componentDidMount() {
    let statusorders = this.state.orders;

    this.setState({ statusorders });
  }

  handleTabChange = (currentTabe) => {
    const currentStatus = this.state.statusTabs[currentTabe];
    let statusorders = this.state.orders;

    const currentPage = 1;
    if (currentTabe !== 0) {
      statusorders = this.state.orders.filter(
        (order) => order.status === currentStatus
      );
      console.log(statusorders);
    }
    this.setState({ currentTabe, statusorders, currentPage });
  };

  paginate = (currentPage) => {
    this.setState({ currentPage });
  };

  render() {
    let {
      state: {
        statusTabs,
        currentTabe,
        ordersPerPage,
        currentPage,
        statusorders,
      },
      handleTabChange,
      paginate,
    } = this;

    const firstIndex = (currentPage - 1) * ordersPerPage;
    const lastIndex = firstIndex + ordersPerPage;
    console.log("fi", firstIndex, lastIndex);

    const currentOrders = this.state.statusorders.slice(firstIndex, lastIndex);
    return (
      <TrackOrderSection
        orders={statusorders}
        currentProducts={currentOrders}
        statusTabs={statusTabs}
        currentTabe={currentTabe}
        productsPerPage={ordersPerPage}
        currentPage={currentPage}
        paginate={paginate}
        handleTabChange={handleTabChange}
      />
    );
  }
}

export default TrackOrder;
