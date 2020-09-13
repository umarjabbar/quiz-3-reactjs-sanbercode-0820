import React, {useState, useContext} from 'react'
import axios from 'axios'
import {MovieContext} from './loginContext'

const MovieSearch = props => {
  

  return (
    <>
      <form  className="movie-search">
        <input type="text"/>
        <button>search</button>
      </form>
    </>
  )
}

export default MovieSearch
