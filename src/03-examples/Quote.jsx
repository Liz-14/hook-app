import { useRef, useState } from "react"
import { useLayoutEffect } from "react"
import { useCounter, useFetch } from "../hooks"

export const Quote = ({data}) => {

   const pRef = useRef();
   const [boxSize, setBoxSize] = useState({width: 0, height: 0});

   useLayoutEffect(() => {
     const { width, height } = pRef.current.getBoundingClientRect()
     setBoxSize({width, height})
   }, [data])

  return (
   <>
      <blockquote 
         className="blockquote text-end"
         style={{ display: 'flex', flexWrap: 'wrap' }}
      >
         {
            data.map((el,i) => {
               return(
                  <div key = {i}>
                     <p ref = { pRef } className="mb-2">{el.quote}</p>
                     <footer className="blockquote-footer">
                        {el.author}
                     </footer>
                  </div>
               )
            })
         }
      </blockquote>
      <code>{JSON.stringify(boxSize)}</code>
   </>
  )
}
