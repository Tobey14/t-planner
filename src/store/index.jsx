import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/auth/userSlice";
import modalSlice from "./features/modalSlice";
import sidebarSlice from "./features/sidebarSlice";



export const store = configureStore({
    reducer: {
        user: userSlice,
        modal:modalSlice,
        sidebar:sidebarSlice,
    }
})
