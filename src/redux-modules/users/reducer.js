import * as actionTypes from "./constants";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN:
      return {};
    case actionTypes.USER_REGISTER:
      return {};
    default:
      return state;
  }
};
