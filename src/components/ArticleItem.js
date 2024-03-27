import React from 'react'
import { useDispatch } from 'react-redux'
import { selectArticle } from '../redux/features/articles/articleSlice';
import { useNavigate } from 'react-router-dom';


function ArticleItem(item) {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSelectArticle = () => {
        dispatch(selectArticle(item))
        navigate('/article');

    }


  return (
    <>
    <div style={{display: 'flex', margin:20}} onClick={handleSelectArticle}>
        <img src={item.urlToImage} alt=''  style={{height: 200, width: 250, minHeight: 200, minWidth: 250}}/>
        <div>
            <h3>{item.title}</h3>
            <h6>{item.description}</h6>
           
        </div>
    </div>
    <hr/>
    </>
  )
}

export default ArticleItem