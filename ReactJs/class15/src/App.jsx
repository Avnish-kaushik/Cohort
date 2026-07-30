import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Home from './Pages/Home'
import Products from './Pages/Products'
import ProductDetails from './Pages/ProductDetails'
import { Routes, Route } from 'react-router-dom';

const App = () => {

  

  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/products' element={<Products />}></Route>
      <Route path='/products/:productId' element={<ProductDetails />}></Route>
    </Routes>
  )
}

export default App