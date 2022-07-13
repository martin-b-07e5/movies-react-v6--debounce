import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
// https://reactrouter.com/docs/en/v6/upgrading/v5#use-usenavigate-instead-of-usehistory
import { useNavigate } from "react-router";
import { useQuery } from "../hooks/useQuery";

// siempre que usamos un input » ponerlo adentro de un form » enter works
// rf snippet
export function Search() {
  const query = useQuery();
  const search = query.get("search"); // la primera vez es null.

  // us snippet
  const [searchText, setSearchText] = useState("");
  // https://reactrouter.com/docs/en/v6/hooks/use-navigate
  //   hook para cambio de ruta en url
  const navigate = useNavigate();

  // si cambia la busqueda » modificamos el input
  //  » ponemos el que vino por la ruta
  // este efecto se ejecuta siempre y cdo haya un cambio en el search
  // ue snippets
  useEffect(() => {
    setSearchText(search || ""); // Al principio el search es null » Sin el OR no funciona.
  }, [search]);

  const handleSubmit = (event) => {
    event.preventDefault(); // don't refresh the form when submit
    navigate("/?search=" + searchText); // hook para cambio de url
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className={styles.searchButton} type="submit">
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
}
