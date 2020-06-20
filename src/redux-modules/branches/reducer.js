import * as actionTypes from "./constants";

const initialState = {
    branchList: [],
    branchIds: [],
    branch: {}
};

export default (state = initialState, action) => {
    let branchList;
    switch (action.type) {
        case actionTypes.GET_ALL_BRANCHES:
            return {
                ...state, branchList: action.branchList
            };

        case actionTypes.GET_BRANCH_BY_ID:
            return {
                ...state,
                branch: action.branch
            };

        case actionTypes.ADD_BRANCH:
            let newBranch = action.branch
            branchList = state.branchList
            branchList.push(newBranch)
            let branchIds = state.branchIds
            branchIds.push(newBranch.id)
            console.log("branch list after push", branchIds)
            return {
                ...state,
                branchList,
                branchIds
            }

            case actionTypes.EDIT_BRANCH:
                return {
                    ...state,
                    branch: action.branch
                };
            case actionTypes.DELETE_BRANCH:
                return {
                    ...state,
                    branch: action.branch
                }
                default:
                    return state;
    }
};