import React, { Component } from "react";
import { dumy } from "./dumy";
import { constants } from "./constants";
import TrackOrderSection from "../../components/TrackOrderSection";

class TrackOrder extends Component {
  state = {
    orders:dumy.orders,
    statusTabs: constants.statusTabs,
    currentTabe: dumy.currentTabe,
    currentPage: dumy.currentPage,
    ordersPerPage: constants.ordersPerPage,
    statusorders: dumy.statusorders,
  };

  componentDidMount() {
    let statusorders = this.state.orders;
    this.setState({ statusorders });
  }

  handleTabChange = (currentTabe) => {
    const {
      state: { orders, statusTabs }
    } = this;
    const currentStatus = statusTabs[currentTabe];
    let statusorders = orders;

    const currentPage = 1;
    if (currentTabe !== 0) {
      statusorders = orders.filter((order) => order.status === currentStatus);
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
