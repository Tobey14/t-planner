import React, { useState, useEffect } from 'react'
import EvalCard from '../../components/home/evaluations/Card'
import Pagination from '../../components/home/Paginator';
import { getUserTasksFromLocalStorage, getLoggedUserFromLocalStorage } from '../../utils/LocalStorage';

const Tasks = () => {
    const user = getLoggedUserFromLocalStorage();
    const tasks = getUserTasksFromLocalStorage(user?.id);

    // console.log({tasks});


    return (
        <div className="dashboard-content">
            
            <div className="evaluations">
                <p className="title">All Tasks</p>

                <div className="courses-cards">
                    {
                        tasks?.map((task, key) => {
                            return <EvalCard task={task} key={key}/>
                        })
                    }
                </div>
            </div>

            <Pagination data={[1,2,3,4,5,6,7,8,9,10,11,12,13,14]} pageSize={4} action={'flex'} actionPayload={2}/>

        </div>
    )
}

export default Tasks;