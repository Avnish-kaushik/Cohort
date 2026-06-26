import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-white w-full p-4 flex items-center justify-between'>
            <div >
                <h1 className='text-3xl font-medium'>Horizon Courts</h1>
            </div>
            <div className='flex items-center justify-between gap-10'>
                <h1>About Us</h1>
                <h1>Services</h1>
                <h1>Coaches</h1>
                <h1>Events</h1>
                <h1>Contacts</h1>
            </div>
            <div>
                <button className='active:scale-95 bg-sky-900 text-white px-2 py-2 rounded-full gap-2'>
                    <span>Book Now</span>
                    <span className='rotate-45'>↗</span>
                </button>
            </div>

        </nav>
    )
}

export default Navbar