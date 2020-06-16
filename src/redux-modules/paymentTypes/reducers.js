import * as actionTypes from "./constants";

const initialState = {
  paymentTypesList: [],
  paymentType:{}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_PAYMENT_TYPES:
      console.log(action.paymentTypesList,"haalaaaaa");
      return {
        ...state,
        paymentTypesList: action.paymentTypesList,
      };
    default:
      return state;
  }
};
