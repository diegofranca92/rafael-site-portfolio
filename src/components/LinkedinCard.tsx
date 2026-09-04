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
      className={`border-blue-700 border-3 bg-amber-50 fixed bottom-0 right-0 m-4 shadow-2xl flex items-center overflow-hidden transition-all duration-500 ease-in-out cursor-pointer
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
        <p className='whitespace-nowrap text-black'>Professor/Palestrante</p>
        <a href="https://br.linkedin.com/in/edurafaelsilva" className='hover:scale-105 transition-all flex gap-4 items-center bg-[#191919] rounded-full p-2 px-6 mt-4 text-white hover:underline mx-auto whitespace-nowrap'>
          <span>Seguir</span>
          <span className='rounded-full overflow-hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </span>
        </a>
      </div>
    </div>
  )
}
