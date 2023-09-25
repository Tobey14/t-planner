import { updateUserFromLocalStorage, addUserDataToLocalStorage, addUserToLocalStorage, addLoggedUserToLocalStorage, getUserDataFromLocalStorage, getUserFromLocalStorage, removeTokenFromLocalStorage, removeUserDataFromLocalStorage, removeUserFromLocalStorage, removeLoggedUserFromLocalStorage } from './LocalStorage';
import { toast } from 'react-toastify';

export const signUpUser = async (user) => {
    try {
        addUserToLocalStorage(user);
        toast.success('Sign Up Successful', { style: { fontSize: '14px', backgroundColor: "#27AE60" } });
        return user;
    } catch (error) {
        toast.error('Sign Up Failed, try again');
        return;
    }
}


export const loginUser = async (user) => {
    try {
        // console.log('yes');
        let gotten = getUserFromLocalStorage(user);

        if (!gotten) {
            toast.error('Sign in Failed');
            throw new Error('sign in failed')
            // return;
        }
        // console.log({gotten});
        toast.success('Login Successful', { style: { fontSize: '14px', backgroundColor: "#27AE60" } });
        addLoggedUserToLocalStorage(gotten);
        return gotten

    } catch (error) {
        // console.log(error.response.data.responseDescription)
        return toast.error('Sign in Failed');
    }
};


export const updateUser = async (data) => {
    try {
        // console.log('yes');
        let gotten = updateUserFromLocalStorage(data);

        if (!gotten) {
            toast.error('Update Failed');
            throw new Error('Update failed')
            // return;
        }
        // console.log({gotten});
        addLoggedUserToLocalStorage(data);
        toast.success('Update Successful', { style: { fontSize: '14px', backgroundColor: "#27AE60" } });
        return data;
    } catch (error) {
        return toast.error('Sign in Failed');
    }
}

export const logoutUser = () => {
    removeLoggedUserFromLocalStorage();
    removeTokenFromLocalStorage();
    removeUserDataFromLocalStorage();
    toast.success('Logout successful', { style: { fontSize: '14px', backgroundColor: "#27AE60" } });
}