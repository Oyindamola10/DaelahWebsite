import React from 'react'
import Women from './Women'
import './Women.css'

const WomenList = () => {
  
    const women =[
        {
          image: "https://i.imgur.com/KIYAxB5.jpg",
          name:" Ladies Watch Set",
          Price: "NGN25000"
        },
        {
          image: "https://i.imgur.com/KwIUiMo.jpg",
          name:" Ladies Watch Set",
          Price: "NGN25000"
        },
        {
          image: "https://i.imgur.com/8tkAakR.jpg",
          name:" Ladies Watch Set",
          Price: "NGN25000"
        },
        {
          image: "https://i.imgur.com/4NTNp9O.jpg",
          name:" Ladies Watch Set",
          Price: "NGN25000"
        },
        {
          image: "https://i.imgur.com/77jFWKe.jpg",
          name:" Ladies Watch Set",
          Price: "NGN25000"
        },
        {
          image: "https://i.imgur.com/nHFY0xJ.jpg",
          name:" Ladies Watch Set",
          Price: "NGN25000"
        },
        {
          image: "https://i.imgur.com/0et835T.jpg",
          name:" Ladies Watch Set",
          Price: "NGN25000"
        },
        {
          image: "https://i.imgur.com/RO4cP6j.jpg",
          name:" Ladies Watch Set",
          Price: "NGN25000"
        },
        {
          image: "https://i.imgur.com/AqKFPO7.jpg",
          name:" Ladies Watch Set",
          Price: "NGN25000"
        },
        {
          image: "https://i.imgur.com/GGno3Cp.jpg",
          name:" Ladies Watch Set",
          Price: "NGN25000"
        },
        {
          image: "https://i.imgur.com/1jTJI1c.jpg",
          name:" Ladies Watch Set",
          Price: "NGN25000"
        },
        {
          image: "https://i.imgur.com/CmQ4LsN.jpg",
          name:" Ladies Watch Set",
          Price: "NGN25000"
        },
        {
          image: "https://i.imgur.com/d7td70U.jpg",
          name:" Quality Chain Wristwatch",
          Price: "NGN17000"
        },
        {
          image: "https://i.imgur.com/KIYAxB5.jpg",
          name:" Ladies Watch Set",
          Price: "NGN25000"
        },
        {
          image: "https://i.imgur.com/KIYAxB5.jpg",
          name:" Ladies Watch Set",
          Price: "NGN25000"
        }
      ]
  return (
    <div className='ladiesImg'>
         { women.map(({name,Price,image},index) =>(
         <Women 
         key={index}
         name={name}
         price={Price}
         image={image}
         />))}
    </div>
  )
}

export default WomenList