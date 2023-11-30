import React from 'react'
import { Routes, Route } from "react-router-dom";
import TopNavBar from './components/navBar/TopNavBar'
import BottomNavBar from './components/navBar/BottomNavBar'
import Home from './components/hompePage/Home'
import AboutUs from './components/abotUs/AboutUs';
import Men from './components/menComp/Men'
import Login from './components/myAccount/Login';
import SignUp from './components/myAccount/SignUp';

import './App.css'
import ShoppingCart from './components/shoppingCart/ShoppingCart';



const App = () => {
  
  const men=[
    {
      image: "https://i.imgur.com/GgCbhul.jpg",
      name: "Chain Wristwatch ",
      Price: "NGN26000",
      
    },
    {
      image: "https://i.imgur.com/YAePgK7.png",
      name: "VC Chain Wristwatch ",
      Price: "NGN26000"
    },
    {
      image: "https://i.imgur.com/Wo2uH7R.png",
      name: "Leather Wristwatch ",
      Price: "NGN25000"
    }
    
  ]
  
  return (
    <div>
      
      <header>
      <TopNavBar></TopNavBar>
       <BottomNavBar></BottomNavBar>
      </header>
      <main>
       <Routes>
         <Route
          path='/'
          element={<Home/>}
         />
         <Route
           path='/about'
           element={<AboutUs/>}
         />
         <Route
           path='/men'
           element={men.map(({name,Price,image}, index) =>(
           <Men 
           key={index}
           name={name}
           price={Price}
           image={image}/>
          ))}

         />
        <Route
           path='/Login'
           element={<Login/>}
        />
        <Route
        path='/SignUP'
        element={<SignUp/>}
        />

        <Route
        path='/shopping'
        element={<ShoppingCart/>}
        />
       </Routes>
      

      </main>
      <footer></footer>
    </div>
  )
}

export default App
