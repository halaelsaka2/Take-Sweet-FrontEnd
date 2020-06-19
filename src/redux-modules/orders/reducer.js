import * as actionTypes from "./constants";
import ShoppingOrderList from "./../../components/ShoppingOrderSection/Partails/shopingOrderList";

const initialState = {
  allOrders: [],
  order: "",
  // shoppingBagProducts: [],
  shoppingBagList: [],
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

    case actionTypes.DELETE_ORDER:
      const id = action.payload;
      allOrders = state.allOrders.filter((order) => order.id !== id);
      console.log(allOrders);
      return { ...state, allOrders };

    case actionTypes.ADD_TO_CART:
      const addedProduct = action.payload;
      const companyId = addedProduct.userId.id;
      let shoppingBagList = state.shoppingBagList;

      if (shoppingBagList.length === 0) {
        shoppingBagList.push({
          shoppingBagProducts: [addedProduct],
          company: addedProduct.userId,
        });
      } else {
        let exist = shoppingBagList.find((order) => {
          if (order.company.id === companyId) return order;
        });
        if (exist) {
          let index = shoppingBagList.indexOf(exist);
          shoppingBagList[index].shoppingBagProducts.push(addedProduct);
          console.log(shoppingBagList);
        }
      }

      // let shoppingBagProducts = state.shoppingBagList.shoppingBagProducts;

      // if (shoppingBagList.length != 0) {
      //   let exist = shoppingBagList.find((m) => {
      //     if (m.user.id === addedProduct.userId.id) return m;
      //   });
      //   console.log(exist);
      //   if (exist) {
      //     let index = shoppingBagList.indexOf(exist);
      //     console.log(index);
      //     shoppingBagList[index].shoppingBagProducts.push(addedProduct);
      //   } else {
      //     // shoppingBagProducts.push(addedProduct);ا
      //   }
      // } else {
      //   shoppingBagList.push({
      //     user: addedProduct.userId,
      //     shoppingBagProducts: [addedProduct],
      //   });
      // }
      console.log(shoppingBagList);
      // if (x) {
      //   ShoppingOrderList.push(addedProduct.userId);
      // }
      return {
        ...state,
        shoppingBagList,
      };

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
