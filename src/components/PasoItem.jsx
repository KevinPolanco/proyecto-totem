export default function PasoItem({ numero, texto }) {
  return (
    <li>
      <span className="paso-numero">Paso {numero}</span>
      <span className="paso-texto">{texto}</span>
    </li>
  )
}
