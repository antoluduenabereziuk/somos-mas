import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";

import "./assets/scss/_base.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);