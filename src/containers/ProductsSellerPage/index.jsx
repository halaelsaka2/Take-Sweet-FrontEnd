import React, { Component } from "react";
import { connect } from "react-redux";
import { sortByList } from "./dumy";
import {
  getAllProductsByUserId,
  deleteProduct,
  editProduct,
} from "../../redux-modules/products/actions";
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
    productsPerPage: 6,
    currentPage: 1,
    category: "Category",
    sort: "Sort with",
    categoryId: "",
    sortBy: "",
    searchValue: "",
    onSaleStyle: false,
    isCompany: true,
    isDeal: true,
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
    const { searchValue, categoryId, sortBy } = this.state;
    const id = JSON.parse(localStorage.getItem("user")).id;
    this.props.getAllProductsByUserId(id, searchValue, categoryId, sortBy);
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
  deleteHandle = async (event, id) => {
    event.preventDefault();
    await this.props.deleteHandle(id);
  };

  onSaleHandle = (event, item) => {
    const { id } = item;
    item.categoryId = item.categoryId.id;
    item.userId = item.userId.id;
    item.onSale = !item.onSale;
    if (item.onSale === true) {
      item.price = item.price / 2;
    } else {
      item.price = item.price * 2;
    }
    this.props.editProduct(id, item);
    this.setState({});
  };
  render() {
    const {
      sortDropdownIsOpenHandle,
      categoryDropdownIsOpenHandle,
      selectSortHandle,
      selectCategoryHandle,
      onSaleHandle,
      state: {
        categoryDropDownStatus,
        sortDropDownStatus,
        category,
        sort,
        onSaleStyle,
        isCompany,
        isDeal,
      },
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
        deleteHandle={this.props.deleteHandle}
        sortDropDownStatus={sortDropDownStatus}
        categoryDropDownStatus={categoryDropDownStatus}
        categoryDropdownIsOpenHandle={categoryDropdownIsOpenHandle}
        sortDropdownIsOpenHandle={sortDropdownIsOpenHandle}
        selectSortHandle={selectSortHandle}
        selectCategoryHandle={selectCategoryHandle}
        type={"seller"}
        isCompany={isCompany}
        onSaleStyle={onSaleStyle}
        isDeal={isDeal}
        onSaleHandle={onSaleHandle}
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
    getAllProductsByUserId: (id, search, categotyId, sortBy) =>
      dispatch(getAllProductsByUserId(id, search, categotyId, sortBy)),
    getCategoryList: () => dispatch(getCategoryList()),
    getSortList: () => dispatch(getSortList()),
    deleteHandle: (id) => dispatch(deleteProduct(id)),
    editProduct: (id, editedProduct) =>
      dispatch(editProduct(id, editedProduct)),
  };
};

ProductsPage.propTypes = {
  productsList: PropTypes.array,
  categoryList: PropTypes.array,
  sortList: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
