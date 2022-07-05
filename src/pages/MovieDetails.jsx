import movie from "./movie.json";
import styles from "./MovieDetails.module.css";

export function MovieDetails() {
  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}>
          <strong>Title: </strong> {movie.title}
        </p>
        <p>
          <strong>Genre: </strong>
          {movie.genres.map((genre) => genre.name).join(", ")}
          {/* 👆convertimos el arreglo de objetos a un arreglo de texto */}
          {/* si concateno y no utilizo .join  » me agrega una coma al final */}
        </p>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
      </div>
    </div>
  );
}
