import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function Article() {

    const navigate = useNavigate();

    const {article} = useSelector((state)=>state.article);

    useEffect(()=>{
    if(!article.author){
        navigate('/');
    }   

    },[article])



  return (
    <div style={{display: 'flex', margin:20}} >
    <img src={article.urlToImage} alt=''  style={{height: 400, width: 500, minHeight: 400, minWidth: 500}}/>
    <div>
        <h6>Author: {article.author} {article.publishedAt}</h6>
        <h3>{article.title}</h3>
        <h6>{article.description}</h6>

        <hr/>
        <h5>
            {article.content}
        </h5>
        <a href={article.url}>Continue Reading...</a>
    </div>
</div>
  )
}

export default Article