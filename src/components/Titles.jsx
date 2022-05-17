import React from 'react'

const Titles = () => {
  return (
    <section className='w-full h-72 md:h-auto flex justify-between items-center max-w-screen-xl'>
    {/*Title + imagen first colum*/}
    <h1 className='flex flex-col items-center gap-1 w-full text-5xl md:text-8xl font-bold text-white'>
        <div className='flex items-end'>
            Discover
            <div className='h-12 w-10 md:h-28 md:w-24 overflow-hidden rounded-md mx-2 md:mx-6 bg-blue-400 flex-shrink-0'>
                <img className='object-cover w-full h-full' src='img/nft_1.jpg' alt='img_nft_1' />
            </div>
            Collect
        </div>
        {/* END Title + imagen first colum*/}

        {/* Title + imagen second colum*/}
        <div className='flex items-end self-end md:self-center'>
            And Sell Rare
            <div className='h-10 w-16 md:h-20 md:w-28 overflow-hidden rounded-md mx-2 md:mx-6 bg-blue-400 flex-shrink-0'>
                <img className='object-cover w-full h-full' src='img/nft_2.jpg' alt='img_nft_1' />
            </div>
        </div>
        {/* END Title + imagen second colum*/}

        {/*Title + imagen tercer colum*/}
        <div className='flex justify-center items-end md:items-center md:w-2/3 self-start md:self-center'>
            <div className='h-14 w-14 md:w-20 md:h-20 overflow-hidden rounded-md mr-2 animate-spin flex-shrink-0'>
                <img className='object-cover w-full h-full' src='img/nft_3.png' alt='img_nft_1' />
            </div>
            <div className='flex items-center h-full w-full gap-6'>
                <p className='text-xs md:text-base font-light opacity-60 md:w-3/5'>
                    The largest NFT marketplace. Aunthentic and truly unique digital creation.
                    Signed and issued by the creator, made possible by blockchain technology
                </p>
                <div>
                    NFTs
                </div>
            </div>
        </div>
        {/* END Title + imagen tercer colum*/}

    </h1>
    {/*END Title*/}

</section>
  )
}

export default Titles