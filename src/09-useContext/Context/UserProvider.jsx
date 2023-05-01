import { UserContext } from "./UserContext"

export const UserProvider = ( {children} ) => {
   const user = {
      name: "Lizeth",
      lastName: "Del Rio",
      cel: "3017220680",
      city: "Pereira"
   }
   return (
     <UserContext.Provider value={user}>
       { children }
     </UserContext.Provider>
   )
 }