import React from 'react'
import { selectCountry } from '../redux/features/articles/articleSlice'
import { useDispatch } from 'react-redux'


function Navbar() {

    const dispatch = useDispatch();

    const countries = [{name: 'Us', value: 'us'},{name: 'De', value: 'de'},{name: 'Tr', value: 'tr'},{name: 'Ca', value: 'ca'},{name: 'Kr', value: 'kr'}]


    const handleCountrySelect = (country)=>{
       //console.log(country)
       dispatch(selectCountry(country))
    }
 

  return (
    <div className='navbar'>
        <div className='navbar-title'>
            <h1>News</h1>
        </div>
        <div className='country'>
            {
                countries.map((item,index)=>(
                    <h3 key={item.value} onClick={()=>handleCountrySelect(item.value)}>{item.name}</h3>
                ))
            }
        </div>
    </div>
  )
}

export default Navbar