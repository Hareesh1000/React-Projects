import React, { useState } from 'react';
import './App.css';
import data from './data/data.json'; 

function App() {
  const movieDB = data[0]; 
  const [selectedGenre, setSelectedGenre] = useState('Action');

  const genres = Object.keys(movieDB);

  return (
    <div className="App">
      <h1> Movie Recommender</h1>
      <p>Select a genre to get started:</p>

      <div className="genre-buttons">
        {genres.map((genre) => (
          <button key={genre} onClick={() => setSelectedGenre(genre)}>
            {genre}
          </button>
        ))}
      </div>

      <div className="movie-list">
        {movieDB[selectedGenre].map((movie, index) => (
          <div className="movie-card" key={index}>
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
