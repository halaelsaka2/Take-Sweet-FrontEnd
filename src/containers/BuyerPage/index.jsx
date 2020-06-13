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
  getSortList,
  getCategoryList,
} from "../../redux-modules/products/actions";

class BuyerPage extends Component {
  state = {
    categoryDropDownStatus: false,
    sortDropDownStatus: false,
    productsPerPage:9,
    currentPage:1
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
  componentDidMount() {
    this.props.getAllProducts();
    this.props.getCategoryList();
    this.props.getSortList();
  }
  render() {
    const {

      dropDownHandler,
      state: { categoryDropDownStatus, sortDropDownStatus },
    } = this;
      const  {
      isShoppingIconHidden,
      isShoppingBagOpen,
      isProductCardModalOpen,
      toggleShoppingBag,
      openProductsCardModal,
      products,
    } = this.props;

    return (
      <React.Fragment>
        <Header />
        <HistoryIcon />
        <ShoppingCart
          number={2}
          openShoppingBag={toggleShoppingBag}
          isHidden={isShoppingIconHidden}
        />
        <ShoppingOrderContainer
          shoppingOrderList={[1, 2, 3]}
          isOpen={isShoppingBagOpen}
          closeShoppingBag={toggleShoppingBag}
          openCardModal={openProductsCardModal}
        />
        {isProductCardModalOpen && (
          <ProductCardsSection
            isClicked={isProductCardModalOpen}
            productCards={products}
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
        />
        <Footer />
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    productsList: state.prod.productsList,
    categoryList: state.prod.categoryList,
    sortList: state.prod.sortList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllProducts: () => dispatch(getAllProducts()),
    getCategoryList: () => dispatch(getCategoryList()),
    getSortList: () => dispatch(getSortList()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BuyerPage);
