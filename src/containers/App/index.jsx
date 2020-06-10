import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../Homepage";
import LoginPage from "../LoginPage";
import ProfilePage from "../ProfilePage";
import RegisterBranchPage from "../RegisterBranchPage";
import TrackOrder from "../TrackOrderPage";
import RegisterPersonalInfoPage from "../RegisterPersonalInfoPage";
import HistoryFromUserPage from "../HistoryFromUserPage";
import RegisterAcceptancePage from "../RegisterAcceptancePage";
import RegisterBranchesDetailsPage from "../RegisterBranchesDetailsPage";
import RegisterGeneralInfoPage from "../RegisterGeneralInfoPage";
import BrandsPage from "../BrandsPage";
import BuyerPage from "../BuyerPage";
import ProductsSellerPage from "../../containers/ProductsSellerPage";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/user-history" component={HistoryFromUserPage} />
        <Route path="/track-order" component={TrackOrder} />
        <Route path="/brands" component={BrandsPage} />
        <Route path="/buyer" component={BuyerPage} />
        <Route path="/seller" component={ProductsSellerPage} />
        <Route path="/register-branch" component={RegisterBranchPage} />
        <Route
          path="/register-branch-details"
          component={RegisterBranchesDetailsPage}
        />
        <Route
          path="/register-personal-info"
          component={RegisterPersonalInfoPage}
        />
        <Route
          path="/register-general-info"
          component={RegisterGeneralInfoPage}
        />
        <Route path="/register-acceptance" component={RegisterAcceptancePage} />
      </Switch>
    );
  }
}

export default App;
