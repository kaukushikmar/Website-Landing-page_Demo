import React from 'react';
import Navbar from './Navbar';

function Header() {
    return (
        <div id='main'>
            <Navbar />
            <div className='name'>
                <h1><span>Finsave</span> helps you save & invest</h1>
                <p className='details'> Invest spare change, bank smarter, save for retirement and more</p>
                <a href='#' className='cv-btn'>Download</a>
            </div>
        </div>)
}

export default Header;
