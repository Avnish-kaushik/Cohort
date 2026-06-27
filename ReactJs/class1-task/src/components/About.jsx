import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'

const About = () => {
    return (
        <div>
        <div className='mt-7 ml-5'>
            <div className='grid grid-cols-[1fr_1fr] items-start'>
                <h1 className='justify-self-start border border-gray-300 rounded-full px-3 py-1 text-sm'>About Horizon</h1>
                <p className='max-w-xl text-2xl leading-tight'>  At Horizon, we don't just play tennis —
                    we live it. Since 2021, our club has been
                    a home for players of all levels,
                    from eager beginners to seasoned pros.</p>
            </div>
        </div>
        <div className='grid grid-cols-3'>
        <Card1/>
        <Card2/>
        <Card3/>
        </div>
        </div>
    )
}

export default About