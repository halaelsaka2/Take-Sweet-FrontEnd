import * as actionTypes from "./constants";

const initialState = {
  productsList: [],
  sortList: [],
  categoryList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_PRODUCTS:
      console.log(action.productsList);
      return {
        ...state,
        productsList: action.productsList,
      };

    case actionTypes.GET_ALL_BRANDS:
      return {
        ...state,
        productsList: action.brandsList,
      };

    case actionTypes.GET_PRODUCT_BY_ID:
      return {
        ...state,
        product: action.product,
      };
    case actionTypes.DELETE_PRODUCT:
      return {
        ...state,
        deletedProduct: action.product,
      };
    case actionTypes.EDIT_PRODUCT:
      return {
        ...state,
        editedProduct: action.product,
      };
    // case actionTypes.ADD_PRODUCT:
    // const productsList = [...state.productsList];
    // productsList.push(action.product);
    // return {
    //   ...state,
    //   productsList,
    // };
    default:
      return state;
  }
};
