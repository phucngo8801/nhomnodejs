import React from 'react'
// import{ useNavigate } from'react-router-dom';
import { useHistory } from 'react-router';
import './stylede.css'
import Header from '../Home/Header'
import login1 from './image/fb.png'
import login2 from './image/gp.png'
import login3 from './image/tw.png'
const Register = () => {
    const //navigate = useNavigate();
    history = useHistory();
  return (
    <>
    <Header/>
    <div className='hero'>
        <div className='form-box'>
            <div className='button-box'>
                <div id="btn1"></div>
                <button type='button' className='toggle-btn'onClick={() => history.push('/login')} >Log In</button>
                <button  type='button' className='toggle-btn1' onClick={() => history.push('/register')}>Register</button>
            </div>
            <div className='social-icons'>
            <img src={login1}/>
            <img src={login2}/>
            <img src={login3}/>
        </div>
        <form id='register' className='input-group'>
            <input type='text' className='input-field' placeholder="User Id" required />
            <input type='Email' className='input-field' placeholder="Email Id" required />
            <input type='text' className='input-field' placeholder="Enter Password" required />
            <input type='checkbox' className='check-box' /> <span>I agree to the terms & conditions</span>
            <button type='submit' className='submit-btn'>Register </button>
        </form>
        </div>
       
    </div>
    </>
  )
}

export default Register