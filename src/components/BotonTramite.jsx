export default function BotonTramite({ nombre, icono, onClick }) {
  return (
    <button type="button" className="boton-tramite" onClick={onClick}>
      {icono && <span className="boton-icono">{icono}</span>}
      {nombre}
    </button>
  )
}
