import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
// import { useNavigate } from "react-router";
// import { useQuery } from "../hooks/useQuery--yaNoEsNecesario";
import { useSearchParams } from "react-router-dom";

// rf snippet
export function Search() {
  // const query = useQuery(); // cdo escribo algo en la busqueda » lo agrego a url
  const [query, setQuery] = useSearchParams(); // setQuery me permite setear lo que paso por la url

  const search = query.get("search"); // capturamos lo que ingresamos en la busqueda
  // const navigate = useNavigate(); // hook para cambio de ruta en url

  const handleSubmit = (event) => {
    event.preventDefault(); // don't refresh the form when submit
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="input 3 or more characters"
          aria-label="Search Movies"
          autoFocus={true}
          // value={search || ""}
          // Si search es null o undefined, agarre "" por defecto
          value={search ?? ""}
          onChange={(e) => {
            // const value = encodeURIComponent(e.target.value); // ahora que usamos useSearchParams, encodeURIComponent no es necesario y no funciona.
            const value = e.target.value;
            // navigate("/?search=" + value); // key + value (history character by character)
            // navigate("/?search=" + value, { replace: true });  // no history in browser
            setQuery({ search: value });
          }}
        />
        <FaSearch size={20} className={styles.searchButton} />
      </div>
    </form>
  );
}
