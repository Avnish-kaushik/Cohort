import React, { useContext } from 'react'
import { ThemeContextData } from '../context/ThemeContext'

const Footer = () => {

    const data = useContext(ThemeContextData)
    

    return (
        <div>
            <h1>Footer</h1>
            <h1>{data}</h1>
        </div>
  )
}

export default Footer