import React from 'react'
import Navbar from '../components/Navbar'

const App = () => {
  return (
    <>
      <Navbar title ={'Amazon'} links = {['Home' ,'About' ,'Contact' ,'Shop' ,'Services']}/>
      <Navbar title ={'Apple'} links = {['Store' ,'Mac' ,'Iphone' ,'iPad','Watch','TV','Accessories','Gift Cards']} />
      <Navbar title ={'Flipkart'} links = {['Home' ,'Product' ,'Men' ,'Women','Kids']} />
      
    </>
  )
}

export default App