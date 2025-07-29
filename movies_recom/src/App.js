import React, { useState } from 'react';
import './App.css';
import data from './data/data.json'; 

function App() {
  const movieDB = data[0]; 
  const [selectedGenre, setSelectedGenre] = useState('Action');

  const genres = Object.keys(movieDB);

  return (
    <div className="App">
      <h1> Movie Recommendation</h1>
      <p>Select a genre :</p>

      <div className="genreButtons">
        {genres.map((genre) => (
          <button key={genre} onClick={() => setSelectedGenre(genre)}>
            {genre}
          </button>
        ))}
      </div>

      <div className="movieList">
        {movieDB[selectedGenre].map((movie, index) => (
          <div className="movieCard" key={index}>
            <div className='moviePosterSection'> 
              <img className='moviePoster' src={movie.url} alt='Movie Poster'></img>
            </div>
            <h3>{movie.name}</h3>
            <p>⭐ {movie.rating}</p>
            <p>{movie.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
