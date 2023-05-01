import { useState } from "react"

export const CounterApp = () => {

   const [state, setcounter] = useState({
      counter1: 10,
      counter2: 20,
      counter3: 30,
   })

   const {counter1, counter2, counter3} = state
   
  return (
    <>
      <h1>Counter: {counter1} </h1>
      <hr/>
      <h2>Counter: {counter2} </h2>
      <hr/>
      <h3>Counter: {counter3} </h3>
      <hr/>
      <button 
         className="btn btn-primary"
         onClick={
            () => setcounter ( 
               {
                  ...state,
                  counter1: counter1 + 1,
               } )
         }>
         +1
         </button>
      <button 
         className="btn btn-primary"
         onClick={
            () => setcounter ( 
               {
                  ...state,
                  counter2: counter2 - 1,
               } )
         }>
         -1
         </button>
    </>
  )
}
