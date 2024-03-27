import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const  initialState = {
    articles: [],
    isLoading: true,
    article: {},
    country: 'us'
}



export const getArticles = createAsyncThunk('articles/getArticles',
    async (country, thunkAPI) => {
        try{
            const response = await axios(`https://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=1bb6a1d8f83740398b674355f3327c52`);

            //console.log(response.data.articles);

            return response.data.articles;
        }
        catch(error){
            return thunkAPI.rejectWithValue('Something went wrong');
        }
    }
)







const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        selectArticle:(state, action)=>{
            state.article = action.payload;
        },
        removeArticle: (state, action)=>{
            state.article = {};
        },
        selectCountry: (state, action)=>{
            state.country = action.payload;
        }

    },
    extraReducers: (builder)=>{
        builder
            .addCase(getArticles.pending, (state)=>{
                state.isLoading = true;
            })
            .addCase(getArticles.fulfilled, (state, action) => {
                state.articles = action.payload;
                state.isLoading = false;
            })
            .addCase(getArticles.rejected, (state)=>{
                state.isLoading = false;
            })
    }

})



export const {selectArticle, removeArticle, selectCountry} = articleSlice.actions;


export default articleSlice.reducer;






