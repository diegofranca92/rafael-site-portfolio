'use client'
import { useEffect, useState } from 'react'

interface TypewriterTextProps {
  text: string
  speed?: number
  loopDelay?: number
  className?: string
}

export function TypewriterText({
  text,
  speed = 50,
  loopDelay = 10000,
  className = ''
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    let i = 0
    let typingInterval: ReturnType<typeof setInterval>
    let restartTimeout: ReturnType<typeof setTimeout>

    const startTyping = () => {
      i = 0
      setDisplayedText('')

      typingInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.slice(0, i + 1))
          i++
        } else {
          clearInterval(typingInterval)
          restartTimeout = setTimeout(startTyping, loopDelay)
        }
      }, speed)
    }

    startTyping()

    return () => {
      clearInterval(typingInterval)
      clearTimeout(restartTimeout)
    }
  }, [text, speed, loopDelay])

  return (
    <span className={`relative inline-block ${className}`}>
      {/* Texto fantasma que reserva a altura exata em qualquer tela sem causar "pulos" */}
      <span className='invisible select-none' aria-hidden='true'>
        {text}
      </span>

      {/* Texto animado sobreposto */}
      <span className='absolute inset-0'>
        {displayedText}
        <span className='inline-block w-[0.07em] min-w-0.5 h-[0.85em] ml-1 align-baseline bg-amber-500 animate-pulse' />
      </span>
    </span>
  )
}
