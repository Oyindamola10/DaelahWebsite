import React from 'react'
import './Collection.css'

const Collection = ({name, price, image,id, onAddToCart}) => {
  return (
    <>
      <div className="collectionCard">
        <div>
          <img src={image} alt="collections" id="collectionImg" />
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
          <button className="collectionBtn" onClick={() => onAddToCart({ id, name, price,image })}>Add to cart</button>
         
        </div>
      </div>
    </>
  )
}

export default Collection