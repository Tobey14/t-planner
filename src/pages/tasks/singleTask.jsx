import React, { useState, useEffect } from 'react'
import { updateTaskStatus, getTaskById } from '../../utils/LocalStorage';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { dateDiffInDays } from '../../utils/dateFormatter';
import { toast } from 'react-toastify';

const Courses = () => {
    const { state } = useLocation();
    const task = getTaskById(state?.task);
    const [checked, setChecked] = useState(task.status);
    const [time, setTime] = useState(dateDiffInDays(new Date(), new Date(task.endDate)));

    const questions = [
        'not-started', 'started', 'completed'
    ];


    useEffect(() => {
        updateTaskStatus(task, checked);

    }, [checked, task])


    return (
        <div className="dashboard-content">

            <div className="courses">
                <p className="title">Project : <b>{`${task?.projectName}`}</b></p>
                <p className="title">Task : <b>{`${task.name} - ${task.period}`}</b></p>
                <p className="title">
                    {
                        
                        task.status === 'Expired' ? 'Status: Expired' :  `Status: ${time.amount > 0? 'Expires in ' +time.amount + time.desc : task.status}`
                        
                    }
                </p>
                <p className="desc">{task.desc}</p>
            </div>
            {task.status !== 'Expired'?
                <div className="evaluations">
                <div className="flexed">
                    <p className="title">Change Status</p>
                </div>

                <div>
                    <div className='eval-question'>

                        <div className="options">
                            {
                                questions.map((option, index) => {
                                    return <p className="option" key={index}><span> {option} </span> <input type="checkbox" name="status" id="" checked={option === checked} onChange={() => {
                                        setChecked(option);
                                        setTimeout(() => {
                                            toast.success('Task Status Updated Successfully');
                                        }, 2000)
                                    }} /></p>
                                })
                            }
                        </div>

                    </div>

                </div>

                </div>
                :
                <div className="evaluations">
                    Expired tasks affects your project score
                </div>
            }
        </div>
    )
}

export default Courses;