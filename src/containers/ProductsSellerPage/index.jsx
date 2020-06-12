import React, { Component } from "react";
import ProductsSection from "../../components/ProductsSection";
import { connect } from "react-redux";
import * as actions from "../../redux-module/products/actions";
class ProductsPage extends Component {
  state = {
    products: [],
    sortbyList: [],
    categoryList: [],
    pagetype: this.props.pagetype,
  };

  componentDidMount() {
    console.log("This.props: ", this.props);
    this.props.getAllProducts();
    this.props.getSortByList();
    this.props.getCategoryList();
  }

  render() {
    return (
      <ProductsSection
        products={this.props.products}
        sortbyList={this.props.sortbyList}
        category={this.props.categoryList}
        // categoryFilterHandler={this.props.categoryFilter}
        // sortByFilterHandler={this.props.sortByFilter}
        // searchHandler={this.props.searchFilter}
        pagetype={this.props.pagetype}
      ></ProductsSection>
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
      dispatch(actions.getSortByList());
    },
    getCategoryList: () => {
      dispatch(actions.getCategoryList());
    },
    // sortByFilter: dispatch({ type: "sortBy" }),
    // categoryFilter: dispatch({ type: "category" }),
    // searchFilter: dispatch({ type: "search" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
