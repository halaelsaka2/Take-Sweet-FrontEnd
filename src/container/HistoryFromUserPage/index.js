import React, { Component } from "react";
import HistoryFromUserSection from "../../components/historyFromUserSection/index";
class HistoryFromUser extends Component {
  state = {
    productCards: [1, 2, 3, 4],
    date: "20/5/2019",
    statusTabs: ["All", "Waiting", "Arrived", "Cancelled"],
    currentTabe: 0,
  };
  handleTabChange = (currentTabe) => {
    this.setState({ currentTabe });
  };
  render() {
    const {
      state: { productCards, date, statusTabs, currentTabe },
      handleTabChange,
    } = this;
    return (
      <HistoryFromUserSection
        productCards={productCards}
        date={date}
        statusTabs={statusTabs}
        currentTabe={currentTabe}
        handleTabChange={handleTabChange}
      />
    );
  }
}

export default HistoryFromUser;
