import React, { Component } from "react";
import HistoryFromUserSection from "../../components/historyFromUserSection/index";
class HistoryFromUser extends Component {
  state = {
    productCards: [],
    date: "",
    statusTabs: ["All", "Waiting", "Arrived", "Cancelled"],
    currentTabe: 0,
    companyLogoImgSrc: "",
  };
  handleTabChange = (currentTabe) => {
    this.setState({ currentTabe });
  };
  render() {
    const {
      state: { productCards, date, statusTabs, currentTabe, companyLogoImgSrc },
      handleTabChange,
    } = this;
    return (
      <HistoryFromUserSection
        productCards={productCards}
        date={date}
        statusTabs={statusTabs}
        currentTabe={currentTabe}
        handleTabChange={handleTabChange}
        companyLogoImgSrc={companyLogoImgSrc}
      />
    );
  }
}

export default HistoryFromUser;
