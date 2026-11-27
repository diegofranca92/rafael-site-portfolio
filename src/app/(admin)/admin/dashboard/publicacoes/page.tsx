import { auth } from '@/src/auth'
import { redirect } from 'next/navigation'

import { getPublications } from '@/src/lib/actions/publications'
import { PublicationsManager } from '../../components/PublicationsManager'

export default async function PublicationsPage() {
  const session = await auth()

  if (!session?.user?.email) {
    redirect('/admin')
  }

  const adminEmail = process.env.ADMIN_EMAIL

  if (
    !adminEmail ||
    session.user.email.toLowerCase() !== adminEmail.toLowerCase()
  ) {
    redirect('/admin')
  }

  const publications = await getPublications()

  return (
    <main className='w-full min-h-screen p-4 md:p-8'>
      <div className='w-full max-w-7xl mx-auto'>
        <PublicationsManager initialPublications={publications} />
      </div>
    </main>
  )
}
