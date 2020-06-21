import { createStore, compose, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import productsReducer from "./products/reducers";
import userReducer from "./users/reducer";
import dropdownReducer from "./dropdowns/reducer";
import companyReducer from "./company/reducers";
import orderReducer from "./orders/reducer";
import roleReducer from "./role/reducer";
import branchReducer from "./branches/reducer";
import paymentTypeReducer from "./paymentTypes/reducers";
import cafeReducer from "./cafes/reducers";
import orderProductReducer from "./orderProduct/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer,
  dropdown: dropdownReducer,
  company: companyReducer,
  orders: orderReducer,
  role: roleReducer,
  branches: branchReducer,
  paymentTypes: paymentTypeReducer,
  cafe: cafeReducer,
  orderProduct: orderProductReducer,
});

export default process.env.NODE_ENV === "development"
  ? createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
  : createStore(rootReducer, applyMiddleware(thunk));
