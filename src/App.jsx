import { useNavegacion } from './hooks/useNavegacion'
import { tramites } from './data/tramites'
import BotonTramite from './components/BotonTramite'
import './App.css'

function App() {
  const { tramite, tramiteSeleccionado, mostrarDetalle, volverInicio } = useNavegacion()

  // Si hay un trámite seleccionado, mostrar pantalla de detalle
  if (tramiteSeleccionado && tramite) {
    return (
      <div className="contenedor">
        <h1>{tramite.nombre}</h1>
        <ul className="lista-pasos">
          {tramite.pasos.map((paso, index) => (
            <li key={index}>
              <span className="paso-numero">Paso {index + 1}</span>
              <span className="paso-texto">{paso}</span>
            </li>
          ))}
        </ul>
        <button className="boton-volver" onClick={volverInicio}>Volver</button>
      </div>
    )
  }

  // Sino, mostrar pantalla inicial
  return (
    <div className="contenedor">
      <h1>¿En qué te ayudamos?</h1>
      {tramites.map(t => (
        <BotonTramite key={t.id} nombre={t.nombre} onClick={() => mostrarDetalle(t.id)} />
      ))}
    </div>
  )
}

export default App
