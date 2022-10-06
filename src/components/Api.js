import React from "react";

const Api = () => {
  const [startdata, setstartdata] = React.useState({});
  const [count, setcount] = React.useState(1);

  React.useEffect(
    () => {
      async function getApi() {
        const res = await fetch(`https://swapi.dev/api/people/${count}`);
        const data = await res.json();
        setstartdata(data);
      }
      getApi(); //callback
      //second method of use side effect
      // fetch("https://swapi.dev/api/people/" + count)

      // .then((res) => res.json())
      // .then((data) => setstartdata(data));
      // console.log("effect function run");
    },
    [count] //dependecies array
  );
  console.log("Component rendered");
  return (
    <div>
      <pre>{JSON.stringify(startdata, null, 2)}</pre>
      <h1>The count {count}</h1>
      <button
        onClick={() => {
          setcount((prevcount) => prevcount + 1);
        }}>
        Add
      </button>
    </div>
  );
};
export default Api;
