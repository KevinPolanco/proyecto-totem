import BotonTramite from './BotonTramite'

export default function InicioPantalla({ tramites, onSeleccionar, claseFuente = '' }) {
  return (
    <div className={`contenedor ${claseFuente}`.trim()}>
      <h1>¿En qué te ayudamos?</h1>
      {tramites.map(t => (
        <BotonTramite key={t.id} nombre={t.nombre} icono={t.icono} onClick={() => onSeleccionar(t.id)} />
      ))}
    </div>
  )
}
