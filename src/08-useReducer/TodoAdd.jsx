import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm"

export const TodoAdd = ({ getNewTodo }) => {
   /*const {formSate, onInputChange, resetForm, newTodo} = useForm({
      newTodo: ""
   })*/

   const [newTodo, setNewTodo] = useState("")

   const onSubmit = (event) => {
      //evita el refresh al hacer submit en el form
      event.preventDefault()
      const newTodoItem = {
         id: new Date().getTime(),
         todo: newTodo,
         done: false
      }
      console.log("newTodo: ", newTodo)
      console.log("newTodoItem: ", newTodoItem)
      getNewTodo(newTodoItem)
      setNewTodo("")
   }
   
  return (
   <form onSubmit={onSubmit}>
      <input 
         type="text"
         className="form-control"
         placeholder="¿Que hay para hacer?"
         name="newTodo"
         value={newTodo}
         onChange={ e => setNewTodo(e.target.value)}
      />
      <div className="d-flex justify-content-end">
         <button
            className="btn btn-primary mt-2"
            type="submit"
         >
            Agregar
         </button>
      </div>
   </form>
  )
}
