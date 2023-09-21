import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({task}) => {
    const {id, name, period, status, projectName} = task;
    const Navigate = useNavigate();

    const handleViewEvaluation = () => {
        Navigate(`/tasks/${id}`, { state: { task: id }})
    }


    return (
        <div className='eval-card'>

            <p className="card-title">
                {name+' - '+projectName}
            </p>

            <div className="badge">
                <p className="text">{period}</p>
            </div>

            <div className="badge">
                <p className="text">{status || 'not-started'}</p>
            </div>

            <p className="view" onClick={handleViewEvaluation}>View</p>


        </div>
    )
}

export default Card;