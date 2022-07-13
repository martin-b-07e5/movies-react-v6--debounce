import styles from "./MoviesGrid.module.css";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
import { Spinner } from "./Spinner";
import { useQuery } from "../hooks/useQuery";

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

  // us snippet
  const [movies, setMovies] = useState([]);
  // 👇Estado para ver si la película está cargando, y la función para setear dicho estado.
  const [isLoading, setIsLoading] = useState(true);
  // 👆El estado inicial de isLoading es true (cdo se cargue el componente (en el get de useEffect) » la película va a estar cargando).

  // const location = useLocation();
  const query = useQuery();
  const search = query.get("search");

  // llamada asíncrona para traer las películas del servidor.
  useEffect(() => {
    if (!search || search.length === 0 || search.length > 2) {
      setIsLoading(true); // para el spinner
      // operador ternario (hacer uno u otro)
      const searchUrl = search
        ? "/search/movie?query=" + search
        : "/discover/movie";
      get(searchUrl).then((data) => {
        setMovies(data.results);
        setIsLoading(false); // cdo se terminó de cargar movies(para el spinner)
      });
    }
  }, [search]); // si cambia search se vuelve a ejecutar // es un arreglo de dependencias el último array

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
