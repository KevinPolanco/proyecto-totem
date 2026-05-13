import { useState } from 'react'

const NIVELES = [1, 1.25, 1.5]
const STORAGE_KEY = 'totem-font-size'

export function useFontSize() {
  const [indice, setIndice] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    const idx = saved !== null ? Number(saved) : 0
    return idx >= 0 && idx < NIVELES.length ? idx : 0
  })

  function aumentar() {
    setIndice(prev => {
      const next = Math.min(prev + 1, NIVELES.length - 1)
      localStorage.setItem(STORAGE_KEY, String(next))
      return next
    })
  }

  function disminuir() {
    setIndice(prev => {
      const next = Math.max(prev - 1, 0)
      localStorage.setItem(STORAGE_KEY, String(next))
      return next
    })
  }

  function reset() {
    setIndice(0)
    localStorage.setItem(STORAGE_KEY, '0')
  }

  const claseFuente = indice === 0 ? '' : indice === 1 ? 'fuente-large' : 'fuente-xlarge'

  return { claseFuente, aumentar, disminuir, reset }
}
