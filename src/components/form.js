import React, { Component, useState } from "react";
import Validates from "../components/Validate";

const Form = () => {
  const [formdata, setfirtname] = useState(Validates);
  // console.log(formdata);
  function handler(Event) {
    console.log(Event.target.value);
    const { id, value, type, checked } = Event.target;

    setfirtname((nextvalidate) => {
      return {
        ...nextvalidate,
        [id]: type === "checkbox" ? checked : value,
      };
    });
  }
  //console.log(formdata.employment);
  const styled = {
    color: formdata.password.length > 5 ? "green" : "red",
  };

  const validate =
    formdata.username.length === 0 ||
    formdata.password !== formdata.confirmpassword ||
    formdata.password.length === 0 ||
    formdata.email.length === 0 ||
    formdata.phone.length < 11 ? (
      <input type="submit" disabled="disabled" value="Submit" />
    ) : (
      <input type="submit" value="Submit" />
    )
  const [sucees, setsuccess] = useState("");
  //function handlersubmit(e)
  const handlersubmit = (e) => 
  {
    e.preventDefault();
    setsuccess(() => "Successfully Sign up");
    // console.log("submitted");
  };

  return (
    <div>
      {" "}
      <div style={{ color: "green" }}>{sucees}</div>
      <form onSubmit={handlersubmit}>
        <label>Username : </label>
        <br></br>
        <input
          type="text"
          onChange={handler}
          id="username"
          class="input"
          placeholder="Username"
        />
        {formdata.username.length === 0 ? (
          <div style={{ color: "red" }}>
            Username is required*
            <br />
          </div>
        ) : (
          <div>
            {" "}
            <br />
          </div>
        )}
        <label>Password :</label>
        <br></br>
        <input
          type="text"
          onChange={handler}
          id="password"
          class="input"
          placeholder="Password"
        />
        {formdata.password.length === 0 ? (
          <div style={{ color: "red" }}>
            Password is required*
            <br />
          </div>
        ) : (
          <div style={styled}>
            {formdata.password.length > 5 ? "Good" : "weak"}
            <br />
          </div>
        )}
        <label>Confirm Password</label>
        <br />
        <input
          type="text"
          onChange={handler}
          id="confirmpassword"
          class="input"
          placeholder="Confirm Password"
        />
        {formdata.confirmpassword.length === 0 ? (
          <div style={{ color: "red" }}>
            Confirm Password is required*
            <br />
          </div>
        ) : (
          <div>
            {formdata.password !== formdata.confirmpassword ? (
              <div style={{ color: "red" }}>Password not match</div>
            ) : (
              <br />
            )}
          </div>
        )}
        <label>Email :</label>
        <br></br>
        <input
          type="text"
          onChange={handler}
          id="email"
          class="input"
          placeholder="Email"
        />
        {formdata.email.length === 0 ? (
          <div style={{ color: "red" }}>
            Email is required*
            <br />
          </div>
        ) : (
          <div>
            {" "}
            <br />
          </div>
        )}
        <label>Phone Number :</label>
        <br></br>
        <input
          type="text"
          onChange={handler}
          id="phone"
          class="input"
          placeholder="Phone Number"
        />
        {formdata.phone.length === 0 ? (
          <div style={{ color: "red" }}>
            Phone is required*
            <br />
          </div>
        ) : (
          <div style={{ color: "red" }}>
            {formdata.phone.length < 11 ? "Phone Number must be 11 digit" : ""}
            <br />
          </div>
        )}
        <input
          type="checkbox"
          checked={formdata.isfriendly}
          id="isfriendly"
          onChange={handler}
        />
        <label htmlFor="isfriendly">Are you friendly ? </label>
        {/* <textarea>ops</textarea> */}
        <br /> <br />
        <input
          type="radio"
          value="Employed"
          checked={formdata.employment === "Employed" ? "checked" : ""}
          onChange={handler}
          id="employment"
          name="employed"
        />
        <label htmlFor="employed">Employed</label>
        <input
          type="radio"
          checked={formdata.employment === "Not Employed" ? "checked" : ""}
          value="Not Employed"
          onChange={handler}
          id="employment"
          name="Not_empolyed"
        />
        <label htmlFor="Not_empolyed">Not Empolyed</label>
        <br />
        <select onChange={handler} id="selected">
          <option value="">select</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Whine">Whine</option>
          <option value="Orange">Orange</option>
          <option value="Yellow">Yellow</option>
        </select>
        {formdata.selected === "" ? (
          <div style={{ color: "red" }}>
            Select Color*
            <br />
          </div>
        ) : (
          <div>
            <br />
          </div>
        )}
        {validate}
      </form>
    </div>
  );
};

export default Form;
