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
