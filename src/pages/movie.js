import React, {Component} from 'react'
import MovieList from '../components/movieList'
import MovieSearch from '../components/movieSearch'
import MovieForm from '../components/movieForm'
import {MovieProvider} from '../components/movieContext'

const Movie = () => {
  return (
    <>
    <section>
      <MovieProvider>
        <MovieSearch />
        <MovieList />
        <MovieForm />
      </MovieProvider>
    </section>
    </>
  )
}

export default Movie