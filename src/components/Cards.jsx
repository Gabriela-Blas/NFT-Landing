import React from 'react'
// icons
import { BsThreeDots } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";

const Cards = () => {
    return (
        <section className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-14 max-w-screen-xl p-3 w-full'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((element) =>
                <div className='w-full p-3 flex flex-col gap-2 bg-zinc-800 rounded-2xl'>
                    <div className='h-full w-full aspect-square overflow-hidden rounded-2xl'>
                        <img className='object-cover w-full h-full' src='img/card_1.jpg' alt='img_1' />
                    </div>
                    <div >
                        <div className='flex justify-between items-center'>
                            <p className='text-white font-semibold text-lg'>Stairs to heaven</p>
                            <BsThreeDots className='text-zinc-400' />
                        </div>
                        <div>
                            <p className='text-zinc-400 text-sm font-medium'>@dayatsatoso</p>
                        </div>
                        <div className=' flex justify-between items-center'>
                            <p className='text-blue-600 font-bold text-xl'>4.4 ETH</p>
                            <button className='rounded-2xl bg-blue-400/90 w-8 h-8 flex justify-center items-center'>
                                <FaEthereum className='text-white text-lg' />
                            </button>

                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Cards