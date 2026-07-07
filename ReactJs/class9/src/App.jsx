import React, { useState } from 'react'
import axios from 'axios'
import User from './components/User'

const App = () => {

  const [allData, setAllData] = useState([])

  async function getData() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    setAllData(response.data)

  }

  return (
    <div  className='bg-black h-screen'>
      <button
        onClick={getData}
        className='p-4 bg-white rounded-xl cursor-pointer active:scale-97 text-lg font-semibold'>
        Get Data
      </button>

      {allData.map(function(elem,idx){
        console.log(elem);

        return( 
          <div key={idx}>
        <User data = {elem} />
        </div>
        )
      })}
    </div>
  )
}

export default App

// npm i axios 
// axios.get('url') to get data from any website and store it in the response const variable
// data from  axios is in the form of promises
// but in this case the data will not be shown because we moved forward without resolving the promise
// for that we have  to use await keyword to resolve promise and then we can use the data
// axios also provides error handling
// if the promise is not resolved then it will throw an error
// we can use try and catch block to handle the error