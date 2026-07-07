import React, { useState } from 'react'

const App = () => {

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [allData, setAllData] = useState(localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : [])

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name,password);
    setAllData([...allData, { name, password }])
    localStorage.setItem("data", JSON.stringify(allData))
    

    setName("")
    setPassword("")
    alert("Login Sucessfull")
  }

  return (
    <div
      className='bg-zinc-900 flex flex-col items-center justify-center h-screen'>

      <form
        onSubmit={submitHandler}
        className='flex flex-col w-[40%] px-8 py-8 itmes-center justify-center gap-5 border-2 border-zinc-600 rounded-xl shadow-2xl shadow-zinc-700'>

        <h1
          className='text-3xl text-zinc-300 font-bold text-center'>
          Login
        </h1>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='bg-zinc-900 border-2 border-zinc-600 text-zinc-200 rounded-md outline-none px-2 py-1'
          type="text"
          placeholder='Enter your username' />

        <input
        value = {password}
        onChange={(e) => setPassword(e.target.value)}
        className='bg-zinc-900 border-2 border-zinc-600 text-zinc-200 rounded-md outline-none px-2 py-1'
        type="password"
        placeholder='Enter your password' />

        <button
          className='bg-emerald-400 text-zinc-900 font-semibold px-3 py-1 rounded-md cursor-pointer active:scale-95'
          type='submit'>
          Login
        </button>

        <h6
          className='text-center text-sm text-zinc-300'>
          Don't have an account?
          <span
            className='text-blue-400 cursor-pointer'>
            Sign Up
          </span>
        </h6>
      </form>
    </div>
  )
}

export default App