import React from 'react'

function cariFilm() {

}
const MovieSearch = () => {
  return (
    <>
      <form onSubmit={cariFilm} className="movie-search">
        <input type="text" required/>
        <button>search</button>
      </form>
    </>
  )
}

export default MovieSearch
