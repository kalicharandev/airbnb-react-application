import React from 'react';
import logo from '../images/airbnb-logo.png';

export default function NavBar(){
    
    return(
            <div className="App" >
                <img src={logo} className='nav--logo'/>
            </div>
    )
}