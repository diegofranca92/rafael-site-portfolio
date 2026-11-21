'use client'
import { useEffect, useState } from 'react'

export function TypewriterText({
  text,
  speed = 50,
  loopDelay = 10000
}: {
  text: string
  speed?: number
  loopDelay?: number
}) {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    let i = 0
    let typingInterval: any
    let restartTimeout: any

    const startTyping = () => {
      i = 0
      setDisplayedText('')

      typingInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.slice(0, i + 1))
          i++
        } else {
          clearInterval(typingInterval)
          // Aguarda 10 segundos (loopDelay) após terminar de escrever para reiniciar
          restartTimeout = setTimeout(startTyping, loopDelay)
        }
      }, speed)
    }

    startTyping()

    // Limpa os temporizadores se o componente for desmontado
    return () => {
      clearInterval(typingInterval)
      clearTimeout(restartTimeout)
    }
  }, [text, speed, loopDelay])

  return (
    <span>
      {displayedText}
      <span className='inline-block w-1 h-[0.9em] ml-1 align-baseline bg-amber-500 animate-pulse' />
    </span>
  )
}
