import {
    GET_PRODUCTS,
    ADD_PRODUCT,
    DELETE_PRODUCT
} from '../constants';

const initialState = [];

export default (state = initialState, action) => {
    let newState;

    switch (action.type) {
        case GET_PRODUCTS:
            newState = action.payload;
            break;
        case ADD_PRODUCT:
            newState = [...state, action.payload];
            break;
        case DELETE_PRODUCT:
            newState = state.filter(product => product.id !== action.payload);
            break;
        default:
            newState = state;
            break;
    }
    return newState;
}