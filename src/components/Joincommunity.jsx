import React from 'react'

//Icons 
import { FaDiscord } from "react-icons/fa";


const Joincommunity = () => {
    return (
        <section>
            <div className='container mx-auto flex flex-col gap-5 p-14 items-center bg-zinc-800 rounded-xl'>
                <p className='text-white font-bold text-xl'> Join our Community</p>
                <p className='text-zinc-400 text-sm'>Meet the Luval team, artists and collectors for plataform updates announcements, and more...</p>
                <button className='inline-flex items-center gap-2 bg-blue-700 rounded-full p-3 text-white px-8 text-sm'>Laounch Discord
                    <FaDiscord />
                </button>
            </div>
        </section>
    )
}

export default Joincommunity