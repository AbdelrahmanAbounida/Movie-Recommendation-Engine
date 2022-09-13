import React from "react";
import { useEffect, useState } from "react";
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'

const App = () => {
    
    const [Movies,setMovies] = useState('');
    const [searchTerm,setSearchTerm] = useState('');


    const search = async (film_name) =>{
        const API_KEY = 'e1a03dda'
        const API_URL = film_name ? `https://www.omdbapi.com/?apikey=${API_KEY}&s=${film_name}`: `http://www.omdbapi.com/?apikey=${API_KEY}&s=Batman`;
        const response = await fetch(API_URL);
        const data = await response.json();  
        setMovies(data['Search']);   
        // console.log(Movies['Search'][0])
    }

    // const test = {Title: 'Italian Spiderman', Year: '2007', imdbID: 'tt2705436', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BYjFhN2RjZT…TkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg'}


    useEffect(()=>{
        search("Batman")
    },[]);

    return(
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input 
                className="input" 
                placeholder="Search for a movie"
                value={searchTerm}
                onChange={(e) => {setSearchTerm(e.target.value)}}
                />
                <img 
                src={SearchIcon}
                onClick={() => {
                    search(searchTerm);
                    console.log(Movies);
                    }}
                 />
            </div>

            {
                Movies?.length > 0 ? (
                    <div className="container">
                        {Movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found for {searchTerm}</h2>
                    </div>
                )}


    </div>
    );
};

export default App;


