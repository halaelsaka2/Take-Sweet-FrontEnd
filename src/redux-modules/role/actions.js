import {
    GetAllRoles, GetRoleById
} from "./api"
import {
    GET_ALL_ROLES,
    GET_ROLE_BY_ID
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


export const getRoleById = (id) => {
    return async (dispatch) => {
        const role = await GetRoleById(id);
        console.log("weeeee", role);
        dispatch(getRoleByIdRes(role));
    };
};

export const getRoleByIdRes = (role) => {
    return {
        type: GET_ROLE_BY_ID,
        role
    };
};