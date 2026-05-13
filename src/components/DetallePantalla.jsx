import PasoLista from './PasoLista'
import BotonVolver from './BotonVolver'

export default function DetallePantalla({ tramite, onVolver }) {
  return (
    <div className="contenedor">
      <h1>{tramite.nombre}</h1>
      <PasoLista pasos={tramite.pasos} />
      <BotonVolver onClick={onVolver} />
    </div>
  )
}
