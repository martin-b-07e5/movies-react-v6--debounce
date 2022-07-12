// rf snippet
// us snippet
import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
// https://reactrouter.com/docs/en/v6/upgrading/v5#use-usenavigate-instead-of-usehistory
import { useNavigate } from "react-router";

// el componente "Search" carga un input donde se hace la busqueda de las pelis.
// siempre que usamos un input » ponerlo adentro de un form
export function Search() {
  const [searchText, setSearchText] = useState("");
  // https://reactrouter.com/docs/en/v6/hooks/use-navigate
  //   hook para cambio de ruta en url
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // para que no refresque el form al submit
    navigate("/?search=" + searchText);
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
