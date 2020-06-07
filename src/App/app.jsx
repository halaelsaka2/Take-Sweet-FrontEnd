import React, { Component } from "react";

import RegisterBranchPage from "../containers/RegisterBranchPage";
import RegisterPersonalInfoPage from "../containers/RegisterPersonalInfoPage";
import RegisterGeneralInfoPage from "../containers/RegisterGeneralInfoPage";
import RegisterAcceptancePage from "../containers/RegisterAcceptancePage";
import RegisterGeneralInfoSection from "../components/RegisterGeneralInfoSection";
import Branch from '../components/Branch'
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <RegisterGeneralInfoPage/>
        <RegisterPersonalInfoPage />
        

        <RegisterBranchPage />
        <RegisterAcceptancePage/>
        <Branch branchList={[]} isEditBranch={true}></Branch>
      </React.Fragment>
    );
  }
}

export default App;
