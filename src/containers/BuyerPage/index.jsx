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
    // console.log(id);
    const addedProduct = this.props.productsList.find(
      (product) => product.id === id
    );
    // console.log(addedProduct);
    this.props.addToCart(addedProduct);

    // let numberOfOrders = this.state.numberOfOrders;
    // if (numberOfOrders === 0) {
    //   numberOfOrders = numberOfOrders + 1;
    // }
    // this.setState({ numberOfOrders });
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

  componentDidMount = () => {
    const id = this.props.match.params.id;
    console.log(this.props.match, "inbuyerPage");
    this.props.getAllProductsByUserId(id);
    this.props.getCategoryList();
    this.props.getSortList();
  };
  render() {
    const {
      dropDownHandler,
      plusHandler,
      minusHandler,
      amountHandler,
      addToCart,
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
    } = this.props;

    return (
      <React.Fragment>
        <Header />
        <HistoryIcon />
        <ShoppingCart
          number={numberOfOrders}
          openShoppingBag={toggleShoppingBag}
          isHidden={isShoppingIconHidden}
        />
        <ShoppingOrderContainer
          shoppingOrderList={shoppingOrderList}
          isOpen={isShoppingBagOpen}
          closeShoppingBag={toggleShoppingBag}
          openCardModal={openProductsCardModal}
          orderHandle={orderHandle}
        />
        {isProductCardModalOpen && (
          <ProductCardsSection
            isClicked={isProductCardModalOpen}
            productCards={shoppingOrderList[0].products}
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
  // console.log(state.orders.shoppingBagList);
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
