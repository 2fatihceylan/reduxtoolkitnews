import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const  initialState = {
    articles: [],
    isLoading: true,
    article: {},
    country: 'us'
}

const apiKey ='208b329d30f54cb2b4fac41d6c34b4ba';
const apiKey2 = '1bb6a1d8f83740398b674355f3327c52';



export const getArticles = createAsyncThunk('articles/getArticles',
    async (country, thunkAPI) => {
        try{
            const response = await axios(`https://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=${apiKey}`);

            //console.log(response.data.articles);

            return response.data.articles;
        }
        catch(error){
            return thunkAPI.rejectWithValue('Something went wrong');
        }
    }
)



export const searchArticles = createAsyncThunk('articles/searchArticles',
    async(search, thunkAPI) => {
        try{
            const response = await axios(`https://newsapi.org/v2/everything?q=${search}&sortBy=publishedAt&apiKey=${apiKey}`);

            return response.data.articles;
        }
        catch(error){
            return thunkAPI.rejectWithValue('Something went wrong');
        }
    }
)

export const categoryArticles = createAsyncThunk('articles/categoryArticles',
    async({country, category}, thunkAPI)=>{
        try{
            const response = await axios(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`);

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
            .addCase(searchArticles.pending, (state)=>{
                state.isLoading = true;
            })
            .addCase(searchArticles.fulfilled, (state, action)=>{
                state.articles = action.payload;
                state.isLoading = false;
            })
            .addCase(searchArticles.rejected, (state)=>{
                state.isLoading = false;
            })
            .addCase(categoryArticles.pending, (state)=>{
                state.isLoading = true;
            })
            .addCase(categoryArticles.fulfilled, (state, action)=>{
                state.articles = action.payload;
                state.isLoading = false;
            })
            .addCase(categoryArticles.rejected, (state)=>{
                state.isLoading = false;
            })
    }

})



export const {selectArticle, removeArticle, selectCountry} = articleSlice.actions;


export default articleSlice.reducer;






