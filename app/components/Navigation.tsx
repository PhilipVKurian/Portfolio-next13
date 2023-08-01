import React from 'react'
import Link from 'next/link'
//Since search is a client module... it will be treated as such even tho Navbar is a server module


export default function Navbar() {
  return (
    <nav className="p-4 flex justify-between flex-col md:flex-row sticky top-0 left-0 drop-shadow-lg">
        <Link href="#home" className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
                Philip     
        </Link>
  
      <ul className="flex flex-row space-x-4 my-2 place-content-center">
        <Link href="#about">
          <li className='transition ease-in-out delay-200 bg-red-900 hover:scale-75
             hover:bg-pink-500 duration-200 w-20 text-center'>About
          </li>
        </Link>
        <Link href="#work"><li className='transition ease-in-out delay-200 bg-red-900 hover:scale-75
             hover:bg-pink-500 duration-200 w-20 text-center'>Work</li></Link>
        <Link href="#contact"><li className='transition ease-in-out delay-200 bg-red-900 hover:scale-75
             hover:bg-pink-500 duration-200 w-20 text-center'>Contact</li></Link>
      </ul>
    </nav>
  )
}