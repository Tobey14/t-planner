import React, { useState, useEffect } from 'react'
import userImg from '../assets/images/user.png';
import Card from '../components/home/course/Card';
import EvalCard from '../components/home/evaluations/Card'
import { getLoggedUserFromLocalStorage, getUserTasksFromLocalStorage } from '../utils/LocalStorage';
import Button from '../components/home/Button';
import { useNavigate } from 'react-router-dom';



const Dashboard = () => {
    const user = getLoggedUserFromLocalStorage();
    const tasks = getUserTasksFromLocalStorage(user?.id) || [];
    const Navigate = useNavigate();

    const handleAddProject = () => {
        Navigate('/projects/create')
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
                <div className="flexed">
                    <p className="title">Projects</p>
                    <Button width='200px' height='40px' color="#FFFFFF" radius={0} bg="#88A48B" text={'Create Project'} clickAction={handleAddProject} />
                </div>

                <div className="courses-cards">
                    {
                        user.projects?.map((project, index) => {
                            return <Card key={index} project={project} />
                        })
                    }

                </div>

                <p className="view-all">
                    View all Projects
                </p>

            </div>

            <div className="evaluations">
                <p className="title">Upcoming Tasks</p>

                <div className="courses-cards">
                    {
                        tasks?.map((task, key) => {
                            return <EvalCard task={task} key={key} />
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default Dashboard;