import React from 'react';
// import './App.css';
import './public/css/style.css'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Navbar from './components/navbar'
import {Switch, Route} from 'react-router-dom'
import Movie from './pages/movie'
import Login from './pages/login'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/home"><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/contact"><Contact /></Route>
        <Route path="/movie"><Movie /></Route>
        <Route path="/login"><Login /></Route>
      </Switch>
    </div>
  );
}

export default App;
