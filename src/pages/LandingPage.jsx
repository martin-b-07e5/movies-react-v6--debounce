import { Search } from "../components/Search";
import { MoviesGrid } from "../components/MoviesGrid";
import { useQuery } from "../hooks/useQuery";
import { useDebounce } from "../hooks/useDebounce";

export function LandingPage() {
  const query = useQuery();
  const search = query.get("search");

  const debouncedSearch = useDebounce(search, 300);
  return (
    <div>
      <Search />
      <MoviesGrid key={debouncedSearch} search={debouncedSearch} />
    </div>
  );
}
