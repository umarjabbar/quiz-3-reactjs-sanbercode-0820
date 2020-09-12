import React from 'react'

const Login = () => {
  return (
    <>
      <div className="login">
        <h1>Login Form</h1>
        <form action="#">
          <div class="isian">
            <label for="name">Name</label><br/>
            <input className="input-text" type="text" id="name" name="name"/><br/>
          </div>
          <div class="isian">
            <label for="password">Password</label><br/>
            <input className="input-text" type="password" id="password" name="password"/><br/>
          </div>
          <button className="btn-kirim">Login</button>
        </form>
      </div>
    </>
  )
}

export default Login