import React, { Component } from "react";

import RegisterBranchPage from "../container/RegisterBranchPage";
import RegisterPersonalInfoPage from "../container/RegisterPersonalInfoPage";
import RegisterGeneralInfoPage from "../container/RegisterGeneralInfoPage";
import RegisterAcceptancePage from "../container/RegisterAcceptancePage";
import RegisterGeneralInfoSection from "../components/RegisterGeneralInfoSection";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <RegisterGeneralInfoPage/>
        <RegisterPersonalInfoPage />
        

        <RegisterBranchPage />
        <RegisterAcceptancePage/>
      </React.Fragment>
    );
  }
}

export default App;
