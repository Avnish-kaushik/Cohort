import React, { useContext } from 'react'
import { ThemeContextData } from '../context/ThemeContext'

const Navbar = () => {

    const [theme, setTheme] = useContext(ThemeContextData)

    return (
        <div className='flex items-center justify-between'>
            <h1>Navbar</h1>
            <h2>{theme}</h2>
            <button
                onClick={() => {
                    setTheme('dark')
                }}
                className='px-3 py-2 bg-emerald-400 rounded-xl active:scale-95 cursor-pointer'>
                Change Theme
            </button>

        </div>
    )
}

export default Navbar