import Navbar from './Navigation'

export default function Header() {
  return (
    <header className="fixed w-full z-[100] pointer-events-none bg-black">
        <Navbar/>
    </header>
  )
}
