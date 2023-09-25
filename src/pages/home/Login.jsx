import React, { useState, useEffect } from 'react';
import { Card } from '../../components/auth';
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser } from '../../utils/userSlice';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ loginstatus, setLoginStatus ] = useState('pending');
    const navigate = useNavigate();



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

    
    const handleLogin = async ()=>{
        const res = await loginUser({ email, password });
        if(res){
            setLoginStatus('fulfilled');
        }
    }

    return (
        <section className='auth-container'>
            <Card welcomeText={'Sign in'} inputFields={fields} action={handleLogin}/>

            <p className="question">New to T-planner? <NavLink to='/sign-up'> <span>Sign Up</span> </NavLink></p>
        </section>
    )
}

export default Login;