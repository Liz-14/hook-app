import { useEffect } from "react"
import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {

   const {formSate, onInputChange, resetForm, username, email, password} = useForm({
      username: '',
      email: '',
      password: ''
   })

   //const { username, email, password } = formSate

   return (
    <>
      <h1>Formulario con Custom Hook</h1>
      <hr />

      <input 
         type = "text"
         className = "form-control"
         placeholder = "Username"
         name = "username"
         value = {username}
         onChange = {onInputChange}
      />
      <input 
         type = "email"
         className = "form-control mt-2"
         placeholder = "hola@gmail.com"
         name = "email"
         value = {email}
         onChange = {onInputChange}
      />
      <input 
      type = "password"
      className = "form-control mt-2"
      placeholder = "contra"
      name = "password"
      value = {password}
      onChange = {onInputChange}
      />

      <button 
         className="btn btn-primary mt-3"
         onClick = {resetForm}
      >
         Borrar
      </button>

    </>
  )
}
