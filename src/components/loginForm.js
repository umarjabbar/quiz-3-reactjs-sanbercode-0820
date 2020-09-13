import React, {useContext, useState} from 'react'
import {LoginContext} from './loginContext'

const LoginForm = () => {
  const [login] = useContext(LoginContext)
  const [input, setInput] = useState({
    username: "",
    password: ""
  })

  const handleLogin = (e) => {
    e.preventDefault()
    if(login.username == input.username && login.password == input.password)
    {
      // Store
      localStorage.setItem("login", "true")
      window.location.href = '/home'
    } else { 
      alert('Username / Password yang anda masukan salah')
    } 
  }

  const handleChange = (e) => {
    let inputan = e.target.name

    switch(inputan){
      case "name":
        {
          setInput({...input, username: e.target.value});
          break
        }
      case "password" :
        {
          setInput({...input, password: e.target.value});
          break
        }
    }
  }
  
  return (
    <>
      <div className="login">
        <h1>Login Form</h1>
        <form onSubmit={handleLogin}>
          <div class="isian">
            <label for="name">Name</label><br/>
            <input onChange={handleChange} className="input-text" type="text" id="name" name="name" value={input.username}/><br/>
          </div>
          <div class="isian">
            <label for="password">Password</label><br/>
            <input onChange={handleChange} className="input-text" type="password" id="password" name="password" value={input.password}/><br/>
          </div>
          <button className="btn-kirim">Login</button>
        </form>
      </div>
    </>
  )
}

export default LoginForm