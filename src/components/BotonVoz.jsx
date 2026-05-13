export default function BotonVoz({ estaHablando, onClick }) {
  return (
    <button
      type="button"
      className="boton-voz"
      onClick={onClick}
      aria-label={estaHablando ? 'Detener lectura' : 'Leer en voz alta'}
      aria-live="polite"
    >
      {estaHablando ? '⏹' : '🔊'}
    </button>
  )
}
