export default function BotonTramite({ nombre, onClick }) {
  return (
    <button className="boton-tramite" onClick={onClick}>
      {nombre}
    </button>
  )
}
