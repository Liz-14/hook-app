import { useEffect, useState } from "react"

export const useFetch = (url) => {

   const [state, setState] = useState({
      data: null,
      isLoading: true,
      error: null
   })

   const getFetchRequest = async () => {
      setState({
         ...state,
         isLoading: true
      })

      const resp = await fetch(url)
      const data = await resp.json()

      setState({
         ...state,
         data,
         isLoading: false
      })

      console.log(data)
   }

   useEffect(() => {
      getFetchRequest()
   }, [url])
   
  return {
   data: state.data,
   isLoading: state.isLoading,
   error: state.error
  }
}
