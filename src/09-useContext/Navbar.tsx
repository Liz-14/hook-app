import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
   <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark">
      <div className="container-fluid">
         <Link to="/" className="navbar-brand">Navbar</Link>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
               <NavLink 
                  className={(prop) => {
                     return prop.isActive ? 'nav-link active' : 'nav-link'
                  }}
                  to='/'
               >
                  Home
               </NavLink>
               <NavLink 
                  className={(prop) => {
                     return prop.isActive ? 'nav-link active' : 'nav-link'
                  }}
                  to='/aboutPage'
               >
                  About
               </NavLink>
               <NavLink 
                  className={(prop) => {
                     return prop.isActive ? 'nav-link active' : 'nav-link'
                  }}
                  to='/login'
               >
                  Login
               </NavLink>
            </div>
         </div>
      </div>
   </nav>
  )
}
