import React from 'react'

const CreateNft = () => {
    return (

        <section className='flex flex-col items-center gap-12'>
            <div className='text-center'>
                <p className='text-fuchsia-500 font-semibold text-sm'>How to be a creator</p>
                <p className='text-white text-3xl font-bold'>Create and sell your NFTs ✨ </p>
            </div>

            {/*steps for create NFT CARDS */}

            <div className='flex flex-wrap gap-2 md:gap-10 items-center justify-center max-w-screen-xl w-full'>
                {[1, 2, 3,].map((element) =>
                    <div className='w-1/2 md:w-1/4 flex flex-shrink-0 flex-col p-4 items-center aspect-square rounded-3xl bg-zinc-800 text-white'>
                        <img src='img/lego.png' alt='img_lego' className='object-cover w-28 h-28 aspect-square' />
                        <p className='flex items-center text-sm font-semibold'>Create Artwork</p>
                        <p className='text-xs font-semibold text-zinc-400 text-center'>Create your collection. Add social links, profile & banner images, and set a secondary sales fee.</p>
                    </div>
                )}
            </div>

            {/*END steps for create NFT CARDS */}

            <div className='flex w-full items-center py-8 justify-center gap-5'>
                <button className='bg-blue-700 rounded-full p-3 text-white px-8 text-sm'>Create Now</button>
                <button className='rounded-full p-3 text-white px-8 text-sm border border-zinc-200'>Watch Video</button>
            </div>
            {/*END steps for create NFT CARDS */}
        </section>
    )
}

export default CreateNft