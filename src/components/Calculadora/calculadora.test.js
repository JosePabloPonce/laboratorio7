import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import Calculadora from './calculadora'

describe('General App Tests', () => {
  test('Renderiza correctamente.', () => {
    render(<Calculadora />)
  })

  test('Muestra valor Inicial 0', () => {
    const { getByTestId } = render(<Calculadora />)
    expect(getByTestId('display')).toHaveTextContent('0')
  })

  test('Todos los botones funcionan bien y no permite ingresar mas de 9 caracteres', () => {
    const { getByTestId } = render(<Calculadora />)
    fireEvent.click(getByTestId('boton1'))
    fireEvent.click(getByTestId('boton2'))
    fireEvent.click(getByTestId('boton3'))
    fireEvent.click(getByTestId('boton4'))
    fireEvent.click(getByTestId('boton5'))
    fireEvent.click(getByTestId('boton6'))
    fireEvent.click(getByTestId('boton7'))
    fireEvent.click(getByTestId('boton8'))
    fireEvent.click(getByTestId('boton9'))
    fireEvent.click(getByTestId('boton0'))
    expect(getByTestId('display')).toHaveTextContent('123456789')
  })

  test('Prueba de que funcionan las operaciones', () => {
    const { getByTestId } = render(<Calculadora />)
    fireEvent.click(getByTestId('boton1'))
    fireEvent.click(getByTestId('boton+'))
    fireEvent.click(getByTestId('boton1'))
    fireEvent.click(getByTestId('boton='))
    fireEvent.click(getByTestId('boton*'))
    fireEvent.click(getByTestId('boton3'))
    fireEvent.click(getByTestId('boton÷'))
    fireEvent.click(getByTestId('boton2'))
    fireEvent.click(getByTestId('boton%'))
    fireEvent.click(getByTestId('boton3'))
    fireEvent.click(getByTestId('boton='))
    expect(getByTestId('display')).toHaveTextContent('0')
  })

  test('Prueba de que se limpia correctamente y muestra 0 por defecto luego de ingresar un numero', () => {
    const { getByTestId } = render(<Calculadora />)
    fireEvent.click(getByTestId('boton2'))
    fireEvent.click(getByTestId('boton3'))
    fireEvent.click(getByTestId('botonc'))
    expect(getByTestId('display')).toHaveTextContent('0')
  })

  test('Prueba de no permite ingresar mas de 9 digitos en pantalla', () => {
    const { getByTestId } = render(<Calculadora />)
    fireEvent.click(getByTestId('boton9'))
    fireEvent.click(getByTestId('boton9'))
    fireEvent.click(getByTestId('boton9'))
    fireEvent.click(getByTestId('boton9'))
    fireEvent.click(getByTestId('boton9'))
    fireEvent.click(getByTestId('boton9'))
    fireEvent.click(getByTestId('boton9'))
    fireEvent.click(getByTestId('boton9'))
    fireEvent.click(getByTestId('boton9'))
    fireEvent.click(getByTestId('boton9'))
    expect(getByTestId('display')).toHaveTextContent('999999999')
  })

  test('Prueba de que se cambia el signo a negativo tras presionar el boton +/-', () => {
    const { getByTestId } = render(<Calculadora />)
    fireEvent.click(getByTestId('boton9'))
    fireEvent.click(getByTestId('boton+/-'))
    expect(getByTestId('display')).toHaveTextContent('-9')
  })
})
