import React from 'react'
import LoginForm from '../components/loginForm'
import {LoginProvider} from'../components/loginContext'

const Login = () => {
  return (
    <>
      <LoginProvider>
        <LoginForm />
      </LoginProvider>
    </>
  )
}

export default Login