'use client'
import Image from 'next/image'
import React, { Suspense, useEffect } from 'react'
import SwordModel from '../components/SwordModel'
import Typewriter from 'typewriter-effect';
export default function HomePage() {

  return (    
    <article id='home' className="flex relative h-screen border-b-4 border-b-[#E901F8]">   
        
        <section className='absolute w-full mr-4 h-full'>
          <Suspense>
            <SwordModel/>
          </Suspense>
        </section>

        <section className='intro relative mx-auto my-auto'>
          <h1 className='hidden md:block'>I&apos;m a ..</h1>
          <Typewriter
            options={{
              strings: ['Web Dev.', 'Artist', 'Learner'],
              autoStart: true,
              loop: true,              
            }}
          />
        </section>

        <span className='absolute bottom-8 left-1/2 animate-bounce' > 
          <img src={'/logos/mouse.png'} alt="Mouse Image" width={30} height={40}></img>
        </span>    

    </article>
  )
}

