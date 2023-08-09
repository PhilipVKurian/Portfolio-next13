import Image from 'next/image'
import Link from 'next/link'

export default function WorkPage() {
  return (
    <div id='work' className="flex flex-column min-h-screen top-0 bg-cover bg-center border-b-4 border-b-[#E901F8]"      
    style={{
      backgroundImage: `url('/bg-work.jpg')`,       
    }}>
    
    <article id='glass' className="flex-col items-center ">

    <h4 className='text-center my-11 opacity-50'>Work</h4>
    <section>
      <p className='text-center mx-36 font-semibold opacity-60'>
        Coming Soon...
      </p>

    </section>

    <h4 className='text-center my-11 opacity-50'>Future Projects</h4>
    <section>


    </section>


    </article>
    </div>
  )
}
