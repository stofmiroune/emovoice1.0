import React from 'react';
import Tilt from 'react-tilt';
import ensah from './ensah.png';
import './Logo.css';

const Logo = ()=> {
return(
<div style={{ paddingLeft: '10px',paddingTop: '10px'}} className='mt0 ma4  '>
  <Tilt  className="Tilt br2 shadow-2" options={{ max : 60 , reverse:true ,scale :1.5, speed:0.5}}  style={{ height: 100, width: 100 }} >
   <div className="Tilt-inner">
    <span>
     <img  width="100" height="100" alt='logo' src={ensah}/>
    </span>
   </div>
  </Tilt>
</div>
);

}


export default Logo;
