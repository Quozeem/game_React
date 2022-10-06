import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./components/style.css";
import Hook from "./components/Hook";
import Toggle from "./components/toggle";

const Datetwxt = (name) => {
  name = "ademola";
  let date = new Date();
  let hour = date.getHours();
  let timeofday;
  if (hour >= 4 && hour < 12) {
    timeofday = "Morning";
  } else if (hour >= 12 && hour < 17) {
    timeofday = "Afternon";
  } else if (hour >= 17 && hour < 20) {
    timeofday = "Evening";
  } else {
    timeofday = "Night";
  }
  return `Good ${timeofday} ${name}`;
};

console.log(Datetwxt("ademioa"));
ReactDOM.render(
  <div>
    <App />
    <Hook />

    <Datetwxt />
    <Toggle />
  </div>,
  document.querySelector(".container")
);
