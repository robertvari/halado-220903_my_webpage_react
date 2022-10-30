import React from 'react'
import Logo from "../images/logo.svg"
import Navbar from './Navbar'

export default function Header() {
  return (
    <header>
        <img src={Logo} alt="" />
        <Navbar/>
    </header>
  )
}
