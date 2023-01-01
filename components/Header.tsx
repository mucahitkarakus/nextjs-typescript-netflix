import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {AiOutlineSearch, AiOutlineBell} from "react-icons/ai"

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 0 ){
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
          window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    

  return (
    <header className={"`${isScrolled && 'bg-[#141414 }` lg:py-6 lg:px-6"}>
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
        <div className='flex items-center space-x-4 text-sm font-light '>
            <AiOutlineSearch className='hidden sm:inline h-6 w-6 ' />
            <p className='hidden lg:inline'>Kids</p>
            <AiOutlineBell className='h-6 w-6 ' />
            <Link href="/account">
            <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
            </Link>
        </div>
    </header>
  )
}

export default Header