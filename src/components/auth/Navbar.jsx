import React, { useState, useEffect } from 'react'
import { FaBars, FaBell } from 'react-icons/fa';
import { openSidebar } from '../../store/features/sidebarSlice';
import { useDispatch, useSelector } from 'react-redux';


const Navbar = () => {
    const dispatch = useDispatch();
    const { showSidebar } = useSelector((store) => store.sidebar);


    const handleOpenSidebar = () => {
        dispatch(openSidebar());
    }

    return (
        <div className="navbar">
            <div className="bars" onClick={handleOpenSidebar}><FaBars color='#88A48B'/></div>
            {/* <div className="bars" onClick={handleOpenSidebar}><FaBell color='#88A48B'/></div> */}
        </div>
    )
}

export default Navbar;