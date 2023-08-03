import React, { useEffect, useState } from "react";
import searchIcon from './search.svg'
import MovieCard from "./MovieCard"
import './App.css'
import { AiOutlineSearch } from 'react-icons/fa';

// API KEY - 76c27c99
const API_URL = "http://www.omdbapi.com?apikey=76c27c99"
const movie1 = {
    "Title": "Spiderman the Verse",
    "Year": "2019",
    "imdbID": "tt12122034",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjA2NmZhOGEtZTQ5OS00MDI0LTg4N2UtYTRmOTllM2I2NDlhXkEyXkFqcGdeQXVyNTU4OTE5Nzc@._V1_SX300.jpg"
}
const App = () => {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState()
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        setMovies(data.Search)
    }

    useEffect(() => {
        searchMovies('spiderman')
    }, [])
    return (
        <>
            <div className="app">
                <h1 className="app-name">MovieLand</h1>
                <div className="search-container">
                    <input
                        className="search-bar"
                        placeholder="Search for movies..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={(e) => (e.key=='Enter' ? searchMovies(searchTerm) :null)} 

                    />

                    <img
                        fill="#AB7C94"
                        className="search-icon"
                        src={searchIcon}
                        alt="search icon"
                        onClick={() => searchMovies(searchTerm)}
                    />
                </div>
                {
                    movies?.length > 0
                        ?
                        (
                            <div className="container">
                                {movies.map((movie) => (
                                    <MovieCard movie={movie} />
                                ))}
                            </div>
                        )
                        :
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>

                }

            </div>
        </>
    )
}
export default App