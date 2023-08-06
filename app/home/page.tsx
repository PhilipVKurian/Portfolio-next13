'use client'
import React, { useEffect } from 'react'
import SwordModel from '../components/SwordModel'
import Typewriter from 'typewriter-effect';
export default function HomePage() {

  return (    
    <article id='home' className="flex relative h-screen">   
        
        <section className='absolute w-full mr-4 h-full'>
          <SwordModel/>
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

    </article>
  )
}

