import * as actionTypes from "./constants";

const initialState = {
  user: {},
  shoppingCartList: [],
  token: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN:
      // console.log("reducer", action.user)
      return {
        ...state, user: action.user, token: action.token
      };
    case actionTypes.USER_REGISTER:
      return {
        ...state, user: action.user
      };
    case actionTypes.ADD_TO_SHOPPING_CART:
      return {
        ...state, shoppingCartList: action.shoppingCartList
      };
    case actionTypes.UPDATE_USER:
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
};