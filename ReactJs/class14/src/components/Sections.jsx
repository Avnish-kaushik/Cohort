import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'

const Sections = () => {
  return (
    <div className='flex justify-between bg-blue-400 p-20'>
      <Section1 />
      <Section2 />
    </div>
  )
}

export default Sections