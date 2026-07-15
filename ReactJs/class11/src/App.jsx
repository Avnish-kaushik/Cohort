import React from 'react'
import { Navbar } from '../components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Men from './pages/Men'
import { Routes, Route } from 'react-router-dom'
import RandomAbout from './pages/RandomAbout'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>

        {/* Static Routing */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/product' element={<Product />} />

        {/* Nested Routing */}
        <Route path='/product/men' element={<Men />} />

        {/* Dynamic Routing */}
        <Route path='/about/:id' element={<RandomAbout />} />
      </Routes>
    </div>
  )
}

export default App