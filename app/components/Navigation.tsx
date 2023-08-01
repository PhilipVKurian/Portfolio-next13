import React from 'react'
import Link from 'next/link'
//Since search is a client module... it will be treated as such even tho Navbar is a server module


export default function Navbar() {
  return (
    <nav className="bg-slate-800 p-4 flex justify-between flex-col md:flex-row sticky top-0 left-0 drop-shadow-lg">
        <Link href="#home" className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
                Philip     
        </Link>
  
      <ul>
        <Link href="#about"><li>About</li></Link>
        <a href="#work"><li>Work</li></a>
        <a href="#contact"><li>Contact</li></a>
      </ul>
    </nav>
  )
}