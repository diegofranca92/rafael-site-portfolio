'use client'

import { useRef } from 'react'

export function Timeline() {
  // Referência para controlar a abertura/fechamento do modal do DaisyUI
  const modalRef = useRef<HTMLDialogElement>(null)

  const rawEntries = [
    {
      year: '2005',
      title: 'Primeiros passos',
      text: 'Começo a trabalhar como voluntário no PECEP, pré-vestibular social localizado no Rio de Janeiro. Anos depois, ajudei a co-fundar oficialmente o projeto e ainda faço parte do Conselho de Membros.'
    },
    {
      year: '2012',
      title: 'Reconhecimento',
      text: 'Reconhecido pela Fundação Estudar e Revista Veja como um dos 50 “Jovens Inspiradores” brasileiros.'
    },
    {
      year: '2013',
      title: 'Acelerando a carreira',
      text: 'Após concluir meu Mestrado em História Social da Cultura pela PUC - Rio, inicio minha trajetória em sala de aula no Colégio Gaylussac, em Niterói, e no SENAC Rio ministrando cursos voltados para guias de turismo e turismólogos.'
    },
    {
      year: '2017',
      title: 'Consolidação',
      text: 'Início uma trajetória de 8 anos e meio na Our Lady of Mercy School, onde ministrei aulas de Brazilian Social Studies para alunos do High School e coordenei dois anos o projeto HSNMUN (High School National Model United Nation).'
    },
    {
      year: '2020',
      title: 'Cursos e treinamentos',
      text: 'Em meio a pandemia, decido transformar em aprendizado coletivo meus conhecimentos de educação das relações étnico-raciais, me aprofundando em estudos e construindo minhas primeiras palestras e cursos de formação.'
    },
    {
      year: '2024',
      title: 'Gerente, Equidade e Inclusão',
      text: 'Assumo a posição na OLM, cargo voltado para promoção de Diversidade, desenvolvimento, formação de colaboradores e inclusão escolar.'
    },
    {
      year: '2024',
      title: 'Ensino Superior',
      text: 'Passo a dar aulas no curso de “Diversidade e Inclusão nas organizações” e MBA de “Impacto Social” da PUC - Rio.'
    },
    {
      year: '2025',
      title: 'Direção Escolar e publicações',
      text: 'Assumo o cargo de Diretor escolar da Cubo Global School, unidade Barra Golf, ao mesmo tempo em que publico a coleção didática, "Entre Mundos – Raízes e Identidades" pela Editora Saber, meu primeiro livro autoral “Biu e o caminho de Sankofa” e textos para o Nexo Jornal, O Globo e Portal Porvir.'
    },
    {
      year: '2026',
      title: 'Reconhecimento',
      text: 'Eleito a “30ª voz mais influente em Educação” no World’s 200 Top Voices in Education e membro da ForbesBLK, comunidade internacional de profissionais negros de relevância e impacto social.'
    }
  ]

  // Inverte o array para que os registros mais atuais fiquem no topo
  const entries = [...rawEntries].reverse()

  // Apenas os 5 primeiros aparecem diretamente na timeline
  const visibleEntries = entries.slice(0, 5)

  // Usado apenas para verificar se o botão "Mostrar Mais" deve aparecer
  const hiddenEntries = entries.slice(5)

  return (
    <div className='w-full flex flex-col items-center'>
      {/* Timeline principal - Exibe apenas os 5 registros mais recentes */}
      <ul className='timeline timeline-vertical timeline-snap-icon max-md:timeline-compact mt-8 w-full'>
        {visibleEntries.map((entry, index) => {
          const isEven = index % 2 === 0

          return (
            <li
              key={`${entry.year} -${entry.title} `}
              className='text-blue-700'>
              {index > 0 && <hr className='bg-black' />}

              <div className='timeline-middle'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='h-5 w-5'>
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>

              {isEven && (
                <div className='timeline-start timeline-box bg-amber-50 p-6'>
                  <h3 className='font-bold text-lg'>
                    <div className='badge badge-dash'>{entry.year}</div> -{' '}
                    <span className='uppercase text-sm'>{entry.title}</span>
                  </h3>

                  <p className='mt-2 text-sm leading-7 text-black'>
                    {entry.text}
                  </p>
                </div>
              )}

              {!isEven && (
                <div className='timeline-end timeline-box bg-amber-50 p-6'>
                  <h3 className='font-bold text-lg'>
                    <div className='badge badge-dash'>{entry.year}</div> -{' '}
                    <span className='uppercase text-sm'>{entry.title}</span>
                  </h3>

                  <p className='mt-2 text-sm leading-7 text-black'>
                    {entry.text}
                  </p>
                </div>
              )}

              {index < visibleEntries.length - 1 && <hr className='bg-black' />}
            </li>
          )
        })}
      </ul>

      {/* Botão para abrir o histórico completo */}
      {hiddenEntries.length > 0 && (
        <button
          className='group relative overflow-hidden px-6 py-4 border-2 border-amber-500 rounded-full text-sm font-medium text-amber-500 hover:text-white hover:border-amber-600 hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/40 active:translate-y-0 active:scale-95 transition-all duration-300 ease-out mt-8 cursor-pointer inline-flex items-center justify-center gap-2'
          onClick={() => modalRef.current?.showModal()}>
          {/* Fundo animado deslizante */}
          <span className='absolute inset-0 w-0 bg-amber-600 transition-all duration-300 ease-out group-hover:w-full'></span>

          {/* Texto */}
          <span className='relative z-10'>Mostrar Mais</span>

          {/* Ícone SVG de "+" com rotação no hover */}
          <svg
            xmlns='http://w3.org'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2.5'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='relative z-10 w-4 h-4 transition-transform duration-300 ease-out group-hover:rotate-90'>
            <line x1='12' y1='5' x2='12' y2='19' />
            <line x1='5' y1='12' x2='19' y2='12' />
          </svg>
        </button>
      )}

      {/* Modal com TODOS os registros */}
      <dialog ref={modalRef} className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box bg-[#252525] max-w-5xl'>
          <h3 className='font-bold text-2xl mb-6 border-b pb-2'>
            Histórico Completo
          </h3>

          {/* Scroll interno do modal */}
          <div className='max-h-[60vh] overflow-y-auto pr-2'>
            <ul className='timeline timeline-vertical timeline-compact w-full'>
              {entries.map((entry, index) => (
                <li
                  key={`modal - ${entry.year} -${entry.title} `}
                  className='text-blue-700'>
                  {index > 0 && <hr className='bg-gray-300' />}

                  <div className='timeline-middle'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      className='h-5 w-5'>
                      <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l-2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>

                  <div className='timeline-end timeline-box bg-amber-50 p-4 mb-4 w-full'>
                    <h4 className='font-bold text-base'>
                      <div className='badge badge-dash mr-2'>{entry.year}</div>{' '}
                      - <span className='uppercase text-sm'>{entry.title}</span>
                    </h4>

                    <p className='mt-2 text-xs leading-6 text-black'>
                      {entry.text}
                    </p>
                  </div>

                  {index < entries.length - 1 && <hr className='bg-gray-300' />}
                </li>
              ))}
            </ul>
          </div>

          {/* Botão de fechar */}
          <div className='modal-action'>
            <form method='dialog'>
              <button className='btn'>Fechar</button>
            </form>
          </div>
        </div>

        {/* Fecha clicando no fundo do modal */}
        <form method='dialog' className='modal-backdrop'>
          <button>close</button>
        </form>
      </dialog>
    </div>
  )
}
