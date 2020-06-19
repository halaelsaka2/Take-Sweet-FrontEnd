import React, { Component } from "react";
import { connect } from "react-redux";
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
    console.log("This.props: ", this.props);
    const id = JSON.parse(localStorage.getItem("user")).id;
    this.props.getAllProductsByUserId(id);
    this.props.getSortList();
    this.props.getCategoryList();
  }

  render() {
    const {
      dropDownHandler,
      state: { categoryDropDownStatus, sortDropDownStatus },
    } = this;
    return (
      <ProductsSellerSection
        paginate={this.paginate}
        productsPerPage={this.state.productsPerPage}
        currentPage={this.state.currentPage}
        productsList={this.props.productsList}
        categoryList={this.props.categoryList}
        sortList={this.props.sortList}
        // categoryFilterHandler={this.props.categoryFilter}
        // sortByFilterHandler={this.props.sortByFilter}
        // searchHandler={this.props.searchFilter}
        sortDropDownStatus={sortDropDownStatus}
        categoryDropDownStatus={categoryDropDownStatus}
        dropDownHandler={dropDownHandler}
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
