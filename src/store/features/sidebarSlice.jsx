import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showSidebar: true,
};


const sidebarSlice = createSlice({
    name: 'Sidebar',
    initialState,
    reducers: {
        openSidebar: (state) => {
            state.showSidebar = true;
        },
        closeSidebar: (state) => {
            state.showSidebar = false;
        },
    }
});


export const { openSidebar, closeSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;