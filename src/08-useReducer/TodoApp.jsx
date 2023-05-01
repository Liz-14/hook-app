import { useEffect, useReducer, useState } from "react"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"
import { todoReducer } from "./todoReducer"
import { useTodo } from "../hooks"

export const TodoApp = () => {
   const initialState = [
      /*
      {
         id: new Date().getTime(),
         todo: "Recolectar la piedra del alma",
         done: false
      },
      {
         id: new Date().getTime() * 2,
         todo: "Recolectar la piedra del poder",
         done: false
      },*/
   ]
   const { 
      todos,
      addNewTodo,
      handleDeleteTodo,
      handleToggleTodo,
      todoCount,
      notDone
   } = useTodo( initialState, todoReducer )

   useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos))
   }, [todos])

  return (
    <>
      <h1>TodoApp: {todoCount()}, <small>Pendientes: {notDone()}</small></h1>
      <hr/>

      <div className="row">
         <div className="col-7">
            <TodoList
               todos = {todos}
               onDeleteTodo = {handleDeleteTodo} // = { id => handleDeleteTodo(id) }
               onToggleTodo = {handleToggleTodo}
            />
         </div>
         <div className="col-5">
            <h4>Agregar TODO</h4>
            <hr/>
            <TodoAdd getNewTodo={ value => addNewTodo(value)}/>
         </div>
      </div>
    </>
  )
}
