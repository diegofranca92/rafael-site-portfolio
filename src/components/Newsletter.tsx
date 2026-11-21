import Image from 'next/image'

export function Newsletter() {
  return (
    <section
      id='newsletter'
      className='flex flex-col-reverse md:flex-row items-center justify-center gap-8 mt-8 w-full rounded-2xl p-6 md:p-20'>
      <div className='w-full md:w-1/2 flex flex-col gap-6 md:gap-8'>
        <h2 className='text-2xl font-bold'>
          SE INSCREVA NA
          <br />
          MINHA NEWSLETTER
          <br />
          DO SUBSTACK
        </h2>

        <p>
          Inscreva-se na minha newsletter para receber atualizações sobre meus
          serviços, publicações e cursos.
        </p>

        <a
          href='https://substack.com'
          target='_blank'
          rel='noopener noreferrer'
          className='group relative overflow-hidden px-6 py-4 border-2 border-amber-500 rounded-full font-medium text-amber-500 hover:text-white hover:border-amber-600 hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/40 active:translate-y-0 active:scale-95 transition-all duration-300 ease-out self-start inline-flex items-center gap-3'>
          <span className='absolute inset-0 w-0 bg-amber-600 transition-all duration-300 ease-out group-hover:w-full'></span>

          <span className='relative z-10'>Inscreva-se</span>

          <svg
            viewBox='0 0 22 26'
            fill='none'
            xmlns='http://w3.org'
            className='relative z-10 w-4 h-5 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-6'>
            <rect width='22' height='3' fill='currentColor' />
            <rect y='5' width='22' height='3' fill='currentColor' />
            <path d='M0 10H22V26L11 18.5L0 26V10Z' fill='currentColor' />
          </svg>
        </a>
      </div>

      <Image
        src='https://placehold.co/1000x300'
        alt='Grafismo'
        width={1000}
        height={300}
        className='w-full md:w-1/2 h-auto rounded-xl'
      />
    </section>
  )
}
