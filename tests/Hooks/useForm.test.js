import { act, fireEvent, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"

describe('Pruebas en useForm', () => {

   const initialForm ={}

   test('Debe retornar los valores por defecto', () => {
      const {result} = renderHook(() => useForm())
      expect(result.current).toEqual({
         formSate: initialForm,
         onInputChange: expect.any(Function),
         resetForm: expect.any(Function)
      })
   })

   test('Debe cambiar el nombre del formulario', () => {
      const newValue = 'Liz'
      const { result } = renderHook(() => useForm())
      const { onInputChange } = result.current

      act(() =>{
         onInputChange({target: {name: 'name', value: newValue}})
      })

      expect(result.current.name).toBe(newValue)
      expect(result.current.formSate.name).toBe(newValue)
   })

   test('Debe regresar los valores iniciales del formulario', () => {
      const newValue = 'Liz'
      const { result } = renderHook(() => useForm())
      const { onInputChange, resetForm } = result.current
      console.log(result.current)
      act(() =>{
         onInputChange({target: {name: 'name', value: newValue}})
         resetForm()
      })
      
      expect(result.current.name).toBe(undefined)
      expect(result.current.formSate.name).toBe(initialForm.name)
   })
})