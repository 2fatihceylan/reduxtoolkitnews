import { configureStore } from "@reduxjs/toolkit";
import articleReducer from './features/articles/articleSlice';
import modalReducer from './features/modals/modalSlice';


export const store = configureStore({
    reducer: {
        article: articleReducer,
        modal: modalReducer
    }
})