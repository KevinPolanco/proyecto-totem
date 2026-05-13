import PasoLista from './PasoLista'
import BotonVolver from './BotonVolver'

export default function DetallePantalla({ tramite, onVolver, claseFuente = '' }) {
  return (
    <div className={`contenedor ${claseFuente}`.trim()}>
      <h1>{tramite.nombre}</h1>
      <PasoLista pasos={tramite.pasos} />
      <BotonVolver onClick={onVolver} />
    </div>
  )
}
