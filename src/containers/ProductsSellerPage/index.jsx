import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux-modules/products/actions";
import PropTypes from "prop-types";
import ProductsSellerSection from "../../components/ProductsSellerSection";
class ProductsPage extends Component {
  componentDidMount() {
    console.log("This.props: ", this.props);
    this.props.getAllProducts();
    this.props.getSortByList();
    this.props.getCategoryList();
  }

  render() {
    return (
      <ProductsSellerSection
        productsList={this.props.products}
        sortList={this.props.sortbyList}
        categoryList={this.props.categoryList}
        // categoryFilterHandler={this.props.categoryFilter}
        // sortByFilterHandler={this.props.sortByFilter}
        // searchHandler={this.props.searchFilter}
        type={"seller"}
      ></ProductsSellerSection>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.prod.products,
    sortbyList: state.prod.sortBy,
    categoryList: state.prod.category,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllProducts: () => {
      dispatch(actions.getAllProducts());
    },
    getSortByList: () => {
      dispatch(actions.getSortList());
    },
    getCategoryList: () => {
      dispatch(actions.getCategoryList());
    },
    // sortByFilter: dispatch({ type: "sortBy" }),
    // categoryFilter: dispatch({ type: "category" }),
    // searchFilter: dispatch({ type: "search" }),
  };
};
ProductsPage.propTypes = {
  productsList: PropTypes.array,
  categoryList: PropTypes.array,
  sortList: PropTypes.array,
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
