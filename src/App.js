import React from 'react';
import {Switch} from 'react-router-dom'
import './public/css/style.css'
import Navbar from './components/navbar'
import {LoginProvider} from './components/loginContext'
import Routes from './components/routes'
function App() {
  return (
    <div className="App">
      <LoginProvider>
        <Navbar />
      </LoginProvider>
      <Routes />
    </div>
  );
}

export default App;
