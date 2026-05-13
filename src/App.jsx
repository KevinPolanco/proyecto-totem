import { useState } from 'react'
import './App.css'

// Datos de los trámites (mismo array que en la versión HTML original)
const tramites = [
  {
    id: "tne",
    nombre: "TNE (Tarjeta Nacional Estudiantil)",
    pasos: [
      "Estar matriculado en una institución educacional.",
      "Solicitar la TNE en tu institución o en el sistema correspondiente.",
      "Tomarte la foto (en tu institución o punto habilitado).",
      "Pagar el costo de la tarjeta (si corresponde).",
      "Esperar la notificación de disponibilidad.",
      "Retirar la TNE en el punto indicado."
    ]
  },
  {
    id: "agua",
    nombre: "Subsidio al pago de agua",
    pasos: [
      "Verificar que tu hogar esté inscrito en el Registro Social de Hogares (RSH).",
      "Asegurarte de estar al día con el pago del agua.",
      "Reunir tu boleta de agua más reciente.",
      "Ir a la municipalidad correspondiente a tu domicilio.",
      "Solicitar la postulación al subsidio de agua.",
      "Esperar la evaluación del municipio y el resultado."
    ]
  },
  {
    id: "rsh",
    nombre: "Registro Social de Hogares (RSH)",
    pasos: [
      "Ingresar al sitio web del Registro Social de Hogares o acudir a la municipalidad.",
      "Iniciar sesión con tu Clave Única.",
      "Completar tus datos personales y del hogar.",
      "Ingresar información de ingresos, vivienda y grupo familiar.",
      "Enviar la solicitud.",
      "Esperar la evaluación y clasificación socioeconómica."
    ]
  }
]

function App() {
  // Estado: guarda el id del trámite seleccionado (null = pantalla inicio)
  const [tramiteSeleccionado, setTramiteSeleccionado] = useState(null)

  // Busca el trámite completo en el array según el id
  const tramite = tramites.find(t => t.id === tramiteSeleccionado)

  // Función para mostrar un trámite
  function mostrarDetalle(id) {
    setTramiteSeleccionado(id)
  }

  // Función para volver a la pantalla inicial
  function volverInicio() {
    setTramiteSeleccionado(null)
  }

  // Si hay un trámite seleccionado, mostrar pantalla de detalle
  if (tramiteSeleccionado && tramite) {
    return (
      <div className="contenedor">
        <h1>{tramite.nombre}</h1>
        <ul className="lista-pasos">
          {tramite.pasos.map((paso, index) => (
            <li key={index}>
              <span className="paso-numero">Paso {index + 1}</span>
              <span className="paso-texto">{paso}</span>
            </li>
          ))}
        </ul>
        <button className="boton-volver" onClick={volverInicio}>Volver</button>
      </div>
    )
  }

  // Sino, mostrar pantalla inicial
  return (
    <div className="contenedor">
      <h1>¿En qué te ayudamos?</h1>
      <button className="boton-tramite" onClick={() => mostrarDetalle('tne')}>TNE</button>
      <button className="boton-tramite" onClick={() => mostrarDetalle('agua')}>Subsidio de agua</button>
      <button className="boton-tramite" onClick={() => mostrarDetalle('rsh')}>Registro Social de Hogares</button>
    </div>
  )
}

export default App
