import React from 'react'

const Card = (props) => {

    console.log(props);


    return (
        <div className='bg-blue-500 m-2 rounded px-5 py-3 h-40 w-40  items-center'>
            <h1 className='text-2xl text-white font-semibold'>{props.user}</h1>
        </div>
    )
}

export default Card