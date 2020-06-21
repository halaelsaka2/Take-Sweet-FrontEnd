import * as actionTypes from "./constants";

const initialState = {
  orderProductsList: [],
  orderProductsIds: [],
  orderPrdouct: {},
};

export default (state = initialState, action) => {
  let orderProductsList;
  switch (action.type) {
    case actionTypes.ADD_ORDER_PRODUCT:
      let newOrderPrdouct = action.payload;
      orderProductsList = state.orderProductsList;
      orderProductsList.push(newOrderPrdouct);
      let orderProductsIds = state.orderProductsIds;
      orderProductsIds.push(newOrderPrdouct.id);
      console.log("orderPrdouct after push", orderProductsIds);
      return {
        ...state,
        orderProductsList,
        orderProductsIds,
      };

    default:
      return state;
  }
};
