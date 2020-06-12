import { createStore, compose, applyMiddleware } from "redux";
import { combineReducers } from "redux";
// import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import  productsReducer  from "./products/reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({prod:productsReducer});

export default process.env.NODE_ENV === "development"
  ? createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
  : createStore(rootReducer, applyMiddleware(thunk));
