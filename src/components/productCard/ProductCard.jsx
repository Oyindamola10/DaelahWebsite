import React from 'react'
import Accessories from '../accessories/Accessories'
import './ProductCard.css'
const ProductCard = ({name, price, image, id, onAddToCart}) => {
  return (
    <>
      <div>
      <div className="productCard">
        <div>
          <img src={image} alt="products" id="productsId" />
          <h6>{name}</h6>
          <h6>{price}</h6>
          <p>Ships in 24hrs</p>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
        </div>
        <div>
          <button className="womenBtn" onClick={() => onAddToCart({ id, name, price, image })}>Add to cart</button>
         
        </div>
      </div>
      </div>
    </>
  )
}

export default ProductCard