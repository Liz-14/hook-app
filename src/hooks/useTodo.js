import { useEffect, useReducer } from "react"

//Permite la persistencia de datos desde el local storage
const init = () => {
   return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodo = (initialState = [], todoReducer) => {
   const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init)

   const addNewTodo = ( newTodoItem ) => {
      const action = {
         type: "[TODO] Add todo",
         peyload: newTodoItem
      }

      dispatchTodo(action)
   }

   const handleDeleteTodo = ( id ) => {
      const action = {
         type: '[TODO] Remove todo',
         peyload: id
      }

      dispatchTodo(action)
   }

   const handleToggleTodo = ( id ) => {
      console.log(id)
      const action = {
         type: '[TODO] Check todo',
         peyload: id
      }

      dispatchTodo(action)
   }

   const todoCount = () => {
      return todos.length
   }

   const notDone = () => {
      return todos.filter(todo => !todo.done).length
   }

   return{
      todos,
      addNewTodo,
      handleDeleteTodo,
      handleToggleTodo,
      todoCount,
      notDone
   }
}
