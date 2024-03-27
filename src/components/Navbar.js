import React, { useEffect, useState } from 'react'
import { selectCountry, searchArticles, getArticles } from '../redux/features/articles/articleSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { openDrawerModal, closeDrawerModal, openLogoutModal } from '../redux/features/modals/modalSlice';
import Drawer from './Drawer';
import LogoutModal from './LogoutModal';
import LogoutIcon from '@mui/icons-material/Logout';


function Navbar() {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const countries = [{name: 'Us', value: 'us'},{name: 'De', value: 'de'},{name: 'Tr', value: 'tr'},{name: 'Ca', value: 'ca'},{name: 'Kr', value: 'kr'}]
    const [searchText, setSearchText] = useState('');

    const currentcountry = useSelector((state)=>state.article.country)

    const {modalDrawer, modalLogout} = useSelector((state)=>state.modal)


    const handleSearch = (e) => {
        e.preventDefault();
        setSearchText(e.target.value)

        dispatch(searchArticles(e.target.value))
    }




    const handleCountrySelect = (country)=>{
       //console.log(country)
       dispatch(selectCountry(country))
    }

    const handleHomeNavigate = ()=>{
        
        dispatch(getArticles(currentcountry));
        navigate('/');
    }


    const handleDrawer = () => {
        dispatch(openDrawerModal());
    }

    const handleLogoutModal = () => {
        dispatch(openLogoutModal())
    }
 

  return (
    <div className='navbar'>
              {modalDrawer && (<Drawer/>)}
        <div className='navbar-title' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <MenuIcon onClick={handleDrawer} style={{minHeight: 40, minWidth: 40}}/>
            <h1 onClick={handleHomeNavigate} style={{marginLeft: 50}}>News</h1>
        </div>
        <div className='navbar-input'>
            <input placeholder='search for content' value={searchText} onChange={(e)=>handleSearch(e)} />
        </div>
        <div className='country'>
            {
                countries.map((item,index)=>(
                    <h3 key={item.value} onClick={()=>handleCountrySelect(item.value)}>{item.name}</h3>
                ))
            }
        </div>
        <div>
            <LogoutIcon onClick={handleLogoutModal}/>
        </div>
        {modalLogout&& <LogoutModal/>}
    </div>
  )
}

export default Navbar