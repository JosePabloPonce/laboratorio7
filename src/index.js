import React from 'react'
import ReactDOM from 'react-dom'
import Calculadora from './components/Calculadora/calculadora'

document.body.style.margin = '0'
document.body.style.paddding = '0'

const Contenedor = () => {
  const estilo = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(rgb(35, 68, 77) 0%, rgb(48, 129, 132) 61%, rgb(32, 189, 186) 100%)',
  }

  return (
    <div style={estilo}>
      <Calculadora />
    </div>
  )
}
ReactDOM.render(
  <Contenedor />,
  document.getElementById('root'),
)
