import React, { Component } from "react";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";
import LastMinDealSection from "../../components/LastMinDealSection";
import { description, sortByList, products } from "./dumy";
import { connect } from "react-redux";

import {
  getSortList,
  getCategoryList,
} from "../../redux-modules/dropdowns/actions";

class LastMinDealPage extends Component {
  state = {
    categoryDropDownStatus: false,
    sortDropDownStatus: false,
    productsPerPage: 9,
    currentPage: 1,
    amount: 0,
    category: "Category",
    sort: "Sort with",
    onSale: false,
    isCompany: true,
    isDeal: false,
  };

  componentDidMount = async () => {
    // const id = this.props.match.params.id;
    // console.log(this.props.match, "inbuyerPage");
    // await this.props.getAllProductsByUserId(id);
    await this.props.getCategoryList();
    await this.props.getSortList();
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

  sortDropdownIsOpenHandle = (event) => {
    let sortDropDownStatus = this.state.sortDropDownStatus;
    sortDropDownStatus = !sortDropDownStatus;
    this.setState({ sortDropDownStatus });
  };

  categoryDropdownIsOpenHandle = (event) => {
    let categoryDropDownStatus = this.state.categoryDropDownStatus;
    categoryDropDownStatus = !categoryDropDownStatus;
    console.log("categoryyyyy");
    this.setState({ categoryDropDownStatus });
  };

  selectSortHandle = (event, id) => {
    let sort = this.state.sort;
    let sortDropDownStatus = this.state.sortDropDownStatus;
    sort = event.target.textContent;
    sortDropDownStatus = !sortDropDownStatus;
    this.setState({ sort, sortDropDownStatus });
  };

  selectCategoryHandle = (event, id) => {
    let category = this.state.category;
    let categoryDropDownStatus = this.state.categoryDropDownStatus;
    category = event.target.textContent;
    categoryDropDownStatus = !categoryDropDownStatus;
    this.setState({ category, categoryDropDownStatus });
  };
  render() {
    const {
      plusHandler,
      minusHandler,
      amountHandler,
      addToCart,
      // cancelHandle,
      sortDropdownIsOpenHandle,
      categoryDropdownIsOpenHandle,
      selectSortHandle,
      selectCategoryHandle,
      state: {
        categoryDropDownStatus,
        sortDropDownStatus,
        category,
        sort,
        amount,
        onSale,
        isCompany,
        isDeal,
      },
    } = this;
    const {
      isShoppingIconHidden,
      isShoppingBagOpen,
      isProductCardModalOpen,
      toggleShoppingBag,
      openProductsCardModal,
      //   products,
      shoppingOrderList,
      numberOfOrders,
      orderHandle,
      cancelHandle,
      // shoppingBagList,
    } = this.props;
    return (
      <React.Fragment>
        <Header />
        <LastMinDealSection
          category={category}
          sort={sort}
          paginate={this.paginate}
          productsPerPage={this.state.productsPerPage}
          currentPage={this.state.currentPage}
          productsList={products}
          categoryList={this.props.categoryList}
          sortList={sortByList}
          type={"brand"}
          description={description}
          addToCart={addToCart}
          plusHandler={plusHandler}
          minusHandler={minusHandler}
          amountHandler={amountHandler}
          sortDropDownStatus={sortDropDownStatus}
          categoryDropDownStatus={categoryDropDownStatus}
          categoryDropdownIsOpenHandle={categoryDropdownIsOpenHandle}
          sortDropdownIsOpenHandle={sortDropdownIsOpenHandle}
          selectSortHandle={selectSortHandle}
          selectCategoryHandle={selectCategoryHandle}
          onSale={onSale}
          isCompany={isCompany}
          isDeal={isDeal}
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
    //   getAllProductsByUserId: (id) => dispatch(getAllProductsByUserId(id)),
    getCategoryList: () => dispatch(getCategoryList()),
    getSortList: () => dispatch(getSortList()),
    //   getProductById: (id) => dispatch(getPorductById(id)),
    //   getAmout: (product) => dispatch(editAmount(product)),
    //   addToCart: (product) => dispatch({ type: ADD_TO_CART, payload: product }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LastMinDealPage);
