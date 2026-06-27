import React, { useState } from 'react'

const App = () => {
  
    const [user, setUser] = useState('Rahul')

  const changeUser = ()=>{
    console.log('btn clicked');
    setUser('Riya')
  }

  return (
    <div>
      <h1>{user}</h1>
      <button className='text-white font-bold cursor-pointer rounded-full p-2 bg-blue-400' onClick={changeUser}>Change User</button>
    </div>
  )
}

export default App