import React, { useEffect, useState } from 'react'

const App = () => {

  const [counter, setCounter] = useState(0)
  const [name, setName] = useState('')

    useEffect(function(){
      console.log('hello');
    },[counter])
  
  return (
    <div className='flex flex-col gap-5 p-10 border border-gray-500 rounded-lg'>
      <input 
      className='border border-blue-500 rounded-lg p-2 text-gray-800'
      value = {name}
      onChange = {(e)=> setName(e.target.value)}
      type="text" 
      placeholder='Enter your name' />
      <h1>Counter: {counter}</h1>
      <button 
      onClick={()=>setCounter(counter + 1)}
      className='px-3 py-2 bg-blue-500 rounded-lg text-white'>
      Increase
      </button>
    </div>
  )
}

export default App