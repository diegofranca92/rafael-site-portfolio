'use client'
import Image from "next/image";

export function NavBar() {
  return (
    <nav className='flex justify-between items-center gap-4 py-4 bg-[#1348b4] sticky top-0 z-50'>
       <Image src='/assets/logo.svg' alt='Logomarca de Rafael Silva' width={150} height={40} />
      <ul className='flex gap-4 text-gray-800 dark:text-gray-200'>
        <li>
          <a href='#servicos'>Meus serviços</a>
        </li>
        <li>
          <a href='#sobre'>Sobre mim</a>
        </li>
        <li>
          <a href='#publicacoes'>Publicações</a>
        </li>
        <li>
          <a href='#cursos'>Cursos</a>
        </li>
        <li>
          <a href='#newsletter'>Newsletter</a>
        </li>
        <li>
          <a href='#contato'>Contato</a>
        </li>
      </ul>
    </nav>
  )
}
