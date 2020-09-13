import React, {Component, useEffect, useState} from 'react'
import axios from 'axios'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      movies: []
    }
  }
  
  componentDidMount() {
    axios.get(`http://backendexample.sanbercloud.com/api/movies`)
    .then(res => {
      const movies = res.data;
      this.setState({ movies });
    })
  }
  render() {
    return (
      <>
      <section>
        <h1>Best Movies List</h1>
        <div id="article-list">
          {
            this.state.movies.map(movie => {
            const duration = movie.duration / 60;
            const movieThumbnail = {
              backgroundImage: 'url(' + movie.image_url + ')'
            }
            console.log(this.state.movies)
            return(
              <div className="article">
                <div className="movie-info">
                  <div style={movieThumbnail} className="movie-thumbnail"></div>
                  {/* <img src={movie.image_url} className="movie-thumbnail" width="50%"/> */}
                  <div className="info">
                    <div className="atas">
                      <h2>{movie.title}</h2>
                      <span>{movie.rating}</span>
                    </div>
                    <span>Duration: {duration.toFixed(0)} Hours</span>
                    <span>Genre: {movie.genre}</span>
                    <p><span>Description: </span><br/>{movie.description}</p>
                  </div>
                </div>
              </div>
            )})
          }
        </div>
      </section>
      <footer>
        <h5>copyright &copy; 2020 by Sanbercode</h5>
      </footer>
    </>
    )
  }
}


export default Home