import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
// https://reactrouter.com/docs/en/v6/upgrading/v5#use-usenavigate-instead-of-usehistory
import { useNavigate } from "react-router";
import { useQuery } from "../hooks/useQuery";

// rf snippet
export function Search() {
  const query = useQuery();
  const search = query.get("search"); // la primera vez es null.

  // 👇us (useState) snippet.
  const [searchText, setSearchText] = useState("");

  // https://reactrouter.com/docs/en/v6/hooks/use-navigate
  // 👇hook para cambio de ruta en url
  const navigate = useNavigate();
  //
  // 👇------------------------------------------------
  // NO PUEDO HACER FUCIONAR ESTO
  /* const [isValid, setIsValid] = useState(word.length > 2);
  
  const handleChange = ({ target: { value } }) => {
    // setSearch(value);
    setIsValid(value.length > 2);
  }; */
  // 👆------------------------------------------------
  //
  /* si cambia la busqueda » modificamos el input
  » ponemos el que vino por la ruta
  este efecto se ejecuta siempre y cdo haya un cambio en el search
  ue (useEffect) snippets */
  useEffect(() => {
    if (search != null) {
      // console.log(search);
      // console.log(search.length);
      if (search.length > 3) {
        // console.log(search);
        // console.log(search.length);
        setSearchText(search || ""); // Al principio el search es null » Sin el OR no funciona.
      }
    }
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
          type="search"
          placeholder="input 2 or more characters"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          // onChange={handleChange}
        />
        <button
          className={styles.searchButton}
          type="submit"
          // disabled={!isValid}
        >
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
}
