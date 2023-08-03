'use client'
import React, { useEffect } from 'react'
import SwordModel from '../components/SwordModel'
import Typewriter from 'typewriter-effect';
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

        <section className='!relative lg:top-5 lg:left-20 lg:mx-40 lg:h-20 lg:my-44 sm:left-[45%] top-1/4'>
          <h2 id='welcome' className={"welcome animate-pulse uppercase"}>Hello</h2>
        </section>

        <section className='intro relative mx-auto my-64'>
          <h1 className='hidden md:block'>I&apos;m a ..</h1>
          <Typewriter
            options={{
              strings: ['Web Dev.', 'Artist', 'Learner'],
              autoStart: true,
              loop: true,              
            }}
          />
          {/* <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('Developer')
              .callFunction(() => {
                console.log('String typed out!');
              })
              .pauseFor(2500)
              .deleteAll()
              .callFunction(() => {
                console.log('All strings were deleted');
              })
              .start();
            }}
          /> */}
        </section>

    </article>
  )
}

