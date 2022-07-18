import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useQuery } from "../hooks/useQuery";

// rf snippet
export function Search() {
  const query = useQuery();
  const search = query.get("search");
  const navigate = useNavigate(); // hook para cambio de ruta en url

  const handleSubmit = (event) => {
    event.preventDefault(); // don't refresh the form when submit
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="search"
          placeholder="input 2 or more characters"
          value={search || ""}
          onChange={(e) => {
            const value = e.target.value;
            navigate("/?search=" + value);
          }}
        />
        <FaSearch size={20} className={styles.searchButton} />
      </div>
    </form>
  );
}
