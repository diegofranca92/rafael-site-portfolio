import Image from 'next/image'

export function Bio() {
  return (
    <div className='flex flex-col gap-4'>
      <h3 className='text-2xl uppercase'>
        Quem é <br />
        <span className='text-blue-700'>RAFAEL SILVA</span>
      </h3>
      <Image
        src='/assets/perfil.jpg'
        alt='Seguir no Linkedin'
        width={500}
        height={300}
        className='rounded-2xl'
      />
      <p className='mt-8'>
        Construir uma cultura de equidade e promover uma educação antirracista e
        o letramento racial na prática é um processo complexo. Entre o
        letramento da equipe, a revisão curricular, o engajamento da liderança e
        a gestão da mudança, o caminho pode parecer desafiador. <br /> <br />
        No entanto, não há futuro com desenvolvimento e cidadania para o Brasil
        se não pensarmos na inclusão da população não branca. <br /> <br />
        Seja construir maior senso de pertencimento aos estudantes com objetivo
        de melhorar sua performance escolar, ou incluir e desenvolver
        profissionais não brancos em empresas, é essencial para um futuro mais
        equitativo e próspero. <br /> <br />
        Por isso, coloco toda minha formação em{' '}
        <strong>
          História e Geografia, especialização em Educação das Relações
          Étnico-Raciais, Diversidade e Inclusão nas organizações e Gestão
          Escolar
        </strong>{' '}
        nesse processo. <br /> <br />
        Acredito no propósito dessa tarefa por crenças pessoas, mas também por
        acreditar que chegamos ao limite da tolerância com a desigualdade
        racial. Redes escolares, secretarias e empresas devem enfrentar esse
        desafio, mas a caminhada não é fácil.
        <br /> <br />
        Por isso, se precisar de ajuda me manda uma mensagem e vamos seguir esta
        conversa! :)
      </p>
      <a
        href='https://wa.me/5521976994685'
        target='_blank'
        rel='noopener noreferrer'
        className='group relative overflow-hidden px-6 py-4 border-2 border-amber-500 rounded-full font-medium text-amber-500 hover:text-white hover:border-amber-600 hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/40 active:translate-y-0 active:scale-95 transition-all duration-300 ease-out self-start inline-flex items-center gap-3'>
        <span className='absolute inset-0 w-0 bg-amber-600 transition-all duration-300 ease-out group-hover:w-full'></span>

        <svg
          xmlns='http://w3.org'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='relative z-10 w-5 h-5 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-12'>
          <path d='M12.031 2c-5.516 0-9.969 4.453-9.969 9.969 0 1.758.459 3.473 1.331 4.985L2 22l5.188-1.361a9.927 9.927 0 0 0 4.843 1.258h.004c5.515 0 9.968-4.453 9.968-9.969 0-2.663-1.037-5.167-2.92-7.05A9.903 9.903 0 0 0 12.031 2zm5.817 14.252c-.245.69-1.425 1.319-1.976 1.402-.505.076-1.144.108-1.848-.116-.428-.136-.977-.318-1.679-.621-2.952-1.275-4.88-4.248-5.028-4.445-.147-.197-1.201-1.598-1.201-3.048 0-1.451.76-2.164 1.03-2.459.27-.295.589-.369.786-.369.196 0 .393.002.565.01.181.009.424-.069.663.506.245.59.834 2.038.908 2.185.073.148.122.32.024.516-.098.197-.147.32-.294.492-.148.172-.31.385-.442.517-.147.147-.301.307-.129.602.172.295.764 1.261 1.641 2.043 1.128 1.006 2.079 1.318 2.374 1.465.295.148.467.123.639-.074.172-.197.737-.86.933-1.155.197-.295.393-.246.663-.148.27.099 1.719.811 2.014.959.295.147.491.221.565.344.073.123.073.713-.172 1.403z' />
        </svg>

        <span className='relative z-10'>Vamos Conversar</span>
      </a>
    </div>
  )
}
