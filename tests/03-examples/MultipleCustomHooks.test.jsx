import { render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks"
import { useFetch } from "../../src/hooks/useFetch"

jest.mock("../../src/hooks/useFetch")

describe('Pruebas para <MultipleCustomHooks/>', () => {
   test('Debe mostrar el componente por defecto', () => {
      useFetch.mockReturnValue({
         data: null,
         isLoading: true,
         error: null
      })

      render(<MultipleCustomHooks/>)

      expect( screen.getByText('Loading...'))
      expect( screen.getByText('Breaking Bad Quotes'))
      
      const nextButton = screen.getByRole('button', {name: 'Next Quote'})
      expect( nextButton.disabled).toBe(true)
      //screen.debug()
   })

   test('Debe los quotes', () => {
      useFetch.mockReturnValue({
         data: [
            {
                "quote": "All I can do is wait... for the cancer to come back.",
                "author": "Skyler White"
            }
        ],
         isLoading: false,
         error: null
      })
      render(<MultipleCustomHooks/>)
      screen.debug()

   })
})