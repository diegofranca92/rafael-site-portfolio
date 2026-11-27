import 'server-only'

import { cert, getApps, initializeApp } from 'firebase-admin/app'

import { getFirestore } from 'firebase-admin/firestore'

const projectId = process.env.FIREBASE_PROJECT_ID
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL
const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n')

if (!projectId || !clientEmail || !privateKey) {
  throw new Error(
    'Firebase Admin: configure FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL e FIREBASE_PRIVATE_KEY no .env.local'
  )
}

const firebaseAdminApp =
  getApps().find(app => app.name === 'portfolio-admin') ??
  initializeApp(
    {
      credential: cert({
        projectId,
        clientEmail,
        privateKey
      })
    },
    'portfolio-admin'
  )

export const db = getFirestore(firebaseAdminApp)
