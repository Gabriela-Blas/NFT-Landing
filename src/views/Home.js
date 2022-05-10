import React from 'react'
import { FiSearch } from "react-icons/fi";


const Home = () => {
    return (
        <main className='flex flex-col items-center bg-zinc-900 h-screen w-screen'>
            {/* Navbar, serach box and  button */}

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


            <section className='w-full bg-red-400 h-80 flex justify-between items-center max-w-screen-xl'>
                {/*Title*/}
                <h1 className='flex flex-col gap-1 bg-pink-400 text-4xl'>
                    <div className='flex'>
                        Discover
                        <div className='h-10 w-8 bg-blue-400 flex-shrink-0'>
                            <img src='img/nft_1.jpg' alt='img_nft_1' />
                        </div>
                        Collect
                    </div>
                    <div className='flex'>
                        And Sell Rare
                        <div className='h-10 w-8 bg-blue-400 flex-shrink-0'>
                            <img src='img/nft_1.jpg' alt='img_nft_1' />
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='h-10 w-8 bg-blue-400 flex-shrink-0'>
                            <img src='img/nft_1.jpg' alt='img_nft_1' />
                        </div>
                        <div className='flex'>
                            <p className='text-xs'>The largest NFT marketplace. Aunthentic and truly unique digital creation. Signed and issued
                                by the creator, made possible by blockchain technology</p>
                            NFTs
                        </div>
                    </div>
                </h1>

                {/*END Title*/}

            </section>
        </main>
        /* END: Searchbox */
    )
}

export default Home