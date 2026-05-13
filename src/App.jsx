import { useNavegacion } from './hooks/useNavegacion'
import { tramites } from './data/tramites'
import InicioPantalla from './components/InicioPantalla'
import DetallePantalla from './components/DetallePantalla'
import './App.css'

function App() {
  const { tramite, tramiteSeleccionado, mostrarDetalle, volverInicio } = useNavegacion()

  // Si hay un trámite seleccionado, mostrar pantalla de detalle
  if (tramiteSeleccionado && tramite) {
    return <DetallePantalla tramite={tramite} onVolver={volverInicio} />
  }

  return <InicioPantalla tramites={tramites} onSeleccionar={mostrarDetalle} />
}

export default App
