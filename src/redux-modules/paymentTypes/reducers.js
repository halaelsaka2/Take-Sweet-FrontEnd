import * as actionTypes from "./constants";

const initialState = {
  paymentTypesList: [],
  paymentType: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_PAYMENT_TYPES:
      console.log(action.paymentTypesList, "in reducer");
      return {
        ...state,
        paymentTypesList: action.paymentTypesList,
      };
    case actionTypes.GET_PAYMENT_TYPE_BY_ID:
      console.log(action.paymentType, "in reducer");
      return {
        ...state,
        paymentType: action.paymentType,
      };
    case actionTypes.EDIT_PAYMENT_TYPE:
      const paymentTypesList = action.paymentTypesList
      return {
        ...state, paymentTypesList
      }
      default:
        return state;
  }
};