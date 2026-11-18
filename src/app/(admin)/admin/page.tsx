'use client'

import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { FormEvent, useState } from 'react'

export default function AdminPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (isLoading) return

    setError('')
    setIsLoading(true)

    try {
      const result = await signIn('credentials', {
        email: email.trim(),
        password,
        redirect: false,
        redirectTo: '/admin/dashboard'
      })

      if (result?.error) {
        setError('E-mail ou senha inválidos.')
        setIsLoading(false)
        return
      }

      window.location.assign('/admin/dashboard')
    } catch (error) {
      console.error('Erro durante autenticação:', error)

      setError('Não foi possível realizar o login. Tente novamente.')
      setIsLoading(false)
    }
  }

  return (
    <main className='min-h-dvh w-full flex items-center justify-center bg-[#191919] px-4 py-12'>
      <div className='w-full max-w-md rounded-3xl bg-white p-8 md:p-10 shadow-2xl'>
        {/* Cabeçalho */}
        <div className='flex flex-col items-center text-center mb-8'>
          <Image
            src='/assets/logo.svg'
            alt='Logomarca de Rafael Silva'
            width={600}
            height={40}
            priority
            className='w-full max-w-[280px] h-auto'
          />

          <h1 className='text-2xl font-bold text-gray-900 mt-10'>
            Área administrativa
          </h1>

          <p className='text-gray-500 mt-2'>
            Entre com suas credenciais para gerenciar o site.
          </p>
        </div>

        {/* Formulário */}
        <form
          onSubmit={handleSubmit}
          autoComplete='on'
          className='flex flex-col gap-5'>
          {/* E-mail */}
          <div className='flex flex-col gap-2'>
            <label
              htmlFor='email'
              className='text-sm font-semibold text-gray-700'>
              E-mail
            </label>

            <input
              id='email'
              name='username'
              type='email'
              autoComplete='username'
              inputMode='email'
              autoCapitalize='none'
              spellCheck={false}
              placeholder='seu@email.com'
              required
              disabled={isLoading}
              value={email}
              onChange={event => setEmail(event.target.value)}
              className='input input-bordered w-full bg-white text-gray-900'
            />
          </div>

          {/* Senha */}
          <div className='flex flex-col gap-2'>
            <label
              htmlFor='password'
              className='text-sm font-semibold text-gray-700'>
              Senha
            </label>

            <div className='relative'>
              <input
                id='password'
                name='password'
                type={showPassword ? 'text' : 'password'}
                autoComplete='current-password'
                placeholder='Digite sua senha'
                required
                disabled={isLoading}
                value={password}
                onChange={event => setPassword(event.target.value)}
                className='input input-bordered w-full bg-white text-gray-900 pr-16'
              />

              <button
                type='button'
                onClick={() => setShowPassword(current => !current)}
                disabled={isLoading}
                aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                aria-pressed={showPassword}
                className='cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-500 hover:text-gray-900 disabled:opacity-50'>
                {showPassword ? 'Ocultar' : 'Mostrar'}
              </button>
            </div>
          </div>

          {/* Erro */}
          {error && (
            <div
              role='alert'
              aria-live='polite'
              className='text-sm text-red-600 bg-red-50 border border-red-100 p-3 rounded-lg'>
              {error}
            </div>
          )}

          {/* Botão */}
          <button
            type='submit'
            disabled={isLoading}
            className='btn bg-blue-700 hover:bg-blue-800 text-white border-0 w-full mt-2 disabled:bg-blue-400'>
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

        {/* Rodapé */}
        <p className='text-xs text-center text-gray-400 mt-8'>
          Rafael Silva · Painel administrativo
        </p>
      </div>
    </main>
  )
}
