'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export function LinkedinCard() {
  const [isScrolledDown, setIsScrolledDown] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 10) {
        setIsScrolledDown(false)
        lastScrollY.current = currentScrollY
        return
      }

      // Detecta apenas se o usuário está rolando para baixo ou para cima
      if (currentScrollY > lastScrollY.current) {
        setIsScrolledDown(true)
      } else {
        setIsScrolledDown(false)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // O card só vai encolher se a página foi rolada para baixo E o mouse NÃO estiver em cima
  const isMinimized = isScrolledDown && !isHovered

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`border-blue-700 border-3 bg-[#f5c26f] fixed bottom-0 right-0 m-4 shadow-2xl flex items-center overflow-hidden transition-all duration-500 ease-in-out cursor-pointer
        ${isMinimized
          ? 'p-0 rounded-full w-26 h-26 gap-0'
          : 'p-4 rounded-full w-100 gap-4'
        }`}
    >
      {/* Container da Imagem */}
      <div className={`relative shrink-0 transition-all duration-500 ease-in-out ${isMinimized ? 'w-26 h-26' : 'w-30 h-30'}`}>
        <Image
          src='/assets/foto1.jpg'
          alt='Seguir no Linkedin'
          fill
          sizes="(max-width: 768px) 100vw, 150px"
          className={`object-cover transition-all duration-500 ease-in-out rounded-full`}
        />
      </div>

      {/* Container de Texto */}
      <div className={`transition-all duration-500 ease-in-out flex flex-col justify-center ${isMinimized ? 'opacity-0 scale-95 pointer-events-none w-0' : 'opacity-100 scale-100 w-45'}`}>
        <h2 className='text-2xl font-bold whitespace-nowrap text-blue-700'>Rafael Silva</h2>
        <p className='whitespace-nowrap'>Professor/Palestrante</p>
        <a href="https://br.linkedin.com/in/edurafaelsilva" className='text-blue-700 hover:underline mt-2 inline-block whitespace-nowrap'>
          Seguir no LinkedIn
        </a>
      </div>
    </div>
  )
}
