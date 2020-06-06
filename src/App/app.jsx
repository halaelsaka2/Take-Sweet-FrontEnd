import React, { Component } from "react";
import HistoryFromUser from "../container/HistoryFromUserPage";
import Profile from "../container/ProfilePage";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <HistoryFromUser /> */}
        <Profile />
      </React.Fragment>
    );
  }
}

export default App;
