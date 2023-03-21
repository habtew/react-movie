// import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard.jsx';
// f67fbd5f
const API_URL = 'https://www.omdbapi.com?apikey=f67fbd5f';
// const movie1 = {
//         "Title": "Twilight Zone: The Movie",
//         "Year": "1983",
//         "imdbID": "tt0086491",
//         "Type": "movie",
//         "Poster": "https://m.media-amazon.com/images/M/MV5BYjQ2NzgzYjEtMzAxNy00MzhkLWE5ZTUtZDA1ODY3MTBjOTRiXkEyXkFqcGdeQXVyNTAyNDQ2NjI@._V1_SX300.jpg"
    
// }
const App = () => {
    const [movies, setMovies ] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }
    useEffect(() => {
searchMovies('Twilight');
    },[]);
    return (
      <div className='app'>
        <div>
          <h1>MovieLand</h1>

            <div className="search">
               <input 
                placeholder="search for movies"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
               <img 
               src={SearchIcon}
               alt="search"
               onClick ={() => searchMovies(searchTerm)}
               />
               </div>
               {movies?.length > 0
                ?( 
                 <div className="container">
                {movies.map((movie) => (
                  <MovieCard movie ={movie} />  
                ))}
               </div>
                ):(
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )}
               
        </div>
        </div>
    );
}

export default App;