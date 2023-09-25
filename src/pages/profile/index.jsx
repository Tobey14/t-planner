import React, { useState, useEffect } from 'react'
import userImg from '../../assets/images/user.png';
import Input from '../../components/home/Input';
import Button from '../../components/home/Button';
import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../utils/userSlice';
import { getLoggedUserFromLocalStorage } from '../../utils/LocalStorage';





const Profile = () => {
    const [user, setUser] = useState(getLoggedUserFromLocalStorage());
    const [form, setForm] = useState(user);
    // const dispatch = useDispatch();

    const handleForm = (evt) => {
        // console.log('yrs', evt)
        const value =
            evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        setForm({
            ...form,
            [evt.target.name]: value
        });
    }

    const Navigate = useNavigate();

    const handleChangePassword = () => {
        Navigate('/profile/password-reset')
    }

    const handleSubmit = () => {
        // console.log({form})
        updateUser(form);
        setTimeout(()=>{
            setUser(getLoggedUserFromLocalStorage());
        }, 2000)
    }

    return (
        <div className="dashboard-content">
            <img src={userImg} alt="" />

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
                    <p className="title">About</p>

                    <Button width='300px' height='40px' color="#FFFFFF" radius={0} bg="#88A48B" text={'Change Password'} clickAction={handleChangePassword} />
                </div>

                <Input title='First Name' name="firstName" value={form.firstName} handler={handleForm}/>
                <Input title='Last Name' name="lastName" value={form.lastName} handler={handleForm}/>

                <Input title='Email Address' name="email" value={form.email} handler={handleForm}/>

                <Input title='Phone Number' name="phone" value={form.phone} handler={handleForm}/>
                <Input title='Field specialization' name="role" value={form.role} handler={handleForm}/>
                <Input title='Studying at' name="school" value={form.school} handler={handleForm}/>


                <Button width='300px' height='40px' color="#FFFFFF" radius={30} bg="#88A48B" text={'Save'} clickAction={handleSubmit} />
            </div>

        </div>
    )
}

export default Profile;