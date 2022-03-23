import React from 'react'
import './styleddd.css'
import banna from './image/banner.png'

const Menu = (handleScrollMenu) => {
  return (
    <section-m >
      
        <div className='header-main '>
         <h1>THE PRODUCT IS GOOD FOR EVERY HOME</h1>
         <p>They've just entered the best items for everyone.</p>
        <button onClick={handleScrollMenu}>
            view Menu <i className='fas fa-long-arrow-alt-right'></i>
        </button>
 
        </div>
        <div>
            <img src={banna} alt='banner' className='section-m-img'/>
        </div>
    </section-m>
  )
}

export default Menu