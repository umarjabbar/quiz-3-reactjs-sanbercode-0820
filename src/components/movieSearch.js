import React, {useState, useContext} from 'react'
import axios from 'axios'
import {MovieContext} from './movieContext'

const MovieSearch = props => {
  // const [movie, setMovie] = useContext(MovieContext)
  // console.log(movie.title)

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Belom sampe sini :'(")
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="movie-search">
        <input type="text"/>
        <button>search</button>
      </form>
    </>
  )
}

export default MovieSearch
