import React, { Component } from "react";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";
import ProductsSection from "../../components/ProductsSection";
import { description } from "./dumy";
import { connect } from "react-redux";
import {
  getAllProducts,
  getSortList,
  getCategoryList,
} from "../../redux-modules/products/actions";

class BrandsPage extends Component {
  componentDidMount() {
    this.props.getAllProducts();
    this.props.getCategoryList();
    this.props.getSortList();
  }

  render() {
    return (
      <React.Fragment>
        {/* <Header /> */}
        <ProductsSection
          productsList={this.props.productsList}
          categoryList={this.props.categoryList}
          sortList={this.props.sortList}
          description={description}
          type={"Brands"}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (state) => {
  return {
    productsList: state.prod.products,
    categoryList: state.prod.categoryList,
    sortList: state.prod.sortList,
  };
};

const mapStateToProps = (dispatch) => {
  return {
    getAllProducts: () => dispatch(getAllProducts()),
    getCategoryList: () => dispatch(getCategoryList()),
    getSortList: () => dispatch(getSortList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BrandsPage);
