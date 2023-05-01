import { Quote, Loading } from "./"
import { useCounter, useFetch } from "../hooks"

export const MultipleCustomHooks = () => {

   const { counter, increment } = useCounter(1)
   const { data, isLoading, error } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)

   return (
      <>
         <h1>Breaking Bad Quotes</h1>
         <hr />

         {
            isLoading 
               ? <Loading/>
               : <Quote data ={ data }/>
         }

         <button 
            className="btn btn-primary"
            onClick = {() => increment(1)}
            disabled = { isLoading }
         >
            Next Quote
         </button>
      </>
    )
}
