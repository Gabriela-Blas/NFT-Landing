import React from 'react'

//icons
import { FaEthereum} from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

const TopWeek = () => {
    return (
        <section className='flex flex-col w-full gap-12 items-center'>
            {/*Title --*/}
            <div className='text-center'>
                <p className='text-fuchsia-500 font-semibold text-sm'>NTF Creator</p>
                <p className='text-white text-3xl font-bold'>Top creator This Week 💥</p>
            </div>
            {/*End Title --*/}

            {/*Mini Cards imagen, 3 puntos precio en ethereum */}
            <div className='grid grid-cols-3 gap-2  md:gap-14 items-center max-w-screen-xl w-full'>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((elemento) =>
                    <div className='flex flex-shrink-0 w-full p-3 gap-2 bg-zinc-800 rounded-xl'>
                        {/*imagen*/}

                        <div className='md:h-14 md:w-14 aspect-square overflow-hidden rounded-xl'>
                            <img src='img/avatar.jpg' className='object-cover md:w-full md:h-full' />
                        </div>

                        {/*imagen*/}
                        <div>
                            <p className='text-white text-sm font-medium'>Tokio Handoko</p>
                            <div className='flex justify-end'>
                                <BsThreeDots className='text-zinc-400 flex justify-end' />
                            </div>
                            <div className='flex gap-2'>
                                <button className='w-6 h-6 rounded-2xl bg-blue-400/90 flex justify-center items-center'>
                                    <FaEthereum className='text-white left' />
                                </button>
                                <p className='text-zinc-400 text-sm'>14,821.89</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {/*button view ranking imagen*/}
            <div className='flex flex-col items-center'>
                <button className='rounded-full p-3 bg-center text-white px-8 text-sm border border-zinc-200'>View Rankings</button>
            </div>
            {/*button view ranking imagen*/}

        </section>
    )
}

export default TopWeek