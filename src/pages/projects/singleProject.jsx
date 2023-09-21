import React, { useState, useEffect } from 'react'
import { getUserTasksFromLocalStorage, getLoggedUserFromLocalStorage } from '../../utils/LocalStorage';
import Pagination from '../../components/home/Paginator';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import EvalCard from '../../components/home/evaluations/Card';
import Button from '../../components/home/Button';



const Courses = () => {
    const { state } = useLocation();
    const project = state?.project;
    const Navigate = useNavigate();
    const user = getLoggedUserFromLocalStorage();
    const allTasks = getUserTasksFromLocalStorage(user?.id) || [];

    const tasks = allTasks?.filter((task, index) => {
        return task.projectId === project.id;
    });

    const handleAddTask = () => {
        Navigate('/tasks/create', { state: { project: project } })
    }

    return (
        <div className="dashboard-content">

            <div className="courses">
                <p className="title">Project : <b>{`${project.name} - ${project.period} days`}</b></p>
                <p className="desc">{project.desc}</p>
            </div>
            <div className="evaluations">
                <div className="flexed">
                    <p className="title">Tasks</p>
                    <Button width='200px' height='40px' color="#FFFFFF" radius={0} bg="#88A48B" text={'Create Task'} clickAction={handleAddTask} />
                </div>

                <div className="courses-cards">
                    {
                        tasks?.map((task, key) => {
                            return <EvalCard task={task} key={key} />
                        })
                    }
                </div>

            </div>

            <Pagination data={tasks} pageSize={8} action={'flex'} actionPayload={2} />
        </div>
    )
}

export default Courses;