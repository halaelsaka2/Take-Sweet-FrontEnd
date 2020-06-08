import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import "bootstrap/dist/css/bootstrap.css";
import "./sass/main.scss";
import { BrowserRouter } from "react-router-dom";

const app = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(app, document.querySelector("#root"));
