// import * as cafeHandler from "./api.mock";
import {
    GET_ALL_CAFES,
    GET_CAFE_BY_ID,
    DELETE_CAFE,
    EDIT_CAFE,
    ADD_CAFE,
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
        // const cafesList = await cafeHandler.getCafes();
        const {
            data
        } = await axios.get("http://localhost:3000/cafe");
        // console.log(cafesList, "cafes in Action");
        dispatch(getAllCafesRes(data));
    };
};

export const addCafeRes = (cafe) => {
    return {
        type: ADD_CAFE,
        cafe
    };
};

export const addCafe = (addedCafe) => {
    return async (dispatch) => {
        // const cafe = await cafeHandler.addCafe(addedCafe);
        const cafe = await axios.post(
            "http://localhost:3000/cafe/addCafe"
        );
        dispatch(addCafeRes(cafe));
    };
};

export const editCafeRes = (cafe) => {
    return {
        type: EDIT_CAFE,
        cafe
    };
};

export const editCafe = (cafeId) => {
    return async (dispatch) => {
        // const editedCafe = await cafeHandler.editCafe(cafe);
        const editedCafe = await axios.patch(
            `http://localhost:3000/cafe/${cafeId}`
        );
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
        // const deletedCafe = await cafeHandler.deleteCafe(cafe);
        const cafe = await axios.post(
            `http://localhost:3000/cafe/${cafeId}`
        );
        dispatch(deleteCafetRes(deletedCafe));
    };
};


export const getCafeByIdRes = (cafe) => {
    return {
        type: GET_CAFE_BY_ID,
        cafe,
    };
};

export const getCafeById = (cafeId) => {
    return async (dispatch) => {
        // const cafe = await cafeHandler.getCafeById(id);
        const cafe = await axios.get(
            `http://localhost:3000/cafe/${cafeId}`
        );
        dispatch(getCafeByIdRes(cafe));
    };
};