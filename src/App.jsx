import { useNavegacion } from './hooks/useNavegacion'
import { useFontSize } from './hooks/useFontSize'
import { tramites } from './data/tramites'
import InicioPantalla from './components/InicioPantalla'
import DetallePantalla from './components/DetallePantalla'
import FontSizeControl from './components/FontSizeControl'
import './App.css'

function App() {
  const { tramite, tramiteSeleccionado, mostrarDetalle, volverInicio } = useNavegacion()
  const { claseFuente, aumentar, disminuir, reset } = useFontSize()

  return (
    <div className="app-wrapper">
      <FontSizeControl onAumentar={aumentar} onDisminuir={disminuir} onReset={reset} />
      {tramiteSeleccionado && tramite ? (
        <DetallePantalla tramite={tramite} onVolver={volverInicio} claseFuente={claseFuente} />
      ) : (
        <InicioPantalla tramites={tramites} onSeleccionar={mostrarDetalle} claseFuente={claseFuente} />
      )}
    </div>
  )
}

export default App
