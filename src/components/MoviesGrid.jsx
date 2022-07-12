// us snippet
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { Spinner } from "./Spinner";

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

  // 👇Estado para ver si la película está cargando, y la función para setear dicho estado.
  const [isLoading, setIsLoading] = useState(true);
  // 👆El estado inicial de isLoading es true (cdo se cargue el componente (en el get de useEffect) » la película va a estar cargando).
  const [movies, setMovies] = useState([]);

  // llamada asíncrona para traer las películas del servidor
  useEffect(() => {
    setIsLoading(true); // para el spinner

    // if (!movies || movies.length === 0) {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
      setIsLoading(false); // cdo se terminó de cargar » setIsLoading es false.
    });
    // }
    // }, [movies]);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
