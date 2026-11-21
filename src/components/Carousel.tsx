'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'

type Publicacao = {
  id: number
  title: string
  description: string
  category: string
  institution: string
  src: string
  alt: string
  link?: string
}

const publicacoes: Publicacao[] = [
  {
    id: 1,
    title: 'Protocolo Antirracista — Raiz Educação',
    description:
      'Protocolo institucional antirracista desenvolvido para o Raiz Educação, grupo educacional que reúne 14 marcas, 45 unidades escolares e cerca de 20 mil alunos.',
    category: 'Protocolo institucional',
    institution: 'Raiz Educação',
    src: '/assets/publicacoes/1.png',
    alt: 'Protocolo Antirracista do Raiz Educação'
  },
  {
    id: 2,
    title: 'Cartilha de Letramento Racial — Suzano',
    description:
      'Cartilha de letramento racial e combate ao racismo no ambiente corporativo, desenvolvida para a Suzano, em Imperatriz, Maranhão.',
    category: 'Cartilha',
    institution: 'Suzano — Imperatriz/MA',
    src: '/assets/publicacoes/2.png',
    alt: 'Cartilha de Letramento Racial da Suzano'
  },
  {
    id: 3,
    title: 'Coleção Didática — Ed Saber',
    description:
      'Coleção didática voltada aos Anos Iniciais do Ensino Fundamental, desenvolvida para promover o reconhecimento da diversidade e o respeito às diferenças. O material fortalece o pertencimento étnico-racial e valoriza as culturas africanas e indígenas.',
    category: 'Material didático',
    institution: 'Ed Saber',
    src: '/assets/publicacoes/3.png',
    alt: 'Coleção didática Ed Saber'
  },
  {
    id: 4,
    title: 'Livro Paradidático',
    description:
      'Livro voltado ao público infantil, especialmente estudantes do 2º ao 5º ano do Ensino Fundamental, que aborda conceitos da Educação das Relações Étnico-Raciais.',
    category: 'Livro paradidático',
    institution: 'Publicação autoral',
    src: '/assets/publicacoes/4.png',
    alt: 'Livro paradidático sobre Educação das Relações Étnico-Raciais'
  },
  {
    id: 5,
    title: 'Coluna no Porvir',
    description:
      'Coluna mensal dedicada à educação das relações étnico-raciais e à gestão antirracista, contribuindo para o debate sobre práticas educacionais e institucionais comprometidas com a equidade racial.',
    category: 'Coluna',
    institution: 'Porvir',
    src: '/assets/publicacoes/5.png',
    alt: 'Coluna sobre educação das relações étnico-raciais no Porvir'
  },
  {
    id: 6,
    title: 'Artigos de Opinião — Nexo Jornal',
    description:
      'Contribuição em artigos de opinião sobre temas relacionados à educação, à docência e às relações étnico-raciais no espaço escolar.',
    category: 'Artigos de opinião',
    institution: 'Nexo Jornal',
    src: 'https://placehold.co/600x800',
    alt: 'Artigos de opinião de Rafael Silva no Nexo Jornal'
  },
  {
    id: 7,
    title: 'Artigo de Opinião — TV Cultura',
    description:
      'Artigo de opinião dedicado à história e à memória da população negra no Brasil.',
    category: 'Artigo de opinião',
    institution: 'TV Cultura',
    src: 'https://placehold.co/600x800',
    alt: 'Artigo de opinião sobre história e memória da população negra no Brasil na TV Cultura'
  }
]

export default function Carousel() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToSlide = (index: number) => {
    const carousel = carouselRef.current
    if (!carousel) return

    const normalizedIndex = (index + publicacoes.length) % publicacoes.length
    const slide = carousel.children[normalizedIndex] as HTMLElement | undefined
    if (!slide) return

    carousel.scrollTo({
      left: slide.offsetLeft,
      behavior: 'smooth'
    })

    setCurrentIndex(normalizedIndex)
  }

  // Sincroniza o índice quando o usuário arrasta o slide com o dedo no celular
  const handleScroll = () => {
    const carousel = carouselRef.current
    if (!carousel) return

    const slideWidth = carousel.clientWidth
    if (slideWidth === 0) return

    const newIndex = Math.round(carousel.scrollLeft / slideWidth)
    if (
      newIndex !== currentIndex &&
      newIndex >= 0 &&
      newIndex < publicacoes.length
    ) {
      setCurrentIndex(newIndex)
    }
  }

  return (
    <section
      id='publicacoes'
      className='w-full flex flex-col items-center gap-6 py-12 md:py-16 overflow-hidden'>
      {/* Container do Carrossel com Snap para toque no mobile */}
      {/* Container do Carrossel */}
      <div
        ref={carouselRef}
        onScroll={handleScroll}
        className='flex w-full max-w-[100vw] overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none [&::-webkit-scrollbar]:hidden'>
        {publicacoes.map(item => (
          <div
            key={item.id}
            id={`slide${item.id}`}
            className='w-full max-w-[100vw] shrink-0 snap-center px-6 sm:px-10 box-border'>
            <div className='w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12'>
              {/* Imagem */}
              <div className='w-full md:w-5/12 flex justify-center shrink-0'>
                <div className='relative w-44 sm:w-56 md:w-full md:max-w-95 aspect-3/4'>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    unoptimized={item.src.startsWith('http')}
                    sizes='(max-width: 640px) 176px, (max-width: 768px) 224px, 380px'
                    className='object-contain rounded-2xl'
                  />
                </div>
              </div>

              {/* Conteúdo de Texto */}
              <div className='w-full min-w-0 max-w-full md:w-7/12 flex flex-col items-start text-left gap-3 md:gap-4'>
                <span className='badge badge-outline badge-sm sm:badge-md md:badge-lg whitespace-normal h-auto py-1'>
                  {item.category}
                </span>

                <h3 className='w-full max-w-full text-lg sm:text-2xl md:text-3xl font-bold leading-snug whitespace-normal wrap-break-word'>
                  {item.title}
                </h3>

                {/* Força quebra de linha e trava na largura disponível */}
                <p className='w-full max-w-full text-sm sm:text-base md:text-lg leading-relaxed opacity-85 whitespace-normal wrap-break-word'>
                  {item.description}
                </p>

                <p className='w-full max-w-full text-xs sm:text-sm font-semibold opacity-70 whitespace-normal wrap-break-word'>
                  {item.institution}
                </p>

                {item.link && (
                  <a
                    href={item.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn btn-primary btn-sm md:btn-md mt-1'>
                    Acessar publicação
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controles fixos fora do slide (não pulam de altura no mobile) */}
      <div className='flex flex-col items-center gap-4 mt-2 px-4'>
        <div className='flex items-center gap-4'>
          <button
            type='button'
            onClick={() => goToSlide(currentIndex - 1)}
            className='btn btn-circle btn-sm md:btn-md btn-outline bg-amber-50 hover:bg-amber-500 hover:border-amber-500 hover:text-white'
            aria-label='Publicação anterior'>
            ❮
          </button>

          <span className='text-sm font-medium tabular-nums opacity-75 min-w-11.25 text-center'>
            {currentIndex + 1} / {publicacoes.length}
          </span>

          <button
            type='button'
            onClick={() => goToSlide(currentIndex + 1)}
            className='btn btn-circle btn-sm md:btn-md btn-outline bg-amber-50 hover:bg-amber-500 hover:border-amber-500 hover:text-white'
            aria-label='Próxima publicação'>
            ❯
          </button>
        </div>

        {/* Indicadores (bolinhas) */}
        <div className='flex flex-wrap justify-center gap-2'>
          {publicacoes.map((item, index) => (
            <button
              key={`indicator-${item.id}`}
              type='button'
              onClick={() => goToSlide(index)}
              aria-label={`Ir para publicação ${index + 1}`}
              aria-current={currentIndex === index ? 'true' : undefined}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === index
                  ? 'w-6 bg-amber-500'
                  : 'w-2.5 bg-gray-300 hover:bg-amber-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
