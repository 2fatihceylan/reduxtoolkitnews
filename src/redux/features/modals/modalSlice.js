import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    modalDrawer: false,
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
        }
    }
})


export const {openDrawerModal, closeDrawerModal} = modalSlice.actions;

export default modalSlice.reducer;