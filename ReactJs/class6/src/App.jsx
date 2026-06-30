import React from 'react'
import { useState } from 'react'
const App = () => {

  const submitHandler = (e)=>{
    e.preventDefault();
    console.log('form not submitted');
      }

  return (
    <div className='flex items-center justify-center h-screen'>
      <form className='p-4 bg-gray-100 rounded' onSubmit={submitHandler}>
        <input className='p-4 border' type="text" placeholder='Enter your name' />
        <button className='p-4 border text-white
        bg-blue-500 hover:bg-blue-600 hover:cursor-pointer'>Submit</button>
      </form>
    </div>
  )
}

export default App