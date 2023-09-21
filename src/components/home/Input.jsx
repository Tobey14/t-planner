import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Input = ({ title, value, type, handler, name }) => {
    const Navigate = useNavigate();

    const [visible, setVisible] = useState(false);
    const [newValue , setNewValue] = useState(value);

    const handleViewCourse = () => {
        Navigate('/courses/1')
    }

    // useEffect(()=>{
    //     if(!visible){
    //         const value_new = value.split('').forEach(x => {
    //             x = '*';
    //         });

    //         setNewValue(value_new);
    //     }
    // }, [value])

    return (
        <div className="form-group">
            <label htmlFor="fname">{title}</label>
            <input name={name} type={type? type : "text"} placeholder={title} value={value} onChange={handler}/>
        </div>
    )
}

export default Input;