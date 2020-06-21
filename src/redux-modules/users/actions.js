import {
  USER_REGISTER,
  USER_LOGIN,
  UPDATE_USER
} from "./constants";
import * as userDB from "./api"

import {
  AddBranch
} from "../branches/api"

import {addCafe} from "../cafes/api"
import {addCompany} from "../company/api"

export const userRegister = (user) => dispatch => {
  console.log("incoming user", user)

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
      console.log(user,"newUserInLocal");
      
      console.log(response,"ofregester");
      
      let userLogin = {
        email: response.data.email,
        password: user.password,
      };
      console.log(userLogin,"userLogin");
      
      userDB.UserLogin(userLogin).then(async response => {
        console.log(response,"responseOfLogin");
        
        localStorage.setItem("user", JSON.stringify(response.user));
        localStorage.setItem("token", JSON.stringify(response.token));
        console.log(response.user.roleId.name,"userafterLogin in action");
        if (response.user.roleId.name === "Cafe") {
         await addCafe().then(response=>console.log(response));
          console.log("this is cafe");
        } else {
          console.log("this is company");
         await addCompany().then(response=>console.log(response));
        }
        dispatch(userLoginRes(response.user, response.token));
      })
    }
    );
    console.log(newUser)
  })
};
export const userLogin = (currentUser) => {
  return async (dispatch) => {
    const response = await userDB.UserLogin(currentUser)
      dispatch(userLoginRes(response.user, response.token));  
  };
};
// const userRegisterRes = (user) => {
//   return {
//     type: USER_REGISTER,
//     user
//   };
// };

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