import React, { Component } from "react";

import { Switch, Route, Redirect } from "react-router-dom";
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
import AddProductPage from "../../containers/AddProductPage";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";
import OrderDetailsPage from "../OrderDetailsPage";
import { withRouter } from "react-router";
import LastMinDealPage from "../LastMinDealPage";
class App extends Component {
  state = {
    isShoppingIconHidden: false,
    isShoppingBagOpen: false,
    isProductCardModalOpen: false,
    eyeId: "",
    products: [
      {
        id: 1,
        name: "Cup Cake",
        src: "assets/images/cake6x6.jpg",
      },
      {
        id: 2,
        name: "Caramel Cake",
        src: "assets/images/Product-1.jpg",
      },
      {
        id: 3,
        name: "Waffle",
        src: "assets/images/waffle.jpeg",
      },
      {
        id: 4,
        name: "Tart",
        src: "assets/images/Product-2.jpg",
      },
    ],
    // shoppingOrderList: [
    //   {
    //     id: 1,
    //     date: 14 / 6 / 2020,
    //     status: "Waiting",
    //     products: [
    //       {
    //         src: "assets/images/Product-1.jpg",
    //         amount: 10,
    //         name: "Caramel Cake",
    //         totalPrice: 300,
    //       },
    //       {
    //         src: "assets/images/Product-2.jpg",
    //         amount: 10,
    //         name: "Figs Tart",
    //         totalPrice: 200,
    //       },
    //     ],
    //     src: "assets/images/ElAbd.jpg",
    //     // "companyId",
    //     // "userId",
    //     // "comments"
    //     // paymentType,
    //   },
    // ],

    numberOfOrders: 0,
  };

  toggleShoppingBag = () => {
    let isShoppingIconHidden = this.state.isShoppingIconHidden;
    isShoppingIconHidden = !isShoppingIconHidden;
    let isShoppingBagOpen = this.state.isShoppingBagOpen;
    isShoppingBagOpen = !isShoppingBagOpen;
    this.setState({ isShoppingIconHidden, isShoppingBagOpen });
  };
  openProductsCardModal = (id) => {
    let isProductCardModalOpen = this.state.isProductCardModalOpen;
    isProductCardModalOpen = !isProductCardModalOpen;
    this.setState({ isProductCardModalOpen, eyeId: id });
  };
  orderHandle = (id) => {
    this.props.history.push(`/order-details/${id}`);
  };
  cancelHandle = (id) => {
    let shoppingBagList = JSON.parse(localStorage.getItem("shoppingBagList"));
    shoppingBagList = shoppingBagList.filter((m) => m.company.id !== id);
    // console.log()
    this.setState({});
    localStorage.setItem("shoppingBagList", JSON.stringify(shoppingBagList));
  };
  render() {
    const {
      state: {
        isProductCardModalOpen,
        isShoppingBagOpen,
        isShoppingIconHidden,
        products,
      },
      openProductsCardModal,
      toggleShoppingBag,
      orderHandle,
      cancelHandle,
    } = this;

    const shoppingBagList = JSON.parse(localStorage.getItem("shoppingBagList"))
      ? JSON.parse(localStorage.getItem("shoppingBagList"))
      : [];
    return (
      <React.Fragment>
        <Switch>
          {/* <Header /> */}
          <Route path="/" exact component={HomePage} />
          <Route path="/home" component={HomePage} />
          <Route path="/edit/:id" component={AddProductPage} />
          <Route path="/add-product" component={AddProductPage} />
          <Route path="/order-details/:id" component={OrderDetailsPage} />
          <Route
            path="/profile"
            render={(props) => (
              <ProfilePage
                isShoppingIconHidden={isShoppingIconHidden}
                isProductCardModalOpen={isProductCardModalOpen}
                isShoppingBagOpen={isShoppingBagOpen}
                openProductsCardModal={openProductsCardModal}
                toggleShoppingBag={toggleShoppingBag}
                closeShoppingBag={toggleShoppingBag}
                shoppingOrderList={shoppingBagList}
                numberOfOrders={shoppingBagList.length}
                orderHandle={orderHandle}
                cancelHandle={cancelHandle}
                {...props}
              />
            )}
          />
          <Route
            path="/user-history"
            render={(props) => (
              <HistoryFromUserPage
                isShoppingIconHidden={isShoppingIconHidden}
                isProductCardModalOpen={isProductCardModalOpen}
                isShoppingBagOpen={isShoppingBagOpen}
                openProductsCardModal={openProductsCardModal}
                toggleShoppingBag={toggleShoppingBag}
                closeShoppingBag={toggleShoppingBag}
                products={products}
                {...props}
              />
            )}
          />
          {/* <Route path="/profile" component={ProfilePage} /> */}
          {/* <Route path="/user-history" component={HistoryFromUserPage} /> */}
          <Route path="/track-order" component={TrackOrder} />
          <Route
            path="/brands"
            render={(props) => (
              <BrandsPage
                isShoppingIconHidden={isShoppingIconHidden}
                isProductCardModalOpen={isProductCardModalOpen}
                isShoppingBagOpen={isShoppingBagOpen}
                openProductsCardModal={openProductsCardModal}
                toggleShoppingBag={toggleShoppingBag}
                closeShoppingBag={toggleShoppingBag}
                shoppingOrderList={this.state.shoppingOrderList}
                numberOfOrders={this.state.numberOfOrders}
                products={products}
                {...props}
              />
            )}
          />
          {/* <Route path="/brands" component={BrandsPage} /> */}
          <Route
            path="/buyer/:id"
            render={(props) => (
              <BuyerPage
                isShoppingIconHidden={isShoppingIconHidden}
                isProductCardModalOpen={isProductCardModalOpen}
                isShoppingBagOpen={isShoppingBagOpen}
                openProductsCardModal={openProductsCardModal}
                toggleShoppingBag={toggleShoppingBag}
                closeShoppingBag={toggleShoppingBag}
                // // shoppingOrderList={this.state.shoppingOrderList}
                cancelHandle={cancelHandle}
                orderHandle={orderHandle}
                numberOfOrders={this.state.numberOfOrders}
                products={products}
                {...props}
              />
            )}
          />
          {/* <Route path="/buyer" component={BuyerPage} /> */}

          <Route path="/seller" component={ProductsSellerPage} />
          <Route path="/deals" component={LastMinDealPage} />

          <Route path="/login" component={LoginPage} />
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
          <Route
            path="/register-acceptance"
            component={RegisterAcceptancePage}
          />

          {/* <Redirect from="/home" to="/" /> */}
          <Redirect to="/" />

          {/* <Footer /> */}
        </Switch>
      </React.Fragment>
    );
  }
}
export default withRouter(App);
