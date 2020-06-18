import * as actionTypes from "./constants";

const initialState = {
    role: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_ROLES:
            console.log("in action", action.roles)
            return {
                ...state, roles: action.roles
            };
        default:
            return state;
    }
};