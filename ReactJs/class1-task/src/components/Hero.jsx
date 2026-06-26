import React from 'react'

const Hero = () => {
    return (
        <div className='relative overflow-hidden w-full h-[88vh] flex flex-col items-center justify-center gap-4 rounded-3xl bg-blue-300'>
            <img
                className="absolute inset-0 w-full h-full object-cover bg-black/20"
                src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Hero Banner"
            />
            <div className='z-10 flex flex-col w-full h-full items-center justify-center gap-4'>
                <h1 className='text-5xl text-white'>Unleash Your Inner Champion Today.</h1>
                <h1 className='text-5xl text-white'>All In One Place</h1>
                <p className='text-white text-xl'>Join the tennis experience - where passsion meets performance,</p>
                <p className='text-white text-xl'>and every swing brings you closer to victory.</p>
                <button className='active:scale-97 text-xl bg-slate-600 text-white px-6 py-3 rounded-full flex items-center gap-2'>Start your own journey</button>
            </div>
            <div className='z-10 absolute bottom-5 left-4 '>
                <h1 className='text-white'>Train with Professionals,</h1>
                <h1 className='text-white'>Get the real Results.</h1>
            </div>
            <div className='z-10 absolute bottom-5 right-4 '>
                <h1 className='text-white'>Get 25% Off</h1>
                <h1 className='text-white'>On your First session</h1>
            </div>
        </div>
    );
};

export default Hero;