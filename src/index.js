import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./components/style.css";
import Form from "./components/form";

ReactDOM.render(
  <div>
    <App />
    <Form />
  </div>,
  document.querySelector(".container")
);
