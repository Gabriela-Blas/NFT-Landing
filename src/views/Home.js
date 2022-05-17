// Common
import React from 'react';
// Components
import Navbar from '../components/Navbar';
import Titles from '../components/Titles';
import Sponsor from '../components/Sponsor';
import TitleCat from '../components/TitleCat';
import Categories from '../components/Categories';
import Cards from '../components/Cards';
// Icons
import { FaEthereum, FaDiscord,FaTiktok } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineTwitter,AiFillYoutube } from "react-icons/ai";



const Home = () => {
    return (
        <main className='flex flex-col gap-10 md:gap-20 items-center bg-black w-full h-auto pb-20'>
            <Navbar />
            <Titles />
            <Sponsor />
            <TitleCat />
            <Categories />
            <Cards />

            {/*card suscription*/}
            <section className='container mx-auto flex flex-col gap-5 px-10 py-4'>
                <div className=' flex flex-col gap-5 bg-[#060f36] rounded-3xl items-center p-14 drop-shadow-2xl'>
                    <p className='text-white text-center font-semibold text-3xl'>Never miss a drop!</p>
                    <p className='text-white/70'>Subscribe to our super-exclusive drop list and be the first to know about upcoming luval drops.</p>
                    <div className='flex flex-col md:flex-row items-center md:justify-center gap-3 md:gap-5 w-full'>
                        <input type="text" placeholder='Enter you email address' 
                        className='rounded-full text-xs h-8 md:h-10 bg-transparent border border-zinc-500 px-3 w-full md:w-auto md:pr-40' />
                        <button className='bg-blue-700 text-white h-8 px-4 md:h-10 md:px-10 rounded-full md:text-xs w-full md:w-auto'>Subscribe</button>
                    </div>
                </div>
            </section>
            {/*END card suscription */}

            {/* secction create NFT Title, card, buttons */}
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

            <section className='flex flex-col w-full gap-12 items-center'>
                {/*Title --*/}
                <div className='text-center'>
                    <p className='text-fuchsia-500 font-semibold text-sm'>NTF Creator</p>
                    <p className='text-white text-3xl font-bold'>Top creator This Week 💥</p>
                </div>
                {/*End Title --*/}

                {/*Mini Cards imagen, 3 puntos precio en ethereum */}
                <div className='grid grid-cols-3 gap-2  md:gap-14 items-center max-w-screen-xl w-full'>
                    {[1, 2, 3,4,5,6,7,8,9].map((elemento) =>
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
            <section>
                <div className='container mx-auto flex flex-col gap-5 p-14 items-center bg-zinc-800 rounded-xl'>
                    <p className='text-white font-bold text-xl'> Join our Community</p>
                    <p className='text-zinc-400 text-sm'>Meet the Luval team, artists and collectors for plataform updates announcements, and more...</p>
                    <button className='inline-flex items-center gap-2 bg-blue-700 rounded-full p-3 text-white px-8 text-sm'>Laounch Discord
                        <FaDiscord />
                    </button>
                </div>
            </section>
            <footer className='flex flex-col md:flex-row items-center justify-center gap-4 w-full py-6 px-28'>
                <div>
                    <img src='img/logo_supre.png' className='w-20 flex-shrink-0' />
                    <p className='md:w-1/3 font-light text-zinc-400 text-xs'>
                        The largest NFT marketplace. Aunthentic and truly unique digital creation. Signed and issued by the creator, made
                        possible by blockchain technology.
                    </p>
                    <div className='flex gap-4 py-6'>
                    <button className='bg-zinc-600 p-2 rounded-md'>
                        <AiOutlineTwitter className='text-white'/>
                    </button>
                    <button className='bg-zinc-600 p-2 rounded-md'>
                        <FaDiscord className='text-white'/>
                    </button>
                    <button className='bg-zinc-600 p-2 rounded-md'>
                        <AiFillYoutube className='text-white'/>
                    </button>
                    <button className='bg-zinc-600 p-2 rounded-md'>
                        <FaTiktok className='text-white'/>
                    </button>
                    </div>
                </div>
                <div className='flex text-xs'>
                    <div className='flex flex-col gap-3'>
                        <p className='text-white font-semibold'>Marketing</p>
                        <p className='text-zinc-400'>Explore</p>
                        <p className='text-zinc-400'>All NFT</p>
                        <p className='text-zinc-400'>Collectibles</p>
                        <p className='text-zinc-400'>virtual Worlds</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p className='text-white font-semibold'>Resources</p>
                        <p className='text-zinc-400'>Explore</p>
                        <p className='text-zinc-400'>All NFT</p>
                        <p className='text-zinc-400'>Collectibles</p>
                        <p className='text-zinc-400'>virtual Worlds</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p className='text-white font-semibold'>Company</p>
                        <p className='text-zinc-400'>About Us</p>
                        <p className='text-zinc-400'>careers</p>
                        <p className='text-zinc-400'>Support</p>
                    </div>
                </div>
            </footer>
        </main >

    )
}

export default Home