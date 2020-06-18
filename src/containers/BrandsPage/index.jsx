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
import { getAllBrands } from "../../redux-modules/products/actions";
import {
  getSortList,
  getCategoryList,
} from "../../redux-modules/dropdowns/actions";

import { getAllCompanies } from "../../redux-modules/company/actions";
class BrandsPage extends Component {
  state = {
    categoryDropDownStatus: false,
    sortDropDownStatus: false,
    productsPerPage: 9,
    currentPage: 1,
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
    // this.props.getAllBrands();
    this.props.getCategoryList();
    this.props.getSortList();
    this.props.getAllCompanies();
  }

  render() {
    const {
      dropDownHandler,
      state: { categoryDropDownStatus, sortDropDownStatus },
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
    console.log("this.props:", this.props);

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
          productsList={this.props.companyList}
          categoryList={this.props.categoryList}
          sortList={this.props.sortList}
          description={description}
          type={"Brands"}
          sortDropDownStatus={sortDropDownStatus}
          categoryDropDownStatus={categoryDropDownStatus}
          dropDownHandler={dropDownHandler}
          addToCart={addToCart}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state:", state);
  return {
    productsList: state.products.productsList,
    categoryList: state.dropdown.categoryList,
    sortList: state.dropdown.sortList,
    companyList: state.company.companyList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // getAllBrands: () => dispatch(getAllBrands()),
    getCategoryList: () => dispatch(getCategoryList()),
    getSortList: () => dispatch(getSortList()),
    getAllCompanies: () => dispatch(getAllCompanies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BrandsPage);
