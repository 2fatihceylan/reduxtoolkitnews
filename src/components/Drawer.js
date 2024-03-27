import React from 'react'
import './Drawer.css';
import { useDispatch, useSelector } from 'react-redux';
import { closeDrawerModal, openLogoutModal } from '../redux/features/modals/modalSlice';
import { categoryArticles } from '../redux/features/articles/articleSlice';



function Drawer() {

    const dispatch = useDispatch();

    const categories = [{name: 'General', value: 'general'},{name: 'Business', value: 'business'},{name: 'Technology', value: 'technology'},{name: 'Sports', value: 'sports'}]



    const {country} = useSelector((state)=>state.article);



    const handleSelectCategory = (value) =>{
        dispatch(categoryArticles({country, category: value}))
    }





    const handleDrawerClose = () => {
        dispatch(closeDrawerModal())
    }

  return (
    <div className='drawer'>
      
    <div className='drawer-container'>
        <h2>Categories</h2>
        <ul>
            {
                categories.map((item,index)=>(
                    <li onClick={()=>handleSelectCategory(item.value)} key={index} ><h2>{item.name}</h2><hr/></li>
                ))
            }
            
        </ul>
           
    </div>
    <div onClick={handleDrawerClose} className='drawer-outside'>
    .
    </div>
    </div>
  )
}

export default Drawer