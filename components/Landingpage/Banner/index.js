import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaSquareXTwitter } from "react-icons/fa6";
const Banner = () => {
    const searchButton = [
        {name:"Google.com",icon:<FcGoogle />},
        {name:"Facebook.com",icon:<FaFacebook />},
        {name:"Twitter.com",icon:<FaSquareXTwitter />}
    ];
  return (
    <div className='md:px-8 px-6 py-0 flex justify-around lg:gap-x-10 items-center h-[100vh]'>
        <div className='mt-32 w-1/2'>
            <h1 className='text-5xl p-2'>Discover Your Business</h1>
            <h1 className='text-5xl p-2'>SEO Solutions.</h1>
            <p className='p-2 text-slate-400'>Maecenas egret risks qualm Cohabiter diapaus magna egret vehicular
              pellentesque lobortis iaculis felis viverra sit amet.
            </p>
            <div className='h-14 border to-slate-950 flex justify-between items-center rounded-md'>
               <IoIosSearch className='ml-4 text-5xl'/>
                
                <input type='text'  placeholder='Analyze any website or App' className='mr-60 outline-none ml-10 w-full'/>
                <button className='border to-slate-950 px-4 py-2 rounded-md bg-zinc-600 text-white mr-4'>Search</button>
            </div>
            <div className='flex p-2 gap-3 '>
                <h2 className='py-2'>Popular:</h2>
               {
                searchButton.map((item)=><button className='border to-black rounded-md px-4 py-2 flex justify-center items-center gap-2' key={item}>{item.icon}{item.name}</button>)
               }
            </div>
            
        </div>
        <div className='pt-24 h-[calc(100vh)] overflow-y-hidden'>
            <img src='/ranking.webp' alt='reaking' className='w-full animate-bounce-y'/>
        </div>
    </div>
  )
}

export default Banner;