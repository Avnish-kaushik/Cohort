import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

    return (
        <div className='bg-cyan-950 text-white flex flex-col items-center justify-center h-screen gap-8'>
            <h1 className='text-7xl font-medium '>This is our Home Page</h1>
            <button
                onClick={() => {
                    navigate('/products')
                }}
                className=' ml-2 active:scale-97 cursor-pointer bg-blue-500 text-white px-4 py-2 text-3xl font-medium rounded-xl shadow-2xl'>Explore All Products</button>
        </div>
    )
}

export default Home
