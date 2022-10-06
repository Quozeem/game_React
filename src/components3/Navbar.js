import React from 'react';
import NavLogo from '../image/moraz.jpg';
import Hero from '../components/Hero';
const Navbar =()=>
{
    return (
        <nav>
        <img src={NavLogo}  className='nav-logo'/>
       
        </nav>
    )
}
export default Navbar;