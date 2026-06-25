import React from 'react'

const Navbar = (props) => {
  return (
    <div className='bg-amber-300 mb-3 h-15 w-screen text-3xl flex items-center justify-between text-gray-600'>
      <h1 className='px-2.5'>{props.title}</h1>
      <div className='flex items-center gap-7 text-xl'>
        {props.links.map(function(elem,idx){
          return <h1 key = {idx} className='hover:cursor-pointer hover:text-white'>{elem}</h1>
        })}
      </div>
    </div>
  )
}

export default Navbar