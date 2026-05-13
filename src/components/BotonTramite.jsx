export default function BotonTramite({ nombre, onClick }) {
  return (
    <button type="button" className="boton-tramite" onClick={onClick}>
      {nombre}
    </button>
  )
}
