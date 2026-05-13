export default function PasoItem({ numero, texto, retraso = 0 }) {
  return (
    <li style={{ animationDelay: `${retraso * 0.12}s` }}>
      <span className="paso-numero">Paso {numero}</span>
      <span className="paso-texto">{texto}</span>
    </li>
  )
}
