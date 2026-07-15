export function Timeline() {
  const timelineStyle = {
    position: 'relative',
    margin: '0 auto',
    padding: '20px 0',
    width: '100%',
    maxWidth: '760px',
  } as const

  const lineStyle = {
    position: 'absolute',
    left: '24px',
    top: 0,
    bottom: 0,
    width: '4px',
    background: '#d1d5db',
    borderRadius: '9999px',
  } as const

  const itemStyle = {
    position: 'relative',
    margin: '24px 0 24px 72px',
    padding: '18px 20px',
    background: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(15, 23, 42, 0.08)',
  } as const

  const dotStyle = {
    position: 'absolute',
    left: '-48px',
    top: '20px',
    width: '16px',
    height: '16px',
    background: '#111827',
    borderRadius: '50%',
    border: '4px solid #ffffff',
    boxShadow: '0 0 0 4px rgba(17, 24, 39, 0.12)',
  } as const

  const yearStyle = {
    margin: 0,
    fontWeight: 700,
    fontSize: '1rem',
    color: '#111827',
  } as const

  const textStyle = {
    margin: '10px 0 0',
    lineHeight: 1.75,
    whiteSpace: 'pre-wrap',
    color: '#374151',
  } as const

  const entries = [
    { year: '2005', title: 'primeiros passos', text: 'Começo a trabalhar como voluntário no PECEP, pré-vestibular social localizado no Rio de Janeiro. Anos depois, ajudei a co-fundar oficialmente o projeto e hoje ainda sou professor e faço parte do Conselho de Membros.' },
    { year: '2012', title: 'Reconhecimento', text: 'Entre mais de 8.000 jovens, com idades entre 16 e 30 anos, matriculados em uma instituição de ensino superior, fui reconhecido pela Fundação Estudar e Revista Veja como um dos 50 “Jovens Inspiradores” brasileiros.' },
    { year: '2013', title: 'Acelerando a carreira', text: 'Após concluir meu Mestrado em História Social da Cultura pela PUC - Rio, inicio minha trajetória em sala de aula no Colégio Gaylussac, em Niterói, e no SENAC Rio ministrando cursos voltados para guias de turismo e turismólogos.' },
    { year: '2017', title: 'Consolidação', text: 'Início uma trajetória de 8 anos e meio na Our Lady of Mercy School, onde ministrei aulas de História e Geografia para alunos do High School e coordenei nos últimos anos o projeto HSNMUN (High School National Model United Nation) ganhando prêmios por três anos consecutivos.' },
    { year: '2024–2025', title: 'Gerente de relacionamento, equidade e inclusão', text: 'Assumi o cargo de Gerente de relacionamento, equidade e inclusão, cargo criado para processo de promoção de Diversidade, desenvolvimento e formação de colaboradores.' },
    { year: '2020', title: 'Cursos e treinamentos', text: 'Em meio a pandemia, decido transformar em aprendizado coletivo meus conhecimentos de educação das relações étnico-raciais, me aprofundando em estudos e construindo minhas primeiras palestras e cursos de formação.' },
    { year: '2022', title: 'Produção de conteúdo e aprofundamento', text: 'Começo a postar reflexões no LInkedin e mergulho ainda mais em cursos de formação, nacionais e internacionais, voltado para a educação antirracista e sobre a agenda de promoção de Diversidade, Inclusão nas Organizações.' },
    { year: '2024', title: 'Ensino Superior', text: 'Passo a dar aulas no curso de “Diversidade e Inclusão nas organizações” e MBA de “Impacto Social” da PUC - Rio.' },
    { year: '2025', title: 'Direção Escolar e publicações', text: 'Assumo o cargo de Diretor escolar da Cubo Global School, unidade Barra Golf, ao mesmo tempo em que publico a coleção didática, "Entre Mundos – Raízes e Identidades" pela Editora Saber, meu primeiro livro autoral “Biu e o caminho de Sankofa” e textos para o Nexo Jornal, Portal Porvir e TV Cultura.' },
    { year: '2026', title: 'Reconhecimento', text: 'Em um ranking global de educadores, sou eleito a “30ª voz mais influente em Educação” no World’s 200 Top Voices in Education, da Favikon, e sou convidado a integrar a ForbesBLK, comunidade internacional de profissionais negros de relevância e impacto na promoção da equidade racial e dos direitos da comunidade negra.' },
  ]

  return (
    <div style={timelineStyle}>
      <div style={lineStyle} />
      {entries.map((entry) => (
        <div key={`${entry.year}-${entry.title}`} style={itemStyle}>
          <div style={dotStyle} />
          <p style={yearStyle}>{entry.year}: {entry.title}</p>
          <p style={textStyle}>{entry.text}</p>
        </div>
      ))}
    </div>
  )
}