import './globals.css'
import { Roboto } from 'next/font/google'
import Header from './components/Header'
const roboto = Roboto({subsets: ['cyrillic'], weight: '300'})

export const metadata = {
  title: 'Philip Kurian',
  description: 'Welcome to my Personal Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Header></Header>


          {children}


 
      </body>
    </html>
  )
}
