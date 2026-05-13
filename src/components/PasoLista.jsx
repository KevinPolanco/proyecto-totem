import PasoItem from './PasoItem'

export default function PasoLista({ pasos }) {
  return (
    <ul className="lista-pasos">
      {pasos.map((paso, index) => (
        <PasoItem key={index} numero={index + 1} texto={paso} />
      ))}
    </ul>
  )
}
