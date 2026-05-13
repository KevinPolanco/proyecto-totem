export default function FontSizeControl({ onAumentar, onDisminuir, onReset }) {
  return (
    <div className="control-fuente" role="group" aria-label="Control de tamaño de fuente">
      <button onClick={onDisminuir} aria-label="Disminuir tamaño de fuente">A−</button>
      <button onClick={onReset} aria-label="Restablecer tamaño de fuente">A</button>
      <button onClick={onAumentar} aria-label="Aumentar tamaño de fuente">A+</button>
    </div>
  )
}
