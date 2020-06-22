import React, { Component } from "react";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";
import LastMinDealSection from "../../components/LastMinDealSection";
import { description, sortByList, products, PageName } from "./dumy";
import { connect } from "react-redux";
import {
  getDealsProducts,
  editDealProduct,
} from "../../redux-modules/products/actions";

import {
  getSortList,
  getCategoryList,
} from "../../redux-modules/dropdowns/actions";

class LastMinDealPage extends Component {
  state = {
    categoryDropDownStatus: false,
    sortDropDownStatus: false,
    productsPerPage: 9,
    currentPage: 1,
    amount: 0,
    category: "Category",
    sort: "Sort with",
    onSaleStyle: false,
    isCompany: true,
    isDeal: false,
  };

  componentDidMount = async () => {
    // const id = this.props.match.params.id;
    // console.log(this.props.match, "inbuyerPage");
    // await this.props.getAllProductsByUserId(id);
    const id = JSON.parse(localStorage.getItem("user")).id;
    await this.props.getCategoryList();
    await this.props.getSortList();
    await this.props.getDealsProducts(id);
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

  onSaleHandle = (event, item) => {
    // console.log(event.target, item);
    const { id } = item;
    // console.log(id, "id from last miin pag");
    item.categoryId = item.categoryId.id;
    item.userId = item.userId.id;
    item.onSale = !item.onSale;
    if (item.onSale === true) {
      item.price = item.price / 2;
    } else {
      item.price = item.price * 2;
    }
    console.log(item);
    console.log(item.categoryId);
    this.props.editDealProduct(id, item);
    console.log(this.props.dealsProductsList);
    this.setState({});
  };
  render() {
    const {
      plusHandler,
      minusHandler,
      amountHandler,
      addToCart,
      // cancelHandle,
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
        amount,
        onSaleStyle,
        isCompany,
        isDeal,
      },
    } = this;
    const {
      isShoppingIconHidden,
      isShoppingBagOpen,
      isProductCardModalOpen,
      toggleShoppingBag,
      openProductsCardModal,
      //   products,
      shoppingOrderList,
      numberOfOrders,
      orderHandle,
      cancelHandle,
      dealsProductsList,
      categoryList,
      // shoppingBagList,
    } = this.props;

    console.log(dealsProductsList);
    return (
      <React.Fragment>
        <Header />
        {dealsProductsList.length > 0 ? (
          <LastMinDealSection
            category={category}
            sort={sort}
            paginate={this.paginate}
            productsPerPage={this.state.productsPerPage}
            currentPage={this.state.currentPage}
            productsList={dealsProductsList}
            categoryList={categoryList}
            sortList={sortByList}
            type={"brand"}
            description={description}
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
            onSaleStyle={onSaleStyle}
            isCompany={isCompany}
            isDeal={isDeal}
            onSaleHandle={onSaleHandle}
          />
        ) : (
          <div class="empty-products">
            <span>There Is No {PageName}</span>
          </div>
        )}

        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.orders.shoppingBagList);
  return {
    productsList: state.products.productsList,
    categoryList: state.dropdown.categoryList,
    sortList: state.dropdown.sortList,
    product: state.products.product,
    shoppingBagList: state.orders.shoppingBagList,
    dealsProductsList: state.products.dealsProductsList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //   getAllProductsByUserId: (id) => dispatch(getAllProductsByUserId(id)),
    getCategoryList: () => dispatch(getCategoryList()),
    getSortList: () => dispatch(getSortList()),
    getDealsProducts: (id) => dispatch(getDealsProducts(id)),
    editDealProduct: (id, editedProduct) =>
      dispatch(editDealProduct(id, editedProduct)),
    //   getProductById: (id) => dispatch(getPorductById(id)),
    //   getAmout: (product) => dispatch(editAmount(product)),
    //   addToCart: (product) => dispatch({ type: ADD_TO_CART, payload: product }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LastMinDealPage);
