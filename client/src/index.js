import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";

import "./assets/scss/_base.scss";
import { Contact } from "./components/Contact/Contact";

ReactDOM.render(
  <>
    <App />
    <Contact />
  </>,
  document.getElementById("root")
);
