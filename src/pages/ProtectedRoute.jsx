import React, {useEffect} from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { getLoggedUserFromLocalStorage, getUserTasksFromLocalStorage, createNewNotification, updateTaskStatus } from '../utils/LocalStorage';
import { getTimeDifference } from '../utils/dateFormatter';
import { toast } from 'react-toastify';

const ProtectedRoute = ({ children }) => {

    const user = getLoggedUserFromLocalStorage();
    const tasks = getUserTasksFromLocalStorage(user?.id) || [];

    const checkTasks = () =>{
        // console.log('checking tasks');
        for(let i=0; i<tasks.length; i++){
            let timeLeft = getTimeDifference(tasks[i].endDate);
            // console.log({timeLeft});

            if(timeLeft % 10 == 0 && timeLeft <= 30 && timeLeft > 4){
                createNewNotification(tasks[i], timeLeft);
                toast.success('You have a new notification');
            }

            if(timeLeft<0 && timeLeft > -2 && tasks[i]['status'] !== 'completed'){
                updateTaskStatus(tasks[i], 'Expired');
            }
        }
        return;
    } 

    

    useEffect(()=>{
        if(user){
            if (!("Notification" in window)) {
                console.log("This browser does not support desktop notification");
            } else {
                Notification.requestPermission();
            }
            checkTasks();
            setInterval(()=>{
                checkTasks();
            }, 60000)
        }
    }, [])

    // console.log({user})

    if (!user) {
        return <Navigate to='/login' />
    }
    // if (!otpToken) {
    //     return <Navigate to='/login' />
    // }
    return children;
}

export default ProtectedRoute;