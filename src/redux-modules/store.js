import { createStore, compose, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import productsReducer from "./products/reducers";
import userReducer from "./users/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  prod: productsReducer,
  user: userReducer,
});

export default process.env.NODE_ENV === "development"
  ? createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
  : createStore(rootReducer, applyMiddleware(thunk));
