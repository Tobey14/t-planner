import React, { useState, useEffect } from 'react'
import Pagination from '../../components/home/Paginator';
import { useNavigate } from 'react-router-dom';
import { getNotificationsFromLocalStorage, getLoggedUserFromLocalStorage, getUserTasksFromLocalStorage } from '../../utils/LocalStorage';

const Tasks = () => {
    const user = getLoggedUserFromLocalStorage();
    const tasks = getUserTasksFromLocalStorage(user?.id);
    const notifications = getNotificationsFromLocalStorage(user?.id) || [];
    const Navigate = useNavigate();
    // console.log({notifications});

    const handleNotificationNavigate = (id) =>{
        console.log(id);

        let item;

        for(let i=0; i<tasks.length; i++){
            if(tasks[i].id === id){
                item = tasks[i];
            }
        }

        console.log(item);
        Navigate(`/tasks/${id}`, { state: { task: item }});
    }


    return (
        <div className="dashboard-content">

            <div className="evaluations">
                <p className="title">Notifications</p>

                <div className="notifications">
                    {
                        notifications?.map((noti, index)=>{
                            return <div className='notification' key={index}>
                                        <p className="card-title">{noti.message}</p>
                                        <p className="view" onClick={handleNotificationNavigate(noti.taskId)}>View</p>
                                    </div>
                        })
                        
                    }
                </div>
            </div>

            <Pagination data={notifications} pageSize={4} action={'flex'} actionPayload={2} />

        </div>
    )
}

export default Tasks;