import React, { Component } from "react";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";
import ProductsSection from "../../components/ProductsSection";
import { description, sortByList } from "./dumy";
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
import { getUserById } from "../../redux-modules/users/actions";

class BuyerPage extends Component {
  state = {
    categoryDropDownStatus: false,
    sortDropDownStatus: false,
    productsPerPage: 6,
    currentPage: 1,
    amount: 0,
    category: "Category",
    sort: "Sort with",
    searchValue: "",
    categoryId: "",
    sortBy: "",
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

  amountHandler = (event, id) => {
    const oldproduct = this.props.productsList.find(
      (product) => product.id === id
    );
    if (event.target.id === "plus") {
      const amount = oldproduct.amount + 1;
      const newproduct = { ...oldproduct, amount };
      this.props.getAmout(newproduct);
    } else {
      if (oldproduct.amount !== oldproduct.minPieces) {
        const amount = oldproduct.amount - 1;
        const newproduct = { ...oldproduct, amount };
        this.props.getAmout(newproduct);
      }
    }
  };

  componentDidMount = async () => {
    const { categoryId, searchValue, sortBy } = this.state;
    const id = this.props.match.params.id;
    this.props.getUserById(id);
    await this.props.getAllProductsByUserId(
      id,
      searchValue,
      categoryId,
      sortBy
    );
    await this.props.getCategoryList();
    await this.props.getSortList();
  };

  sortDropdownIsOpenHandle = (event) => {
    let sortDropDownStatus = this.state.sortDropDownStatus;
    sortDropDownStatus = !sortDropDownStatus;
    this.setState({ sortDropDownStatus });
  };

  categoryDropdownIsOpenHandle = (event) => {
    let categoryDropDownStatus = this.state.categoryDropDownStatus;
    categoryDropDownStatus = !categoryDropDownStatus;
    this.setState({ categoryDropDownStatus });
  };

  selectSortHandle = (event, id) => {
    const userId = this.props.match.params.id;
    let { searchValue, categoryId } = this.state;
    const { value } = event.target;
    const sortBy = value;
    this.props.getAllProductsByUserId(userId, searchValue, categoryId, sortBy);
    let sort = this.state.sort;
    let sortDropDownStatus = this.state.sortDropDownStatus;
    sort = event.target.textContent;
    sortDropDownStatus = !sortDropDownStatus;
    this.setState({ sort, sortDropDownStatus, sortBy });
  };

  selectCategoryHandle = (event, id) => {
    const userId = this.props.match.params.id;
    let { searchValue, sortBy } = this.state;
    let categoryId;
    if (id === "0") {
      categoryId = "";
      this.props.getAllProductsByUserId(
        userId,
        searchValue,
        categoryId,
        sortBy
      );
    } else {
      categoryId = id;
      this.props.getAllProductsByUserId(
        userId,
        searchValue,
        categoryId,
        sortBy
      );
    }
    let category = this.state.category;
    let categoryDropDownStatus = this.state.categoryDropDownStatus;
    category = event.target.textContent;
    categoryDropDownStatus = !categoryDropDownStatus;
    this.setState({ category, categoryDropDownStatus, categoryId });
  };

  searchHandler = (e) => {
    const id = this.props.match.params.id;
    let { categoryId, sortBy } = this.state;
    let searchValue = e.target.value;
    if (searchValue !== null || searchValue !== "") {
      this.props.getAllProductsByUserId(id, searchValue, categoryId, sortBy);
    }
    if (searchValue === null || searchValue === "") {
      this.props.getAllProductsByUserId(id, searchValue, categoryId, sortBy);
    }
    this.setState({ searchValue });
  };

  render() {
    const {
      plusHandler,
      minusHandler,
      amountHandler,
      addToCart,
      sortDropdownIsOpenHandle,
      categoryDropdownIsOpenHandle,
      selectSortHandle,
      selectCategoryHandle,
      searchHandler,

      state: {
        categoryDropDownStatus,
        sortDropDownStatus,
        category,
        sort,
        searchValue,
      },
    } = this;
    const {
      isShoppingIconHidden,
      isShoppingBagOpen,
      isProductCardModalOpen,
      toggleShoppingBag,
      openProductsCardModal,
      orderHandle,
      cancelHandle,
    } = this.props;

    const shoppingBagList = JSON.parse(localStorage.getItem("shoppingBagList"))
      ? JSON.parse(localStorage.getItem("shoppingBagList"))
      : [];
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
          category={category}
          sort={sort}
          paginate={this.paginate}
          productsPerPage={this.state.productsPerPage}
          currentPage={this.state.currentPage}
          productsList={this.props.productsList}
          categoryList={this.props.categoryList}
          sortList={sortByList}
          type={"buyer"}
          description={description}
          title={this.props.user.userName}
          text={description.text}
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
          searchValue={searchValue}
          searchHandler={searchHandler}
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
    shoppingBagList: state.orders.shoppingBagList,
    user: state.user.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllProductsByUserId: (id, search, categoryId, sortBy) =>
      dispatch(getAllProductsByUserId(id, search, categoryId, sortBy)),
    getCategoryList: () => dispatch(getCategoryList()),
    getSortList: () => dispatch(getSortList()),
    getProductById: (id) => dispatch(getPorductById(id)),
    getAmout: (product) => dispatch(editAmount(product)),
    addToCart: (product) => dispatch({ type: ADD_TO_CART, payload: product }),
    getUserById: (id) => dispatch(getUserById(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BuyerPage);
