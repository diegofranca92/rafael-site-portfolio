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
      'Protocolo institucional do Raiz Educação, grupo educacional que conta com 14 marcas, 45 unidades escolares e cerca de 20 mil alunos.',
    category: 'Protocolo institucional',
    institution: 'Raiz Educação',
    src: '/assets/publicacoes/1.png',
    alt: 'Protocolo institucional antirracista do Raiz Educação'
  },
  {
    id: 2,
    title: 'Cartilha de Letramento Racial — Suzano',
    description:
      'Cartilha de letramento racial e combate ao racismo no espaço corporativo da Suzano, em Imperatriz, Maranhão.',
    category: 'Cartilha',
    institution: 'Suzano — Imperatriz/MA',
    src: '/assets/publicacoes/2.png',
    alt: 'Cartilha de letramento racial e combate ao racismo da Suzano'
  },
  {
    id: 3,
    title: 'Coleção Didática — Ed Saber',
    description:
      'Coleção didática voltada para o Ensino Fundamental — Anos Iniciais, desenvolvida para promover o reconhecimento da diversidade e o respeito às diferenças, fortalecendo o pertencimento étnico-racial e a valorização das culturas africanas e indígenas.',
    category: 'Material didático',
    institution: 'Ed Saber',
    src: '/assets/publicacoes/3.png',
    alt: 'Coleção didática Ed Saber sobre diversidade e relações étnico-raciais'
  },
  {
    id: 4,
    title: 'Livro Paradidático',
    description:
      'Livro voltado para crianças do 2º ao 5º ano do Ensino Fundamental, que aborda conceitos da educação das relações étnico-raciais.',
    category: 'Livro paradidático',
    institution: 'Publicação autoral',
    src: '/assets/publicacoes/4.png',
    alt: 'Capa do livro paradidático sobre educação das relações étnico-raciais'
  },
  {
    id: 5,
    title: 'Coluna no Porvir',
    description:
      'Coluna mensal sobre educação das relações étnico-raciais e gestão antirracista.',
    category: 'Artigo / Coluna',
    institution: 'Porvir',
    src: '/assets/publicacoes/5.png',
    alt: 'Publicação de coluna sobre educação antirracista no Porvir'
  },
  {
    id: 6,
    title: 'Artigos de opinião — Nexo Jornal',
    description:
      'Contribuição em artigos de opinião sobre temáticas relacionadas à educação, à docência e às relações étnico-raciais no espaço escolar.',
    category: 'Artigos de opinião',
    institution: 'Nexo Jornal',
    src: 'https://placehold.co/600x800',
    alt: 'Imagem representativa dos artigos de opinião publicados no Nexo Jornal'
  },
  {
    id: 7,
    title: 'Artigo de opinião — TV Cultura',
    description:
      'Artigo de opinião sobre história e memória da população negra no Brasil.',
    category: 'Artigo de opinião',
    institution: 'TV Cultura',
    src: 'https://placehold.co/600x800',
    alt: 'Imagem representativa do artigo de opinião publicado na TV Cultura'
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

  return (
    <section
      id='publicacoes'
      className='w-full flex flex-col items-center gap-8 py-16'>
      <div className='w-full max-w-7xl px-4'>
        <h2 className='text-3xl md:text-4xl font-bold'>Publicações</h2>
      </div>

      <div ref={carouselRef} className='carousel w-full scroll-smooth'>
        {publicacoes.map((item, index) => (
          <div
            key={item.id}
            id={`slide${item.id}`}
            className='carousel-item w-full'>
            <div className='w-full max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12'>
              <div className='w-full md:w-5/12 flex justify-center'>
                <div className='relative w-full max-w-105 aspect-3/4'>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    unoptimized={item.src.startsWith('http')}
                    sizes='(max-width: 768px) 90vw, 420px'
                    className='object-contain rounded-2xl'
                  />
                </div>
              </div>

              <div className='w-full md:w-7/12 flex flex-col items-start gap-4'>
                <span className='badge badge-outline badge-lg'>
                  {item.category}
                </span>

                <h3 className='text-2xl md:text-3xl font-bold'>{item.title}</h3>

                <p className='text-base md:text-lg leading-relaxed opacity-80'>
                  {item.description}
                </p>

                <p className='text-sm font-semibold opacity-70'>
                  {item.institution}
                </p>

                {item.link && (
                  <a
                    href={item.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn btn-primary mt-2'>
                    Acessar publicação
                  </a>
                )}

                <div className='flex items-center gap-4 mt-4'>
                  <button
                    type='button'
                    onClick={() => goToSlide(index - 1)}
                    className='btn btn-circle btn-outline bg-amber-50'
                    aria-label='Publicação anterior'>
                    ❮
                  </button>

                  <span className='text-sm tabular-nums opacity-70'>
                    {index + 1} / {publicacoes.length}
                  </span>

                  <button
                    type='button'
                    onClick={() => goToSlide(index + 1)}
                    className='btn btn-circle btn-outline bg-amber-50'
                    aria-label='Próxima publicação'>
                    ❯
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='flex flex-wrap justify-center gap-2 px-4'>
        {publicacoes.map((item, index) => (
          <button
            key={`indicator-${item.id}`}
            type='button'
            onClick={() => goToSlide(index)}
            aria-label={`Ir para publicação ${index + 1}`}
            aria-current={currentIndex === index ? 'true' : undefined}
            className={`btn btn-xs btn-circle ${
              currentIndex === index ? 'btn-primary' : 'btn-outline'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
