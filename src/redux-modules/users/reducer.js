import * as actionTypes from "./constants";

const initialState = { user: "" };

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN:
      return { ...state, user: action.user, token: action.token };
    case actionTypes.USER_REGISTER:
      return { ...state, user: action.user };
    default:
      return state;
  }
};
