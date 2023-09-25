import React, { useState, useEffect } from 'react'
import { FaBars, FaBell } from 'react-icons/fa';


const Navbar = () => {


    const handleOpenSidebar = () => {
        document.querySelector('aside').style.width = '100%';
        document.querySelector('aside').style.visibility = 'visible';
    }

    return (
        <div className="navbar">
            <div className="bars" onClick={handleOpenSidebar}><FaBars color='#88A48B'/></div>
            {/* <div className="bars" onClick={handleOpenSidebar}><FaBell color='#88A48B'/></div> */}
        </div>
    )
}

export default Navbar;