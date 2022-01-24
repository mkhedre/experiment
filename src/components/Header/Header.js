import React from 'react';
import './header.scss'
import { useDispatch } from 'react-redux';
import { savechange } from '../../features/movie/movieSlice';

import user from '../../images/user.png'
import { Link } from 'react-router-dom';
function Header() {
    const dispatch =useDispatch()
    let value =""
  return (
    <div>
        <div className='header-content'>
            <Link className='link' to="/" >
                <div className='header-logo'>
                    header
                </div>
            </Link>
            <form onSubmit={(e)=>{
                e.preventDefault()
                dispatch(savechange(value))
            }}>
                <label >search</label>
                <input type="text" onChange={(e)=>{
                    value =e.target.value
                    
                } }/>
            </form>
            <div className='image-container'>
                <img src={user} alt='' />
            </div>
        </div>

    </div>
  );
}

export default Header;
