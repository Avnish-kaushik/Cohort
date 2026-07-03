import React from 'react'
import { useState } from 'react'
const App = () => {
  const [name, setname] = useState(" ")

  const [allUsers, setAllUsers] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();
    const newAllUsers = [...allUsers];
    newAllUsers.push(name);
    setAllUsers(newAllUsers);
    console.log(newAllUsers);
    setname(" ");
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <form className='p-4 bg-gray-100 rounded flex flex-col gap-4'
        onSubmit={submitHandler}>

        <input className='p-4 border'
          type="text"
          placeholder='Enter your name'
          value={name}
          required
          onChange={(e) => {
            setname(e.target.value);
          }} />

        <button className='p-4 border text-white bg-blue-500
        hover:bg-blue-600 hover:cursor-pointer'>Submit</button>
      </form>

    </div>
  )
}

export default App