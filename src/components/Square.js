import React from "react";

const Methodsquare = (props) => {
  const [ontoggle, setontoggle] = React.useState(props.on);
  const styles = {
    backgroundColor: props.on ? "#222222" : "transparent",
  };
  // method 1
  // function eventVlick() {
  //   setontoggle((prevsetOn) => !prevsetOn);
  // }
  //console.log(eventVlick);

  // return <div className="box" style={styles} onClick={eventVlick}></div>;
  //method 2

  return <div className="box" style={styles} onClick={props.toggleclick}></div>;
};
export default Methodsquare;
