import React from "react";
let contact = (props) => {
  console.log(props.comment);
  return (
    <div>
      <div className="contacts-card">
        <img src={props.img} />
        <h1 style={{ display: props.name ? "block" : "none" }}>
          My Name:{props.name}
        </h1>
      </div>
      <div className="info-group">
        <img src={props.imggroup} />
        {props.phone && <h1>My Phone: {props.phone}</h1>}
      </div>
      <div className="info-group">
        <img src="../image/th.jpg" />
        <h1 style={{ display: props.email ? "block" : "none" }}>
          My Email: {props.email}
        </h1>
      </div>
      <hr />
    </div>
  );
};
export default contact;

// import React from 'react';
// import Navbar from '../components/Navbar';
// import Hero from '../components/Hero';
// import Card from '../components/card'
// import Contact from '../components/contact'
// import first from '../image/gallery_thumb04.jpg'
// import second from '../image/12.jpg'
// import third from '../image/gallery_thumb04.jpg'
// import fouth from '../image/12.jpg'
// import ArryMap from '../components/Arraymap'

// function App()
// {

// const Cardelemt=ArryMap.map(function(Cards){
//     return  <div className="container">
//     <div className='row'>
//     <div className='col-lg-4'>
//     <Card

//     openbadged={Cards.openbadge}
//        spanfirst= {Cards.stats.spanfirs}
//        spansecond= {Cards.stats.spansecon}
//        spanlast= {Cards.spanlas}
//        pfirst= {Cards.pfirs}
//        psecont= {Cards.spanfirs}

//     />
//     </div> </div> </div>
//   })
//     return (
//        <div>
// <Navbar/>
// <Hero/>
//     {Cardelemt}
// </div>

//     )
// }
// export default App
