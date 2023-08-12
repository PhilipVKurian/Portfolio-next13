import Image from 'next/image'
import { Contact } from '../constants/contactConstants'


export default function ContactPage() {
  return (
    <article id='glass-contact' className="flex-col w-[900px]">

      <h4 className='text-center my-11 opacity-50'>Contact</h4>
      <p className='text-center my-16 px-4 font-semibold drop-shadow-sm opacity-70'>If you want to contact me please use the links below! I would love to get in touch!</p>

      <section className='flex flex-col justify-center mt-40'>

        {Contact.map((item) => {
          return(
            <div className='mx-auto my-auto flex flex-row space-x-4 mt-6' key={item.link}>
              <h4 className='text-center'>{item.title}</h4>
              <a href={item.link} className='text-left font-semibold drop-shadow-sm opacity-70' target='_blank'>{item.link}</a>
            </div>
          )
        })}

      </section>

  </article>
  )
}
