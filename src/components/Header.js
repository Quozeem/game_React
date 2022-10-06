import React from "react";

export default function Header(props) {
  return (
    <header>
      <h1>Current user: {props.name} </h1>
    </header>
  );
}
