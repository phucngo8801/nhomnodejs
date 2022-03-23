import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import EmptyCart from '../../components/Cart/EmptyCart'
import Header from '../../components/Home/Header'

import Sectionp1 from '../../components/Home/Sectionp1'

import Menu1 from '../../components/Shopp/Menu1'

import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from '../../redux/cart/cart.selector';
import './styleddd.css'

const Cart = ({ cartCount, cartList, cartTotal }) => {
  return (
    <>
      <div className='cart-header'>
        <Header />
      </div>
      {cartCount === 0 ? (
        <EmptyCart />
      ) : (
        <div className='orders'>
          <h1 className='orders-heading'>Your Orders</h1>
          <div className='orders-menu'>
            <Menu1 list={cartList} />
          </div>
          <h3 className='orders-total'>Your Total ${cartTotal}</h3>
        </div>
      )}
        <Sectionp1/>
    </> 
     
     );
    };
    

     const mapStateToProps = createStructuredSelector({
      cartCount: selectCartItemsCount,
      cartList: selectCartItems,
      cartTotal: selectCartTotal,
    });

    export default connect(mapStateToProps)(Cart);