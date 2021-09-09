import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import stores from "../src/store/index";
import { Provider } from "mobx-react";
import { BrowserRouter } from "react-router-dom";

const app = (
  <Provider {...stores}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
