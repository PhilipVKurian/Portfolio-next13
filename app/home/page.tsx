'use client'
import React, { useEffect } from 'react'
import SwordModel from '../components/SwordModel'

export default function HomePage() {


  useEffect(() => {
    const animation = document.getElementById('welcome')

    const onAnimationEnd = () => {
      if(animation){
        animation.classList.remove('welcome')    
      }
    }
    if (animation) {
      animation.addEventListener('animationend', onAnimationEnd);

      return () => {
        animation.removeEventListener('animationend', onAnimationEnd)
      }

    }
  }, [])


  return (    
    <article id='home' className="flex relative h-screen">   
        
        <section className='absolute w-full mr-4 h-full'>
          <SwordModel/>
        </section>

        <section className='!relative lg:top-10 lg:left-20 lg:mx-40 lg:h-20 lg:my-44 sm:left-[45%] sm:top-1/3'>
          <h2 id='welcome' className={"welcome animate-pulse uppercase"}>Hi!</h2>
        </section>

        <section className='intro relative mx-auto my-64'>
          <h1 className='hidden md:block'>I&apos;m a ..</h1>
        </section>

    </article>
  )
}

