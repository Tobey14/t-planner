import React, { useState, useEffect } from 'react';
import Button from '../home/Button';
import google from '../../assets/images/google.png'



const Card = ({ welcomeText, inputFields, action}) => {
    

    return (
        <div className="card">

            <p className="welcome">{welcomeText}</p>
            <div className="inputs">
                {
                    inputFields.map((field, index)=>{
                        const {name, action, value, type} = field;
                        return <input key={index} type={type} placeholder={name} value={value} onChange={action}/>
                    })
                } 
            </div>
            <p className="forgot">Forgot Password?</p>

            <div className="card-btn-div">
                <Button width='300px' height='40px' radius={30} color="#FFFFFF" bg="#5A947F" text={welcomeText} clickAction={action}/>
                {/* <div className="or">
                    <hr />
                   <p>Or</p> 
                   <hr />
                </div> */}
                

                {/* <Button width='300px' height='40px' radius={30} google={google} color="#FFFFFF" bg="#5A947F" text={`${welcomeText} with google`}/> */}

            </div>
            
            
            
        </div>
    )
}

export default Card;