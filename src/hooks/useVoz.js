import { useState, useCallback, useRef } from 'react'

export function useVoz() {
  const [estaHablando, setEstaHablando] = useState(false)
  const utteranceRef = useRef(null)

  const leer = useCallback((texto) => {
    if (!texto) return

    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(texto)
    utterance.lang = 'es-CL'
    utterance.rate = 0.9

    utterance.onstart = () => setEstaHablando(true)
    utterance.onend = () => setEstaHablando(false)
    utterance.onerror = () => setEstaHablando(false)

    utteranceRef.current = utterance
    window.speechSynthesis.speak(utterance)
  }, [])

  const detener = useCallback(() => {
    window.speechSynthesis.cancel()
    setEstaHablando(false)
  }, [])

  return { leer, detener, estaHablando }
}
