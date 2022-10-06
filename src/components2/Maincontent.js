import React from 'react';
import Images from '../image/IMG_1520.jpeg';
import About from '../components/about';
import Interest from '../components/interest'
import Footer from '../components/footer';

const Maincontent=()=>
{
    return (
        <div className='content'>
            <img src={Images}  className="content-img" />
            <h1>Ademola</h1>
           <h3>Software Developer</h3>
            <button className='mail'>Email</button>
            <button className='linkd'>Linkdeln</button>
            <About/>
            <Interest/>
            <Footer/>
        </div>
    )
}
export default Maincontent;