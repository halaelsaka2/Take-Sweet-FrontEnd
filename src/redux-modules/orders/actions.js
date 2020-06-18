import { getAllOrders as getOrders } from "./api.mock";
import { deleteOrder as deleteOneOrder } from "./api.mock";
import { Add } from "./api.mock";

import {
  GET_ALL_ORDERS,
  GET_ODER_BY_ID,
  DELETE_ORDER,
  ADD_ORDER,
} from "./../orders/constants";
///////////////////////////////////////////////////
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

///////////////////////////////////////////////////
//////////////// DELET ORDER  ////////////////////////

export const deleteOrder = (id) => {
  return async (dispatch) => {
    const deleted = await deleteOneOrder();
    if (deleted) {
      // console.log("from action", deleted);
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
///////////////////////////////////////////////////
//////////////// ADD ORDER  //////////////////////

export const addOrder = (newOrder) => {
  return async (dispatch) => {
    const newOrderRes = await Add(newOrder);
    if (newOrderRes) {
      dispatch(addOrderRes(newOrderRes));
    }
  };
};

const addOrderRes = (newOrderRes) => ({
  type: ADD_ORDER,
  payload: newOrderRes,
});
///////////////////////////////////////////////////
//////////////// GETBYID  ////////////////////////
const getOrderById = (id) => {
  return async (dispatch) => {
    //   const data=await get
  };
};
const getOrderByIdRes = (OrderId) => {
  return {
    type: GET_ODER_BY_ID,
    payload: OrderId,
  };
};
