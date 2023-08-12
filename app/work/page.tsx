'use client'
import React, { useEffect, useState } from 'react'
import ProjectsSection from '../components/ProjectsSection'
import { Projects } from '../constants/projectConstants'

export default function WorkPage() {

  const [clicked, setClicked] = useState(false)
  const [index, setIndex] = useState(0)
  const [item, setItem] = useState<Project|undefined>(undefined); 

  useEffect(()=>{
    const itemFound = Projects.find(i => i.id === index)
    if(itemFound){
      setItem(itemFound)
    }else{
      setItem(undefined)
    }
  },[index])


  if(!clicked){

      return (
        <div id='work' className="flex flex-column min-h-screen top-0 bg-cover bg-center">
        
          <article id='glass-work' className="flex-col w-[900px]">

            <h4 className='text-center my-8 opacity-50'>Work</h4>
            <ProjectsSection Projects={Projects} setClicked={setClicked} setIndex={setIndex} ></ProjectsSection>

          </article>

        </div>
      )
  }

  return(

    <div id='work' className="flex flex-column min-h-screen top-0 bg-cover bg-center">
        
      <article id='glass-work' className="flex-col w-[900px]">

        <h4 className='text-center my-8 opacity-50'>{item?.title}</h4>

        <a className='absolute left-[8%]' onClick={()=> {setClicked(false)}}>
          <button className='back'>
            <img src='backarrow.png' className='w-full h-full object-cover' alt='Back arrow image'/>
          </button>          
        </a>

        <div className='overflow-auto absolute mx-2 h-[80%]'>

            <div className='projectDetails relative flex md:flex-row flex-col'>

              <img src={item?.image} className='flex-shrink-0 xl:w-[550px] xl:h-[400px] md:w-[300px] md:h-[250px] sm:w-[200px] sm:h-[140px] md:mx-6 mx-auto md:my-3 rounded-xl border drop-shadow-2xl' alt={item?.title} />

              <div className='flex sm:flex-col flex-row'>

                <h4 className='text-center my-5 opacity-50'>The Project</h4>

                <p className="px-4 font-semibold md:text-lg text-sm  md:text-left text-center my-2 drop-shadow-sm opacity-70 ">{item?.description}</p>

                <h4 className='text-center my-5 opacity-50'>Stack</h4>

                <div className='work-tech-stack flex flex-row space-x-6  mx-auto'>
                  {item?.techimages.map((tech:string) =>{
                    return(
                      <img src={tech} alt={tech} key={tech} className='lg:w-[48px] lg:h-[48px] w-[30px] h-[30px]'/>
                    )
                  })}
                </div>

              </div>
            </div>
        
          <div className='absolute sm:max-h-48 max-h-32 mr-4'>
            <h4 className='text-center my-8  sm:my-3 opacity-50'>Usage</h4>
            <p className='sm:mx-20 mx-10  font-semibold md:text-lg text-sm  md:text-left text-center md:my-5 mb-4 drop-shadow-sm opacity-70'>{item?.usage}</p>
          </div>
          
        </div>

      </article>

    </div>
  )
}



// <section className='projects overflow-y-scroll'>
// {Projects.map(item =>(
//   <p key={item.id}>{item.title}</p>
// </section>

