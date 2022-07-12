import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";

/* componente para hacer la grilla.
export function MoviesGrid() {
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
} */

// https://developers.themoviedb.org/3/getting-started/authentication
export function MoviesGrid() {
  /* // let movies = [];
  const moviesState = useState([]);

  const movies = moviesState[0];
  const setMovies = moviesState[1];
  const [movies, setMovies] = moviesState; */

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // if (!movies || movies.length === 0) {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
    });
    // }
    // }, [movies]);
  }, []);
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
