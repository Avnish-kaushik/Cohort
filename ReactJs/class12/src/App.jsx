import React from 'react'
import Navbar from './Components/Navbar'
import AllSection from './Components/AllSection'
import Footer from './Components/Footer'


const App = () => {

  const courseData = {
    coursename: 'Cohort 2.0',
    instructor: 'Avnish',
    mentor: 'Anubhav',
    duration: '6 months',
    price: 'Rs 10000'
  }

  return (
    <div>
      <Navbar />
      <AllSection courseData={courseData} />
      <Footer />
    </div>
  )
}

export default App