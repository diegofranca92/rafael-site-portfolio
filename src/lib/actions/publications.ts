'use server'

import { auth } from '@/src/auth'
import { db } from '@/src/lib/firebase/admin'
import type { Publication, PublicationInput } from '@/src/types/publication'

import { FieldValue, Timestamp } from 'firebase-admin/firestore'

import { revalidatePath } from 'next/cache'

const COLLECTION = 'publicacoes'
const ADMIN_PATH = '/admin/dashboard/publicacoes'

async function checkAdmin() {
  const session = await auth()

  const adminEmail = process.env.ADMIN_EMAIL

  if (
    !session?.user?.email ||
    !adminEmail ||
    session.user.email.toLowerCase() !== adminEmail.toLowerCase()
  ) {
    throw new Error('Não autorizado.')
  }
}

function validatePublication(data: PublicationInput) {
  if (!data || typeof data !== 'object') {
    throw new Error('Dados inválidos.')
  }

  if (!data.title?.trim()) throw new Error('O título é obrigatório.')
  if (!data.description?.trim()) throw new Error('A descrição é obrigatória.')
  if (!data.category?.trim()) throw new Error('A categoria é obrigatória.')
  if (!data.institution?.trim()) throw new Error('A instituição é obrigatória.')
  if (!data.image?.trim()) throw new Error('A imagem é obrigatória.')
  if (!data.alt?.trim()) throw new Error('O texto alternativo é obrigatório.')

  if (!/^https?:\/\/.+/i.test(data.image)) {
    throw new Error('A imagem deve possuir uma URL válida.')
  }

  if (data.link && !/^https?:\/\/.+/i.test(data.link)) {
    throw new Error('O link deve possuir uma URL válida.')
  }

  if (!Number.isFinite(Number(data.order)) || Number(data.order) < 0) {
    throw new Error('A ordem deve ser um número igual ou maior que zero.')
  }
}

function normalizePublication(data: PublicationInput) {
  return {
    title: data.title.trim(),
    description: data.description.trim(),
    category: data.category.trim(),
    institution: data.institution.trim(),
    image: data.image.trim(),
    alt: data.alt.trim(),
    link: data.link?.trim() || '',
    order: Number(data.order),
    published: Boolean(data.published)
  }
}

function toISO(value: unknown): string | undefined {
  if (value instanceof Timestamp) {
    return value.toDate().toISOString()
  }

  return undefined
}

// LISTAR
export async function getPublications(): Promise<Publication[]> {
  await checkAdmin()

  const snapshot = await db.collection(COLLECTION).get()

  return snapshot.docs
    .map(doc => {
      const data = doc.data()

      return {
        id: doc.id,
        ...data,
        createdAt: toISO(data.createdAt),
        updatedAt: toISO(data.updatedAt)
      } as Publication
    })
    .sort((a, b) => a.order - b.order)
}

// CRIAR
export async function createPublication(data: PublicationInput) {
  await checkAdmin()
  validatePublication(data)

  const docRef = await db.collection(COLLECTION).add({
    ...normalizePublication(data),
    createdAt: FieldValue.serverTimestamp(),
    updatedAt: FieldValue.serverTimestamp()
  })

  revalidatePath(ADMIN_PATH)
  revalidatePath('/')

  return { success: true, id: docRef.id }
}

// EDITAR
export async function updatePublication(id: string, data: PublicationInput) {
  await checkAdmin()
  validatePublication(data)

  if (!id?.trim()) throw new Error('ID inválido.')

  const docRef = db.collection(COLLECTION).doc(id)
  const doc = await docRef.get()

  if (!doc.exists) throw new Error('Publicação não encontrada.')

  await docRef.update({
    ...normalizePublication(data),
    updatedAt: FieldValue.serverTimestamp()
  })

  revalidatePath(ADMIN_PATH)
  revalidatePath('/')

  return { success: true }
}

// EXCLUIR
export async function deletePublication(id: string) {
  await checkAdmin()

  if (!id?.trim()) throw new Error('ID inválido.')

  const docRef = db.collection(COLLECTION).doc(id)
  const doc = await docRef.get()

  if (!doc.exists) throw new Error('Publicação não encontrada.')

  await docRef.delete()

  revalidatePath(ADMIN_PATH)
  revalidatePath('/')

  return { success: true }
}

// PUBLICAR / DESPUBLICAR
export async function togglePublicationStatus(id: string, published: boolean) {
  await checkAdmin()

  if (!id?.trim()) throw new Error('ID inválido.')

  const docRef = db.collection(COLLECTION).doc(id)
  const doc = await docRef.get()

  if (!doc.exists) throw new Error('Publicação não encontrada.')

  await docRef.update({
    published: Boolean(published),
    updatedAt: FieldValue.serverTimestamp()
  })

  revalidatePath(ADMIN_PATH)
  revalidatePath('/')

  return { success: true }
}
