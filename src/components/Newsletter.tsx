export function Newsletter() {
  return (
    <section
      id='newsletter'
      className='flex flex-col items-center justify-center gap-4 mt-8 w-full rounded-2xl p-20'>
      <h2 className='text-2xl font-bold'>Newsletter</h2>
      <div className="w-full flex flex-col gap-8">
        Inscreva-se na minha newsletter para receber atualizações sobre meus
        serviços, publicações e cursos.
        <a href="https://substack.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-4 border-amber-500 border-2 rounded-full hover:bg-amber-600 hover:text-white transition-colors self-start">
          Inscreva-se
          <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="22" height="3" fill="currentColor"></rect>
            <rect y="5" width="22" height="3" fill="currentColor"></rect>
            <path d="M0 10H22V26L11 18.5L0 26V10Z" fill="currentColor"></path>
          </svg>
        </a>

      </div>

    </section>
  )
}