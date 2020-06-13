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
    case actionTypes.GET_SORT_BY_LIST:
      console.log("action.sortByList",action.sortList)
      return {
        ...state,
        sortList: action.sortList,
      };
    case actionTypes.GET_CATEGORY_LIST:
      return {
        ...state,
        categoryList: action.categoryList,
      };
    default:
      return state;
  }
};
