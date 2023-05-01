import { act, renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter"

describe('pruebas unitarias en useCounter hook', () => {
   const initialValue = 100
   test('Debe retornar los valores por defecto', () => {
      const {result} = renderHook(() => useCounter())
      const { counter, increment, decrement, reset } = result.current

      expect(counter).toBe(10)
      expect(decrement).toEqual(expect.any(Function)) // <- compara si lo que retorna es una funcion
      expect(increment).toEqual(expect.any(Function))
      expect(reset).toEqual(expect.any(Function)) 
   })

   test(`Debe generar el counter con el valor inicial que se le envíe como argumento: ${initialValue}`, () => {
      const {result} = renderHook(() => useCounter(initialValue))
      const { counter } = result.current

      expect(counter).toBe(initialValue)
   })

   test(`El contador debe incrementar en +1`, () => {
      const {result} = renderHook(() => useCounter())
      const { increment } = result.current
      act(() =>{
         increment()
      })
      expect(result.current.counter).toBe(11)
   })

   test(`El valor inicial: ${initialValue} del counter, debe aumentar en +5`, () => {
      const {result} = renderHook(() => useCounter(initialValue))
      const { increment } = result.current
      act(() =>{
         increment(5)
      })
      expect(result.current.counter).toBe(105)
   })

   test(`El contador debe disminuir en -1`, () => {
      const {result} = renderHook(() => useCounter())
      const { decrement } = result.current
      act(() =>{
         decrement()
      })
      expect(result.current.counter).toBe(9)
   })

   test(`El contador debevolver a tener su valor inicial`, () => {
      const {result} = renderHook(() => useCounter())
      const { reset } = result.current
      act(() =>{
         reset()
      })
      expect(result.current.counter).toBe(10)
   })

})