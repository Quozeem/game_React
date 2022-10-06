import React from "react";
import Logo from "../image/final_2in_crop_50 2.png";
const Header = () => {
  return (
    <header>
      <div>
        {" "}
        <img src={Logo} className="logo" />
      </div>

      <div>
        <h2 className="haeder--title">Meme Generators</h2>
      </div>
      <div>
        <h4 className="haeder--project">React Course--project3</h4>
      </div>
    </header>
  );
};
export default Header;
