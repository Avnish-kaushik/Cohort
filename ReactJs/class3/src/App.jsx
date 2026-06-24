import React from 'react'
import Card from './components/Card'

const App = () => {

  const users = ['Avnish', 'Mohit', 'Aman', 'Ravi', 'Ankit']

  return (
    <div className='p-3 h-screen '>
      {users.map(function (elem) {
        return <Card user = {elem}/>
      })}
    </div>
  )
}

export default App