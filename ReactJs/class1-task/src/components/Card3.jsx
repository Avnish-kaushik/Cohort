import React from 'react'

const Card3 = () => {
  return (
    <div className='flex flex-col w-[450px] h-[378px] bg-gray-200 rounded-3xl mt-10 p-2'>
        <div className='flex flex-col'>
            <h1 className='text-4xl font-bold pl-2 pt-2'>100+</h1>
            <h1 className='text-2xl pl-2'>Pro Coaches</h1>
            <p className='text-sm pl-2'>Certified professionals ready to boost your</p>
            <p className='text-sm pl-2'>game from first serve to tournament level.</p>

        </div>
        <div className='flex flex-col'>
            <h1 className='pl-2'>Begginner <span className='text-blue-400'>● ● ● ● ● ● ●</span> 55</h1>
            <h1 className='pl-2'>Intermediate <span className='text-blue-400'>● ● ● ● ●</span> 40</h1>
            <h1 className='pl-2'>Advanced <span className='text-blue-400'>● ● ●</span> 35</h1>
        </div>
    </div>
  )
}

export default Card3