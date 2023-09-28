import React, { useState, useEffect } from 'react';
import { Card } from '../../components/auth';
import { NavLink, useNavigate } from "react-router-dom";
import { signUpUser } from '../../utils/userSlice';
import { toast } from 'react-toastify';




const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const navigate = useNavigate();

    const [signUpStatus, setSignUpStatus ] = useState('pending');

    const handleEmailChange = (e) =>{
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) =>{
        setPassword(e.target.value);
    }

    const handleNewPasswordChange = (e) =>{
        setNewPassword(e.target.value);
    }

    const handleSignUp = (e) => {
        e.preventDefault();

        if (email.length === 0) {
            toast.error('Username is required', { style: { fontSize: '14px', backgroundColor: "red" } });
            return;
        }

        if (password.length === 0) {
            toast.error('Password is required', { style: { fontSize: '14px', backgroundColor: "red" } });
            return;
        }

        if (newPassword.length === 0 || newPassword !== password) {
            toast.error('Passwords are not the same', { style: { fontSize: '14px', backgroundColor: "red" } });
            return;
        }
        const data = {
            email,
            password,
            firstName:'',
            lastName:'',
            role:'',
            pScore:0,
            phone:"",
            school:'',
        }

        const res = signUpUser(data);
        if(res){
            setSignUpStatus('fulfilled');
        }
    }

    useEffect(() => {
        if (signUpStatus === 'fulfilled') {
            navigate('/login');
        }
    
    }, [signUpStatus, navigate]);

    let fields = [{name:'Email', action:handleEmailChange, value:email, type:'email'}, {name:'Password', action:handlePasswordChange, value:password, type:'password'}, {name:'Confirm Password', action:handleNewPasswordChange, value:newPassword, type:'password'}];


    return (
        <section className='auth-container'>
            <Card welcomeText={'Sign up'} inputFields={fields} action={handleSignUp}/>

            <p className="question">Already have an account? <NavLink to='/login'> <span>Sign In</span> </NavLink></p>
        </section>
    )
}

export default SignUp;