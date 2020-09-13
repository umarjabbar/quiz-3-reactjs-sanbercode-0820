import React, {Component, useContext} from 'react'
import logo from '../public/images/logo.png'
import {Link} from 'react-router-dom'
import {LoginContext} from './loginContext'

const Navbar = () => {
  const [login] = useContext(LoginContext);

  function Login(){
    if(login.loginStatus == true){
      return(
        <>
        <li><Link to="/movie">Movie List</Link></li>
        <li><Link to="/logout" className="btn-logout">Logout</Link></li>
      </>
      )
    } else {
      return(
        <>
          <li><Link to="/login" className="btn-login">login</Link></li>
        </>
      )
    }
  }

  return(
    <>
      <header>
        <nav>
          
          <Link to="/home"><img id="logo" src={logo} width="200px"/></Link>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <Login />
         </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar