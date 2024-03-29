// Common
import React from 'react';
// Components
import Navbar from '../components/Navbar';
import Titles from '../components/Titles';
import Sponsor from '../components/Sponsor';
import TitleCat from '../components/TitleCat';
import Categories from '../components/Categories';
import Cards from '../components/Cards';
import Suscription from '../components/Suscription';
import CreateNft from '../components/CreateNft';
import TopWeek from '../components/TopWeek';
import Joincommunity from '../components/Joincommunity';

// Icons
import { FaDiscord,FaTiktok } from "react-icons/fa";
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
            <Suscription/>
            <CreateNft/>
            <TopWeek/>
            <Joincommunity/>

           
            
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