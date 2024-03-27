import React from 'react'
import './Drawer.css';
import { useDispatch, useSelector } from 'react-redux';
import { closeDrawerModal } from '../redux/features/modals/modalSlice';
import { categoryArticles } from '../redux/features/articles/articleSlice';

function Drawer() {

    const dispatch = useDispatch();

    const categories = [{name: 'Business', value: 'business'},{name: 'Business', value: 'business'},{name: 'Business', value: 'business'}]



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
        <ul>
            {
                categories.map((item,index)=>(
                    <li onClick={()=>handleSelectCategory(item.value)} key={index} ><h2>{item.name}</h2></li>
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