import Image from 'next/image'
import Link from 'next/link'

export default function WorkPage() {
  return (
    <div id='work' className="flex flex-column min-h-screen top-0 bg-cover bg-center">
    
      <article id='glass-work' className="flex-col w-[900px]">

        <h4 className='text-center my-8 opacity-50'>Work</h4>

        <section className='projects  overflow-y-scroll'>
          
          <div className='flex lg:flex-row sm:flex-col  px-4 '>
            <img src="resumaker-form.png" className='w-56 h-40 rounded-lg sm:ml-auto sm:mr-auto' alt="Resumaker"/>
            <div className='flex flex-col w-[200] mx-2 h-42 overflow-auto border-b-4 border-b-[#888686]'>
              <h4 className='mx-4 opacity-80 lg:text-left sm:text-center sm:mt-2 underline'>Resumaker</h4>
              <p className='mx-4 opacity-80 mb-2 lg:text-left sm:text-center sm:mt-2'>As Bootcamp Students, we wanted to create an app 
                that allows users to create free resumes! Trying to get a job is one challenge
                but having to pay money just to create a resume is NOT COOL! This became our
                motivation for the project. We want to allow our users to create a 
                FREE account and not have to enter any credit card details to use the application.
              </p>
            </div>
          </div>

          <div className='flex lg:flex-row sm:flex-col-reverse px-4 mt-6'>
            <div className='flex lg:flex-col sm:flex-col w-[200] mx-2 h-42 overflow-auto border-b-4  border-b-[#888686] '>
                <h4 className='mx-4 opacity-80 lg:text-right sm:text-center sm:mt-2 underline'>Bootcamp Forum</h4>
                <p className='mx-4 opacity-80 mb-2 lg:text-right sm:text-center sm:mt-2'>This application is a platform for past and present bootcamp students to connect,
                  ask questions, mentor, and network with others going through the same experience. Unlike some other forums, even 
                  ones specifically for software development, this application is exclusively* for students in coding bootcamp programs, 
                  allowing users to have a much more personalized experience.
                </p>
            </div>
            <img src="bootcampforum.png" className='w-56 h-40 rounded-lg sm:ml-auto sm:mr-auto' alt="Resumaker"/>
          </div>

          <div className='flex lg:flex-row sm:flex-col  px-4 mt-6'>
            <img src="weatherprepared.png" className='w-56 h-40 object-cover rounded-lg sm:ml-auto sm:mr-auto' alt="Weather Prepared"/>
            <div className='flex flex-col w-[200] mx-2 h-42 overflow-auto border-b-4  border-b-[#888686] '>
              <h4 className='mx-4 opacity-80 lg:text-left sm:text-center sm:mt-2 underline'>Weather Prepared</h4>
              <p className='mx-4 opacity-80 mb-2 lg:text-left sm:text-center sm:mt-2'>Weather Prepared The project involves the implementaion of Bulma css,
              javascript/jQuery, and 2 different APIs (openweathermap and weatherbit.io) to predict clothing the user
              should need for their next day of work. Or in the event of a storm, what precautions they must take.</p>
            </div>
          </div> 

          <div className='flex lg:flex-row sm:flex-col-reverse  px-4 mt-6'>
            <div className='flex lg:flex-col sm:flex-col w-[200] mx-2 h-42 overflow-auto border-b-4  border-b-[#888686] '>
                <h4 className='mx-4 opacity-80 lg:text-right sm:text-center sm:mt-2 underline'>Phaser 3 Game</h4>
                <p className='mx-4 opacity-80 mb-2 lg:text-right sm:text-center sm:mt-2'>A side project im working on. Using the Phaser 3 game engine
                with tiled maps to create a virtual world that the player can interact with.. Still a work in progress
                </p>
            </div>
            <img src="phaser-app.png" className='w-56 h-40 rounded-lg sm:ml-auto sm:mr-auto' alt="Resumaker"/>
          </div>        

        </section>

      </article>

    </div>
  )
}
