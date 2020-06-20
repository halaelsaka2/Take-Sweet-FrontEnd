import {
  USER_REGISTER,
  USER_LOGIN,
  UPDATE_USER
} from "./constants";
import * as userDB from "./api"

import {
  AddBranch
} from "../branches/api"

export const userRegister = (user) => dispatch => {
  console.log("incoming user", user)

  let branches = user.branches;
  // branches.forEach(async (addedBranch) => {
  //   let response = await AddBranch(addedBranch).catch((err) => console.log(err.response.data));
  //   console.log("response", response.data)
  //   newBranchesList.push(response.data.id);
  //   // user.branches = this.props.branchIds;
  //   // console.log(user.branches);
  //   // console.log("branches id in register", this.props.branchIds);
  // });
  let newBranchesListPromises = branches.map(branch => AddBranch(branch));
  
  Promise.all(newBranchesListPromises).then(values => {
    let branchIds = values.map(response => response.data.id)
    const newUser = {
      ...user,
      branches: branchIds
    }
    userDB.UserRegister(newUser).then(response => dispatch(userRegisterRes(response.data)));
    console.log(newUser)
  })
  // console.log("new branch list", newBranchesListPromises)
  // const newUser = {
  //   ...user,
  //   branches: newBranchesList
  // }

  // console.log("new user", newUser)

  // console.log(userInfo, "user data in action register")
  // return async (dispatch) => {
  //   await userDB.UserRegister(user);
  //   // console.log(user, "user data in action register2")

  //   dispatch(userRegisterRes(user));
  // };
};
const userRegisterRes = (user) => {
  return {
    type: USER_REGISTER,
    user
  };
};

const userLoginRes = (user, token) => {
  return {
    type: USER_LOGIN,
    user,
    token
  };
};

export const userLogin = (currentUser) => {
  return async (dispatch) => {
    const userData = await userDB.UserLogin(currentUser)
    // console.log(userData, "user data in action login")
    dispatch(userLoginRes(userData.user, userData.token));
  };
};


export const updateUser = (user) => {
  // console.log(user, "inAction");

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



// export const ordersList = (userId) => {
//   return async (dispatch) => {
//     const ordersList = await getAllOrders(userId);
//     dispatch(orderslistRes(ordersList));
//   };
// };

// const orderslistRes = (ordersList) => {
//   return {
//     type: GET_ALL_ORDERS,
//     ordersList,
//   };
// };

// export const addToShoppingCart = (product) => {
//   return async (dispatch) => {
//     const shoppingCartList = await addtoShoppingCart(product);
//     dispatch(addToShoppingCartRes(shoppingCartList));
//   };
// };
// const addToShoppingCartRes = (shoppingCartList) => {
//   return {
//     type: ADD_TO_SHOPPING_CART,
//     shoppingCartList,
//   };
// };