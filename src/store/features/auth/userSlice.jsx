import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { updateUserFromLocalStorage, addUserDataToLocalStorage, addUserToLocalStorage, addLoggedUserToLocalStorage, getUserDataFromLocalStorage, getUserFromLocalStorage, removeTokenFromLocalStorage, removeUserDataFromLocalStorage, removeUserFromLocalStorage, removeLoggedUserFromLocalStorage } from '../../../utils/LocalStorage';
import customFetch from '../../../utils/axios';
import { toast } from 'react-toastify';

const initialState = {
    isLoading: false,
    // user: getUserFromLocalStorage(),
    user: null,
    otpToken : true,
    loginstatus : null,
    signupstatus : null,
}

export const signUpUser = createAsyncThunk('/api/accounts',
    async (user, thunkAPI) => {
        try {
            addUserToLocalStorage(user);
            return user;
            
        } catch (error) {
            // console.log(error.response.data.responseDescription)
            return thunkAPI.rejectWithValue(error.response.data.responseDescription);
        }
    }
);

export const loginUser = createAsyncThunk('/api/User/signin',
    async (user, thunkAPI) => {
        try {
            console.log('yes');
            let gotten = getUserFromLocalStorage(user);

            if(!gotten){
                toast.error('Sign in Failed');
                throw new Error('sign in failed')
                // return;
            }
            // console.log({gotten});
            toast.success('Login Successful', { style: { fontSize: '14px', backgroundColor: "#27AE60" } });
            return gotten
        
        } catch (error) {
            // console.log(error.response.data.responseDescription)
            return thunkAPI.rejectWithValue(error.response.data.responseDescription);
        }
    }
);

export const updateUser = createAsyncThunk('/api/User/updateUser',
    async (data, thunkAPI) => {
        try {
            console.log('yes');
            let gotten = updateUserFromLocalStorage(data);

            if(!gotten){
                toast.error('Update Failed');
                throw new Error('Update failed')
                // return;
            }
            // console.log({gotten});
            toast.success('Update Successful', { style: { fontSize: '14px', backgroundColor: "#27AE60" } });
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg);
        }
    }
);



const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logoutUser: (state, { payload }) => {
            removeLoggedUserFromLocalStorage();
            removeTokenFromLocalStorage();
            removeUserDataFromLocalStorage();
            state.user = null;
            state.otpToken = false;
            state.loginstatus = null;
            toast.success(payload, { style: { fontSize: '14px', backgroundColor: "#27AE60" } });
        },
        nullifyState: (state) => {
            state.requestStatus = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(signUpUser.pending, (state) => {
                state.isLoading = true;
                state.signupstatus = 'pending'
            })
            .addCase(signUpUser.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.signupstatus = "fulfilled";
                toast.success('Sign Up Successful', { style: { fontSize: '14px', backgroundColor: "#27AE60" } });
            })
            .addCase(signUpUser.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.signupstatus = 'failed';
                state.errorMessage = payload;
                toast.error('Sign Up Failed, try again');

            }).addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.loginstatus = 'pending'
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                state.user = payload;
                state.isLoading = false;
                state.loginstatus = "fulfilled"
                addLoggedUserToLocalStorage(payload);
            })
            .addCase(loginUser.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.loginstatus = 'failed';
                state.errorMessage = payload;
            })
            .addCase(updateUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateUser.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.user = payload;
                addLoggedUserToLocalStorage(payload);
            })
            .addCase(updateUser.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.errorMessage = payload;
            })
            
    }
})



export default userSlice.reducer;
export const { logoutUser, nullifyState } = userSlice.actions