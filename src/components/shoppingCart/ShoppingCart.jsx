import React from "react";

const ShoppingCart = () => {
  const cartItems=[]
  return (
    <div>
      
       <h4>View your Cart</h4>
      <ul>
        {cartItems.map(({image,name,price}, id) => (
          <li key={id}>
            {image}
            {name} - NGN{price}
          </li>
        ))}
      </ul> 
    </div>
  );
};

export default ShoppingCart;
