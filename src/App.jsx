import { useEffect, useMemo } from 'react'
import { useNavegacion } from './hooks/useNavegacion'
import { useFontSize } from './hooks/useFontSize'
import { useVoz } from './hooks/useVoz'
import { tramites } from './data/tramites'
import InicioPantalla from './components/InicioPantalla'
import DetallePantalla from './components/DetallePantalla'
import FontSizeControl from './components/FontSizeControl'
import BotonVoz from './components/BotonVoz'
import './App.css'

function App() {
  const { tramite, tramiteSeleccionado, mostrarDetalle, volverInicio } = useNavegacion()
  const { claseFuente, aumentar, disminuir, reset } = useFontSize()
  const { leer, detener, estaHablando } = useVoz()

  useEffect(() => {
    detener()
  }, [tramiteSeleccionado])

  const textoVoz = useMemo(() => {
    if (tramiteSeleccionado && tramite) {
      const pasosTexto = tramite.pasos.map((p, i) => `Paso ${i + 1}: ${p}`).join('. ')
      return `${tramite.nombre}. ${pasosTexto}`
    }
    const titulos = tramites.map(t => t.nombre).join('. ')
    return `¿En qué te ayudamos? ${titulos}`
  }, [tramite, tramiteSeleccionado])

  function handleVozClick() {
    if (estaHablando) {
      detener()
    } else {
      leer(textoVoz)
    }
  }

  return (
    <div className="app-wrapper">
      <a href="#contenido-principal" className="skip-link">Saltar al contenido principal</a>
      <FontSizeControl onAumentar={aumentar} onDisminuir={disminuir} onReset={reset} />
      <BotonVoz estaHablando={estaHablando} onClick={handleVozClick} />
      <main id="contenido-principal" role="main" aria-label="Contenido principal">
        {tramiteSeleccionado && tramite ? (
          <DetallePantalla tramite={tramite} onVolver={volverInicio} claseFuente={claseFuente} />
        ) : (
          <InicioPantalla tramites={tramites} onSeleccionar={mostrarDetalle} claseFuente={claseFuente} />
        )}
      </main>
    </div>
  )
}

export default App
