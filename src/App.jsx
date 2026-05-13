import { useNavegacion } from './hooks/useNavegacion'
import { tramites } from './data/tramites'
import InicioPantalla from './components/InicioPantalla'
import PasoLista from './components/PasoLista'
import './App.css'

function App() {
  const { tramite, tramiteSeleccionado, mostrarDetalle, volverInicio } = useNavegacion()

  // Si hay un trámite seleccionado, mostrar pantalla de detalle
  if (tramiteSeleccionado && tramite) {
    return (
      <div className="contenedor">
        <h1>{tramite.nombre}</h1>
        <PasoLista pasos={tramite.pasos} />
        <button className="boton-volver" onClick={volverInicio}>Volver</button>
      </div>
    )
  }

  return <InicioPantalla tramites={tramites} onSeleccionar={mostrarDetalle} />
}

export default App
