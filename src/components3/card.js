import React from "react";
import Cardimg from "../image/12.jpg";
import Cardstar from "../image/th.jpg";

const card = (props) => {
  return (
    <div className="card">
      <div className="card--badge">
        {props.openbadged === 0 ? "SOLD OUT" : ""}
      </div>
      <img src={Cardimg} className="card--img" style={{ width: "100%" }} />
      <div className="card--star">
        <img src={Cardstar} className="cardstar" />
        <span>{props.spanfirst}</span>
        <span className="grey">{props.spansecond}</span>
        <span className="grey"> {props.spanlast}</span>
      </div>
      <p>{props.pfirst}</p>
      <p>
        <span className="bold">{props.psecond}</span>| per person
      </p>
    </div>
  );
};

export default card;
