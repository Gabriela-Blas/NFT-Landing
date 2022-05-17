import React from 'react'

const Categories = () => {
  return (
    <section className='flex flex-wrap justify-center w-full gap-3 max-w-screen-lg'>
                <div className='h-full'>
                    <button className='bg-blue-900/50 py-2 px-4 rounded-2xl text-blue-400 font-medium hover:bg-blue-800 border-2 border-blue-500'>Music</button>
                </div>
                <div className=' h-full'>
                    <button className='bg-blue-900/50 py-2 px-4 rounded-2xl text-blue-600 font-medium whitespace-nowrap'>Sport</button>
                </div>
                <div className='h-full'>
                    <button className='bg-blue-900/50 py-2 px-4 rounded-2xl text-blue-600 font-medium whitespace-nowrap'>Art</button>
                </div>
                <div className=' h-full'>
                    <button className='bg-blue-900/50 py-2 px-4 rounded-2xl text-blue-600 font-medium whitespace-nowrap '>Photography</button>
                </div>
                <div className='h-full'>
                    <button className='bg-blue-900/50 py-2 px-4 rounded-2xl text-blue-600 font-medium whitespace-nowrap'>Trading Card</button>
                </div>
                <div className=' h-full'>
                    <button className='bg-blue-900/50 py-2 px-4 rounded-2xl text-blue-600 font-medium whitespace-nowrap'>Virtual World</button>
                </div>
                <div className=' h-full'>
                    <button className='bg-blue-900/50 py-2 px-4 rounded-2xl text-blue-600 font-medium whitespace-nowrap '>Videos</button>
                </div>
                <div className=' h-full'>
                    <button className='bg-blue-900/50 py-2 px-4 rounded-2xl text-blue-600 font-medium whitespace-nowrap'>More</button>
                </div>
            </section>
  )
}

export default Categories