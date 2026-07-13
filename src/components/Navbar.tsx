export function NavBar() {
  return (
    <nav className='flex justify-center items-center gap-4 py-4 bg-gray-100 dark:bg-gray-900 sticky top-0 z-50'>
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
