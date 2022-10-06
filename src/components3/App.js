import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/card";
import Contact from "../components/contact";
import first from "../image/gallery_thumb04.jpg";
import second from "../image/12.jpg";
import third from "../image/gallery_thumb04.jpg";
import fouth from "../image/12.jpg";
import ArryMap from "../components/Arraymap";

function App() {
  const Cardelemt = ArryMap.map(function (Cards) {
    return (
      <Card
        openbadged={Cards.openbadge}
        spanfirst={Cards.stats.spanfirs}
        spansecond={Cards.stats.spansecon}
        spanlast={Cards.spanlas}
        pfirst={Cards.pfirs}
        psecont={Cards.spanfirs}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="felix">
        <div>{Cardelemt}</div>
      </div>
      <div className="felix">
        <div className="row--1">
          <Card
            //openbadged="0"
            spanfirst="ade"
            spansecond="bsbjsj"
            spanlast="salam"
            pfirst="1"
            psecont="sjo"
          />
        </div>
        <div className="row--2">
          <Card
            openbadged="0"
            spanfirst="ade"
            spansecond="bsbjsj"
            spanlast="salam"
            pfirst="2"
            psecont="sjo"
          />
        </div>
        <div className="row--3">
          <Card
            spanfirst="ade"
            spansecond="bsbjsj"
            spanlast="salam"
            pfirst="3"
            psecont="sjo"
          />
        </div>
      </div>
    </div>
  );
}
export default App;
