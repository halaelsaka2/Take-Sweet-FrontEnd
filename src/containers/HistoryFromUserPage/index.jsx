import React, { Component } from "react";
import HistoryFromUserSection from "../../components/HistoryFromUserSection";
import constents from "./constents";

class HistoryFromUser extends Component {
  state = {
    productCards: [
      { Num: 1, status: "Arrived" },
      { Num: 2, status: "Waiting" },
      { Num: 3, status: "Arrived" },
      { Num: 4, status: "Waiting" },
      { Num: 5, status: "Arrived" },
      { Num: 6, status: "Waiting" },
      { Num: 7, status: "Waiting" },
      { Num: 8, status: "Arrived" },
    ],
    date: "",
    statusTabs: ["All", "Waiting", "Arrived", "Cancelled"],
    currentTabe: 0,
    companyLogoImgSrc: "",
    productsPerPage: 3,
    currentPage: 1,
    statusProducts: [],
  };

  componentDidMount() {
    const statusProducts = this.state.productCards;
    this.setState({ statusProducts });
  }

  handleTabChange = (currentTabe) => {
    const currentStatus = this.state.statusTabs[currentTabe];
    let statusProducts = this.state.productCards;
    const currentPage = 1;
    if (currentTabe != 0) {
      statusProducts = this.state.productCards.filter(
        (products) => products.status == currentStatus
      );
    }
    this.setState({ currentTabe, statusProducts, currentPage });
  };

  paginate = (currentPage) => {
    // if (
    //   0 < currentPage &&
    //   currentPage <=
    //     Math.ceil(this.state.productCards.length / this.state.productsPerPage)
    // ) {
    this.setState({ currentPage });
    // }
  };

  render() {
    const {
      state: {
        date,
        statusTabs,
        currentTabe,
        companyLogoImgSrc,
        productsPerPage,
        currentPage,
        statusProducts,
      },
      handleTabChange,
      paginate,
    } = this;
    const firstIndex = (currentPage - 1) * productsPerPage;
    const lastIndex = firstIndex + productsPerPage;
    const currentProducts = this.state.statusProducts.slice(
      firstIndex,
      lastIndex
    );
    return (
      <HistoryFromUserSection
        productCards={statusProducts}
        currentProducts={currentProducts}
        date={date}
        statusTabs={constents.statusTabs}
        currentTabe={currentTabe}
        handleTabChange={handleTabChange}
        productsPerPage={productsPerPage}
        paginate={paginate}
        currentPage={currentPage}
        companyLogoImgSrc={companyLogoImgSrc}
      />
    );
  }
}

export default HistoryFromUser;
