import * as actionTypes from "./constants";

const initialState = {
    cafeList: [],
    cafe: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_CAFES:
            return {
                ...state,
                cafesList: action.cafesList,
            };
        case actionTypes.GET_CAFE_BY_ID:
            return {
                ...state,
                cafe: action.cafe,
            };
        case actionTypes.GET_CAFE_BY_USER_ID:
            return {
                ...state,
                cafe: action.cafe,
            };
        case actionTypes.DELETE_CAFE:
            return {
                ...state,
                deletedCafe: action.cafe,
            };
        case actionTypes.EDIT_CAFE:
            return {
                ...state,
                editedCafe: action.cafe,
            };
        case actionTypes.ADD_CAFE:
            return {
                ...state,
                addedCafe: action.cafe,
            };
        default:
            return state;
    }
};