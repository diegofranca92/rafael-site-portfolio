import bcrypt from 'bcryptjs'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 8
  },

  pages: {
    signIn: '/admin'
  },

  providers: [
    Credentials({
      id: 'credentials',
      name: 'Administrador',

      credentials: {
        email: {
          label: 'E-mail',
          type: 'email'
        },
        password: {
          label: 'Senha',
          type: 'password'
        }
      },

      async authorize(credentials) {
        const adminEmail = process.env.ADMIN_EMAIL
        const passwordHash = process.env.ADMIN_PASSWORD_HASH

        if (
          !adminEmail ||
          !passwordHash ||
          typeof credentials?.email !== 'string' ||
          typeof credentials?.password !== 'string'
        ) {
          return null
        }

        const submittedEmail = credentials.email.trim().toLowerCase()

        if (submittedEmail !== adminEmail.trim().toLowerCase()) {
          return null
        }

        const passwordIsValid = await bcrypt.compare(
          credentials.password,
          passwordHash
        )

        if (!passwordIsValid) {
          return null
        }

        return {
          id: 'admin',
          name: 'Administrador',
          email: adminEmail
        }
      }
    })
  ],

  callbacks: {
    authorized({ auth, request }) {
      const isAdminDashboard =
        request.nextUrl.pathname.startsWith('/admin/dashboard')

      if (isAdminDashboard) {
        return !!auth?.user
      }

      return true
    }
  }
})
