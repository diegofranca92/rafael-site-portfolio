'use client'

import Image from "next/image";
import Link from "next/link"; // Componente do Next.js para navegação performática
import { useRef } from "react";

// 1. Tipagem estrita para os links de navegação
interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: '#servicos', label: 'Meus serviços' },
  { href: '#sobre', label: 'Sobre mim' },
  { href: '#publicacoes', label: 'Publicações' },
  { href: '#cursos', label: 'Cursos' },
  { href: '#newsletter', label: 'Newsletter' },
  { href: '#contato', label: 'Contato' },
];

export function NavBar() {
  // 2. Usando useRef tipado para manipular o input do Drawer de forma segura no TS
  const drawerCheckboxRef = useRef<HTMLInputElement>(null);

  // Função para fechar o menu lateral ao clicar em um link âncora
  const closeDrawer = (): void => {
    if (drawerCheckboxRef.current) {
      drawerCheckboxRef.current.checked = false;
    }
  };

  return (
    // Estrutura Drawer do daisyUI gerenciando a responsividade
    <div className="drawer drawer-end sticky top-0 z-50">
      <input
        id="navigation-drawer"
        type="checkbox"
        className="drawer-toggle"
        ref={drawerCheckboxRef}
      />

      {/* Barra de navegação visível no topo */}
      <div className="drawer-content flex flex-col">
        <nav className='navbar flex justify-between items-center gap-4 px-4 bg-[#1348b4] w-full min-h-[72px]'>

          {/* Identidade Visual (Logo + Textos) */}
          <div className="flex gap-4 items-center py-2">
            <Image src='/assets/logo.svg' alt='Logomarca de Rafael Silva' width={200} height={40} priority />
            <span className="border-r-3 border-white h-14 hidden sm:block"></span>
            <span className="text-rotate text-2xl text-white hidden sm:block">
              <span className="flex flex-col text-sm font-semibold tracking-wide">
                <span>Educador</span>
                <span>Palestrante</span>
                <span>Antirracista</span>
              </span>
            </span>
          </div>

          {/* Área de Navegação Direta */}
          <div>
            {/* Botão de Menu (Apenas visível no Mobile) */}
            <label htmlFor="navigation-drawer" aria-label="Abrir menu" className="btn btn-square btn-ghost text-white lg:hidden">
              <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>

            {/* Menu Horizontal (Apenas visível em telas Grandes/Desktop) */}
            <ul className='menu menu-horizontal gap-4 text-white hidden lg:flex px-1'>
              {navLinks.map((link) => (
                <li key={link.href} className="border-b-3 border-transparent hover:border-white rounded-none">
                  <Link href={link.href} className="hover:bg-transparent! active:bg-transparent! p-1">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      {/* Menu Lateral que Desliza (Mobile Drawer Sidebar) */}
      <div className="drawer-side z-50">
        <label htmlFor="navigation-drawer" aria-label="Fechar menu" className="drawer-overlay"></label>

        <div className="menu w-80 min-h-full bg-amber-100 text-base-content flex flex-col p-0 justify-between">
          {/* Cabeçalho do Menu Lateral */}
          <div className="flex justify-between items-center border-b border-base-300 bg-blue-700 p-4">
            <Image src='/assets/logo.svg' alt='Logomarca' width={140} height={30} className="brightness-0 dark:brightness-100" />
            <button onClick={closeDrawer} className="btn btn-sm btn-circle btn-ghost" aria-label="Fechar">✕</button>
          </div>

          <div className="px-4 -mt-40">
            {/* Links da lista vertical no mobile */}
            <ul className="space-y-2 text-lg font-medium">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeDrawer}
                    className="active:bg-[#1348b4] active:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rodapé institucional do Menu Mobile */}
          <div className="text-xs text-center text-gray-500 border-t border-base-300 pt-4">
            <p className="font-bold">Rafael Silva</p>
            <p>Educador • Palestrante • Antirracista</p>
          </div>
        </div>
      </div>
    </div>
  );
}
