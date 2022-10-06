import React from "react";

const WindonTracker = () => {
  const [show, setshow] = React.useState(true);
  const [windowed, setwindow] = React.useState(window.innerWidth);
  React.useEffect(() => {
    function windowWidth() {
      console.log("setting up");
      setwindow(window.innerWidth);
    }
    window.addEventListener("resize", windowWidth);
    return function () {
      console.log("cleaning up");
      window.removeEventListener("resize", windowWidth);
    };
  }, []);
  return (
    <div style={{ backgroundColor: "orange" }}>
      <button
        onClick={() => {
          setshow((showtoggle) => !showtoggle);
        }}>
        Toggle Window Tracker
      </button>
      {show && (
        <h1 style={{ textAlign: "center", color: "white" }}>
          Window width :{windowed}
        </h1>
      )}
      <div className="toggler--slider"></div>
    </div>
  );
};
export default WindonTracker;
