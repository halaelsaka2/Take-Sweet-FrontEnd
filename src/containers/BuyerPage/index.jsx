import React, { Component } from "react";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";
import ProductsSection from "../../components/ProductsSection";
import { description } from "./dumy";
import { connect } from "react-redux";
import HistoryIcon from "../../components/HistoryIcon";
import ShoppingCart from "../../components/ShoppingCart";
import ShoppingOrderContainer from "../../components/ShoppingOrderSection";
import ProductCardsSection from "../../components/ProductCardsSection";
import { ADD_TO_CART } from "../../redux-modules/orders/constants";

import {
  getAllProductsByUserId,
  getPorductById,
  editAmount,
} from "../../redux-modules/products/actions";
import {
  getSortList,
  getCategoryList,
} from "../../redux-modules/dropdowns/actions";

class BuyerPage extends Component {
  state = {
    categoryDropDownStatus: false,
    sortDropDownStatus: false,
    productsPerPage: 9,
    currentPage: 1,
    amount: 0,
  };

  paginate = (currentPage) => {
    if (
      0 < currentPage &&
      currentPage <=
        Math.ceil(this.props.productsList.length / this.state.productsPerPage)
    ) {
      this.setState({ currentPage });
    }
  };

  addToCart = (id) => {
    const addedProduct = this.props.productsList.find(
      (product) => product.id === id
    );
    this.props.addToCart(addedProduct);
    const shoppingBagList = this.props.shoppingBagList;
    localStorage.setItem("shoppingBagList", JSON.stringify(shoppingBagList));
    this.setState({ numberOfOrders: shoppingBagList.length });
  };

  dropDownHandler = (name) => {
    this.setState({
      [name]: !this.state[name],
    });
  };

  amountHandler = (event, id) => {
    const oldproduct = this.props.productsList.find(
      (product) => product.id === id
    );
    console.log(event.target.id);
    if (event.target.id === "plus") {
      const amount = oldproduct.amount + 1;
      const newproduct = { ...oldproduct, amount };
      this.props.getAmout(newproduct);
    } else {
      if (oldproduct.amount !== 10) {
        const amount = oldproduct.amount - 1;
        const newproduct = { ...oldproduct, amount };
        this.props.getAmout(newproduct);
      }
    }
  };

  componentDidMount =async () => {
    const id = this.props.match.params.id;
    console.log(this.props.match, "inbuyerPage");
    await this.props.getAllProductsByUserId(id);
    await this.props.getCategoryList();
    await this.props.getSortList();
  };
  render() {
    const {
      dropDownHandler,
      plusHandler,
      minusHandler,
      amountHandler,
      addToCart,
      // cancelHandle,
      state: { categoryDropDownStatus, sortDropDownStatus, amount },
    } = this;
    const {
      isShoppingIconHidden,
      isShoppingBagOpen,
      isProductCardModalOpen,
      toggleShoppingBag,
      openProductsCardModal,
      products,
      shoppingOrderList,
      numberOfOrders,
      orderHandle,
      cancelHandle,
      // shoppingBagList,
    } = this.props;

    const shoppingBagList = JSON.parse(localStorage.getItem("shoppingBagList"));
    //console.log(this.props.productsList);
    return (
      
      <React.Fragment>
        <Header />
        <HistoryIcon />
        <ShoppingCart
          number={shoppingBagList.length}
          openShoppingBag={toggleShoppingBag}
          isHidden={isShoppingIconHidden}
        />
        <ShoppingOrderContainer
          shoppingOrderList={shoppingBagList}
          isOpen={isShoppingBagOpen}
          closeShoppingBag={toggleShoppingBag}
          openCardModal={openProductsCardModal}
          orderHandle={orderHandle}
          cancelHandle={cancelHandle}
        />
        {isProductCardModalOpen && (
          <ProductCardsSection
            isClicked={isProductCardModalOpen}
            productCards={shoppingBagList[0].shoppingBagProducts}
            closeProductsModal={openProductsCardModal}
            handleDelete
          />
        )}
        <ProductsSection
          paginate={this.paginate}
          productsPerPage={this.state.productsPerPage}
          currentPage={this.state.currentPage}
          productsList={this.props.productsList}
          categoryList={this.props.categoryList}
          sortList={this.props.sortList}
          type={"buyer"}
          description={description}
          sortDropDownStatus={sortDropDownStatus}
          categoryDropDownStatus={categoryDropDownStatus}
          dropDownHandler={dropDownHandler}
          addToCart={addToCart}
          plusHandler={plusHandler}
          minusHandler={minusHandler}
          amountHandler={amountHandler}
        />
        <Footer />
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state.orders.shoppingBagList);
  return {
    productsList: state.products.productsList,
    categoryList: state.dropdown.categoryList,
    sortList: state.dropdown.sortList,
    product: state.products.product,
    shoppingBagList: state.orders.shoppingBagList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllProductsByUserId: (id) => dispatch(getAllProductsByUserId(id)),
    getCategoryList: () => dispatch(getCategoryList()),
    getSortList: () => dispatch(getSortList()),
    getProductById: (id) => dispatch(getPorductById(id)),
    getAmout: (product) => dispatch(editAmount(product)),
    addToCart: (product) => dispatch({ type: ADD_TO_CART, payload: product }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BuyerPage);
