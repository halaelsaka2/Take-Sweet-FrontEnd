import {
    GetAllRoles
} from "./api"
import {
    GET_ALL_ROLES
} from "./constants";

export const getAllRolesRes = (roles) => {
    return {
        type: GET_ALL_ROLES,
        roles
    };
};
export const getAllRoles = () => {
    return async (dispatch) => {
        const roles = await GetAllRoles();
        console.log("weeeee", roles);
        dispatch(getAllRolesRes(roles));
    };
};