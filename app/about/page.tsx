'use client'
import Image from 'next/image'
import TechStack from '../components/TechStack'

export default function AboutPage() {

  return (
    <div id='about-bg' className="flex flex-column min-h-screen top-[-5] bg-cover bg-center border-b-4 border-b-[#E901F8]"
      style={{
        backgroundImage: `url('/bg-about.jpg')`,       
      }}>
      <article id='about' className="flex-col items-center">

        <h4 className='text-center my-11 opacity-50'>About</h4>
        <section>
          <p className='text-center mx-36 font-semibold opacity-60 '>A hardworking individual with a strong desire 
            to build beautiful and useful applications. 
            My strengths are ideation and problem-solving, 
            and my hobbies are; drawing, modeling, and playing 
            video games.
          </p>

        </section>

        <section className='tech-stack flex flex-col'>

          <h4 className='text-center my-11 opacity-50'>Tech Stack</h4>

          <section className='techstack-top flex'>
            <TechStack index ={0}/>
            <TechStack index= {1}/>
            <TechStack index ={2}/>  
            <TechStack index ={3}/>
            <TechStack index ={4}/> 
            <TechStack index ={5}/>
          </section>

          <section className='techstack-top flex '>
            <TechStack index ={6}/>
            <TechStack index= {7}/>
            <TechStack index ={8}/>  
            <TechStack index ={9}/>
            <TechStack index ={10}/> 
            <TechStack index ={11}/>
          </section>
        </section>
        
      </article>
    </div>
  )
}
