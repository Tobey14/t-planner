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
            document.querySelector('aside').style.width = '100%';
            document.querySelector('aside').style.visibility = 'visible';
        },
        closeSidebar: (state) => {
            state.showSidebar = false;
            document.querySelector('aside').style.width = '0%';
            document.querySelector('aside').style.visibility = 'hidden';
        },
    }
});


export const { openSidebar, closeSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;