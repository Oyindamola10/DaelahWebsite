import React from "react";
import { useState } from "react";
import "./Women.css";

const Women = ({ image, name, price, id }) => {



  return (
    <>
      <div className="ladiesCard">
        <div>
          <img src={image} alt="watch set" id="ladiesWatch" />
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
          <button className="womenBtn">Add to cart</button>
         
        </div>
      </div>
    </>
  );
};

export default Women;
