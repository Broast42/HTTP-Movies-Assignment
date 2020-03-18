import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <div className="movie-list">
      <div className="App">
        <Link to={'/add-movie/'}><button className="addBtn">Add a Movie</button></Link>
      </div>
      
      {
        movies.map(movie => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <MovieCard movie={movie} />
          </Link>
        ))
      }
      
    </div>
  );
}

export default MovieList;
