import React from 'react'
import './calculadora.css'

const Cuerpo = () => {
  const [esactiva, setactiva] = React.useState(false)
  const [numeroalmacenado, setnumero] = React.useState(' ')
  const [operacionelegida, setoperacion] = React.useState()
  const [igualdad, setigualdad] = React.useState()
  const [valorinicial, setvalorinicial] = React.useState('0')

  const changeValue = (valor) => {
    if (esactiva && (igualdad !== '=')) {
      setnumero(valorinicial)
      setvalorinicial(' ')
      setactiva(false)
    }
    if (valorinicial.length < 9) {
      if (valor === '.') {
        if (valorinicial.indexOf('.') === -1) {
          setvalorinicial((oldvalue) => {
            const newvalue = oldvalue + valor
            return newvalue
          })
        }
      } else if (valor === '-') {
        setvalorinicial((oldvalue) => {
          const newvalue = valor + oldvalue
          return newvalue
        })
      } else {
        setvalorinicial((oldvalue) => {
          if (oldvalue === '0') {
            const newvalue = valor
            return newvalue
          }
          const newvalue = oldvalue + valor
          return newvalue
        })
      }
    }
  }

  const operacion = (simbolo) => {
    if (simbolo === '+') {
      if (operacionelegida === 'x') {
        const suma = parseFloat(numeroalmacenado) * parseFloat(valorinicial)
        if ((suma >= 0) && (suma.toString().length <= 9)) {
          setvalorinicial(suma.toString())
          setnumero(suma)
          setactiva(true)
          setoperacion('+')
        } else {
          setvalorinicial('ERROR')
          setnumero(' ')
          setactiva(true)
          setoperacion()
        }
      } else if (operacionelegida === '-') {
        const suma = parseFloat(numeroalmacenado) - parseFloat(valorinicial)
        if ((suma >= 0) && (suma.toString().length <= 9)) {
          setvalorinicial(suma.toString())
          setnumero(suma)
          setactiva(true)
          setoperacion('+')
        } else {
          setvalorinicial('ERROR')
          setnumero(' ')
          setactiva(true)
          setoperacion()
        }
      } else if (operacionelegida === '/') {
        let division = parseFloat(numeroalmacenado) / parseFloat(valorinicial)
        if ((division >= 0)) {
          if (division.toString().indexOf('.') !== -1) {
            division = division.toString().substring(0, division.toString().indexOf('.') + 2)
            setvalorinicial(division)
            setnumero(parseFloat(valorinicial))
            setactiva(true)
            setoperacion('+')
          } else {
            setvalorinicial(division.toString())
            setnumero(parseFloat(valorinicial))
            setactiva(true)
            setoperacion('+')
          }
        } else {
          setvalorinicial('ERROR')
          setnumero(' ')
          setactiva(true)
          setoperacion()
        }
      } else if (operacionelegida === '%') {
        const suma = parseFloat(numeroalmacenado) % parseFloat(valorinicial)
        if ((suma >= 0) && (suma.toString().length <= 9)) {
          setvalorinicial(suma.toString())
          setnumero(suma)
          setactiva(true)
          setoperacion('+')
        } else {
          setvalorinicial('ERROR')
          setnumero(' ')
          setactiva(true)
          setoperacion()
        }
      } else {
        setoperacion('+')
        setigualdad()
        if ((numeroalmacenado !== ' ') && (esactiva === false)) {
          const suma = parseFloat(numeroalmacenado) + parseFloat(valorinicial)
          if ((suma >= 0) && (suma.toString().length <= 9)) {
            setvalorinicial(suma.toString())
            setnumero(suma)
            setactiva(true)
            setoperacion()
          } else {
            setvalorinicial('ERROR')
            setnumero(' ')
            setactiva(true)
            setoperacion()
          }
        } else if (numeroalmacenado === ' ') {
          setactiva(true)
        }
      }
    }
    if (simbolo === '-') {
      if (operacionelegida === 'x') {
        const suma = parseFloat(numeroalmacenado) * parseFloat(valorinicial)
        if ((suma >= 0) && (suma.toString().length <= 9)) {
          setvalorinicial(suma.toString())
          setnumero(suma)
          setactiva(true)
          setoperacion('-')
        } else {
          setvalorinicial('ERROR')
          setnumero(' ')
          setactiva(true)
          setoperacion()
        }
      } else if (operacionelegida === '+') {
        const suma = parseFloat(numeroalmacenado) + parseFloat(valorinicial)
        if ((suma >= 0) && (suma.toString().length <= 9)) {
          setvalorinicial(suma.toString())
          setnumero(suma)
          setactiva(true)
          setoperacion('-')
        } else {
          setvalorinicial('ERROR')
          setnumero(' ')
          setactiva(true)
          setoperacion()
        }
      } else if (operacionelegida === '/') {
        let division = parseFloat(numeroalmacenado) / parseFloat(valorinicial)
        if ((division >= 0)) {
          if (division.toString().indexOf('.') !== -1) {
            division = division.toString().substring(0, division.toString().indexOf('.') + 2)
            setvalorinicial(division)
            setnumero(parseFloat(valorinicial))
            setactiva(true)
            setoperacion('-')
          } else {
            setvalorinicial(division.toString())
            setnumero(parseFloat(valorinicial))
            setactiva(true)
            setoperacion('-')
          }
        } else {
          setvalorinicial('ERROR')
          setnumero(' ')
          setactiva(true)
          setoperacion()
        }
      } else if (operacionelegida === '%') {
        const suma = parseFloat(numeroalmacenado) % parseFloat(valorinicial)
        if ((suma >= 0) && (suma.toString().length <= 9)) {
          setvalorinicial(suma.toString())
          setnumero(suma)
          setactiva(true)
          setoperacion('-')
        } else {
          setvalorinicial('ERROR')
          setnumero(' ')
          setactiva(true)
          setoperacion()
        }
      } else {
        setoperacion('-')
        setigualdad()
        if ((numeroalmacenado !== ' ') && (esactiva === false)) {
          const resta = parseFloat(numeroalmacenado) - parseFloat(valorinicial)
          if ((resta >= 0) && (resta.toString().length <= 9)) {
            setvalorinicial(resta.toString())
            setnumero(resta)
            setactiva(true)
            setoperacion()
          } else {
            setvalorinicial('ERROR')
            setnumero(' ')
            setactiva(true)
            setoperacion()
          }
        } else if (numeroalmacenado === ' ') {
          setactiva(true)
        }
      }
    }
    if (simbolo === 'x') {
      if (operacionelegida === '+') {
        const suma = parseFloat(numeroalmacenado) + parseFloat(valorinicial)
        if ((suma >= 0) && (suma.toString().length <= 9)) {
          setvalorinicial(suma.toString())
          setnumero(suma)
          setactiva(true)
          setoperacion('x')
        } else {
          setvalorinicial('ERROR')
          setnumero(' ')
          setactiva(true)
          setoperacion()
        }
      } else if (operacionelegida === '-') {
        const suma = parseFloat(numeroalmacenado) - parseFloat(valorinicial)
        if ((suma >= 0) && (suma.toString().length <= 9)) {
          setvalorinicial(suma.toString())
          setnumero(suma)
          setactiva(true)
          setoperacion('x')
        } else {
          setvalorinicial('ERROR')
          setnumero(' ')
          setactiva(true)
          setoperacion()
        }
      } else if (operacionelegida === '/') {
        let division = parseFloat(numeroalmacenado) / parseFloat(valorinicial)
        if ((division >= 0)) {
          if (division.toString().indexOf('.') !== -1) {
            division = division.toString().substring(0, division.toString().indexOf('.') + 2)
            setvalorinicial(division)
            setnumero(parseFloat(valorinicial))
            setactiva(true)
            setoperacion('x')
          } else {
            setvalorinicial(division.toString())
            setnumero(parseFloat(valorinicial))
            setactiva(true)
            setoperacion('x')
          }
        } else {
          setvalorinicial('ERROR')
          setnumero(' ')
          setactiva(true)
          setoperacion()
        }
      } else if (operacionelegida === '%') {
        const suma = parseFloat(numeroalmacenado) % parseFloat(valorinicial)
        if ((suma >= 0) && (suma.toString().length <= 9)) {
          setvalorinicial(suma.toString())
          setnumero(suma)
          setactiva(true)
          setoperacion('x')
        } else {
          setvalorinicial('ERROR')
          setnumero(' ')
          setactiva(true)
          setoperacion()
        }
      } else {
        setoperacion('x')
        setigualdad()
        if ((numeroalmacenado !== ' ') && (esactiva === false)) {
          const multiplicacion = parseFloat(numeroalmacenado) * parseFloat(valorinicial)
          if ((multiplicacion >= 0) && (multiplicacion.toString().length <= 9)) {
            setvalorinicial(multiplicacion.toString())
            setnumero(multiplicacion)
            setactiva(true)
            setoperacion('x')
          } else {
            setvalorinicial('ERROR')
            setnumero(' ')
            setactiva(true)
            setoperacion()
          }
        } else if (numeroalmacenado === ' ') {
          setactiva(true)
        }
      }
    }
    if (simbolo === '/') {
      if (operacionelegida === 'x') {
        const suma = parseFloat(numeroalmacenado) * parseFloat(valorinicial)
        if ((suma >= 0) && (suma.toString().length <= 9)) {
          setvalorinicial(suma.toString())
          setnumero(suma)
          setactiva(true)
          setoperacion('/')
        } else {
          setvalorinicial('ERROR')
          setnumero(' ')
          setactiva(true)
          setoperacion()
        }
      } else if (operacionelegida === '-') {
        const suma = parseFloat(numeroalmacenado) - parseFloat(valorinicial)
        if ((suma >= 0) && (suma.toString().length <= 9)) {
          setvalorinicial(suma.toString())
          setnumero(suma)
          setactiva(true)
          setoperacion('/')
        } else {
          setvalorinicial('ERROR')
          setnumero(' ')
          setactiva(true)
          setoperacion()
        }
      } else if (operacionelegida === '%') {
        const suma = parseFloat(numeroalmacenado) % parseFloat(valorinicial)
        if ((suma >= 0) && (suma.toString().length <= 9)) {
          setvalorinicial(suma.toString())
          setnumero(suma)
          setactiva(true)
          setoperacion('/')
        } else {
          setvalorinicial('ERROR')
          setnumero(' ')
          setactiva(true)
          setoperacion()
        }
      } else if (operacionelegida === '+') {
        const suma = parseFloat(numeroalmacenado) + parseFloat(valorinicial)
        if ((suma >= 0) && (suma.toString().length <= 9)) {
          setvalorinicial(suma.toString())
          setnumero(suma)
          setactiva(true)
          setoperacion('/')
        } else {
          setvalorinicial('ERROR')
          setnumero(' ')
          setactiva(true)
          setoperacion()
        }
      } else {
        setoperacion('/')
        setigualdad()
        if ((numeroalmacenado !== ' ') && (esactiva === false)) {
          let division = parseFloat(numeroalmacenado) / parseFloat(valorinicial)
          if ((division >= 0)) {
            if (division.toString().indexOf('.') !== -1) {
              division = division.toString().substring(0, division.toString().indexOf('.') + 2)
              setvalorinicial(division)
              setnumero(parseFloat(valorinicial))
              setactiva(true)
              setoperacion()
            } else {
              setvalorinicial(division.toString())
              setnumero(parseFloat(valorinicial))
              setactiva(true)
              setoperacion()
            }
          } else {
            setvalorinicial('ERROR')
            setnumero(' ')
            setactiva(true)
            setoperacion()
          }
        } else if (numeroalmacenado === ' ') {
          setactiva(true)
        }
      }
    }
    if (simbolo === '%') {
      if (operacionelegida === '*') {
        const suma = parseFloat(numeroalmacenado) * parseFloat(valorinicial)
        if ((suma >= 0) && (suma.toString().length <= 9)) {
          setvalorinicial(suma.toString())
          setnumero(suma)
          setactiva(true)
          setoperacion('%')
        } else {
          setvalorinicial('ERROR')
          setnumero(' ')
          setactiva(true)
          setoperacion()
        }
      } else if (operacionelegida === '-') {
        const suma = parseFloat(numeroalmacenado) - parseFloat(valorinicial)
        if ((suma >= 0) && (suma.toString().length <= 9)) {
          setvalorinicial(suma.toString())
          setnumero(suma)
          setactiva(true)
          setoperacion('%')
        } else {
          setvalorinicial('ERROR')
          setnumero(' ')
          setactiva(true)
          setoperacion()
        }
      } else if (operacionelegida === '/') {
        let division = parseFloat(numeroalmacenado) / parseFloat(valorinicial)
        if ((division >= 0)) {
          if (division.toString().indexOf('.') !== -1) {
            division = division.toString().substring(0, division.toString().indexOf('.') + 2)
            setvalorinicial(division)
            setnumero(parseFloat(valorinicial))
            setactiva(true)
            setoperacion('%')
          } else {
            setvalorinicial(division.toString())
            setnumero(parseFloat(valorinicial))
            setactiva(true)
            setoperacion('%')
          }
        } else {
          setvalorinicial('ERROR')
          setnumero(' ')
          setactiva(true)
          setoperacion()
        }
      } else if (operacionelegida === '+') {
        const suma = parseFloat(numeroalmacenado) + parseFloat(valorinicial)
        if ((suma >= 0) && (suma.toString().length <= 9)) {
          setvalorinicial(suma.toString())
          setnumero(suma)
          setactiva(true)
          setoperacion('%')
        } else {
          setvalorinicial('ERROR')
          setnumero(' ')
          setactiva(true)
          setoperacion()
        }
      } else {
        setoperacion('%')
        setigualdad()
        if ((numeroalmacenado !== ' ') && (esactiva === false)) {
          const modulo = parseFloat(numeroalmacenado) % parseFloat(valorinicial)
          if ((modulo >= 0) && (modulo.toString().length <= 9)) {
            setvalorinicial(modulo.toString())
            setnumero(modulo)
            setactiva(true)
            setoperacion()
          } else {
            setvalorinicial('ERROR')
            setnumero(' ')
            setactiva(true)
            setoperacion()
          }
        } else if (numeroalmacenado === ' ') {
          setactiva(true)
        }
      }
    }
    if (simbolo === '=') {
      if (operacionelegida === '+') {
        const suma = parseFloat(numeroalmacenado) + parseFloat(valorinicial)
        if ((suma >= 0) && (suma.toString().length <= 9)) {
          setvalorinicial(suma.toString())
          setnumero(suma)
          setigualdad('=')
          setoperacion()
          setactiva(true)
        } else {
          setvalorinicial('ERROR')
          setnumero(' ')
          setigualdad('=')
          setoperacion()
          setactiva(true)
        }
      }
      if (operacionelegida === '-') {
        const resta = parseFloat(numeroalmacenado) + parseFloat(valorinicial)
        if ((resta >= 0) && (resta.toString().length <= 9)) {
          setvalorinicial(resta.toString())
          setnumero(resta)
          setigualdad('=')
          setoperacion()
          setactiva(true)
        } else {
          setvalorinicial('ERROR')
          setnumero(' ')
          setigualdad('=')
          setoperacion()
          setactiva(true)
        }
      }
      if (operacionelegida === 'x') {
        const multiplicacion = parseFloat(numeroalmacenado) * parseFloat(valorinicial)
        if ((multiplicacion >= 0) && (multiplicacion.toString().length <= 9)) {
          setvalorinicial(multiplicacion.toString())
          setnumero(multiplicacion)
          setigualdad('=')
          setoperacion()
          setactiva(true)
        } else {
          setvalorinicial('ERROR')
          setnumero(' ')
          setigualdad('=')
          setoperacion()
          setactiva(true)
        }
      }
      if (operacionelegida === '/') {
        let division = parseFloat(numeroalmacenado) / parseFloat(valorinicial)
        if ((division >= 0)) {
          if (division.toString().indexOf('.') !== -1) {
            division = division.toString().substring(0, division.toString().indexOf('.') + 2)
            setvalorinicial(division.toString())
            setnumero(division)
            setigualdad('=')
            setoperacion()
            setactiva(true)
          } else {
            setvalorinicial(division.toString())
            setnumero(division)
            setigualdad('=')
            setoperacion()
            setactiva(true)
          }
        } else {
          setvalorinicial('ERROR')
          setnumero(' ')
          setigualdad('=')
          setoperacion()
          setactiva(true)
        }
      }
      if (operacionelegida === '%') {
        const modulo = parseFloat(numeroalmacenado) % parseFloat(valorinicial)
        if ((modulo >= 0) && (modulo.toString().length <= 9)) {
          setvalorinicial(modulo.toString())
          setnumero(modulo)
          setigualdad('=')
          setoperacion()
          setactiva(true)
        } else {
          setvalorinicial('ERROR')
          setnumero(' ')
          setigualdad('=')
          setoperacion()
          setactiva(true)
        }
      }
    }
  }
  const Limpiar = () => {
    setvalorinicial('0')
    setnumero(' ')
    setoperacion()
    setigualdad()
    setactiva(false)
  }

  return (
    <div className="contenedorgeneral">
      <div className="contenedor">
        <div type="text" className="estiloinput">
          <span className="estilocontenidoinput" data-testid="display">{valorinicial}</span>
        </div>
        <div className="contenedorbotones">
          <input type="button" value="C" data-testid="botonc" className="estilosimbolos" onClick={() => { Limpiar() }} />
          <input type="button" value="+/-" className="estilosimbolos" data-testid="boton+/-" onClick={() => { changeValue('-') }} />
          <input type="button" value="%" className="estilosimbolos" data-testid="boton%" onClick={() => { operacion('%') }} />
          <input type="button" value="÷" className="estilosimbolos" data-testid="boton÷" onClick={() => { operacion('/') }} />
          <input type="button" value="7" className="estilobotones" data-testid="boton7" onClick={() => { changeValue('7') }} />
          <input type="button" value="8" className="estilobotones" data-testid="boton8" onClick={() => { changeValue('8') }} />
          <input type="button" value="9" className="estilobotones" data-testid="boton9" onClick={() => { changeValue('9') }} />
          <input type="button" value="x" className="estilosimbolos" data-testid="boton*" onClick={() => { operacion('x') }} />
          <input type="button" value="4" className="estilobotones" data-testid="boton4" onClick={() => { changeValue('4') }} />
          <input type="button" value="5" className="estilobotones" data-testid="boton5" onClick={() => { changeValue('5') }} />
          <input type="button" value="6" className="estilobotones" data-testid="boton6" onClick={() => { changeValue('6') }} />
          <input type="button" value="-" className="estilosimbolos" data-testid="boton-" onClick={() => { operacion('-') }} />
          <input type="button" value="1" className="estilobotones" data-testid="boton1" onClick={() => { changeValue('1') }} />
          <input type="button" value="2" className="estilobotones" data-testid="boton2" onClick={() => { changeValue('2') }} />
          <input type="button" value="3" className="estilobotones" data-testid="boton3" onClick={() => { changeValue('3') }} />
          <input type="button" value="+" className="estilosimbolos" data-testid="boton+" onClick={() => { operacion('+') }} />
          <input type="button" value="0" className="estilosimbolosredondeadoizquierda" data-testid="boton0" onClick={() => { changeValue('0') }} />
          <input type="button" value="." className="estilobotones" onClick={() => { changeValue('.') }} />
          <input type="button" value="=" className="estilosimbolosredondeadodeerecha" data-testid="boton=" onClick={() => { operacion('=') }} />
        </div>
      </div>
    </div>
  )
}
export default Cuerpo
