import './globals.css'
import Header from './components/Header'
import { Roboto_Mono } from 'next/font/google'

const roboto = Roboto_Mono(
  {
    subsets: ['latin'], 
    variable: '--font-roboto-mono',
    display: 'swap'
  }
)

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
      <body className={`${roboto.variable} + bg-black` }>

        <Header/>
        {children} 

      </body>
    </html>
  )
}
