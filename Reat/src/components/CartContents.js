
 import React, { useEffect } from 'react'
 import { useState } from 'react'
 import plus from './images/plus.svg'
 import minus from './images/Minus.svg'
 import scooter from './images/scooter1.svg'

export default function CartContents(props) {

    const {products} = props;

    let totalprice = 0;

    const[cartItems, setCartItems] = useState([]);
     
    let cash = 1200;
    let total = 0;

    useEffect(()=> {
       setCartItems(products)
       
    },[products])
  

    const onAdd = (item_id) => {
      
      const existInCart = cartItems.find((v)=> v.id=== item_id.id);
         if(existInCart) {
              
          setCartItems(

            cartItems.map((v) => 
              v.id === item_id.id? {...existInCart, quantity: existInCart.quantity + 1 } : v
              
             
            ))

          }

              
    }

    const onRemove = (item_id) => {
      
      const existInCart = cartItems.find((v)=> v.id=== item_id.id);

         if(existInCart) {
              
          setCartItems(
            cartItems.map((v) => 
              v.id === item_id.id? {...existInCart, quantity: existInCart.quantity - (existInCart.quantity >1 ? 1: 0) } : v,
              console.log(item_id.id)
             
            ))

          }

              
    }

    const onCancel= (item_id) => {

      const existInCart = cartItems.find((x) => x.id === item_id.id);
       if(existInCart.quantity===1) {

        setCartItems(cartItems.filter((x)=> x.id!==item_id.id))
       }
    }
    
  return (
    <section>

     <div>
   
     {cartItems.map((product) => (
          
       
      <div key={product.id}>
      
         <div key={product.id}  className="main-contents">

            <div className="image-button-remove-icon">

                <button onClick={()=> onCancel(product)} className='image-style'><img id='cancel' src={product.cancel}></img>  </button>
                <img src={product.image}>
                </img>
                <p id="product-title">{product.title}</p>
                <p className="data-title">
                  
                </p>
                  <div className="buttons"> 
                  <button   className="buttonClick"  onClick={()=>onAdd(product)}><img style={{height:"50px"}} src={plus}></img></button>

                  <p id="product-quantity"> {product.quantity}</p>

                  <button className="buttonClick"  onClick={()=>onRemove(product)}><img style={{height:"50px"}} src={minus}></img></button>
                  
                  </div>

            </div>
       
             
   
         <div className="price">  

             <p>
             #{product.price*product.quantity}
             </p>
             <p style={{visibility:"hidden"}}>{totalprice +=product.price * product.quantity}</p>
   
         </div>
         
       </div>
  
        
     <hr id="line-break"/>
     </div>

    
        
      ))}
   
      {cartItems.length==0? <div>

          <p id='empty-cart'> Sorry, (: The Cart Is Empty</p>
          </div> :  
      
      <div>
      
      <div className="delivery-container">
       
              <div className='delivery-details'>

                <img id='scooter' src={scooter}>
                </img>
                <p id='delivery-fee'>
                  Delivery Fee
                </p>
              </div>

          <div >

                <p id='delivery-price'>
                #{cash}
                </p>


          </div>

              </div>
              <hr id="line-break"/>
              <div className="total">
              <p>Total <span>#{totalprice+cash}</span></p>
              </div>

     <div className="checkout">

          <button className="checkout" >Checkout</button>

     </div>
      
      
      </div> 
    
    
    }
      
          
     </div>
    
    </section>
  )
}
