import { Search } from "../components/Search";
import { MoviesGrid } from "../components/MoviesGrid";
import { useDebounce } from "../hooks/useDebounce";
// import { useQuery } from "../hooks/useQuery";
import { useSearchParams } from "react-router-dom";

export function LandingPage() {
  // const query = useQuery();
  // ahora usamos useSearchParams. Ya no usamos más nuestro custom hook.
  const [query] = useSearchParams();
  const search = query.get("search");

  const debouncedSearch = useDebounce(search, 900);
  return (
    <div>
      <Search />
      <MoviesGrid key={debouncedSearch} search={debouncedSearch} />
    </div>
  );
}
