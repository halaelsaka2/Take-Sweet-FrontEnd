import * as actionTypes from "./constants";

const initialState = {
  orderProducts: [],
  orderPrdouct: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ORDER_PRODUCT:
      let newBranch = action.branch;
      branchList = state.branchList;
      branchList.push(newBranch);
      let branchIds = state.branchIds;
      branchIds.push(newBranch.id);
      console.log("branch list after push", branchIds);
      return {
        ...state,
        branchList,
        branchIds,
      };
      // console.log("in action", action.roles)
      return {
        ...state,
        roles: action.roles,
      };

    default:
      return state;
  }
};
