import BotonTramite from './BotonTramite'

export default function InicioPantalla({ tramites, onSeleccionar }) {
  return (
    <div className="contenedor">
      <h1>¿En qué te ayudamos?</h1>
      {tramites.map(t => (
        <BotonTramite key={t.id} nombre={t.nombre} onClick={() => onSeleccionar(t.id)} />
      ))}
    </div>
  )
}
