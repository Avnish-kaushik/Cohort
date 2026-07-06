import React, { useState } from 'react'
import Card from './components/Card';

const App = () => {

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");

  const [allUsers, setAllUsers] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();

    const oldUsers = [...allUsers]
    oldUsers.push({ name, image, role, description })
    setAllUsers(oldUsers)
    console.log(oldUsers);

    setName('')
    setImage('')
    setRole('')
    setDescription('')

  }

  const deleteUser = (idx) => {
    const copyUsers = [...allUsers]
    copyUsers.splice(idx, 1)
    setAllUsers(copyUsers)

  }

  return (
    <div
      className='h-screen bg-black text-white flex flex-col items-center justify-center'>

      <form
        onSubmit={submitHandler}
        className='flex flex-col gap-5 w-[40%]'>

        <input
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          className='border-2 text-xl font-medium border-zinc-500 rounded-md outline-none px-2 py-1'
          type="text"
          placeholder='Enter your name' />

        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className='border-2 text-xl font-medium border-zinc-500 rounded-md outline-none px-2 py-1'
          type="text"
          placeholder='Image URL' />

        <input
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className='border-2 text-xl font-medium border-zinc-500 rounded-md outline-none px-2 py-1'
          type="text"
          placeholder='Enter Role' />

        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className='border-2 text-xl font-medium border-zinc-500 rounded-md outline-none px-2 py-1'
          type="text"
          placeholder='Enter Description' />

        <button
          className='bg-blue-300 text-xl text-zinc-900 font-semibold px-3 py-1 rounded-lg cursor-pointer active:scale-95'>
          Create User
        </button>

      </form>
      <div className='flex gap-5 w-[90%] m-10'>
        {allUsers.map(function (elem, idx) {
          return <div key={idx} className='bg-white w-[24vw] flex flex-col gap-2 items-center py-8 px-8 rounded-xl '>
            <img className='h-24 w-24 rounded-full object-cover object-center' src={elem.image} />
            <h1 className='text-black font-semibold text-xl'>{elem.name}</h1>
            <h5 className='text-indigo-600 font-semibold text-lg'>{elem.role}</h5>
            <p className="text-gray-800 font-medium leading-tight"> {elem.description}</p>
            <button onClick={()=> deleteUser(idx)} className='bg-red-500 mt-2 rounded px-3 py-2 cursor-pointer active:scale-95'>Remove</button>
          </div>
        })}
      </div>
    </div>
  )
}

export default App