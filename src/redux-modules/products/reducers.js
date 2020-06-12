import * as actionTypes from "./constants";

const initialState = {
  products: [],
  sortBy: [],
  category: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_PRODUCTS:
      console.log(action.products)
      return {
        ...state,
        products: action.products,
      };
    case actionTypes.GET_SORT_BY_LIST:
      console.log("action.sortByList",action.sortByList)
      return {
        ...state,
        sortBy: action.sortByList,
      };
    case actionTypes.GET_CATEGORY_LIST:
      return {
        ...state,
        category: action.categoryList,
      };
    default:
      return state;
  }
};
