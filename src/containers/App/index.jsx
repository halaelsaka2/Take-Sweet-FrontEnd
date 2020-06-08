import React, { Component } from "react";
import AddProducSection from "./../../components/AddProductSection/index";

import AddProduct from "./../AddProductPage/index";
// import HistoryFromUser HistoryFromUser
import HistoryFromUser from "./../HistoryFromUserPage/index";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <AddProducSection /> */}
        <AddProduct />
        {/* <HistoryFromUser /> */}
      </React.Fragment>
    );
  }
}

export default App;
