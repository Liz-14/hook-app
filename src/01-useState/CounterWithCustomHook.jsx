import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter(20)
  return (
    <>
      <h1>Counter with custom hook: { counter } </h1>
      <hr/>

      <button
         className="btn btn-primary"
         onClick = { () => increment(2) }
      >
       +1
      </button>
      <button
         className="btn btn-primary"
         onClick = { decrement } // Pasa como argumento la ref a event
      >
       -1
      </button>
      <button
         className="btn btn-primary"
         onClick = { reset }
      >
       Reset
      </button>
    </>
  )
}
