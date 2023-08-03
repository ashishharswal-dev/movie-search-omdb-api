import React from "react"
import "./MovieCard.css"

const MovieCard = ({ movie }) => {
    return (
        <div className="movie">
            {/* <div>
                <p>{movie.Year}</p>
            </div> */}
            <div className="poster-div">
                <img
                className="movie-poster"
                    src={
                        movie.Poster !=='N/A'
                            ?
                            movie.Poster
                            :
                            'https://via.placeholder.com/400'
                    }
                    alt={movie.Title}
                />
            </div>
            <div className="movie-info">
                <span className="movie-type">{movie.Type}</span>
                <h3 className="movie-title">{movie.Title}</h3>
            </div>
        </div>
    )
}
export default MovieCard