import React from 'react'

const Navbar = () => {
    return (
            <nav className='flex justify-between items-center bg-white shadow'>
                <div className='text-3xl p-5'>Horizon Courts</div>
                <ul className='flex gap-7 text-xl p-5'>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Coaches</li>
                    <li>Events</li>
                    <li>Contacts</li>
                </ul>
                <button className=' bg-indigo-600 text-white px-2 py-2 mx-2 rounded'>Book now</button>
            </nav>
    )
}

export default Navbar