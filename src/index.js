import React from "react";
import ReactDOM from "react-dom";
import "./global.css";
import { BrowserRouter, Router } from "react-router-dom";
import history from "./history";

import { App } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Router history={history}>
        <App />
      </Router>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
