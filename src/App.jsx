import React from 'react'
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import TopNavBar from './components/navBar/TopNavBar'
import BottomNavBar from './components/navBar/BottomNavBar'
import Home from './components/hompePage/Home'
import AboutUs from './components/abotUs/AboutUs';
import Login from './components/myAccount/Login';
import SignUp from './components/myAccount/SignUp';
import './App.css'
import ShoppingCart from './components/shoppingCart/ShoppingCart';
import WomenList from './components/womenComp/WomenList';
import MenList from './components/menComp/MenList';
import AccessoriesList from './components/accessories/AccessoriesList';
import CollectionList from './components/collections/CollectionList';
import Contact from './components/contact/Contact';



const App = () => {
  
  

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
           element={<MenList/>}

         />
         
         <Route
          path='/women'
          element={<WomenList/>}
         />
         <Route
          path='/accessories'
          element={<AccessoriesList/>}
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
        <Route
        path='/collections'
        element={<CollectionList/>}
        />
        <Route
        path='/contact'
        element={<Contact/>}
        />
       </Routes>
      

      </main>
      <footer>
      <div className='AboutDaelah2'>
            <h4><a href="">Company Links</a></h4>
            
                 <h4 id='social'>SociaL Media</h4>
                    <a href="https://twitter.com/DaelahCo"><i class="fa-brands fa-twitter" id='Btn3'></i></a>
                    <a href="https://www.instagram.com/its_daelah/"><i class="fa-brands fa-instagram" id='Btn3'></i></a>
                    <a href="http://"><i class="fa-brands fa-pinterest" id='Btn3'></i></a>
                    <hr/>
                    <h6 id='myFooter'>Copyright 2023 @DaelahCollectibles. All Rights Reserved  by Adegbenro Samiat</h6>
        </div>
      </footer>
    </div>
  )
}

export default App
