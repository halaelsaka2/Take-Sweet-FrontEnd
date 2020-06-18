import * as actionTypes from "./constants";

const initialState = {
  productsList: [],
  sortList: [],
  categoryList: [],
  product: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_PRODUCTS:
      console.log(action.productsList);
      return {
        ...state,
        productsList: action.productsList,
      };
    case actionTypes.ADD_PRODUCT:
      const productsList = [...state.productsList, action.product]
      console.log(productsList, "in Addproduct Reducer");
      return {
        ...state,
        productsList
      };
    case actionTypes.DELETE_PRODUCT:
      const newproductsList = state.productsList.filter((product) => product.id !== action.product.id)
      return {
        ...state,
        productsList: newproductsList,
      };
    case actionTypes.EDIT_PRODUCT:
      return {
        ...state,
        productsList: action.newproducts,
      };
    case actionTypes.GET_PRODUCT_BY_ID:
      return {
        ...state,
        product: action.product,
      };
    case actionTypes.EDIT_Amount:
      const oldproduct = state.productsList.find((product) => product.id === action.product.id)
      const index = state.productsList.indexOf(oldproduct)
      const productList = [...state.productsList]
      productList[index]=action.product;
      return {
        ...state,
        productsList:productList
      };
    default:
      return state;
  }
};