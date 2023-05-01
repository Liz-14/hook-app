import { useContext } from "react"
import { UserContext } from "./Context/UserContext"

export const LoginPage = () => {
  const {name, lastName } = useContext(UserContext)
  return (
   <>
      <h1>LoginPage</h1>
      <hr/>
      <h3>Hello! {name} {lastName}</h3>
   </>
  )
}
