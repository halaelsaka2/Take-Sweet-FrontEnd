import {
    combineReducers
} from 'redux';
import productReducer from './productReducer';
import userReducer from './userReducer';
import branchReducer from './branchReducer';
import roleReducer from './roleReducer';
import companyReducer from './companyReducer'
import cafeReducer from './cafeReducer'
import orderReducer from './orderReducer'
import paymentTypesReducer from './paymentTypesReducer'
import categoryReducer from './categoryReducer'


export default combineReducers({
    user: userReducer,
    role: roleReducer,
    branch: branchReducer,
    company: companyReducer,
    cafe: cafeReducer,
    product: productReducer,
    order: orderReducer,
    paymentTypes: paymentTypesReducer,
    category: categoryReducer


});