import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    modalDrawer: false,
    modalLogout: false,
}



const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openDrawerModal: (state)=>{
            state.modalDrawer = true;
        },
        closeDrawerModal: (state)=>{
            state.modalDrawer = false;
        },
        openLogoutModal: (state)=>{
            state.modalLogout = true;
        },
        closeLogoutModal: (state)=>{
            state.modalLogout = false;
        }

    }
})


export const {openDrawerModal, 
    closeDrawerModal,
    openLogoutModal,
    closeLogoutModal
} = modalSlice.actions;

export default modalSlice.reducer;