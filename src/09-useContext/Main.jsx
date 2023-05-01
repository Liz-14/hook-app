import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { UserProvider } from "./Context/UserProvider"

export const Main = () => {

  return (
    <UserProvider>
      <h1>MainApp</h1>
      <Navbar/>
      <hr/>
      <Outlet />
    </UserProvider>
  )
}
