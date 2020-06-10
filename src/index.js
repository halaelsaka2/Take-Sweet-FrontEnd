import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import "bootstrap/dist/css/bootstrap.css";
import "./sass/main.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux-modules/store';

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
ReactDOM.render(<Provider store={store}>{app}</Provider>, document.querySelector("#root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
