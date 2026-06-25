import React from 'react'
import Navbar from '../components/Navbar'
import Men from '../components/Men'
import Women from '../components/Women'

const App = () => {

  const user1 = {
    name: 'Samarth',
    age:20,
    gender:'Male'
  }

  const user2={
    name:'Sherya',
    age: 24,
    gender: 'Female'
  }

  const user3 = {
    name: 'Anmol',
    age: 18,
    gender : 'Male'
  }

  return (
    <>
      {user1.gender == 'Male' ? <Men user = {user1}/> : <Women/>}
      {user2.gender == 'Female' ? <Women user = {user2}/> : <Men/>}
      {user3.gender == 'Male' ? <Men user = {user3}/> : <Women/>}
    </>
  )
}

export default App