'use client'

export function Timeline() {
  const entries = [
    {
      year: '2005',
      title: 'Primeiros passos',
      text: 'Começo a trabalhar como voluntário no PECEP, pré-vestibular social localizado no Rio de Janeiro. Anos depois, ajudei a co-fundar oficialmente o projeto e hoje ainda sou professor e faço parte do Conselho de Membros.',
    },
    {
      year: '2012',
      title: 'Reconhecimento',
      text: 'Entre mais de 8.000 jovens, com idades entre 16 e 30 anos, matriculados em uma instituição de ensino superior, fui reconhecido pela Fundação Estudar e Revista Veja como um dos 50 "Jovens Inspiradores" brasileiros.',
    },
    {
      year: '2013',
      title: 'Acelerando a carreira',
      text: 'Após concluir meu Mestrado em História Social da Cultura pela PUC-Rio, inicio minha trajetória em sala de aula no Colégio Gaylussac, em Niterói, e no SENAC Rio ministrando cursos voltados para guias de turismo e turismólogos.',
    },
    {
      year: '2017',
      title: 'Consolidação',
      text: 'Início uma trajetória de 8 anos e meio na Our Lady of Mercy School, onde ministrei aulas de História e Geografia para alunos do High School e coordenei nos últimos anos o projeto HSNMUN (High School National Model United Nation), ganhando prêmios por três anos consecutivos.',
    },
    {
      year: '2020',
      title: 'Cursos e treinamentos',
      text: 'Em meio à pandemia, decido transformar em aprendizado coletivo meus conhecimentos de educação das relações étnico-raciais, me aprofundando em estudos e construindo minhas primeiras palestras e cursos de formação.',
    },
    {
      year: '2022',
      title: 'Produção de conteúdo e aprofundamento',
      text: 'Começo a postar reflexões no LinkedIn e mergulho ainda mais em cursos de formação nacionais e internacionais voltados para a educação antirracista e para a agenda de promoção de Diversidade e Inclusão nas organizações.',
    },
    {
      year: '2024',
      title: 'Ensino Superior',
      text: 'Passo a dar aulas no curso de Diversidade e Inclusão nas Organizações e no MBA de Impacto Social da PUC-Rio.',
    },
    {
      year: '2024–2025',
      title: 'Gerente de Relacionamento, Equidade e Inclusão',
      text: 'Assumi o cargo de Gerente de Relacionamento, Equidade e Inclusão, criado para fortalecer ações de diversidade, desenvolvimento e formação de colaboradores.',
    },
    {
      year: '2025',
      title: 'Direção Escolar e publicações',
      text: 'Assumo o cargo de Diretor Escolar da Cubo Global School (Barra Golf), publico a coleção didática "Entre Mundos – Raízes e Identidades", meu primeiro livro autoral "Biu e o Caminho de Sankofa" e escrevo para Nexo Jornal, Portal Porvir e TV Cultura.',
    },
    {
      year: '2026',
      title: 'Reconhecimento',
      text: 'Sou eleito a 30ª voz mais influente em Educação no ranking World’s 200 Top Voices in Education (Favikon) e passo a integrar a ForbesBLK.',
    },
  ]

  return (
    <ul className="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact">
      {entries.map((entry, index) => {
        // Verifica se o index é par para alternar os lados
        const isEven = index % 2 === 0;

        return (
          <li key={`${entry.year}-${entry.title}`}>
            {index > 0 && <hr />}

            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-primary">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
            </div>

            {/* Se for par, renderiza no START, se for ímpar deixa vazio */}
            {isEven && (
              <div className="timeline-start timeline-box text-white bg-amber-400">
                <h3 className="font-bold text-lg"><div className="badge badge-dash badge-primary">{entry.year}</div> - {entry.title}</h3>
                <p className="mt-2 text-sm leading-7">{entry.text}</p>
              </div>
            )}

            {/* Se for ímpar, renderiza no END, se for par deixa vazio */}
            {!isEven && (
              <div className="timeline-end timeline-box text-white bg-amber-400">
                <h3 className="font-bold text-lg"><div className="badge badge-dash badge-primary">{entry.year}</div> - {entry.title}</h3>
                <p className="mt-2 text-sm leading-7">{entry.text}</p>
              </div>
            )}

            {index < entries.length - 1 && <hr />}
          </li>
        );
      })}

    </ul>
  )
}