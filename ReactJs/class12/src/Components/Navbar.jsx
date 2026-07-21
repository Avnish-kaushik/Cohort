import React, { useState } from 'react'

const Navbar = (props) => {


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(newTheme);
    props.changeTheme(newTheme)

  }

  const [newTheme, setNewTheme] = useState('')


  return (
    <div className='p-10 bg-[cadetblue]'>
      <h1 className='text-4xl font-bold text-white'>
        Theme is {props.theme}
      </h1>
      <form
        onSubmit={handleSubmit}
        className='flex gap-4 m-4'>
        <input
          value={newTheme}
          onChange={(e) => { setNewTheme(e.target.value) }}
          className='border border-white text-xl px-2 py-1 rounded-2xl' type="text" placeholder='Enter Theme' />
        <button
          className='bg-green-600 text-white text-xl px-2 py-1 rounded-4xl cursor-pointer active:scale-97'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Navbar