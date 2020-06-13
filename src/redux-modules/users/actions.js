import { USER_REGISTER, USER_LOGIN } from "./constants";
import { register, login } from "./api.mock";

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
  return async (dispatch) => {
    const token = await login(user);
    dispatch(userLoginRes(token));
  };
};
const userLoginRes = (token) => {
  return { type: USER_LOGIN, token };
};
