import Image from 'next/image'
import Header from './components/Header'
import Navbar from './components/Navigation'
import HomePage from './home/page'
import AboutPage from './about/page'
import ContactPage from './contact/page'
import WorkPage from './work/page'

export default function Home() {
  return (
    <main className="relative">
     
        <HomePage/>
        <AboutPage/>
        <WorkPage/>
        <ContactPage/>

    </main>
  )
}
