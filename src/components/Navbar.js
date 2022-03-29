import React from 'react';
import Globe from '../images/globe.png';

export default function Navbar() {

    return(
        <nav className="navbar">
            <img src= {Globe} className = "logo" />
            <p className='name'>my travel journal</p>
        </nav>
    )
}
