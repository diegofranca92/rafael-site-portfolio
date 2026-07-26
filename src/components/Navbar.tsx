'use client'
import Image from "next/image";

export function NavBar() {
  return (
    <nav className='flex justify-between items-center gap-4 px-4 bg-[#1348b4] sticky top-0 z-50'>
      <div className="flex gap-4">
       <Image src='/assets/logo.svg' alt='Logomarca de Rafael Silva' width={200} height={40} />
        <span className="text-rotate text-lg border-left-2 border text-white">
          <span className="justify-items-center">
            <span>Educador</span>
            <span>Palestrante</span>
            <span>Antiracista</span>
          </span>
        </span>
      </div>
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
