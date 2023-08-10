import Image from 'next/image'
import Link from 'next/link'

export default function WorkPage() {
  return (
    <div id='work' className="flex flex-column min-h-screen top-0 bg-cover bg-center">
    
      <article id='glass-work' className="flex-col w-[900px]">

        <h4 className='text-center my-8 opacity-50'>Work</h4>

        <section className='projects  overflow-y-scroll'>
          

          <div className='flex lg:flex-row sm:flex-col  px-4 '>

            {/* Image and Buttons */}
            <div className='relative imageDiv w-56 h-40 bg-cover flex-shrink-0 sm:ml-auto sm:mr-auto'>
              <img
                src="resumaker-form.png"
                className='rounded-lg w-full h-full object-cover'
                alt="Resumaker"
              />
              <a href="https://github.com/Sophack/resumaker" target="_blank">
                <button className='github'>
                  <img src='github.png' className='w-full h-full object-cover' alt='Github image'/>
                </button>
              </a>
              <a href="https://intense-atoll-83101.herokuapp.com/" target="_blank">
                <button className='deployed'>
                  <img src='web.png' className='w-full h-full object-cover' alt='Github image'/>                
                </button>
              </a>
            </div>

            {/* Text on right */}
            <div className='mx-2 border-b-4  border-b-[#000000] border-opacity-30 '>
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
            <div className='mx-2 h-42 overflow-auto border-b-4 border-b-[#000000] border-opacity-30'>
                <h4 className='mx-4 opacity-80 lg:text-right sm:text-center sm:mt-2 underline'>Bootcamp Forum</h4>
                <p className='mx-4 opacity-80 mb-2 lg:text-right sm:text-center sm:mt-2'>This application is a platform for past and present bootcamp students to connect,
                  ask questions, mentor, and network with others going through the same experience. Unlike some other forums, even 
                  ones specifically for software development, this application is exclusively* for students in coding bootcamp programs, 
                  allowing users to have a much more personalized experience.
                </p>
            </div>

            {/* Image and Buttons */}
            <div className='relative imageDiv w-56 h-40 bg-cover flex-shrink-0 sm:ml-auto sm:mr-auto'>
              <img
                src="bootcampforum.png"
                className='rounded-lg w-full h-full object-cover'
                alt="Bootcamp Forum"
              />

              <a href="https://github.com/lavanyavirushan/p2-bootcamp-forum" target="_blank">
                <button className='github'>
                  <img src='github.png' className='w-full h-full object-cover' alt='Github image'/>
                </button>
              </a>

              <a href="https://github.com/lavanyavirushan/p2-bootcamp-forum" target="_blank">
                <button className='deployed'>
                  <img src='web.png' className='w-full h-full object-cover' alt='Github image'/>                
                </button>
              </a>
            </div>

          </div>


          <div className='flex lg:flex-row sm:flex-col  px-4 mt-6'>
            {/* Image and Buttons */}
            <div className='relative imageDiv w-56 h-40 bg-cover flex-shrink-0 sm:ml-auto sm:mr-auto'>
              <img
                src="weatherprepared.png"
                className='rounded-lg w-full h-full object-cover'
                alt="Bootcamp Forum"
              />
              <a href="https://github.com/PhilipVKurian/weather-prepared" target="_blank">
              <button className='github'>
                <img src='github.png' className='w-full h-full object-cover' alt='Github image'/>
              </button>
              </a>
              <a href="https://philipvkurian.github.io/weather-prepared/" target="_blank">
              <button className='deployed'>
                <img src='web.png' className='w-full h-full object-cover' alt='Github image'/>                
              </button>
              </a>
            </div>

            {/* Text Row */}
            <div className='mx-2 h-42 overflow-auto border-b-4  border-b-[#000000] border-opacity-30'>
              <h4 className='mx-4 opacity-80 lg:text-left sm:text-center sm:mt-2 underline'>Weather Prepared</h4>
              <p className='mx-4 opacity-80 mb-2 lg:text-left sm:text-center sm:mt-2'>Weather Prepared The project involves the implementaion of Bulma css,
              javascript/jQuery, and 2 different APIs (openweathermap and weatherbit.io) to predict clothing the user
              should need for their next day of work. Or in the event of a storm, what precautions they must take.</p>
            </div>
          </div> 


          <div className='flex lg:flex-row sm:flex-col-reverse  px-4 mt-6'>
            <div className='sm:flex-col mx-2 h-42 overflow-auto border-b-4  border-b-[#000000] border-opacity-30'>
                <h4 className='mx-4 opacity-80 lg:text-right sm:text-center sm:mt-2 underline'>Phaser 3 Game</h4>
                <p className='mx-4 opacity-80 mb-2 lg:text-right sm:text-center sm:mt-2'>A side project im working on. Using the Phaser 3 game engine
                with tiled maps to create a virtual world that the player can interact with.. Still a work in progress
                </p>
            </div>

            {/* Image and Buttons */}
            <div className='relative imageDiv w-56 h-40 bg-cover flex-shrink-0 sm:ml-auto sm:mr-auto'>
              <img
                src="phaser-app.PNG"
                className='rounded-lg w-full h-full object-cover'
                alt="Phaser"
              />
              <a href="https://github.com/PhilipVKurian/typescript-parcel-game" target="_blank">
              <button className='github'>
                <img src='github.png' className='w-full h-full object-cover' alt='Github image'/>
              </button>
              </a>
              <a href="https://super-lokum-edacdb.netlify.app/" target="_blank">
              <button className='deployed'>
                <img src='web.png' className='w-full h-full object-cover' alt='Github image'/>                
              </button>
              </a>
            </div>

          </div>        

        </section>

      </article>

    </div>
  )
}
