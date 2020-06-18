import * as actionTypes from "./constants";

const initialState = {
  companyList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_Companies:
      console.log(action.productsList);
      return {
        ...state,
        companyList: action.companies,
      };

    case actionTypes.ADD_Company:
      return {
        ...state,
        companyList: action.companies,
      };
    case actionTypes.GET_Company_BY_ID:
      return {
        ...state,
        companyList: action.companies,
      };
    case actionTypes.DELETE_Company:
      return {
        ...state,
        companyList: action.companies,
      };
    case actionTypes.EDIT_Company:
      return {
        ...state,
        companyList: action.companies,
      };
    default:
      return state;
  }
};
