import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about'
import Movie from '../pages/movie'
import Login from '../pages/login'
import Logout from '../pages/logout'


const Routes = () => {
  const login = localStorage.getItem("login");
  const LoginRoute = () => {
    if(login == "true") {
      return (
        <>
        <Route path="/movie"><Movie /></Route>
        <Route path="/logout"><Logout /></Route>
        </>
      )
    } else {
      return (
        <>
          <Route path="/login"><Login /></Route>
        </>
      )
    }
  }

  const NoMatch = () => {
    return (
      <>
      <section>
        <h1>404 - Halaman tidak ditemukan</h1>
      </section>
      </>
    )
  }

  return(
    <>
      <Switch>
        <Route path="/about"><About /></Route>
        <Route path="/home"><Home /></Route>
        <LoginRoute />
        <Route><NoMatch /></Route>
      </Switch>
    </>
  )
}

export default Routes