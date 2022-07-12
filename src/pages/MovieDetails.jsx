import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // esto es un hook
import { get } from "../utils/httpClient";
import styles from "./MovieDetails.module.css";
import { Spinner } from "../components/Spinner";

// componente para mostrar detalles de la película.
export function MovieDetails() {
  // para capturar el identificador » usamos el hook "useParams"
  // https://reactrouter.com/docs/en/v6/hooks/use-params
  const { movieId } = useParams();
  // 👇Estado para ver si la película está cargando, y la función para setear dicho estado.
  const [isLoading, setIsLoading] = useState(true);
  // 👆El estado inicial de isLoading es true (cdo se cargue el componente (en el get de useEffect) » la película va a estar cargando).
  const [movie, setMovie] = useState(null);

  // llamada asíncrona, para traer pelicula con identificador "movieId" del servidor.
  useEffect(() => {
    setIsLoading(true); // para spinner

    get("/movie/" + movieId).then((data) => {
      setIsLoading(false); // cdo se terminó la carga de la pelicula » setIsLoading es false.
      setMovie(data);
    });
  }, [movieId]);

  if (isLoading) {
    return <Spinner />;
  }

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
