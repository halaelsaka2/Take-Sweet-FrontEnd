import { USER_REGISTER, USER_LOGIN, GET_ALL_ORDERS } from "./constants";
import { register, login, getAllOrders } from "./api.mock";

export const userRegister = (user) => {
  const userInfo = user;
  return async (dispatch) => {
    const user = await register(userInfo);
    dispatch(userRegisterRes(user));
  };
};
const userRegisterRes = (user) => {
  return { type: USER_REGISTER, user };
};

export const userLogin = (user) => {
  const currentUser = user;
  return async (dispatch) => {
    const token = await login(currentUser);
    dispatch(userLoginRes(token, currentUser));
  };
};

const userLoginRes = (token, user) => {
  return { type: USER_LOGIN, token, user };
};

export const ordersList = (userId) => {
  return async (dispatch) => {
    const ordersList = await getAllOrders(userId);
    dispatch(orderslistRes(ordersList));
  };
};

const orderslistRes = (ordersList) => {
  return {
    type: GET_ALL_ORDERS,
    ordersList,
  };
};
