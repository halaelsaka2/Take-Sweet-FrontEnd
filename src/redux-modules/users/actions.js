import {
  USER_LOGIN,
  UPDATE_USER,
  Get_USER_BY_ID
} from "./constants";
import * as userDB from "./api"

import {
  AddBranch
} from "../branches/api"

import {
  addCafe
} from "../cafes/api"
import {
  addCompany
} from "../company/api"

export const userRegister = (user) => dispatch => {

  let branches = user.branches;
  let newBranchesListPromises = branches.map(branch => AddBranch(branch));

  Promise.all(newBranchesListPromises).then(values => {
    let branchIds = values.map(response => response.data.id)
    const newUser = {
      ...user,
      branches: branchIds
    }
    userDB.UserRegister(newUser).then(response => {

      let user = JSON.parse(localStorage.getItem("newUser"));
      let userLogin = {
        email: response.data.email,
        password: user.password,
      };

      userDB.UserLogin(userLogin).then(async response => {

        localStorage.setItem("user", JSON.stringify(response.user));
        localStorage.setItem("token", JSON.stringify(response.token));
        if (response.user.roleId.name === "Cafe") {
          await addCafe().then(response => console.log(response));
        } else {
          await addCompany().then(response => console.log(response));
        }
        dispatch(userLoginRes(response.user, response.token));
      })
    });
  })
};
export const userLogin = (currentUser) => {
  return async (dispatch) => {
    const response = await userDB.UserLogin(currentUser)
    dispatch(userLoginRes(response.user, response.token));
  };
};

const userLoginRes = (user, token) => {
  return {
    type: USER_LOGIN,
    user,
    token
  };
};


export const updateUser = (user) => {

  return async (dispatch) => {
    const updateduser = await userDB.updateUser(user);
    dispatch(updateUserRes(updateduser));
  };
};
const updateUserRes = (user) => {
  return {
    type: UPDATE_USER,
    user,
  };
};


export const getUserById = (id) => {
  return async (dispatch) => {
    const userById = await userDB.GetUserById(id);
    dispatch(getUserByIdRes(userById));
  };
}

const getUserByIdRes = (user) => {
  return {
    type: Get_USER_BY_ID,
    user,
  };
};