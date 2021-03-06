import React, { Component } from "react";
import Header from "../../components/Layouts/Header";
import ProductsSection from "../../components/ProductsSection";
import { description, sortByList } from "./dumy";
import { connect } from "react-redux";
import HistoryIcon from "../../components/HistoryIcon";
import ShoppingOrderContainer from "../../components/ShoppingOrderSection";
import ProductCardsSection from "../../components/ProductCardsSection";
import {
  getSortList,
  getCategoryList,
} from "../../redux-modules/dropdowns/actions";

import { getAllCompanies } from "../../redux-modules/company/actions";
class BrandsPage extends Component {
  state = {
    categoryDropDownStatus: false,
    sortDropDownStatus: false,
    productsPerPage: 6,
    currentPage: 1,
    category: "Category",
    sort: "Sort with",
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

  componentDidMount() {
    this.props.getCategoryList();
    this.props.getSortList();
    this.props.getAllCompanies();
    this.setState({});
  }

  render() {
    const {
      sortDropdownIsOpenHandle,
      categoryDropdownIsOpenHandle,
      selectSortHandle,
      selectCategoryHandle,
      state: { categoryDropDownStatus, sortDropDownStatus, category, sort },
    } = this;
    const {
      isShoppingBagOpen,
      isProductCardModalOpen,
      toggleShoppingBag,
      openProductsCardModal,
      shoppingOrderList,
      addToCart,
      orderHandle,
    } = this.props;

    return (
      <React.Fragment>
        <Header />
        <HistoryIcon />

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
          category={category}
          sort={sort}
          paginate={this.paginate}
          productsPerPage={this.state.productsPerPage}
          currentPage={this.state.currentPage}
          productsList={this.props.companyList}
          categoryList={this.props.categoryList}
          sortList={sortByList}
          description={description}
          title={description.title}
          text={description.text}
          type={"Brands"}
          sortDropDownStatus={sortDropDownStatus}
          categoryDropDownStatus={categoryDropDownStatus}
          categoryDropdownIsOpenHandle={categoryDropdownIsOpenHandle}
          sortDropdownIsOpenHandle={sortDropdownIsOpenHandle}
          selectSortHandle={selectSortHandle}
          selectCategoryHandle={selectCategoryHandle}
          addToCart={addToCart}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productsList: state.products.productsList,
    categoryList: state.dropdown.categoryList,
    sortList: state.dropdown.sortList,
    companyList: state.company.companyList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCategoryList: () => dispatch(getCategoryList()),
    getSortList: () => dispatch(getSortList()),
    getAllCompanies: () => dispatch(getAllCompanies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BrandsPage);
