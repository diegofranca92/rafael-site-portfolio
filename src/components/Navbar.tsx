'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

interface NavLink {
  href: string
  label: string
}

const navLinks: NavLink[] = [
  { href: '#servicos', label: 'Meus serviços' },
  { href: '#sobre', label: 'Sobre mim' },
  { href: '#publicacoes', label: 'Publicações' },
  { href: '#cursos', label: 'Cursos' },
  { href: '#newsletter', label: 'Newsletter' },
  { href: '#contato', label: 'Contato' }
]

export function NavBar() {
  const drawerCheckboxRef = useRef<HTMLInputElement>(null)

  const closeDrawer = (): void => {
    if (drawerCheckboxRef.current) {
      drawerCheckboxRef.current.checked = false
    }
  }

  return (
    <div className='drawer drawer-end sticky top-0 z-50'>
      <input
        id='navigation-drawer'
        type='checkbox'
        className='drawer-toggle'
        ref={drawerCheckboxRef}
      />

      {/* Barra de navegação visível no topo */}
      <div className='drawer-content flex flex-col'>
        <nav className='navbar flex justify-between items-center gap-2 sm:gap-4 px-3 sm:px-6 bg-[#1348b4] w-full min-h-16 md:min-h-18'>
          {/* Identidade Visual (Logo + Textos Responsivos) */}
          <div className='flex items-center gap-2 sm:gap-4 py-1.5 min-w-0'>
            <Link href='/' className='shrink-0'>
              <Image
                src='/assets/logo.svg'
                alt='Logomarca de Rafael Silva'
                width={200}
                height={40}
                className='w-28 sm:w-36 md:w-48 h-auto'
              />
            </Link>

            {/* Linha divisória proporcional */}
            <span className='border-r-2 border-white/80 h-8 sm:h-10 md:h-14 shrink-0'></span>

            {/* Texto rotativo adaptado para mobile e desktop */}
            <span className='text-rotate text-sm sm:text-lg md:text-2xl font-medium text-white truncate'>
              <span>
                <span>Educador</span>
                <span>Palestrante</span>
                <span>Antirracista</span>
              </span>
            </span>
          </div>

          {/* Área de Navegação Direta */}
          <div className='shrink-0'>
            {/* Botão de Menu (Mobile) */}
            <label
              htmlFor='navigation-drawer'
              aria-label='Abrir menu'
              className='btn btn-square btn-ghost text-white lg:hidden'>
              <svg
                xmlns='http://w3.org'
                fill='none'
                viewBox='0 0 24 24'
                className='inline-block w-6 h-6 stroke-current'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'></path>
              </svg>
            </label>

            {/* Menu Horizontal (Desktop) */}
            <ul className='menu menu-horizontal gap-4 text-white hidden lg:flex px-1'>
              {navLinks.map(link => (
                <li
                  key={link.href}
                  className='border-b-3 border-transparent hover:border-white rounded-none'>
                  <Link
                    href={link.href}
                    className='hover:bg-transparent! active:bg-transparent! p-1'>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      {/* Menu Lateral que Desliza (Mobile Drawer Sidebar) */}
      <div className='drawer-side z-50'>
        <label
          htmlFor='navigation-drawer'
          aria-label='Fechar menu'
          className='drawer-overlay'></label>

        <div className='menu w-72 sm:w-80 min-h-full bg-amber-100 text-base-content flex flex-col p-0 justify-between'>
          {/* Cabeçalho do Menu Lateral */}
          <div className='flex justify-between items-center border-b border-base-300 bg-[#1348b4] text-white p-4'>
            <Image
              src='/assets/logo.svg'
              alt='Logomarca'
              width={140}
              height={30}
            />
            <button
              onClick={closeDrawer}
              className='btn btn-sm btn-circle btn-ghost text-white'
              aria-label='Fechar'>
              ✕
            </button>
          </div>

          <div className='px-4 my-auto'>
            {/* Links da lista vertical no mobile */}
            <ul className='space-y-2 text-lg font-medium'>
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeDrawer}
                    className='active:bg-[#1348b4] active:text-white'>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rodapé institucional do Menu Mobile */}
          <div className='text-xs text-center text-gray-500 border-t border-base-300 py-4'>
            <p className='font-bold'>Rafael Silva</p>
            <p>Educador • Palestrante • Antirracista</p>
          </div>
        </div>
      </div>
    </div>
  )
}
