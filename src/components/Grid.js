import React from 'react';
import grid from '../images/photo-grid.png';
export default function Grid(){
    return(
    <section className='grid'>
        <img src={grid} className='grid--photo'/>
        <h1 className="grid--header">Online Experiences</h1>
            <p className="grid--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
    </section>
    );
}