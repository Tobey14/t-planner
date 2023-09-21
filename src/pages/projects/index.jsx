import React, { useState, useEffect } from 'react'
import user from '../../assets/images/user.png';
import Card from '../../components/home/course/Card';
import Pagination from '../../components/home/Paginator';
import { getLoggedUserFromLocalStorage } from '../../utils/LocalStorage';
import Button from '../../components/home/Button';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
    const user = getLoggedUserFromLocalStorage();
    const Navigate = useNavigate();

    const handleAddProject = () => {
        Navigate('/projects/create')
    }


    return (
        <div className="dashboard-content">

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
            </div>

            <Pagination data={user.projects} pageSize={8} action={'flex'} actionPayload={2} />
        </div>
    )
}

export default Projects;