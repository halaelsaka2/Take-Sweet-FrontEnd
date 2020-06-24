import * as actionTypes from "./constants";

const initialState = {
  allOrders: [],
  order: "",
  shoppingBagList: [],
  addOrder: "",
};

export default (state = initialState, action) => {
  let allOrders;
  let shoppingBagList;
  let id;

  switch (action.type) {
    case actionTypes.GET_ALL_ORDERS:
      return {
        ...state, allOrders: action.payload
      };
    case actionTypes.GET_ALL_ORDERS_BY_USER_ID:
      return {
        ...state,
        allOrders: action.payload,
      };

    case actionTypes.GET_ALL_ORDERS_BY_COMPANY_ID:
      return {
        ...state,
        allOrders: action.payload,
      };
    case actionTypes.UPDATE_ORDER:
      const oldOrder = state.allOrders.find(order => order.id === action.payload.id);
      const index = state.allOrders.indexOf(oldOrder);
      const newAllOrder = [...state.allOrders];
      newAllOrder[index] = action.payload;
      return {
        ...state,
        allOrders: newAllOrder,
      };

    case actionTypes.ADD_ORDER:

      const addOrder = action.payload;
      return {
        ...state, addOrder
      };

    case actionTypes.DELETE_ORDER:
      id = action.payload;
      allOrders = state.allOrders.filter((order) => order.id !== id);
      return {
        ...state, allOrders
      };
    case actionTypes.DELETE_ORDER_FROM_CART:
      id = action.payload;
      shoppingBagList = state.shoppingBagList.filter(
        (order) => order.company.id !== id
      );
      return {
        ...state, shoppingBagList
      };

    case actionTypes.ADD_TO_CART:
      const addedProduct = action.payload;
      const companyId = addedProduct.userId.id;
      shoppingBagList = state.shoppingBagList;

      if (shoppingBagList.length === 0) {
        shoppingBagList.push({
          shoppingBagProducts: [addedProduct],
          company: addedProduct.userId,
        });
      } else {
        let exist = shoppingBagList.find((order) => {
          if (order.company.id === companyId) return order
        });

        if (exist) {
          let index = shoppingBagList.indexOf(exist);

          let isDublicatedProduct =
            shoppingBagList[0].shoppingBagProducts.indexOf(addedProduct) !== -1;

          if (!isDublicatedProduct) {
            shoppingBagList[index].shoppingBagProducts.push(addedProduct);
          }
        } else {
          shoppingBagList.push({
            shoppingBagProducts: [addedProduct],
            company: addedProduct.userId,
          });
        }
      }
      let totalOfOrders = [];
      let totalPriceOfOrder;
      let orderProductsPrice = [];
      shoppingBagList.forEach((order) => {
        ///total for each product
        totalPriceOfOrder = [];
        totalPriceOfOrder = 0;
        orderProductsPrice = [];
        order.shoppingBagProducts.forEach((product, index) => {
          const total = product.amount * product.price;
          orderProductsPrice.push(total);
          product.totalPrice = total;
        });
        //total of each order
        totalPriceOfOrder = orderProductsPrice.reduce(
          (accumulator, current) => current + accumulator
        );
        totalOfOrders.push(totalPriceOfOrder);
      });
      shoppingBagList.forEach(
        (order, index) => (order.totalPrice = totalOfOrders[index])
      );
      return {
        ...state,
        // shoppingBagList,
      };

    default:
      return state;
  }
};