import { auth, signOut } from '@/src/auth'
import Link from 'next/link'
import { redirect } from 'next/navigation'

const sections = [
  {
    title: 'Cursos',
    description: 'Cadastre e gerencie os cursos disponíveis no site.',
    icon: '📚',
    href: '#cursos'
  },
  {
    title: 'Publicações',
    description: 'Gerencie artigos, imagens e publicações.',
    icon: '📰',
    href: '#publicacoes'
  },
  {
    title: 'Depoimentos',
    description: 'Adicione e organize os depoimentos recebidos.',
    icon: '💬',
    href: '#depoimentos'
  }
]

export default async function DashboardPage() {
  const session = await auth()

  if (!session?.user) {
    redirect('/admin')
  }

  return (
    <main className='min-h-dvh w-full bg-gray-100 px-4 py-10 md:px-8'>
      <div className='max-w-7xl mx-auto'>
        <header className='flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10'>
          <div>
            <p className='text-sm text-blue-700 font-semibold uppercase tracking-wider'>
              Painel administrativo
            </p>

            <h1 className='text-3xl md:text-4xl font-bold text-gray-900 mt-2'>
              Olá, {session.user.name || 'Administrador'}!
            </h1>

            <p className='text-gray-500 mt-2'>
              Gerencie os conteúdos do site Rafael Silva.
            </p>
          </div>

          <form
            action={async () => {
              'use server'
              await signOut({ redirectTo: '/admin' })
            }}>
            <button
              type='submit'
              className='btn btn-outline border-gray-400 text-gray-700'>
              Sair do painel
            </button>
          </form>
        </header>

        <section className='flex flex-col gap-4'>
          <h2 className='text-xl font-bold text-gray-800'>
            Gerenciamento de conteúdo
          </h2>

          <div className='flex flex-col md:flex-row flex-wrap gap-5'>
            {sections.map(section => (
              <Link
                key={section.title}
                href={section.href}
                className='flex-1 min-w-0 md:min-w-[250px] bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all'>
                <span className='text-4xl'>{section.icon}</span>

                <h3 className='text-xl font-bold text-gray-900 mt-5'>
                  {section.title}
                </h3>

                <p className='text-gray-500 mt-2'>{section.description}</p>

                <span className='inline-block text-blue-700 font-semibold mt-6'>
                  Gerenciar →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className='mt-12 rounded-2xl bg-white border border-gray-200 p-6'>
          <h2 className='text-xl font-bold text-gray-900'>Próximos passos</h2>

          <p className='text-gray-600 mt-2'>
            O acesso administrativo já está configurado. O próximo passo é
            conectar os formulários de cursos, publicações e depoimentos a um
            banco de dados para salvar e atualizar os conteúdos do site.
          </p>
        </section>
      </div>
    </main>
  )
}
