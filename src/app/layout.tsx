import type { Metadata } from 'next'
import { Unbounded } from 'next/font/google'
import { LinkedinCard } from '../components/LinkedinCard'
import { NavBar } from '../components/Navbar'
import './globals.css'

const unbounded = Unbounded({
  variable: '--font-unbounded',
  subsets: ['latin']
})


export const metadata: Metadata = {
  title: 'Rafael Silva',
  description: 'Professor e Palestrante'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      data-theme="light"
      className={`${unbounded.variable} ${unbounded.variable} h-full antialiased relative`}>
      <body className='min-h-full flex flex-col relative'>
        <NavBar />
        {children}
        <LinkedinCard />
      </body>
    </html>
  )
}
