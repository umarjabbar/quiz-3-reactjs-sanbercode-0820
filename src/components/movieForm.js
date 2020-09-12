import React from 'react'

const MovieForm = () => {
  return (
    <>
      <div className="movie-form">
        <h1>Movies Form</h1>
        <form action="#">
          <div class="isian">
            <label for="title">Title</label><br/>
            <input className="input-text" type="text" id="title" name="title"/><br/>
          </div>
          <div class="isian">
            <label for="isi">Description</label><br/>
            <textarea name="isi" id="isi" rows="7"></textarea><br/>
          </div>
          <div class="isian">
            <label for="year">Year</label><br/>
            <input className="input-text" type="number" id="year" name="year"/><br/>
          </div>
          <div class="isian">
            <label for="duration">Duration</label><br/>
            <input className="input-text" type="number" id="duration" name="duration"/><br/>
          </div>
          <div class="isian">
            <label for="genre">Genre</label><br/>
            <input className="input-text" type="text" id="genre" name="genre"/><br/>
          </div>
          <div class="isian">
            <label for="rating">Rating</label><br/>
            <input className="input-text" type="number" id="rating" name="rating"/><br/>
          </div>
          <div class="isian">
            <label for="image">Image Url</label><br/>
            <textarea name="image" id="image" rows="3"></textarea><br/>
          </div>
          <button type="submit" name="submit" class="btn-kirim">Kirim</button>
        </form>
      </div>
    </>
  )
}

export default MovieForm