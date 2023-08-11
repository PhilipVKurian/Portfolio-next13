import React, { useEffect, useState } from 'react'

interface Props {
  Projects: Project[]
}


export default function ProjectsSection(props: Props) {

  const [projects,setProjects] = useState([] as any[]);

  useEffect(()=>{    
    setProjects(props.Projects)
  },[])

  // <p key={project.id}>{project.title}</p>

  if(projects != undefined){
      return (

        <section className='projects  overflow-y-scroll'>    
        {projects.map((project: any) => {
            // console.log(project)
            return (
              <div className='flex lg:flex-row sm:flex-col my-2 px-4 '>

              {/* Image and Buttons */}
              <div className='relative imageDiv w-56 h-40 bg-cover flex-shrink-0 sm:ml-auto sm:mr-auto'>
                <img
                  src={project.image}
                  className='rounded-lg w-full h-full object-cover'
                  alt={project.image}
                />
                <a href={project.github} target="_blank">
                  <button className='github'>
                    <img src='github.png' className='w-full h-full object-cover' alt='Github image'/>
                  </button>
                </a>
                <a href={project.deployed} target="_blank">
                  <button className='deployed'>
                    <img src='web.png' className='w-full h-full object-cover' alt='Github image'/>                
                  </button>
                </a>
              </div>
  
              {/* Text on right */}
              <div className='mx-2 border-b-4  border-b-[#000000] border-opacity-30 '>
                <h4 className='mx-4 opacity-80 lg:text-left sm:text-center sm:mt-2 underline' key={project.id}>{project.title}</h4>
                <p className='mx-4 opacity-80 mb-2 lg:text-left sm:text-center sm:mt-2' key={project.id}>
                  {project.description}
                </p>
              </div>
  
            </div>           
            )
        })}
      </section>
    )  
  } else {
    return(
      <div></div>
    )
  }
}
