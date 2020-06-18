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
import {
  getAllProducts,
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

  componentDidMount() {
    this.props.getAllProducts();
    this.props.getCategoryList();
    this.props.getSortList();
  }
  render() {
    const {
      dropDownHandler,
      plusHandler,
      minusHandler,
      amountHandler,
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
      addToCart,
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
  return {
    productsList: state.products.productsList,
    categoryList: state.dropdown.categoryList,
    sortList: state.dropdown.sortList,
    product: state.products.product,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllProducts: () => dispatch(getAllProducts()),
    getCategoryList: () => dispatch(getCategoryList()),
    getSortList: () => dispatch(getSortList()),
    getProductById: (id) => dispatch(getPorductById(id)),
    getAmout: (product) => dispatch(editAmount(product)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BuyerPage);
