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

        <div className='projectDetails relative'>

          <a onClick={()=> {setClicked(false)}}>
            <button className='back absolute'>
              <img src='backarrow.png' className='w-full h-full object-cover' alt='Back arrow image'/>
            </button>
          </a>

        </div>

      </article>

    </div>
  )
}



// <section className='projects overflow-y-scroll'>
// {Projects.map(item =>(
//   <p key={item.id}>{item.title}</p>
// </section>

