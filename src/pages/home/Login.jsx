import React, { useState, useEffect } from 'react';
import { Card } from '../../components/auth';
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import * as storage from '../../utils/LocalStorage';
import { loginUser } from '../../store/features/auth/userSlice';




const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLoading, loginstatus } = useSelector((store) => store.user);


    const handleEmailChange = (e) =>{
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) =>{
        setPassword(e.target.value);
    }

    let fields = [{name:'Email', action:handleEmailChange, value:email}, {name:'Password', action:handlePasswordChange, value:password}];

    useEffect(() => {
        if (loginstatus === 'fulfilled') {
            navigate('/profile');
        }
    
    }, [loginstatus, navigate]);

    
    const handleLogin = ()=>{
        dispatch(loginUser({ email, password }))
    }

    return (
        <section className='auth-container'>
            <Card welcomeText={'Sign in'} inputFields={fields} action={handleLogin}/>

            <p className="question">New to T-planner? <NavLink to='/sign-up'> <span>Sign Up</span> </NavLink></p>
        </section>
    )
}

export default Login;