import React, { useState, useEffect } from 'react'
import Logo from '../../assets/images/logo.png';


const Button = ({ bg, text, color, width, height, google, clickAction, radius }) => {

    return (
        <button style={{width:'fit-content', height:'fit-content', cursor:'pointer', padding:'0.5rem', borderRadius:radius, border:'none', backgroundColor:bg, color:color}} onClick={clickAction? clickAction : ''}>
            <div className="flexed">
                {google && <img style={{height:20}} src={google} alt="" />}
                <p style={{fontSize:"1rem", margin:'0px', marginLeft:'5px'}}>{text}</p>
            </div>
            
        </button>
    )
}

export default Button;