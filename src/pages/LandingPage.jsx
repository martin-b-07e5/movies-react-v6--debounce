// contiene la busqueda y el grid, en una sola página.
// por ahora solo el grid

import { Search } from "../components/Search";
import { MoviesGrid } from "../components/MoviesGrid";

export function LandingPage() {
  return (
    <div>
      <Search />
      <MoviesGrid />
    </div>
  );
}
