import React from 'react'
import './LogoutModal.css'
import { useDispatch } from 'react-redux'
import { closeLogoutModal } from '../redux/features/modals/modalSlice';

function LogoutModal() {

    const dispatch = useDispatch();

    const handleNo = ()=>{
        dispatch(closeLogoutModal())
    }


  return (
    <div className='logoutmodal-container'>
        <h3>Wan't to logout?</h3>
        <div className='logoutmodal-btns'>
            <button>Yes</button>
            <button onClick={handleNo}>No</button>
        </div>
    </div>
  )
}

export default LogoutModal