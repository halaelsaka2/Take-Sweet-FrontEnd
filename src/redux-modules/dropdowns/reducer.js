import { GET_SORT_LIST, GET_CATEGORY_LIST } from "./constants";

const initialState = {
  sortList: [],
  categoryList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SORT_LIST:
      // console.log("action.sortByList", action.sortList);
      return {
        ...state,
        sortList: action.sortList,
      };
    case GET_CATEGORY_LIST:
      let categoryList = [{ id: "0", name: "All" },...action.categoryList]
    
      return {
        ...state,
        categoryList
      };
    default:
      return state;
  }
};
