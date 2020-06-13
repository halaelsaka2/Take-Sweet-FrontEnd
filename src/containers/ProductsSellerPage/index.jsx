import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getAllProducts,
  getSortList,
  getCategoryList,
} from "../../redux-modules/products/actions";

import PropTypes from "prop-types";
import ProductsSellerSection from "../../components/ProductsSellerSection";
class ProductsPage extends Component {
  state = {
    categoryDropDownStatus: false,
    sortDropDownStatus: false,
  };

  dropDownHandler = (name) => {
    this.setState({
      [name]: !this.state[name],
    });
  };
  componentDidMount() {
    console.log("This.props: ", this.props);
    this.props.getAllProducts();
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

ProductsPage.propTypes = {
  productsList: PropTypes.array,
  categoryList: PropTypes.array,
  sortList: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
