import React, { useState, useEffect } from 'react'
import user from '../../assets/images/user.png';
import Input from '../../components/home/Input';
import Button from '../../components/home/Button';
import { useNavigate } from 'react-router-dom';
import { getLoggedUserFromLocalStorage } from '../../utils/LocalStorage';
import { toast } from 'react-toastify';
import { updateUser } from '../../utils/userSlice';



const ChangePassword = () => {
    const Navigate = useNavigate();
    const [user, setUser] = useState(getLoggedUserFromLocalStorage());

    const [form, setForm] = useState({
        password:'',
        passwordNew:'',
        confirmPasswordNew:'',
    });


    const handleForm = (evt) => {
        // console.log('yrs', evt)
        const value =
            evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        setForm({
            ...form,
            [evt.target.name]: value
        });
    }


    const handleSubmit = () => {
        if(user.password !== form.password){
            toast.error('Wrong Old Password');
            return;
        }

        if(form.passwordNew !== form.confirmPasswordNew){
            toast.error('Confirm Password Failed');
            return;
        }

        user.password = form.passwordNew;
        updateUser(user);
        setTimeout(()=>{
            setForm({
                password:'',
                passwordNew:'',
                confirmPasswordNew:'',
            })
            setUser(getLoggedUserFromLocalStorage());
        }, 2000)
    }

    return (
        <div className="dashboard-content">
            <img src={user} alt="" />

            <div className="details">
                <div className="private">
                    <p className="name">
                        {`${user.firstName} ${user.lastName}` || 'Update Details'}
                    </p>

                    <p className="role">
                        {user.role || 'Update Details'}

                    </p>
                </div>

                <p className="gpa">
                    Project Score - {user.pScore || '0'}

                </p>
            </div>

            <div className="courses">
                <div className="flexed space-between">
                    <p className="title">Change Password</p>
                </div>
                <Input title='Old Password' type='password' name="password" value={form.password} handler={handleForm}/>
                <Input title='New Password' type='password' name="passwordNew" value={form.passwordNew} handler={handleForm}/>

                <Input title='Re-enter Password' type='password' name="confirmPasswordNew" value={form.confirmPasswordNew} handler={handleForm}/>
                

                <Button width='300px' height='40px' color="#FFFFFF" radius={30} bg="#88A48B" text={'Save'} clickAction={handleSubmit} />
            </div>

        </div>
    )
}

export default ChangePassword;