import * as actionTypes from "./constants";

const initialState = {
  productsList: [],
  sortList: [],
  categoryList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_PRODUCTS:
      console.log(action.productsList)
      return {
        ...state,
        productsList: action.productsList,
      };
    
      case actionTypes.GET_ALL_BRANDS:
      return {
        ...state,
        productsList: action.brandsList,
      };
    default:
      return state;
  }
};
