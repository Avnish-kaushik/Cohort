import React, { useContext } from 'react'
import { ThemeContextData } from '../context/ThemeContext'

const Section2 = () => {

   const data = useContext(ThemeContextData)
  return (
    <div>
        <h2>Section2</h2>
        <p>{data}</p>
    </div>
  )
}

export default Section2