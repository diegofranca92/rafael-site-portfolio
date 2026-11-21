'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

type Testimonial = {
  id: string
  name: string
  role: string
  text: string
  linkedin?: string
  image?: string
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Cecília Melo',
    role: 'Coordenadora de Responsabilidade Social e DEI na B. Braun Group',
    linkedin: 'https://www.linkedin.com/in/maria-cec%C3%ADlia-melo-4297473b/',
    image: '/assets/depoimentos/maria-cecilia.jpeg',
    text: `Rafael Silva é um profissional extremamente didático, inteligente e profundo no conhecimento sobre Diversidade, Equidade e Inclusão. É daquelas pessoas que conseguem prender a atenção e nos fazer querer ouvir cada vez mais sobre o tema.

Em nossa parceria, ele tem contribuído de forma muito significativa em rodas de conversa, palestras e debates na B. Braun, trazendo reflexões, cases e situações do cotidiano que nos ajudam a ampliar o olhar e transformar conceitos em práticas. Sua capacidade de conduzir diálogos, provocar reflexões e estimular perguntas e discussões torna cada encontro uma experiência muito rica.`
  },
  {
    id: '2',
    name: 'Beatriz Santa Rita',
    role: 'CEO e fundadora da Diverse Soluções',
    linkedin: 'https://www.linkedin.com/in/beatrizdiversidadeinclusao/',
    image: '/assets/depoimentos/beatriz-santa.jpeg',
    text: `Rafael é uma referência quando o tema é educação antirracista no Brasil. Seu conhecimento em história do Brasil e sua abordagem didática instigam colaboradores e lideranças a se engajar no processo de ampliar ou iniciar o seu letramento racial. Gosto muito de trabalhar com ele como parceiro dos treinamentos da Diverse!`
  },
  {
    id: '3',
    name: 'Leonardo Knittel',
    role: 'Especialista em cultura, pertencimento e bem-estar na Haleon',
    linkedin: 'https://www.linkedin.com/in/leonardoknittel/',
    image: '/assets/depoimentos/leonardo-knittel.jpeg',
    text: `Rafael conduziu com maestria um ciclo de letramento racial na empresa em que coordeno as atividades de inclusão. Sua oratória é clara e consistente, além de sempre trazer conhecimento adicional ao conteúdo pré-programado, fazendo com que questionamentos se transformem em novas pílulas de conhecimento. Tem excelente postura profissional e pessoal. Recomendo fortemente.`
  },
  {
    id: '4',
    name: 'Danielle Santos Barbosa',
    role: 'Diretora do SESI MG',
    linkedin: 'https://www.linkedin.com/in/danielle-santos-barbosa-795014175/',
    image: '/assets/depoimentos/danielle-santos.jpeg',
    text: `Conheci Rafael Silva pelo LinkedIn e, diante da necessidade de abordar o racismo de forma responsável no ambiente escolar, convidei-o para uma formação com mais de 100 profissionais da nossa escola.

A experiência foi extremamente significativa. Rafael alia sólida formação acadêmica a uma excelente capacidade de comunicação, conduzindo temas complexos com profundidade, didática, leveza e abertura ao diálogo.

O retorno da equipe foi muito positivo, especialmente pela qualidade do conteúdo e pelo espaço de troca e reflexão proporcionado. Fica nosso agradecimento pela parceria e o desejo de contar novamente com Rafael em futuras oportunidades de aprendizagem e formação.`
  },
  {
    id: '5',
    name: 'Mércia Falcini',
    role: 'Diretora Executiva da Consultoria Saberes e Secretária Adjunta de Educação de Jundiaí – SP',
    linkedin: 'https://www.linkedin.com/in/m%C3%A9rcia-falcini-332905173/',
    image: '/assets/depoimentos/mercia-falcini.jpeg',
    text: `Tenho grande admiração pelo trabalho do Rafael, que alia conhecimento e compromisso com a educação antirracista. Sua habilidade para abordar as relações étnico-raciais com professores, de forma sensível e potente, é um de seus grandes diferenciais.`
  },
  {
    id: '6',
    name: 'Adriana Hassin',
    role: 'Diretora de Pessoas e Cultura do Raiz Educação',
    linkedin: 'https://www.linkedin.com/in/adriana-hassin-653b325a/',
    image: '/assets/depoimentos/adriana-hassin.jpeg',
    text: `Rafael alia uma escuta atenta e respeitosa dos diferentes pontos de vista à capacidade de se posicionar e transformar cada oportunidade em espaço de reflexão, educação e orientação. Em seu trabalho, demonstra compreender que, no ambiente escolar, a pauta antirracista exige letramento, consistência e investimento não apenas de estudantes, mas também dos profissionais da educação, das famílias e de toda a comunidade. Compreende, igualmente, que esses processos precisam ser conduzidos com diligência, cuidado e intencionalidade educativa, sem deixar de reconhecer que o compromisso com a pauta é inegociável.`
  }
]

export function Testimonials() {
  const carouselRef = useRef<HTMLDivElement>(null)

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const goToSlide = (index: number) => {
    const carousel = carouselRef.current

    if (!carousel) {
      return
    }

    const nextIndex = (index + testimonials.length) % testimonials.length

    carousel.scrollTo({
      left: nextIndex * carousel.clientWidth,
      behavior: 'smooth'
    })

    setCurrentIndex(nextIndex)
  }

  const handleScroll = () => {
    const carousel = carouselRef.current

    if (!carousel) {
      return
    }

    const index = Math.round(carousel.scrollLeft / carousel.clientWidth)

    setCurrentIndex(Math.min(index, testimonials.length - 1))
  }

  useEffect(() => {
    if (isPaused || testimonials.length <= 1) {
      return
    }

    const interval = window.setInterval(() => {
      setCurrentIndex(current => {
        const nextIndex = (current + 1) % testimonials.length

        const carousel = carouselRef.current

        if (carousel) {
          carousel.scrollTo({
            left: nextIndex * carousel.clientWidth,
            behavior: 'smooth'
          })
        }

        return nextIndex
      })
    }, 15000)

    return () => window.clearInterval(interval)
  }, [isPaused])

  return (
    <section
      id='depoimentos'
      className='w-full flex flex-col items-center gap-8 px-4 md:px-8 py-20'>
      {/* Cabeçalho */}
      <div className='text-center max-w-3xl'>
        <span className='text-sm font-semibold uppercase tracking-widest text-blue-700'>
          Reconhecimento
        </span>

        <h2 className='text-3xl md:text-4xl font-bold mt-3'>
          O que dizem sobre meu trabalho
        </h2>

        <p className='text-gray-500 mt-4'>
          Experiências e percepções de pessoas que já caminharam comigo em
          projetos, formações e iniciativas de transformação.
        </p>
      </div>

      {/* Carrossel */}
      <div
        className='w-full max-w-5xl'
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={event => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setIsPaused(false)
          }
        }}>
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className='carousel w-full scroll-smooth snap-x snap-mandatory rounded-3xl scrollbar-none [&::-webkit-scrollbar]:hidden'>
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className='carousel-item w-full shrink-0 snap-center'>
              <article className='w-full min-h-full bg-white border border-gray-200 rounded-3xl shadow-sm p-6 md:p-12 flex flex-col'>
                {/* Aspas */}
                <div
                  aria-hidden='true'
                  className='text-6xl md:text-7xl leading-none font-serif text-blue-700'>
                  “
                </div>

                {/* Texto */}
                <p className='text-gray-700 text-base md:text-lg leading-relaxed whitespace-pre-line mt-4'>
                  {testimonial.text}
                </p>

                {/* Autor */}
                <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-5 border-t border-gray-100 pt-6 mt-8'>
                  <div className='flex items-center gap-4 min-w-0'>
                    {/* Foto ou ícone */}
                    {testimonial.image ? (
                      <Image
                        src={testimonial.image}
                        alt={`Foto de ${testimonial.name}`}
                        width={64}
                        height={64}
                        unoptimized
                        className='w-16 h-16 rounded-full object-cover shrink-0'
                      />
                    ) : (
                      <div className='w-16 h-16 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center shrink-0'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='1.5'
                          className='w-8 h-8'
                          aria-hidden='true'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M20 21a8 8 0 0 0-16 0'
                          />
                          <circle cx='12' cy='8' r='4' />
                        </svg>
                      </div>
                    )}

                    <div className='min-w-0'>
                      <h3 className='font-bold text-gray-900 text-lg'>
                        {testimonial.name}
                      </h3>

                      <p className='text-sm text-gray-500 mt-1'>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {testimonial.linkedin && (
                    <a
                      href={testimonial.linkedin}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='btn btn-outline btn-sm border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white shrink-0'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='w-4 h-4'
                        aria-hidden='true'>
                        <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM3.555 20.452h3.564V9H3.555v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                      </svg>
                      Ver perfil
                    </a>
                  )}
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* Navegação */}
        <div className='flex flex-col sm:flex-row items-center justify-between gap-5 mt-8'>
          <div className='flex items-center gap-3'>
            <button
              type='button'
              onClick={() => goToSlide(currentIndex - 1)}
              className='btn btn-circle btn-sm md:btn-md btn-outline bg-amber-50 hover:bg-amber-500 hover:border-amber-500 hover:text-white'
              aria-label='Depoimento anterior'>
              ❮
            </button>

            <button
              type='button'
              onClick={() => goToSlide(currentIndex + 1)}
              className='btn btn-circle btn-sm md:btn-md btn-outline bg-amber-50 hover:bg-amber-500 hover:border-amber-500 hover:text-white'
              aria-label='Próximo depoimento'>
              ❯
            </button>
          </div>

          {/* Indicadores */}
          <div className='flex items-center justify-center gap-2'>
            {testimonials.map((testimonial, index) => (
              <button
                key={`indicator-${testimonial.id}`}
                type='button'
                onClick={() => goToSlide(index)}
                aria-label={`Ir para o depoimento ${index + 1}`}
                aria-current={currentIndex === index ? 'true' : undefined}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'w-8 bg-blue-700'
                    : 'w-2 bg-gray-300 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          <span className='text-sm text-gray-500 tabular-nums'>
            {String(currentIndex + 1).padStart(2, '0')} /{' '}
            {String(testimonials.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  )
}
