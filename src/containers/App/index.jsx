import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router";
import HomePage from "../Homepage";
import LoginPage from "../LoginPage";
import ProductsPage from "../ProductsPage";
import HistoryFromUserPage from "../HistoryFromUserPage";
import ProductCardModalPage from "../ProductCardModalPage";
import ProfilePage from "../ProfilePage";
import RegisterAcceptancePage from "../RegisterAcceptancePage";
import RegisterBranchesDetailsPage from "../RegisterBranchesDetailsPage";
import RegisterBranchPage from "../RegisterBranchPage";
import RegisterGeneralInfoPage from "../RegisterGeneralInfoPage";
import RegisterPersonalInfoPage from "../RegisterPersonalInfoPage";
import TrackOrderPage from "../TrackOrderPage";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Redirect from="/home" to="/" />
          <Route path="/login" component={LoginPage} />

          <Route path="/products" component={ProductsPage} />

          <Route path="/historyuser" component={HistoryFromUserPage} />
          <Route path="/productcardmodal" component={ProductCardModalPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route
            path="/registeracceptance"
            component={RegisterAcceptancePage}
          />
          <Route
            path="/registerbranchesdetails"
            component={RegisterBranchesDetailsPage}
          />
          <Route path="/registerbranch" component={RegisterBranchPage} />
          <Route
            path="/registergeneralinfo"
            component={RegisterGeneralInfoPage}
          />
          <Route
            path="/registerpersonalinfo"
            component={RegisterPersonalInfoPage}
          />
          <Route path="/trackorder" component={TrackOrderPage} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
