import React from 'react'

const Card = () => {
  return (
    <div className='bg-white w-[24vw] flex flex-col gap-2 items-center py-8 px-8 rounded-xl '>
        <img className='h-24 w-24 rounded-full' src="https://plus.unsplash.com/premium_photo-1783194129272-1836a8b6f3e6?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="random image " />
        <h1 className='text-black font-semibold text-xl'>Nitin Gadkari</h1>
        <h5 className='text-indigo-600 font-semibold text-lg'>Developer</h5>
        <p className="text-gray-800 font-medium leading-tight"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        <button className='bg-red-500 mt-2 rounded px-3 py-2 cursor-pointer active:scale-95'>Remove</button>
    </div>
  )
}

export default Card