import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import {MovieContext} from './movieContext'

const MovieList = () => {
  const [movie, setMovie] = useContext(MovieContext)
  console.log(movie)

  useEffect( () => {
    if (movie.lists === null){
      axios.get(`http://backendexample.sanbercloud.com/api/movies`)
      .then(res => {
        setMovie({
          ...movie, 
          lists: res.data.map(movie => {
            return {
              id: movie.id,
              title: movie.title,
              description: movie.description,
              year: movie.year,
              duration: movie.duration, 
              genre: movie.genre, 
              rating: movie.rating, 
              image_url: movie.image_url
            }
          })
        })
      })
    }
  }, [setMovie, movie])

  const handleEdit = (event) =>{
    let movieId = parseInt(event.target.value)
    setMovie({...movie, selectedId: movieId, statusForm: "changeToEdit"})
  }

  const handleDelete = (event) => {
    let movieId = parseInt(event.target.value)

    let newLists = movie.lists.filter(el => el.id !== movieId)

    axios.delete(`http://backendexample.sanbercloud.com/api/movies/${movieId}`)
    .then(res => {
      console.log(res)
    })
          
    setMovie({...movie, lists: [...newLists]})
    
  }

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
            movie.lists !== null && movie.lists.map((movie, index) => {
              // if(movie.description.length())
              const desc = movie.description
              // if(desc.length < 200) {
              //   desc.slice(desc.length);
              // } else {
              //   desc.slice(0, 200)
              // }
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
                    <button onClick={handleEdit} value={movie.id} className="btn-edit">Edit</button>
                    <button onClick={handleDelete} value={movie.id} className="btn-del">Delete</button>
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