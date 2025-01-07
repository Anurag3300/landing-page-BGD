import { navData } from '@/uitls/constant';
import React from 'react'

const Navbar = () => {
  return (
        <nav className='w-full grid grid-cols-12 items-center md:px-8 px-6 py-4 fixed z-50 border-black bg-white'>
           <a className='col-span-2'>
            <img 
              src='/logo.webp'
              alt='logo'
              className='h-10 md:h-12 w-auto object-contain cursor-pointer'/>
           </a>
           <div className='col-span-8 lg:flex gap-8 mx-auto cursor-pointer'>
             {
                navData.map((data)=><div key={data}>{data}</div>)
             }
           </div>
           <button className='px-4 py-4 w-40 border to-black rounded-lg hover:bg-neutral-400 transition-all duration-300'>
             Get in Touch
            </button>
        </nav>
  )
}

export default Navbar;