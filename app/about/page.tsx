'use client'
import Image from 'next/image'
import TechStack from '../components/TechStack'
import SkillsToolTip from '../components/SkillsToolTip'
import { Suspense } from 'react'

export default function AboutPage() {

  return (
    
    <div id='about-bg' className="flex flex-column min-h-screen top-[-5] bg-cover bg-center">
      <article id='glass-about' className="flex-col items-center">

        <h4 className='text-center xl:my-11 md:my-4 sm:my-2 opacity-50'>About Me</h4>

        <section>
          <p className='text-center lg:mx-36 md:mx-12 font-semibold opacity-60 '>A hardworking individual with a strong desire 
            to build beautiful and useful applications. 
            My strengths are ideation and problem-solving. I create my own models and designs, and am constantly evolving as a developer!
            I have a background in computer programming and have experience working in teams to produce deliverables. I would be intersted in any projects
            that help the world by solving everyday problems.              
          </p>
        </section>

        <section className='tech-stack flex flex-col'>

          <h4 className='text-center mt-8 mb-0 opacity-50'>Technologies</h4>

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

            <SkillsToolTip index={6}>
              <Image src={'/logos/html.png'} alt='HTML' className='lg:mx-auto md:mx-6 sm:mx-5' width={48} height={48}></Image>              
            </SkillsToolTip>

            
            <SkillsToolTip index={7}>
              <Image src={'/logos/tailwind.png'} alt='HTML' className='lg:mx-auto md:mx-6 sm:mx-5' width={48} height={48}></Image>              
            </SkillsToolTip>
            
            <SkillsToolTip index={8}>
              <Image src={'/logos/mui.png'} alt='HTML' className='lg:mx-auto md:mx-6 sm:mx-5' width={48} height={48}></Image>              
            </SkillsToolTip>
            
            <SkillsToolTip index={9}>
              <Image src={'/logos/graphql.png'} alt='HTML' className='lg:mx-auto md:mx-6 sm:mx-5' width={48} height={48}></Image>              
            </SkillsToolTip>
            
            <SkillsToolTip index={10}>
              <Image src={'/logos/three.png'} alt='HTML' className='lg:mx-auto md:mx-6 sm:mx-5' width={48} height={48}></Image>              
            </SkillsToolTip>
            
            <SkillsToolTip index={11}>
              <Image src={'/logos/handlebars.png'} alt='HTML' className='lg:mx-auto md:mx-6 sm:mx-5' width={48} height={48}></Image>              
            </SkillsToolTip>


          </section>
        </section>
        
      </article>
    </div>
  )
}
