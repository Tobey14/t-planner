//all users
export const addUserToLocalStorage = (user) => {
    let result = [];
    const gotten = JSON.parse(localStorage.getItem('tp_users'));
    const id = `t-pla-${Math.random() * 10000000}-user`;
    user['id'] = id;


    if (gotten) {
        result = gotten;
        removeUserFromLocalStorage();
    }

    result.push(user);
    console.log({ user })


    localStorage.setItem('tp_users', JSON.stringify(result));
}

export const getUserFromLocalStorage = (user) => {
    const users = JSON.parse(localStorage.getItem('tp_users'));

    if (!users) {
        return;
    }

    let result;

    for (let i = 0; i < users?.length; i++) {
        if (users[i]['email'] === user.email && users[i]['password'] === user.password) {
            // console.log(users[i])
            result = users[i];
        }
    }
    return result ? result : null;
}

export const updateUserFromLocalStorage = (form) => {
    const users = JSON.parse(localStorage.getItem('tp_users'));

    if (!users) {
        return;
    }

    const item = users.filter((user) => {
        return user.id === form.id;
    });

    // console.log({item})

    //remove item from array users
    const index = users.indexOf(item[0]);
    if (index > -1) { // only splice array when item is found
        users.splice(index, 1); // 2nd parameter means remove one item only
    };

    users.push(form);
    localStorage.setItem('tp_users', JSON.stringify(users));
   
    return true;
}

export const removeUserFromLocalStorage = () => {
    localStorage.removeItem('tp_users');
};

//loggedin user

export const addLoggedUserToLocalStorage = (user) => {
    localStorage.setItem('tp_logged_user', JSON.stringify(user));
}

export const getLoggedUserFromLocalStorage = () => {
    const result = JSON.parse(localStorage.getItem('tp_logged_user'));
    return result ? result : null;
}

export const removeLoggedUserFromLocalStorage = () => {
    localStorage.removeItem('tp_logged_user');
};


//projects
export const addProjectToLocalStorage = (id, project) => {
    const users = JSON.parse(localStorage.getItem('tp_users'));
    const logged = JSON.parse(localStorage.getItem('tp_logged_user'));

    const item = users.filter((user) => {
        return user.id = id;
    });

    //remove item from array users
    const index = users.indexOf(item[0]);
    if (index > -1) { // only splice array when item is found
        users.splice(index, 1); // 2nd parameter means remove one item only
    };

    //check the projects key on users and loged user
    if(!item[0]['projects']){
        item[0]['projects'] = [];
    }

    if(!logged['projects']){
        logged['projects'] = [];
    }
    //create or update the projects key on users and loged user
    item[0]['projects'] = [...item[0]['projects'], project]; //this line could fail
    logged['projects'] = [...logged['projects'], project];

    users.push(item[0]);
    localStorage.setItem('tp_users', JSON.stringify(users));
    localStorage.setItem('tp_logged_user', JSON.stringify(logged));
   
    return true;
}

export const updateProjectsFromLocalStorage = (form) => {
    const users = JSON.parse(localStorage.getItem('tp_users'));

    if (!users) {
        return;
    }

    const item = users.filter((user) => {
        return user.id === form.id;
    });

    // console.log({item})

    //remove item from array users
    const index = users.indexOf(item[0]);
    if (index > -1) { // only splice array when item is found
        users.splice(index, 1); // 2nd parameter means remove one item only
    };

    users.push(form);
    localStorage.setItem('tp_users', JSON.stringify(users));
   
    return true;
}

export const removeProjectsFromLocalStorage = () => {
    localStorage.removeItem('tp_users');
};


//tasks
export const addTaskToLocalStorage = (task) => {
    const tasks = JSON.parse(localStorage.getItem('tp_tasks')) || [];

    if (tasks) {
        removeTasksFromLocalStorage();
    }
    tasks.push(task);
    localStorage.setItem('tp_tasks', JSON.stringify(tasks));
}

export const removeTasksFromLocalStorage = () => {
    localStorage.removeItem('tp_tasks');
};

export const getUserTasksFromLocalStorage = (id) => {
    const tasks = JSON.parse(localStorage.getItem('tp_tasks'));
    const result = tasks?.filter((task, index)=>{
        return task.userId === id;
    });

    return result ? result : null; 
};

export const updateTaskStatus = (task, status) => {
    const tasks = JSON.parse(localStorage.getItem('tp_tasks'));
    // console.log({status})

    if (!tasks) {
        return;
    }

    const item = tasks.filter((object) => {
        return object.id === task.id;
    });


    //remove item from array users
    const index = tasks.indexOf(item[0]);
    if (index > -1) { // only splice array when item is found
        tasks.splice(index, 1); // 2nd parameter means remove one item only
    };

    task['status'] = status;

    // console.log({task};


    tasks.push(task);
    localStorage.setItem('tp_tasks', JSON.stringify(tasks));
   
    return true;
};

export const getTaskById = (id) => {
    const tasks = JSON.parse(localStorage.getItem('tp_tasks'));
    const result = tasks?.filter((task, index)=>{
        return task.id === id;
    });

    return result[0] ? result[0] : null; 
};


//notifications
export const createNewNotification = (task, timeLeft) => {
    const notifications = JSON.parse(localStorage.getItem('tp_notifications')) || [];
    // console.log({status})

    if (notifications) {
        removeNotificationsFromLocalStorage();
    }
    
    let message = `Task - ${task.name} for project - ${task.projectName} - ${timeLeft<= 0? 'has expired': 'expires in'} ${timeLeft >0? timeLeft +'mins': ''}`;
    const id = `t-noti-${Math.round(Math.random() * 10000000)}`;

    const notification = {
        id,
        message,
        created_at: new Date(),
        userId:task.userId,
        taskId:task.id
    }

    notifications.push(notification);
    localStorage.setItem('tp_notifications', JSON.stringify(notifications));
    return notification;
};

export const getNotificationsFromLocalStorage = (id) => {
    const notifications = JSON.parse(localStorage.getItem('tp_notifications'));

    if (!notifications) {
        return;
    }

    const result = notifications?.filter((noti, index)=>{
        return noti?.userId === id;
    });

    return result ? result : null; 
}

export const removeNotificationsFromLocalStorage = () => {
    localStorage.removeItem('tp_notifications');
};



///token
export const addTokenToLocalStorage = (token) => {
    localStorage.setItem('token', JSON.stringify(token));
}

export const removeTokenFromLocalStorage = () => {
    localStorage.removeItem('token');
};

export const getTokenFromLocalStorage = () => {
    const result = localStorage.getItem('token');
    const token = result ? JSON.parse(result) : null;
    return token;
}

//userData

export const addUserDataToLocalStorage = (token) => {
    localStorage.setItem('userData', JSON.stringify(token));
}

export const removeUserDataFromLocalStorage = () => {
    localStorage.removeItem('userData');
};

export const getUserDataFromLocalStorage = () => {
    const result = localStorage.getItem('userData');
    const token = result ? JSON.parse(result) : [];
    return token;
}
