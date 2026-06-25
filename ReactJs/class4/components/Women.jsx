import React from 'react'

const Women = (props) => {
    return (
        <div className='bg-pink-400 text-white m-4 p-4 rounded'>
            <h1>Name: {props.user.name}</h1>
            <h1>Age: {props.user.age}</h1>
            <h1>Gender: {props.user.gender}</h1>
        </div>
    )
}

export default Women