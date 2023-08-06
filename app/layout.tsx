import './globals.css'
import Header from './components/Header'
import { Roboto_Mono, Hanuman, Inter } from 'next/font/google'

const roboto = Roboto_Mono(
  {
    subsets: ['latin'], 
    variable: '--font-roboto-mono',
    display: 'swap'
  }
)

const hanuman = Hanuman(
  {
    weight: ["900" , "100" , "300" , "400" , "700"],
    subsets: ['khmer'], 
    variable: '--font-hanuman',
    display: 'swap'
  }
)

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'Philip Kurian',
  description: 'Welcome to my Personal Page',  
}

export default function RootLayout(
{
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} + ${hanuman.variable} + bg-black` }>

        <Header/>
        {children} 

      </body>
    </html>
  )
}
