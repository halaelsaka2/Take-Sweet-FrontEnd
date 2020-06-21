import React, { Component } from "react";
import { connect } from "react-redux";
import { sortByList } from "./dumy";

import { getAllProductsByUserId } from "../../redux-modules/products/actions";

import {
  getSortList,
  getCategoryList,
} from "../../redux-modules/dropdowns/actions";
import PropTypes from "prop-types";
import ProductsSellerSection from "../../components/ProductsSellerSection";
class ProductsPage extends Component {
  state = {
    categoryDropDownStatus: false,
    sortDropDownStatus: false,
    productsPerPage: 9,
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

  componentDidMount() {
    console.log("This.props: ", this.props);
    const id = JSON.parse(localStorage.getItem("user")).id;
    this.props.getAllProductsByUserId(id);
    this.props.getSortList();
    this.props.getCategoryList();
  }

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
      sortDropdownIsOpenHandle,
      categoryDropdownIsOpenHandle,
      selectSortHandle,
      selectCategoryHandle,
      state: { categoryDropDownStatus, sortDropDownStatus, category, sort },
    } = this;
    return (
      <ProductsSellerSection
        category={category}
        sort={sort}
        paginate={this.paginate}
        productsPerPage={this.state.productsPerPage}
        currentPage={this.state.currentPage}
        productsList={this.props.productsList}
        categoryList={this.props.categoryList}
        sortList={sortByList}
        // categoryFilterHandler={this.props.categoryFilter}
        // sortByFilterHandler={this.props.sortByFilter}
        // searchHandler={this.props.searchFilter}
        sortDropDownStatus={sortDropDownStatus}
        categoryDropDownStatus={categoryDropDownStatus}
        categoryDropdownIsOpenHandle={categoryDropdownIsOpenHandle}
        sortDropdownIsOpenHandle={sortDropdownIsOpenHandle}
        selectSortHandle={selectSortHandle}
        selectCategoryHandle={selectCategoryHandle}
        type={"seller"}
      ></ProductsSellerSection>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productsList: state.products.productsList,
    categoryList: state.dropdown.categoryList,
    sortList: state.dropdown.sortList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // getAllProducts: () => dispatch(getAllProducts()),
    getAllProductsByUserId: (id) => dispatch(getAllProductsByUserId(id)),
    getCategoryList: () => dispatch(getCategoryList()),
    getSortList: () => dispatch(getSortList()),
  };
};

ProductsPage.propTypes = {
  productsList: PropTypes.array,
  categoryList: PropTypes.array,
  sortList: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
