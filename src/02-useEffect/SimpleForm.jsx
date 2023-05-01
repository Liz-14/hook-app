import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

   const [formSate, setFormSate] = useState({
      username: 'Carlos2',
      email: 'carlos@gmail.com',
   })
   
   const { username, email } = formSate

   const onInputChange = ({target}) => {
      const { name, value } = target
      setFormSate({
         ...formSate,
         [ name ]: value,
      })
   }

  return (
    <>
      <h1>Formulario Simple</h1>
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

      {
         (username === 'Carlos2') && <Message/>
      }

    </>
  )
}
