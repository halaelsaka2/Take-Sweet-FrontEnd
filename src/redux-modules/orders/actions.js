import {
  getAllOrders as getOrders
} from "./api.mock";
import {
  deleteOrder as deleteOneOrder
} from "./api.mock";

import * as orderDB from "./api";

import {
  AddOrderProduct
} from "../orderProduct/api";
import {
  GET_ALL_ORDERS,
  DELETE_ORDER,
  ADD_ORDER,
  GET_ALL_ORDERS_BY_USER_ID,
  GET_ALL_ORDERS_BY_COMPANY_ID,
  UPDATE_ORDER
} from "./../orders/constants";

//////////////// GETALL  ////////////////////////
export const getAllOrders = () => {
  return async (dispatch) => {
    const data = await getOrders();
    dispatch(getAllOrdersRes(data));
  };
};

const getAllOrdersRes = (orders) => {
  return {
    type: GET_ALL_ORDERS,
    payload: orders,
  };
};

//////////////// GETALLOrdersByUserId  ////////////
export const getAllOrdersByUserId = (id) => {
  return async (dispatch) => {
    const data = await orderDB.GetAllByUserId(id);
    dispatch(getAllOrdersByUserIdRes(data));
  };
};

const getAllOrdersByUserIdRes = (orders) => {
  return {
    type: GET_ALL_ORDERS_BY_USER_ID,
    payload: orders,
  };
};

////////////////GETALLOrdersByCompanyId  //////////////
export const getAllOrdersByCompanyId = (id) => {
  return async (dispatch) => {
    const data = await orderDB.GetAllByCompanyId(id);
    dispatch(getAllOrdersByCompanyIdRes(data));
  };
};

const getAllOrdersByCompanyIdRes = (orders) => {
  return {
    type: GET_ALL_ORDERS_BY_COMPANY_ID,
    payload: orders,
  };
};

//////////////// DELET ORDER  ////////////////////////

export const deleteOrder = (id) => {
  return async (dispatch) => {
    const deleted = await deleteOneOrder();
    if (deleted) {
      dispatch(deleteOrderRes(id));
    }
  };
};
const deleteOrderRes = (id) => {
  return {
    type: DELETE_ORDER,
    payload: id,
  };
};

//////////////// ADD ORDER  //////////////////////

export const addOrder = (newOrder) => async (dispatch) => {

  let orderProducts = newOrder.orderProducts;
  let newOrderProductsListPromises = orderProducts.map((orderProduct) =>
    AddOrderProduct(orderProduct)
  );

  Promise.all(newOrderProductsListPromises).then(async (values) => {
    let orderProductsIds = values.map((response) => response.data.id);
    const addedOrder = {
      ...newOrder,
      orderProducts: orderProductsIds,
    };
    const response = await orderDB.AddOrder(addedOrder);
    dispatch(addOrderRes(response.data));
  });
};





export const updateOrder = (id, order) => {
  return async (dispatch) => {
    const updated = await orderDB.updateOrder(id, order);
    if (updated) {
      dispatch(updateOrderRes(updated));
    }
  };
};

const updateOrderRes = (newOrderRes) => ({
  type: UPDATE_ORDER,
  payload: newOrderRes,
});





const addOrderRes = (newOrderRes) => ({
  type: ADD_ORDER,
  payload: newOrderRes,
});