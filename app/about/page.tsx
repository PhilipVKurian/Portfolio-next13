'use client'
import Image from 'next/image'
import TechStack from '../components/TechStack'
import SkillsToolTip from '../components/SkillsToolTip'

export default function AboutPage() {

  return (
    
    <div id='about-bg' className="flex flex-column min-h-screen top-[-5] bg-cover bg-center border-b-4 border-b-[#E901F8]"
      style={{
        backgroundImage: `url('/bg-about.jpg')`,       
      }}>
      <article id='glass' className="flex-col items-center">

        <h4 className='text-center xl:my-11 md:my-4 sm:my-2 opacity-50'>About</h4>

        <section>
          <p className='text-center lg:mx-36 md:mx-12 font-semibold opacity-60 '>A hardworking individual with a strong desire 
            to build beautiful and useful applications. 
            My strengths are ideation and problem-solving... I create my own models and designs, and am constantly evolving as a developer!              
          </p>
        </section>

        <section className='tech-stack flex flex-col'>

          <h4 className='text-center mt-8 mb-0 opacity-50'>Tech Stack</h4>

          <section className='techstackrow flex flex-row flex-wrap'>
            <SkillsToolTip>
              <TechStack index ={0}/>
            </SkillsToolTip>

            <SkillsToolTip>
              <TechStack index= {1}/>
            </SkillsToolTip>

            <SkillsToolTip>
              <TechStack index ={2}/>
            </SkillsToolTip>

            <SkillsToolTip>
              <TechStack index= {3}/>
            </SkillsToolTip>

            <SkillsToolTip>
              <TechStack index ={4}/>
            </SkillsToolTip>

            <SkillsToolTip>
              <TechStack index= {5}/>
            </SkillsToolTip>
          </section>

          <section className='techstackrow flex flex-row flex-wrap'>
            <SkillsToolTip>
              <TechStack index ={6}/>
            </SkillsToolTip>

            <SkillsToolTip>
              <TechStack index= {7}/>
            </SkillsToolTip>

            <SkillsToolTip>
              <TechStack index ={8}/>
            </SkillsToolTip>

            <SkillsToolTip>
              <TechStack index= {9}/>
            </SkillsToolTip>
            
            <SkillsToolTip>
              <TechStack index ={10}/>
            </SkillsToolTip>

            <SkillsToolTip>
              <TechStack index= {11}/>
            </SkillsToolTip>
          </section>
        </section>
        
      </article>
    </div>
  )
}
