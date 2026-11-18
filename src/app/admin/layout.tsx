import type { Metadata } from 'next'
import { Unbounded } from 'next/font/google'

const unbounded = Unbounded({
  variable: '--font-unbounded',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Rafael Silva',
  description: 'Professor e Palestrante'
}

export default function AdminLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='pt-BR'
      data-theme='light'
      className={`${unbounded.variable} h-full antialiased overflow-x-hidden`}>
      <body className='min-h-full flex flex-col relative overflow-x-hidden'>
        {children}
      </body>
    </html>
  )
}
