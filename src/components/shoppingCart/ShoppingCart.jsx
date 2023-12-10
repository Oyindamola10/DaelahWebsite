import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import './ShoppingCart.css'

  const ShoppingCart = ({cart, setCart, handleChange}) => {
  const [price, setPrice] = useState(0);

  const handlePrice = ()=>{
      let ans = 0;
      cart.map((item)=>(
          ans += item.amount * item.price
      ))
      setPrice(ans);
  }

  const handleRemove = (id) =>{
      const arr = cart.filter((item)=>item.id !== id);
      setCart(arr);
      // handlePrice();
  }

  useEffect(()=>{
      handlePrice();
  })

  return (
     <div>
        <div className='col-sm-8 mb'>

        </div>
     </div>
  )
}

export default ShoppingCart
