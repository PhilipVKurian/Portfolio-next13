import Image from 'next/image'

export default function ContactPage() {
  return (
    <div id="contact" className="flex flex-column min-h-screen top-[-5] bg-cover bg-center border-b-4 border-b-[#E901F8]"
    style={{
      backgroundImage: `url('/bg-contact.jpg')`,       
    }}>
        Contact
    </div>
  )
}
