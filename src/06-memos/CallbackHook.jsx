import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

function CallbackHook() {

   const [counter, setCounter] = useState(20)

   const incrementFather = useCallback(
     (value) => {
      setCounter((count) => count + value);
     },
     [],
   )
   
   
  return (
    <>
      <hr/>
      <h1>use Callback Hook: {counter} </h1>
      <hr/>
      <ShowIncrement increment = {incrementFather } />
    </>
  )
}

export default CallbackHook