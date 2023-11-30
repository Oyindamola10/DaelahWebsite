import React from "react";
import "./Men.css";

const Men = ({ image, name, price }) => {
  return (
    <div>
       <div>
        <img src={image} alt="Vc silver" id='img2'/>
        <h4>{name}</h4>
        <h4>{price}</h4>
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
          
      
  );
};

export default Men;
