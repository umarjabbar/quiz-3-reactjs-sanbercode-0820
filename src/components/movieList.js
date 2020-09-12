import React, {useState, useEffect} from 'react'
import axios from 'axios'

const MovieList = () => {
  const [movie, setMovie] = useState(null)
  
  useEffect( () => {
    if (movie === null) {
      axios.get(`http://backendexample.sanbercloud.com/api/movies`).then(res => {
        setMovie(res.data.map(movie => {
          return {id: movie.id, title: movie.title, description: movie.description, year: movie.year, duration: movie.duration, genre: movie.genre, rating: movie.rating, image: movie.image_url}
        }))
      })
    }
  }, [movie])

  return (
    <>
      <h1>Movies List</h1>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Description</th>
            <th>Year</th>
            <th>Duration</th>
            <th>Genre</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            movie !== null && movie.map((movie, index) => {

              const desc = movie.description.slice(0, 200)
              return (
                <tr>
                  <td>{index+1}</td>
                  <td>{movie.title}</td>
                  <td>{desc}</td>
                  <td>{movie.year}</td>
                  <td>{movie.duration}</td>
                  <td>{movie.genre}</td>
                  <td>{movie.rating}</td>
                  <td>
                    <button onClick="handleEdit" value={movie.id} className="btn-edit">Edit</button>
                    <button onClick="handleDelete" value={movie.id} className="btn-del">Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default MovieList