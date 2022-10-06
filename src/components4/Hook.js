import React, { useState } from "react";
const Hook = () => {
  //const texting = ["Thing 1", "Things 2"];
  const [texting, setState] = useState(["Thing 1", "Things 2"]);
  const TextMAP = texting.map((paragrph) =>
   <p key={paragrph}>{paragrph}</p>);
  function mappingtext() {
    setState((prevState) => [...prevState, `Things ${prevState.length + 1}`]);
    //texting.push(addnewthing);

    // console.log(texting);
  }
  // console.log(TextMAP);

  const [zipp, setZipp] = useState("Yes");
  function zipping() {
    setZipp("NO");
  }
  let subnewthing;
  let additem;
  function Count(props) {
    return (
      <div>
        <h1>{props.prpain}</h1>
      </div>
    );
  }
  const [counter, setcounter] = useState(0);
  const textpros = <Count prpain={counter} />;
  function counteradd() {
    // additem = counter + 1;
    setcounter((additem) => additem + 1);
  }
  function coutersub() {
    subnewthing = counter - 1;
    setcounter(subnewthing);
  }
  console.log(zipp);
  return (
    <div>
      <button onClick={zipping}>{zipp}</button>
      <button onClick={mappingtext}>ADD ITEMS</button>
      {TextMAP}

      <button onClick={counteradd}>+</button>
      {textpros}
      <button onClick={coutersub}>-</button>
    </div>
  );
};

export default Hook;
