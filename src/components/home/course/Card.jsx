import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserTasksFromLocalStorage, getLoggedUserFromLocalStorage } from '../../../utils/LocalStorage';



const Card = ({project, image, title, desc}) => {
    // const {id, title, units, image, desc, tasks} = project
    const Navigate = useNavigate();
    const user = getLoggedUserFromLocalStorage();
    const allTasks = getUserTasksFromLocalStorage(user?.id) || [];

    const tasks = allTasks?.filter((task, index) => {
        return task.projectId === project?.id;
    });

    const handleViewProject = () => {
        Navigate(`/projects/${project?.id}`, { state: { project: project }})
    }

    return (
        <div className='course-card'>
            {image && 
                <div className="img_div" style={{backgroundImage:"url(" + image + ")"}}>
                </div>
            }
            <div className="card-body">
                <p className="card-title">
                    {project?.name || title}
                </p>

                <p className="card-desc">
                    {project?.desc || desc}
                </p>

                {!image && (<div className="badge">
                    <p className="text">{project?.period.amount + project?.period.desc}</p>
                </div>)}

                {!image && <div className="badge">
                    <p className="text">{tasks.length || 0} tasks</p>
                </div>}
                

                {!image && <p className="view" onClick={handleViewProject}>View</p>}
            </div>


        </div>
    )
}

export default Card;