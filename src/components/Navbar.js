import React from 'react';
// import logo from '/images/airbnb-logo.png';
export default function NavBar(){
    
    return(
            <div className="App" >
                {/* <img src={logo} /> */}
                <img src={process.env.PUBLIC_URL  + 'images/airbnb-logo.png'} className='nav--logo'></img>
            </div>
    )
}