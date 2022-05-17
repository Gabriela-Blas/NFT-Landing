// Common
import React from 'react';
// Icons
import { FiSearch } from 'react-icons/fi';

const Navbar = () => {
    return (
        <nav className='w-full flex justify-between items-center gap-6 p-4 md:py-8 text-white/70 max-w-screen-xl'>
            <div className='w-20 flex-shrink-0'>
                <img src='img/logo_supre.png' />
            </div>
            {/* links navbar */}
            <ul className='hidden md:flex w-full gap-12'>
                <li>Drops</li>
                <li>MarketPlace</li>
                <li>Creator</li>
                <li>community</li>
            </ul>
            {/* END links navbar */}
            {/* Navbar, serach box button */}
            <div className='relative hidden md:flex items-center'>
                <input type="text" placeholder='Search'
                    className='w-60 h-9 px-4 rounded-3xl text-sm border border-white/50 placeholder-white/60 bg-transparent outline-none' />
                <FiSearch className='absolute right-3 text-zinc-700' />
            </div>
            {/* Navbar, serach box button */}

            {/* button conect wallet */}
            <button className='bg-blue-700 rounded-3xl py-2 px-6 text-sm font-medium whitespace-nowrap'>Conect wallet</button>
            {/* END button conect wallet */}
        </nav>
    )
}

export default Navbar