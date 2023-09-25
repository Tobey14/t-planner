import React, { useState, useEffect } from 'react'
import userImg from '../../assets/images/user.png';
import Input from '../../components/home/Input';
import Button from '../../components/home/Button';
import { updateUser } from '../../utils/userSlice';
import { getLoggedUserFromLocalStorage, addTaskToLocalStorage } from '../../utils/LocalStorage';
import { dateDiffInDays } from '../../utils/dateFormatter';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';


const Profile = () => {
    const [user, setUser] = useState(getLoggedUserFromLocalStorage());
    const {state} = useLocation();
    const project = state?.project;

    const [form, setForm] = useState({
        id: null,
        name: '',
        desc: '',
        projectId: project?.id,
        projectName: project?.name,
        startDate: '',
        status:'not-started',
        endDate: '',
        period: null,
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

        const data = { ...form };
        let time = dateDiffInDays(new Date(form.startDate), new Date(form.endDate))
        data.period = `${time.amount} ${time.desc}`;
        data.id = `t-task-${Math.round(Math.random() * 10000000)}`;
        data.userId = `${user.id}`;

        // console.log({data});

        addTaskToLocalStorage(data);
        toast.success('Task Created Successfully');

        setTimeout(() => {
            setForm({
                id: null,
                name: '',
                desc: '',
                projectId: project?.id,
                projectName: project?.name,
                startDate: '',
                endDate: '',
                status:'not-started',
                period: null,
            });
            setUser(getLoggedUserFromLocalStorage());
        }, 1000)
    }

    return (
        <div className="dashboard-content">
            <img src={userImg} alt="" />



            <div className="courses">
                <div className="flexed space-between">
                    <p className="title">Create Task</p>
                </div>

                <select name="projectId" defaultValue={project.id} disabled={project}>
                    {
                        user.projects.map((pro, index) => {
                           return <option key={index} value={pro.id} onChange={handleForm}>{pro.name}</option>
                        })

                    }
                </select>

                <Input title='Task Name' name="name" value={form.name} handler={handleForm} />
                <Input title='Description' name="desc" value={form.desc} handler={handleForm} />

                <Input title='Start Date' type='datetime-local' name="startDate" value={form.startDate} handler={handleForm} />
                <Input title='End Date' type='datetime-local' name="endDate" value={form.endDate} handler={handleForm} />


                <Button width='300px' height='40px' color="#FFFFFF" radius={30} bg="#88A48B" text={'Save'} clickAction={handleSubmit} />
            </div>

        </div >
    )
}

export default Profile;