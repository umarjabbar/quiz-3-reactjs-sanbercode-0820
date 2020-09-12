import React, {Component} from 'react'
import MovieList from '../components/movieList'
import MovieSearch from '../components/movieSearch'
import MovieForm from '../components/movieForm'
const Movie = () => {
  return (
    <>
    <section>
      <MovieSearch />
      <MovieList />
      <MovieForm />
    </section>
    </>
  )
}

export default Movie