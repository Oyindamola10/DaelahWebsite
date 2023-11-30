import React from 'react'
import './ProductCard.css'
const ProductCard = () => {
  return (
    <>
    <div id='cardCase'>
    <div className='card-img2'>
        <img src="https://i.imgur.com/Xy5tToa.png" alt="Vc silver" id='img2'/>
        <h4>VC Silver </h4>
        <h4>N25,000</h4>
        <p>Ships in 24hrs</p>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span> 
        <div> 
        <button>Add To Cart</button>
        </div>
    </div>
    </div>
    </>
  )
}

export default ProductCard