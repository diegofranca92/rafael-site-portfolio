'use client'

import Image from 'next/image'
import { FormEvent, useState } from 'react'

export default function AdminPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setError('')
    setIsLoading(true)

    try {
      console.log(email, password)

      // A versçao correta ta na branch de admin

      window.location.href = '/admin/dashboard'
    } catch {
      setError('Não foi possível realizar o login. Tente novamente.')
      setIsLoading(false)
    }
  }

  return (
    <main className='min-h-dvh w-full flex items-center justify-center bg-[#191919] px-4 py-12'>
      <div className='w-full max-w-md rounded-3xl bg-white p-8 md:p-10 shadow-2xl'>
        <div className='flex flex-col items-center text-center mb-8'>
          <Image
            src='/assets/logo.svg'
            alt='Logomarca de Rafael Silva'
            width={600}
            height={40}
            priority
            className='w-full max-w-70 h-auto'
          />

          <h1 className='text-2xl font-bold text-gray-900 mt-10'>
            Área administrativa
          </h1>

          <p className='text-gray-500 mt-2'>
            Entre com suas credenciais para gerenciar o site.
          </p>
        </div>

        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
          <div className='flex flex-col gap-2'>
            <label
              htmlFor='email'
              className='text-sm font-semibold text-gray-700'>
              E-mail
            </label>

            <input
              id='email'
              name='email'
              type='email'
              autoComplete='username'
              placeholder='seu@email.com'
              required
              value={email}
              onChange={event => setEmail(event.target.value)}
              className='input input-bordered w-full bg-white text-gray-900'
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label
              htmlFor='password'
              className='text-sm font-semibold text-gray-700'>
              Senha
            </label>

            <input
              id='password'
              name='password'
              type='password'
              autoComplete='current-password'
              placeholder='Digite sua senha'
              required
              value={password}
              onChange={event => setPassword(event.target.value)}
              className='input input-bordered w-full bg-white text-gray-900'
            />
          </div>

          {error && (
            <p
              role='alert'
              className='text-sm text-red-600 bg-red-50 p-3 rounded-lg'>
              {error}
            </p>
          )}

          <button
            type='submit'
            disabled={isLoading}
            className='btn bg-blue-700 hover:bg-blue-800 text-white border-0 w-full mt-2'>
            {isLoading ? (
              <>
                <span className='loading loading-spinner loading-sm' />
                Entrando...
              </>
            ) : (
              'Acessar painel'
            )}
          </button>
        </form>

        <p className='text-xs text-center text-gray-400 mt-8'>
          Rafael Silva · Painel administrativo
        </p>
      </div>
    </main>
  )
}
