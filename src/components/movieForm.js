import React, {useContext, useState, useEffect} from 'react'
import {MovieContext} from './movieContext'
import axios from 'axios'

const MovieForm = () => {
  const [movie, setMovie] = useContext(MovieContext)
  const [input, setInput] = useState({title: "", description: "", year: 2020, duration: 120, genre: "", rating: 0, image_url: ""})

  useEffect(()=>{
    if (movie.statusForm === "changeToEdit"){
      let movieData = movie.lists.find(x=> x.id === movie.selectedId)
      setInput({title: movieData.title, description: movieData.description, year: movieData.year, duration: movieData.duration, genre: movieData.genre, rating: movieData.rating, image_url: movieData.image_url})
      setMovie({...movie, statusForm: "edit"})
    }
  },[movie, setMovie])

  const handleChange = (event) =>{
    let typeOfInput = event.target.name

    switch (typeOfInput){
      case "title":
      {setInput({...input, title: event.target.value}); 
        break
      }
      case "description":
      {
        setInput({...input, description: event.target.value});
        break
      }
      case "year":
      {
        setInput({...input, year: event.target.value});
          break
      }
      case "genre":
      {
        setInput({...input, genre: event.target.value});
        break
      }
      case "duration":
      {
        setInput({...input, duration: event.target.value});
        break
      }
      case "rating":
      {
        setInput({...input, rating: event.target.value});
        break
      }
      case "image":
      {
        setInput({...input, image_url: event.target.value});
        break
      }
    default:
      {break;}
    }
    console.log(input)
  }
  
  const handleSubmit = (event) =>{
    // menahan submit
    event.preventDefault()

    const title = input.title
    const description = input.description
    const year = input.year
    const duration = input.duration
    const genre = input.genre
    const rating = input.rating
    const image = input.image_url

    if (movie.statusForm === "create"){        
      axios.post(`http://backendexample.sanbercloud.com/api/movies`, {title: title, description: description, year: year, duration: duration, genre: genre, rating: rating, image_url: image})
      .then(res => {
          setMovie(
            {statusForm: "create", selectedId: 0,
            lists: [
              ...movie.lists, 
              { id: res.data.id, 
                title: title, 
                description: description, 
                year: year, 
                duration: duration, 
                genre: genre, 
                rating: rating, 
                image_url: image
              }]
            })
      })
    }else if(movie.statusForm === "edit"){
      axios.put(`http://backendexample.sanbercloud.com/api/movies/${movie.selectedId}`, {title: title, description: description, year: year, duration: duration, genre: genre, rating: rating, image_url: image})
      .then(() => {
          let movieData = movie.lists.find(el=> el.id === movie.selectedId)
          movieData.title = title
          movieData.description = description
          movieData.year = year
          movieData.duration = duration
          movieData.genre = genre
          movieData.rating = rating
          movieData.image_url = image
          setMovie({statusForm: "create", selectedId: 0, lists: [...movie.lists]})
      })
    }

    setInput({title: "", description: "", year: 2020, duration: 120, genre: "", rating: 0, image_url: ""})

  }

  return (
    <>
      <div className="movie-form">
        <h1>Movies Form</h1>
        <form onSubmit={handleSubmit}>
          <div class="isian">
            <label for="title">Title</label><br/>
            <input className="input-text" type="text" id="title" name="title" value={input.title} onChange={handleChange}/><br/>
          </div>
          <div class="isian">
            <label for="description">Description</label><br/>
            <textarea name="description" id="description" rows="7" value={input.description} onChange={handleChange}/><br/>
          </div>
          <div class="isian">
            <label for="year">Year</label><br/>
            <input className="input-text" type="number" id="year" name="year" value={input.year} onChange={handleChange}/><br/>
          </div>
          <div class="isian">
            <label for="duration">Duration</label><br/>
            <input className="input-text" type="number" id="duration" name="duration" value={input.duration} onChange={handleChange}/><br/>
          </div>
          <div class="isian">
            <label for="genre">Genre</label><br/>
            <input className="input-text" type="text" id="genre" name="genre" value={input.genre} onChange={handleChange}/><br/>
          </div>
          <div class="isian">
            <label for="rating">Rating</label><br/>
            <input className="input-text" type="number" id="rating" name="rating" value={input.rating} onChange={handleChange}/><br/>
          </div>
          <div class="isian">
            <label for="image">Image Url</label><br/>
            <textarea name="image" id="image" rows="3" value={input.image_url} onChange={handleChange}/><br/>
          </div>
          <button type="submit" name="submit" class="btn-kirim">Kirim</button>
        </form>
      </div>
    </>
  )
}

export default MovieForm