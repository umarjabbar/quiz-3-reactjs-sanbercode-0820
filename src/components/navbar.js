import React, {Component} from 'react'
import logo from '../public/images/logo.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return(
    <>
      <header>
        <nav>
          <Link to="/home"><img id="logo" src={logo} width="200px"/></Link>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/movie">Movie List</Link></li>
            <li><Link to="/logout" className="btn-logout">Logout</Link></li>
            <li><Link to="/Login" className="btn-login">login</Link></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar