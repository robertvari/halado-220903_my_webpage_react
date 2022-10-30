import React from 'react'
import {Link, useLocation} from "react-router-dom"

export default function Navbar() {
  const location = useLocation()

  return (
    <nav>
        <Link to="/" className={`nav-link ${location.pathname === "/"? "active":""}`}>Home</Link>
        <Link to="/services" className={`nav-link ${location.pathname === "/services"? "active":""}`}>Services</Link>
        <Link to ="/about" className={`nav-link ${location.pathname === "/about"? "active":""}`}>About</Link>
        <Link to="/contact" className={`nav-link ${location.pathname === "/contact"? "active":""}`}>Contact</Link>
    </nav>
  )
}
