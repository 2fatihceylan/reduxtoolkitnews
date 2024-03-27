import { configureStore } from "@reduxjs/toolkit";
import articleReducer from './features/articles/articleSlice';


export const store = configureStore({
    reducer: {
        article: articleReducer,
    }
})