import React from 'react'
import Accessories from './Accessories'

const AccessoriesList = () => {
    const accessories = [
        {
            image: "https://i.imgur.com/U84akaj.jpg",
            name: "Silver Female Bracelet",
            Price: "NGN5,500"

        },
        {
            image: "https://i.imgur.com/R59NsXU.jpg",
            name: "Gold Female Bracelet",
            Price: "NGN5,500"

        },
        {
            image: "https://i.imgur.com/X559nMk.jpg",
            name: "Black Female Bracelet",
            Price: "NGN5,500"

        },
        {
            image: "https://i.imgur.com/GfHYI0R.jpg",
            name: "Earrings",
            Price: "NGN7,500"

        },
        {
            image: "https://i.imgur.com/F1qeyQJ.jpg",
            name: "Earrings",
            Price: "NGN7,500"

        },
        {
            image: "https://i.imgur.com/1uQVM60.jpg",
            name: "Earrings",
            Price: "NGN7,500"

        },
        {
            image: "https://i.imgur.com/0Zhksp6.jpg",
            name: "Earrings + Pendant",
            Price: "NGN8,500"

        },
        {
            image: "https://i.imgur.com/YazKjyR.jpg",
            name: "Earrings + Pendant",
            Price: "NGN8,500"

        },
        {
            image: "https://i.imgur.com/qTf5siW.jpg",
            name: "Earrings + Pendant",
            Price: "NGN8,500"

        },
        {
            image: "https://i.imgur.com/bgH4k4K.jpg",
            name: "Earrings + Pendant",
            Price: "NGN8,500"

        },
        {
            image: "https://i.imgur.com/ptv68Mi.jpg",
            name: "Earrings + Pendant",
            Price: "NGN8,500"

        },
        {
            image: "https://i.imgur.com/KQdgttt.jpg",
            name: "Earrings + Pendant",
            Price: "NGN8,500"

        },
        {
            image: "https://i.imgur.com/JRoBu6Z.jpg",
            name: "Silver Necklace",
            Price: "NGN15,000"

        },
        {
            image: "https://i.imgur.com/DSr3P3B.jpg",
            name: "Silver Necklace",
            Price: "NGN15,000"

        },
        {
            image: "https://i.imgur.com/BnrEAt8.jpg",
            name: "Silver Necklace",
            Price: "NGN15,000"

        }
          
    ]
  return (
    <div className='accessoriesImg'>
    { accessories.map(({name,Price,image},index) =>(
    <Accessories 
    key={index}
    name={name}
    price={Price}
    image={image}
    />))}
    </div>
  )
}

export default AccessoriesList