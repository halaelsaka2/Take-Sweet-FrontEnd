import * as actionTypes from "./constants";
import ShoppingOrderList from "./../../components/ShoppingOrderSection/Partails/shopingOrderList";

const initialState = {
  allOrders: [],
  order: "",
  // shoppingBagProducts: [],
  shoppingBagList: [],
  addOrder: "",
};

export default (state = initialState, action) => {
  let allOrders;
  let shoppingBagList;
  let id;

  switch (action.type) {
    case actionTypes.GET_ALL_ORDERS:
      return { ...state, allOrders: action.payload };
      break;
    case actionTypes.GET_ALL_ORDERS_BY_USER_ID:
      console.log(action.payload, "halllllllllllllllla111");
      return {
        ...state,
        allOrders: action.payload,
      };

    case actionTypes.GET_ALL_ORDERS_BY_COMPANY_ID:
      console.log(action.payload, "halllllllllllllllla222");
      return {
        ...state,
        allOrders: action.payload,
      };

    // case actionTypes.GET_ODER_BY_ID:
    //   const order = state.allOrders.find(
    //     (order) => order.id === action.payload
    //   );
    //   return { ...state, order };

    case actionTypes.ADD_ORDER:

      const addOrder = action.payload;
      console.log(addOrder);
      return { ...state, addOrder };

    case actionTypes.DELETE_ORDER:
      id = action.payload;
      allOrders = state.allOrders.filter((order) => order.id !== id);
      console.log(allOrders);
      return { ...state, allOrders };

    case actionTypes.DELETE_ORDER_FROM_CART:
      id = action.payload;
      shoppingBagList = state.shoppingBagList.filter(
        (order) => order.company.id !== id
      );
      console.log(shoppingBagList);
      return { ...state, shoppingBagList };

    case actionTypes.ADD_TO_CART:
      const addedProduct = action.payload;
      console.log(addedProduct);
      const companyId = addedProduct.userId.id;
      shoppingBagList = state.shoppingBagList;

      /// first order
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

          let isDublicatedProduct =
            shoppingBagList[0].shoppingBagProducts.indexOf(addedProduct) !== -1;

          if (!isDublicatedProduct) {
            shoppingBagList[index].shoppingBagProducts.push(addedProduct);
          }
          // console.log(shoppingBagList);
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
        console.log("total price of each product", orderProductsPrice);
        //total of each order
        totalPriceOfOrder = orderProductsPrice.reduce(
          (accumulator, current) => current + accumulator
        );
        totalOfOrders.push(totalPriceOfOrder);
      });
      shoppingBagList.forEach(
        (order, index) => (order.totalPrice = totalOfOrders[index])
      );
      // console.log("total price of each order", totalPriceOfOrder);
      // console.log("shoppingBagList toal price added", shoppingBagList);
      // console.log("totalOfOrders", totalOfOrders);
      // console.log("testttttttttting", shoppingBagList);
      return {
        ...state,
        // shoppingBagList,
      };

    default:
      return state;
  }
};
