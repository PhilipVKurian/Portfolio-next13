import Image from 'next/image'

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


        <h4 className='text-center my-11 opacity-50'>Tech Stack</h4>
        <section>


        </section>

        
      </article>
    </div>
  )
}
