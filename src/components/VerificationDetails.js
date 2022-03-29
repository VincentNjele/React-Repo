
import React from 'react'
import image from './images/radio_button_checked.svg'

export default function VerificationDetails() {
  return (
      
    <div className="cart-title">
    <div className="home-time">
       
       <p><span> Home {" >"} Cart {" >"} </span>Verification</p>
    </div>

    <div className="main-cart-time">
     <p>Verification</p>
     <p id='confirm'>Confirm address & Payment</p>
    </div>

    <div className='address'>
      <p id='delivery'>Delivery Address</p>

      <div className='delivery-order-image'>
      <p id='delivery-order'>Your order will be delivered to your address</p>
      <img id='delivery-image' src={image}></img>
      </div>
    </div>
 </div>
  )
}