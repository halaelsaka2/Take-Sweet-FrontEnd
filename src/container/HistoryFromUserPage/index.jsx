import React, { Component } from "react";
import HistoryFromUserSection from "../../components/historyFromUserSection/index";
class HistoryFromUser extends Component {
  state = {
    productCards: [1, 3, 4, 8, 7],
    date: "",
    statusTabs: ["All", "Waiting", "Arrived", "Cancelled"],
    currentTabe: 0,
    companyLogoImgSrc: "",
    currentPage: 1,
  };
  handleTabChange = (currentTabe) => {
    this.setState({ currentTabe });
  };
  handlePaging = (currentPage) => {
    this.setState({ currentPage });
  };
  render() {
    const {
      state: { productCards, date, statusTabs, currentTabe, companyLogoImgSrc },
      handleTabChange,
      handlePaging,
    } = this;
    return (
      <HistoryFromUserSection
        productCards={productCards}
        date={date}
        statusTabs={statusTabs}
        currentTabe={currentTabe}
        handleTabChange={handleTabChange}
        handlePaging={handlePaging}
        companyLogoImgSrc={companyLogoImgSrc}
      />
    );
  }
}

export default HistoryFromUser;
