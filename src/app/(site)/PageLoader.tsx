'use client'

import { useEffect, useState } from 'react'
import { Loading } from '../../components/Loading'

const LOADER_SESSION_KEY = 'rafael-home-loader-shown'

export function PageLoader() {
  const [loading, setLoading] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Verifica se o loader já foi exibido nesta sessão.
    const alreadyShown = sessionStorage.getItem(LOADER_SESSION_KEY)

    if (alreadyShown) {
      return
    }

    // Registra para não exibir novamente nesta sessão.
    sessionStorage.setItem(LOADER_SESSION_KEY, 'true')

    setLoading(true)
    setVisible(true)

    let hideTimer: ReturnType<typeof setTimeout>
    let removeTimer: ReturnType<typeof setTimeout>

    const handleLoad = () => {
      hideTimer = setTimeout(() => {
        setVisible(false)

        removeTimer = setTimeout(() => {
          setLoading(false)
        }, 700)
      }, 5500)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => {
      window.removeEventListener('load', handleLoad)

      clearTimeout(hideTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (!loading) {
    return null
  }

  return (
    <div
      className={`fixed inset-0 z-9999 transition-opacity duration-700 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}>
      <Loading />
    </div>
  )
}
