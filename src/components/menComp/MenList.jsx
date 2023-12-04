import React from 'react'
import Men from './Men'
import './Men.css'

const MenList = () => {
    const men=[
        {
          image: "https://i.imgur.com/GgCbhul.jpg",
          name: "VC Chain Wristwatch ",
          Price: "NGN25,000",
          
        },
        {
          image: "https://i.imgur.com/MGZfnOe.jpg",
          name: "AP Leather Wristwatch ",
          Price: "NGN25,000"
        },
        {
          image: "https://i.imgur.com/sRPBX3r.jpg",
          name: "Rolex Wristwatch ",
          Price: "NGN95,000"
        },
        {
          image: "https://i.imgur.com/biuiNMj.jpg",
          name: "Casio Wristwatch ",
          Price: "NGN12,000"
        },
        {
          image: "https://i.imgur.com/U7qXTW6.jpg",
          name: "Casio Wristwatch ",
          Price: "NGN12,000"
        },
        {
          image: "https://i.imgur.com/1B4u22B.jpg",
          name: "Casio Wristwatch ",
          Price: "NGN12,000"
        },
        {
          image: "https://i.imgur.com/EL659AS.jpg",
          name: "Michael Kors Watch",
          Price: "NGN30,000"
        },
        {
          image: "https://i.imgur.com/bc7lYur.jpg",
          name: "Michael Kors Watch",
          Price: "NGN30,000"
        },
        {
          image: "https://i.imgur.com/N47JheW.jpg",
          name: "Michael Kors Watch",
          Price: "NGN30,000"
        }
      
        
      ]
  return (
    <div className='menCard'>
         { men.map(({name,Price,image},index) =>(
         <Men 
         key={index}
         name={name}
         price={Price}
         image={image}
         />))}
    </div>
  )
}

export default MenList