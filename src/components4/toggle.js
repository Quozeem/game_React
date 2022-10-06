import React from "react";

const Toggle = () => {
  const Information = (props) => {
    return (
      <div>
        <h2>
          {props.first} {props.last}
        </h2>

        <p>{props.phon}</p>
        <p>{props.mail}</p>
      </div>
    );
  };
  const Array = [
    {
      firstname: "ismal onile",
      phone: "08024267820",
      email: "sulaimao@gmail.com",
      lastname: "quozeem",
      isFavourit: true,
    },
    {
      firstname: "ademola",
      phone: "09077080999",
      email: "ademola@gmail.com",
      lastname: "lawawl",
      isFavourit: false,
    },
  ];
  const info = Array.map((sentence) => (
    <Information
      first={sentence.firstname}
      last={sentence.lastname}
      phon={sentence.phone}
      mail={sentence.email}
    />
  ));

  const [Contact, setContact] = React.useState("");
  function favorite() {
    // info.isFavourit
    // const mathrandom = Math.floor(Math.random() * info.length);
    // const randomfavorite = info[mathrandom].isFavourit;
    // // randomfavorite = false;
    setContact((prevcontact) => [...prevcontact, info]);
    // [...prevcontact, info]);
  }
  return (
    <div>
      <button onClick={favorite}>Click Favorite</button>
      {Contact}
    </div>
  );
};
export default Toggle;
