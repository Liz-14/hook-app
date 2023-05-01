import { renderHook, waitFor } from "@testing-library/react"
import { useFetch } from "../../src/hooks"

describe('Pruebas del hook useFetch', () => {
   test('Debe regresar el estado inicial', async () => {
      const result = renderHook(() => useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/2`))
      const { data, isLoading, error } = result.result.current
      
      expect(isLoading).toBe(true)
      expect(error).toBe(null)
      expect(data).toBe(null)
   })

   test('Debe regresar data', async () => {
      const {result} = renderHook(() => useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/2`))

      await waitFor (
         () => expect(result.current.data).not.toBe(null)
      )
      console.log('test: ,', result.current.data)

   })
   
})