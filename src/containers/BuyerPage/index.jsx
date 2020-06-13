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

class BuyerPage extends Component {
  componentDidMount() {
    this.props.getAllProducts();
    this.props.getCategoryList();
    this.props.getSortList();
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <ProductsSection
          productsList={this.props.products}
          categoryList={this.props.category}
          sortbyList={this.props.sortByList}
          type={"buyer-page"}
          description={description}
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
export default connect(mapStateToProps, mapDispatchToProps)(BuyerPage);
