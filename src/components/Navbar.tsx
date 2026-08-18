'use client'
import Image from "next/image";

export function NavBar() {
  return (
    <nav className='flex justify-between items-center gap-4 px-4 bg-[#1348b4] sticky top-0 z-50'>
      <div className="flex gap-4 justify-items-center items-center py-2">
        <Image src='/assets/logo.svg' alt='Logomarca de Rafael Silva' width={200} height={40} />
        <span className="border-r-3 border-white py-2 h-14"></span>
        <span className="text-rotate text-2xl text-white">
          <span>
            <span>Educador</span>
            <span>Palestrante</span>
            <span>Antiracista</span>
          </span>
        </span>
      </div>
      <ul className='flex gap-4 text-gray-800 dark:text-gray-200'>
        <li className="p-1 border-b-3 border-transparent hover:border-white">
          <a href='#servicos'>Meus serviços</a>
        </li>
        <li className="p-1 border-b-3 border-transparent hover:border-white">
          <a href='#sobre'>Sobre mim</a>
        </li>
        <li className="p-1 border-b-3 border-transparent hover:border-white">
          <a href='#publicacoes'>Publicações</a>
        </li>
        <li className="p-1 border-b-3 border-transparent hover:border-white">
          <a href='#cursos'>Cursos</a>
        </li>
        <li className="p-1 border-b-3 border-transparent hover:border-white">
          <a href='#newsletter'>Newsletter</a>
        </li>
        <li className="p-1 border-b-3 border-transparent hover:border-white">
          <a href='#contato'>Contato</a>
        </li>
      </ul>
    </nav>
  )
}
