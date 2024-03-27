import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getArticles, removeArticle } from '../redux/features/articles/articleSlice';
import ArticleItem from './ArticleItem';



function Home() {

    const dispatch = useDispatch();

    const {articles, isLoading, country} = useSelector((state)=>state.article)



    useEffect(()=>{
        dispatch(getArticles(country));
        dispatch(removeArticle());
        console.log(country)
    },[country])








    if(isLoading){
        return(
            <div>
                <h1>Loading....</h1>
            </div>
        )
    }



  return (
    <div style={{margin:100}}>
  
        {
            articles.map((item, index)=>(
                <ArticleItem key={index} {...item} />
            ))
        }
    </div>
  )
}

export default Home