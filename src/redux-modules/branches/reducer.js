import * as actionTypes from "./constants";

const initialState = {
    branchList: []
};

export default (state = initialState, action) => {
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
            return {
                ...state,
                addBranch: action.branch
            }

            case actionTypes.EDIT_BRANCH:
                return {
                    ...state,
                    editBranch: action.branch
                };
            case actionTypes.DELETE_BRANCH:
                return {
                    ...state,
                    deleteBranch: action.branch
                }
                default:
                    return state;
    }
};