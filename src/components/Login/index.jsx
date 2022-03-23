import React from 'react'
import Header from '../Home/Header'
import login1 from './image/fb.png'
import login2 from './image/gp.png'
import login3 from './image/tw.png'
// import{ useNavigate } from'react-router-dom';
import './stylede.css'
import { useHistory } from 'react-router';

const Login = () => {
    const //navigate = useNavigate();
    history = useHistory();
   

  return (

    <>
    <Header/>
    <div className='hero'>
        <div className='form-box'>
            <div className='button-box'>
                <div id="btn"></div>
                <button type='button' className='toggle-btn' >Log In</button>
                <button type='button' className='toggle-btn' onClick={() => history.push('/register')}>Register</button>
            </div>
            <div className='social-icons'>
            <img src={login1}/>
            <img src={login2}/>
            <img src={login3}/>
        </div>
        <form id='login' className='input-group'>
            <input type='text' className='input-field' placeholder="Email" required />
            <input type='text' className='input-field' placeholder="Enter Password" required />
            <input type='checkbox' className='check-box' /> <span>Remember Password</span>
            <button type='submit' className='submit-btn'>Log in </button>
        </form>
        
        </div>
       
    </div>
  

    </>

  )
}

export default Login