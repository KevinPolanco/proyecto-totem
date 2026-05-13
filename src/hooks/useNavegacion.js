import { useState } from 'react'
import { tramites } from '../data/tramites'

export function useNavegacion() {
  const [tramiteSeleccionado, setTramiteSeleccionado] = useState(null)

  const tramite = tramites.find(t => t.id === tramiteSeleccionado)

  function mostrarDetalle(id) {
    setTramiteSeleccionado(id)
  }

  function volverInicio() {
    setTramiteSeleccionado(null)
  }

  return { tramite, tramiteSeleccionado, mostrarDetalle, volverInicio }
}
