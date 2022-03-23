import React from 'react'
import './styledddd.css'
import emptyCartImg from './img/b2.png'
// import { useNavigate } from 'react-router-dom'
import { useHistory } from 'react-router';

const EmptyCart = () => {
    const //navigate = useNavigate(); 
    history = useHistory();
    return (
        <div className='emptycart'>
            <img src={emptyCartImg} alt="empty" />
            <button onClick={() =>  history.push('/')}>
            <i className='fas fa-long-arrow-alt-left'></i > Shop Now 
            </button>
        
    </div >
  );
};

export default EmptyCart