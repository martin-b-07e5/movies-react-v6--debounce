// import { useEffect } from "react";
import { useEffect } from "react";
import { MovieCard } from "./MovieCard";
import movies from "./movies.json";
import styles from "./MoviesGrid.module.css";

// componente para hacer la grilla.
// export function MoviesGrid() {
//   return (
//     <ul className={styles.moviesGrid}>
//       {movies.map((movie) => (
//         <MovieCard key={movie.id} movie={movie} />
//       ))}
//     </ul>
//   );
// }

// https://developers.themoviedb.org/3/getting-started/authentication
export function MoviesGrid() {
  useEffect(() => [
    fetch("https://api.themoviedb.org/3/discover/movie", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDIyY2MwMmFmMjkzZDZhMTk3Nzg4ZWVkMjc0YzkzYSIsInN1YiI6IjYyYzM5NjcwM2FmOTI5MDA0YzI5M2RiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fh7ApMHwyMoLlp9NbfKwZ-9MNVi8OMR6BUX_b1XzqxU",
        "Content-Type": "application/json;charset=utf-8",
      },
    }),
  ]);
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
