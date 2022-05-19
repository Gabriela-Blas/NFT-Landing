
import React from 'react'

const Suscription = () => {
    return (
        < section className='container mx-auto flex flex-col gap-5 px-10 py-4' >
            <div className=' flex flex-col gap-5 bg-[#060f36] rounded-3xl items-center p-14 drop-shadow-2xl'>
                <p className='text-white text-center font-semibold text-3xl'>Never miss a drop!</p>
                <p className='text-white/70'>Subscribe to our super-exclusive drop list and be the first to know about upcoming luval drops.</p>
                <div className='flex flex-col md:flex-row items-center md:justify-center gap-3 md:gap-5 w-full'>
                    <input type="text" placeholder='Enter you email address'
                        className='rounded-full text-xs h-8 md:h-10 bg-transparent border border-zinc-500 px-3 w-full md:w-auto md:pr-40' />
                    <button className='bg-blue-700 text-white h-8 px-4 md:h-10 md:px-10 rounded-full md:text-xs w-full md:w-auto'>Subscribe</button>
                </div>
            </div>
        </section >
    )
}

export default Suscription