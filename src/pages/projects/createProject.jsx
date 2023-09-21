import React, { useState, useEffect } from 'react'
import userImg from '../../assets/images/user.png';
import Input from '../../components/home/Input';
import Button from '../../components/home/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../store/features/auth/userSlice';
import { getLoggedUserFromLocalStorage, addProjectToLocalStorage } from '../../utils/LocalStorage';
import { dateDiffInDays } from '../../utils/dateFormatter';
import { toast } from 'react-toastify';

const Profile = () => {
    const [user, setUser] = useState(getLoggedUserFromLocalStorage());
    const [form, setForm] = useState({
        id:null,
        name:'',
        desc:'',
        startDate:'',
        endDate:'',
        period:null,
    });
    const dispatch = useDispatch();

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
        const data = {...form};
        data.period = dateDiffInDays( new Date(form.startDate), new Date(form.endDate));
        data.id = `t-pro-${Math.round(Math.random() * 10000000)}`;

        addProjectToLocalStorage(user.id, data);
        toast.success('Project Created Successfully');

        setTimeout(()=>{
            setForm({
                id:null,
                name:'',
                desc:'',
                startDate:'',
                endDate:'',
                period:null,
                tasks:0
            });
            setUser(getLoggedUserFromLocalStorage());
        }, 1000)
    }

    return (
        <div className="dashboard-content">
            <img src={userImg} alt="" />

           

            <div className="courses">
                <div className="flexed space-between">
                    <p className="title">Create Project</p>
                </div>

                <Input title='Project Name' name="name" value={form.name} handler={handleForm}/>
                <Input title='Description' name="desc" value={form.desc} handler={handleForm}/>

                <Input title='Start Date' type='date' name="startDate" value={form.startDate} handler={handleForm}/>
                <Input title='End Date' type='date' name="endDate" value={form.endDate} handler={handleForm}/>


                <Button width='300px' height='40px' color="#FFFFFF" radius={30} bg="#88A48B" text={'Save'} clickAction={handleSubmit} />
            </div>

        </div>
    )
}

export default Profile;