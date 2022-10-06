import React from "react";
import Memedata from "../components/MemeData";
//import Onlineimg from "https://picsum.photo/640/360";
const Meme = () => {
  //   function handler() {
  //     console.log("i was clicked");
  //   }
  //   function mouseover() {
  //     console.log("i was over");
  //   }
  //return handler();
  //const elementarry = [false, true];
  const [isGoingouing, setisGoingou] = React.useState("true");

  function isGoingout() {
    setisGoingou((previous) => !previous);
    // setisGoingou();
  }
  const isGoingou = true;
  let anwser = isGoingou === true ? "YES" : "NO";
  const [url, setUrl] = React.useState("");

  function getmemeimage() {
    const MemeArray = Memedata.data.meme;
    const randomMath = Math.floor(Math.random() * MemeArray.length);
    const randurl = MemeArray[randomMath].url;
    setUrl((prevGoing) =>
     [...prevGoing, randurl]);
    //console.log(setUrl);
  }
  return (
    <main>
      <div className="form--grid">
        <div>
          <input type="text" className="form--input" placeholder={`Shut up`} />
        </div>
        <div>
          <input
            type="text"
            className="form--input"
            placeholder={`and take your money`}
          />
        </div>
        <button onClick={getmemeimage} className="form--button">
          Get a new meme image
        </button>
        {anwser}
      </div>
      <img src={url} />
      <button onClick={isGoingout} className="form--button">
        Going out
      </button>
      {isGoingouing ? "YES" : "NO"}
      {/* <img onMouseOver={mouseover} src="https://picsum.photo/640/360" />
      <button onClick={handler}>Click here</button>
     */}{" "}
    </main>
  );
};
export default Meme;
