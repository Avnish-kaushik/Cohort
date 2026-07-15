import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='flex justify-between px-10 py-4 bg-emerald-600 font-medium text-2xl text-white '>
        <h2>Navbar</h2>
        <input className="border-2 rounded-lg border-black" placeholder="Search" type="text" />
        <div className='flex gap-8'>
          <Link to="/">Home </Link>
          <Link to="/about">About </Link>
          <Link to="/product">Product </Link>
        </div>
      </div>
  )
}
