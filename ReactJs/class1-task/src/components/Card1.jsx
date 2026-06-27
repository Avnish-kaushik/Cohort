import React from 'react'

const Card1 = () => {
  return (
    <div>
      <div className='bg-gray-900 flex flex-col w-[450px] h-[378px] rounded-3xl p-4 gap-2 ml-3 mt-10'>
        <h1 className='text-white'>
          🏟
        </h1>
        <p className='text-white'>
          Professional hard courts with tournament-grade lighting & climate control -
          play in perfect conditions, in any season.
        </p>
        <button className='text-white flex justify-start'>Book a Court</button>
      </div>
    </div>
  )
}

export default Card1