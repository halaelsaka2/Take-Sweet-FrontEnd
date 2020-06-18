import * as actionTypes from "./constants";

const initialState = {
  allOrders: [],
  order: "",
};

export default (state = initialState, action) => {
  let allOrders;
  switch (action.type) {
    case actionTypes.GET_ALL_ORDERS:
      return { ...state, allOrders: action.payload };
      break;

    case actionTypes.GET_ODER_BY_ID:
      const order = state.orders.find((order) => order.id === action.payload);
      return { ...state, order };

    case actionTypes.ADD_ORDER:
      allOrders = state.allOrders.push(action.payload);
      return { ...state, allOrders };
      break;

    case actionTypes.DELETE_ORDER:
      const id = action.payload;
      allOrders = state.allOrders.filter((order) => order.id !== id);
      console.log(allOrders);
      return { ...state, allOrders };

    default:
      return state;
      break;
  }
  //   console.log(newState);
  //   return newState;
};

//     case actionTypes.GET_ALL_PRODUCTS:

//       return {
//         ...state,
//         productsList: action.productsList,
//       };

//     case actionTypes.GET_ALL_BRANDS:
//       return {
//         ...state,
//         productsList: action.brandsList,
//       };
//     default:
//       return state;
//   }
