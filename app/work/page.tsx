'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import ProjectsSection from '../components/ProjectsSection'
import { Projects } from '../constants/projectConstants'

export default function WorkPage() {

  const [clicked, setClicked] = useState(false)
  const [index, setIndex] = useState(1)
  const [item, setItem] = useState<Project|undefined>(undefined); 

  useEffect(()=>{
    const itemFound = Projects.find(i => i.id === index)
    if(itemFound){
      setItem(itemFound)
      setIndex(itemFound.id)
    }else{
      setItem(undefined)
    }
  },[index])


  if(!clicked){

      return (
        <div id='work' className="flex flex-column min-h-screen top-0 bg-cover bg-center">
        
          <article id='glass-work' className="flex-col w-[900px]">

            <h4 className='text-center my-8 opacity-50'>Work</h4>
            <ProjectsSection Projects={Projects}></ProjectsSection>

          </article>

        </div>
      )
  }

  return(

    <div id='work' className="flex flex-column min-h-screen top-0 bg-cover bg-center">
        
      <article id='glass-work' className="flex-col w-[900px]">

        <h4 className='text-center my-8 opacity-50'></h4>


      </article>

    </div>
  )
}



// <section className='projects overflow-y-scroll'>
// {Projects.map(item =>(
//   <p key={item.id}>{item.title}</p>
// </section>

