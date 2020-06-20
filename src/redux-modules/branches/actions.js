import {
    GetAllBranches,
    GetBranchById,
    AddBranch,
    EditBranch,
    DeleteBranch
} from "./api"
import {
    GET_ALL_BRANCHES,
    GET_BRANCH_BY_ID,
    ADD_BRANCH,
    DELETE_BRANCH,
    EDIT_BRANCH,
} from "./constants";

export const getAllBranchesRes = (branchList) => {
    return {
        type: GET_ALL_BRANCHES,
        branchList,
    };
};
export const getAllBranches = () => {
    return async (dispatch) => {
        const branchList = await GetAllBranches();
        console.log(branchList);
        dispatch(getAllBranchesRes(branchList));
    };
};

export const getBranchByIdRes = (branch) => {
    return {
        type: GET_BRANCH_BY_ID,
        branch,
    };
};

export const getBranchtById = (id) => {
    return async (dispatch) => {
        const branch = await GetBranchById(id);
        dispatch(getBranchByIdRes(branch));
    };
};

export const addBranchRes = (branch) => {
    return {
        type: ADD_BRANCH,
        branch
    };
};

export const addBranch = (addedBranch) => {
    return async (dispatch) => {
        const branch = await AddBranch(addedBranch)
        console.log(branch)
        dispatch(addBranchRes(branch));
    };
};


export const editBranchRes = (branch) => {
    return {
        type: EDIT_BRANCH,
        branch
    };
};
export const editBranch = (id, editedBranch) => {
    return async (dispatch) => {
        const branch = await EditBranch(id, editedBranch)
        dispatch(editBranchRes(branch));
    };
};


export const deleteBranchRes = (branch) => {
    return {
        type: DELETE_BRANCH,
        branch
    };
};

export const deleteBranch = (id) => {
    return async (dispatch) => {
        const deletedBranch = await DeleteBranch(id)
        dispatch(deleteBranchRes(deletedBranch));
    };
};