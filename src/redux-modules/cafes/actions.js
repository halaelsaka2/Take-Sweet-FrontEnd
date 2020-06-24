// import * as cafeHandler from "./api.mock";
import * as cafeDB from "./api";
import {
    GET_ALL_CAFES,
    DELETE_CAFE,
    EDIT_CAFE,
    ADD_CAFE,
    GET_CAFE_BY_USER_ID
} from "./constants";
import axios from "axios";

export const getAllCafesRes = (cafesList) => {
    return {
        type: GET_ALL_CAFES,
        cafesList,
    };
};
export const getAllCafes = () => {
    return async (dispatch) => {
        const cafes = await cafeDB.getAllCafes();
        dispatch(getAllCafesRes(cafes));
    };
};

export const addCafeRes = (cafe) => {
    return {
        type: ADD_CAFE,
        cafe
    };
};

export const addCafe = () => {
    return async (dispatch) => {
        const cafe = await cafeDB.addCafe()
        dispatch(addCafeRes(cafe));
    };
};

export const editCafeRes = (cafe) => {
    return {
        type: EDIT_CAFE,
        cafe
    };
};

export const editCafe = (id, cafe) => {
    return async (dispatch) => {
        const editedCafe = await cafeDB.editCafe(id, cafe);
        dispatch(editCafeRes(editedCafe));
    };
};

export const deleteCafetRes = (cafe) => {
    return {
        type: DELETE_CAFE,
        cafe
    };
};
export const deletecafe = (cafeId) => {
    return async (dispatch) => {
        const cafe = await axios.post(
            `http://localhost:3000/cafe/${cafeId}`
        );
        dispatch(deleteCafetRes(cafe));
    };

};

export const getCafeByUserId = () => {
    return async (dispatch) => {
        const cafe = await cafeDB.getCafeByUserId();
        dispatch(getCafeByuserIdRes(cafe));
    };
};
export const getCafeByuserIdRes = (cafe) => {
    return {
        type: GET_CAFE_BY_USER_ID,
        cafe,
    };
};