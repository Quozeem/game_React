import React from "react";
import Photogrid from "../image/gallery_thumb04.jpg";

const online = "Online";
const Experience = "Experience";
const Hero = () => {
  return (
    <section className="hero">
      <img src={Photogrid} className="hero--img" />
      <h1 className="hero--header">
        {online} {Experience}
      </h1>
      <p className="hero--paraghape">
        {" "}
        Join unqiue interactive activities led by one-of-a-kind hosts-all
        without leaving home.
      </p>
    </section>
  );
};
export default Hero;
