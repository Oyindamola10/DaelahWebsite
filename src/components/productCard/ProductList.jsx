import React from 'react'
import ProductCard from './ProductCard'

const ProductList = () => {

    const products=[
          {
            image: "https://i.imgur.com/KIYAxB5.jpg",
            name:" Ladies Watch Set",
            Price: "NGN25000"
          },
          {
            image: "https://i.imgur.com/GgCbhul.jpg",
            name: "VC Chain Wristwatch ",
            Price: "NGN25,000",
            
          },
          {
            image: "https://i.imgur.com/U84akaj.jpg",
            name: "Silver Female Bracelet",
            Price: "NGN5,500"

        },
        {
            image: "https://i.imgur.com/MGZfnOe.jpg",
            name: "AP Leather Wristwatch ",
            Price: "NGN25,000"
          },
          {
            image: "https://i.imgur.com/KwIUiMo.jpg",
            name:" Ladies Watch Set",
            Price: "NGN25000"
          },
          {
            image: "https://i.imgur.com/biuiNMj.jpg",
            name: "Casio Wristwatch ",
            Price: "NGN12,000"
          },
          {
            image: "https://i.imgur.com/F1qeyQJ.jpg",
            name: "Earrings",
            Price: "NGN7,500"

        },
        {
            image: "https://i.imgur.com/GGno3Cp.jpg",
            name:" Ladies Watch Set",
            Price: "NGN25000"
          },
          {
            image: "https://i.imgur.com/EL659AS.jpg",
            name: "Michael Kors Watch",
            Price: "NGN30,000"
          }
    ]
  return (
    <div className='productlistCard'>
         { products.map(({name,Price,image},index) =>(
         <ProductCard 
         key={index}
         name={name}
         price={Price}
         image={image}
         />))}
    </div>
  )
}

export default ProductList