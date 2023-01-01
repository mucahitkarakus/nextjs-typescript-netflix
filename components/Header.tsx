import React from 'react'
import {AiOutlineSearch, AiOutlineBell} from "react-icons/ai"

const Header = () => {
  return (
    <header>
        <div className='flex items-center space-x-2 md:space-x-10  '>
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

        <ul className='hidden space-x-4 md:flex  '>
            <li className='headerLink hover:text-red-600' >Home</li>
            <li className='headerLink hover:text-red-600' >TV Shows</li>
            <li className='headerLink hover:text-red-600' >Movies</li>
            <li className='headerLink hover:text-red-600' >New & Populer</li>
            <li className='headerLink hover:text-red-600' >My List</li>
        </ul>
        </div>
        <div>
            <AiOutlineSearch className='hidden sm:inline h-6 w-6 ' />
            <p className='hidden lg:inline'>Kids</p>
            <AiOutlineBell />
        </div>
    </header>
  )
}

export default Header