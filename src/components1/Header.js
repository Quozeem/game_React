import React from 'react';
import Logo from '../image/logo192.png';
  const Header=()=>
 {
  return(
   
  <header>
    <nav>
    <img src={Logo} 
    className='nav-logo'/>
    <h3>ReactFacts</h3>
     <ul className='nav-items'>
      <li> Home </li>
    <li>About</li>
<li> Contact us </li>
</ul>
    </nav>
    </header>
  )
  
 }
 
 export default Header