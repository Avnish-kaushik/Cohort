import React from 'react'

const User = (props) => {
    return (
        <div className='flex flex-col justify-center items-center bg-white w-[200px] h-[200px] rounded-xl m-5 p-2 border-2 border-gray-400 hover:scale-105 cursor-pointer transition-all duration-300'>
            <h1 className='text-2xl font-bold'>{props.data.name}</h1>
            <h3 className='text-xl font-medium'>{props.data.email}</h3>
        </div>
    )
}

export default User