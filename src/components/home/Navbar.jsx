import React, { useState, useEffect } from 'react'
import Logo from '../../assets/images/logo.png';
import { NavLink } from "react-router-dom";


const Navbar = () => {

    return (
        <div className="home-navbar">
            <img src={Logo} alt="logo" />

            <nav>

                <ul>
                    <NavLink to="/" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>

                        <li>
                            Home
                        </li>
                    </NavLink>

                    {/* <li>
                        Contact
                    </li>

                    <li>
                        Courses
                    </li> */}

                    <NavLink to="/login">
                        <li>
                            Login
                        </li>
                    </NavLink>

                </ul>

            </nav>

        </div>
    )
}

export default Navbar;